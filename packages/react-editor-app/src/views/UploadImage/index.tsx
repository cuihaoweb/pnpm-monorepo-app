import {Button, message,Modal} from 'antd';
import axios from 'axios';
import {isArray, partial, pullAt} from 'lodash-es';
import {nanoid} from 'nanoid';
import {ChangeEvent, ChangeEventHandler, memo, useCallback, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import useDebounce from '@/common/hook/useDebounce';
import useDestroy from '@/common/hook/useDestroy';
import useWatch from '@/common/hook/useWatch';
import fileToBase64 from '@/common/utils/fileToBase64';
import {RootState} from '@/store';
import {createDefaultImageInfo, ImageInfo, updateImages} from '@/store/page';

const FileInput = memo(function FileInput(props: {
    label?: string,
    onChange?: ChangeEventHandler<HTMLInputElement>
}) {
    const {label, onChange} = props;
    const fid = nanoid();

    return <label
        htmlFor={fid}
        className='text-white h-[32px] w-[64px] inline-block flex-center border'
    >
        {label}
        <input
            id={fid}
            className='hidden'
            type="file"
            multiple={true}
            onChange={onChange}
        />
    </label>;
});

const UploadImage = memo(function UploadImage() {
    const debounce = useDebounce(300);
    const {images: uploadImages, groupName} = useSelector((state: RootState) => state.page);
    const [images, setImages] = useState<ImageInfo[]>([]);
    const [curCropIndex, setCurCropIndex] = useState<number>(0);
    const [isOpenLayer, setIsOpenLayer] = useState(false);
    const dispatch = useDispatch();

    const onSelectFiles = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        const files = e.target?.files;
        if (!files?.length) {
            return;
        }
        Promise.allSettled(
            Array.from(files).map(file => fileToBase64(file))
        ).then(results => {
            const newImages: ImageInfo[] = results.map((result, index) => {
                switch(result.status) {
                case 'rejected':
                    message.success(`${files[index].name}转化异常`);
                    break;
                case 'fulfilled':
                    return {...createDefaultImageInfo(), base64: result.value, file: files[index]};
                }
            }).filter(Boolean) as ImageInfo[];
            setImages(images.concat(newImages));
            message.success('添加成功');
        });
    }, [images]);

    const onDelImage = useCallback((index: number) => {
        const newImages = [...images];
        pullAt(newImages, index);
        setImages(newImages);
    }, [images]);

    const onCropImage = useCallback((index: number) => {
        setCurCropIndex(index);
        setIsOpenLayer(!isOpenLayer);
    }, [isOpenLayer]);

    const onOk = useCallback(() => {
        setIsOpenLayer(false);
    }, []);

    const getImageList = useCallback(() => {
        axios.get('/api/file/list', {params: {groupName}}).then(res => {
            const urls = res.data.data;
            if (!isArray(urls)) return;
            const newImages: ImageInfo[] = [];
            urls.forEach((url: string, index) => {
                newImages[index] = {...createDefaultImageInfo(), url};
            });
            dispatch(updateImages(newImages));
        });
    }, [dispatch, groupName]);

    const submit = useCallback(() => {
        axios.post('/api/file/submit', {groupName}).then(res => {
            console.log(res);
        });
    }, [groupName]);

    const onSubmit = useCallback(async () => {
        const results = await Promise.allSettled(
            images.map(item => {
                if (!item.file) return;
                const formData = new FormData();
                formData.append('file', item.file);
                formData.append('name', item.file.name);
                formData.append('groupName', groupName);
                return axios.post('/api/file/add', formData);
            }).filter(Boolean)
        );
        results.forEach((result, index) => {
            switch(result.status) {
            case 'rejected': return message.error(`${images[index].name} upload fail`);
            case 'fulfilled': return message.success(`${images[index].name} upload success`);
            }
        });
        await submit();
        setImages([]);
        getImageList();
    }, [getImageList, groupName, images, submit]);

    useWatch(() => {
        debounce(getImageList);
    }, groupName);

    useDestroy(() => debounce.cancel());

    return <div>
        <h3>已提交图片</h3>
        {uploadImages.map((item, index) => <div key={index}>
            <img src={item.base64 || `http://localhost:3000${item.url}`}></img>
        </div>)}
        <h3>操作文件</h3>
        {images.map((item, index) => <div key={index}>
            <img src={item.base64}></img>
            <Button onClick={partial(onDelImage, index)}>删除</Button>
            <Button onClick={partial(onCropImage, index)}>裁剪</Button>
        </div>)}
        <FileInput label='上传文件' onChange={onSelectFiles}></FileInput>
        <Button onClick={onSubmit} disabled={!images.length}>提交</Button>

        <Modal
            title="图片裁剪"
            centered
            open={isOpenLayer}
            width={'80vw'}
            bodyStyle={{height: '75vh'}}
            onOk={partial(onOk, false)}
            onCancel={partial(setIsOpenLayer, false)}
        >
            <div className='overflow-scroll'>hello, word</div>
        </Modal>
    </div>;
});

export default UploadImage;
