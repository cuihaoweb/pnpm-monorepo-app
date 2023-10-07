import {Button, Form, Input} from 'antd';
import {partial} from 'lodash-es';
import {Fragment, memo, useCallback, useState} from 'react';
import {useDispatch} from 'react-redux';
import useStaticJsx from '@/common/hook/useStaticJsx';
import {setVrs} from '@/store/vr';
import {GetKey} from '@/types/GetKey';
import {Func} from '@/types/utils';
import {createDefaultVR,VR} from '@/types/vr';

const fields: {name: GetKey<VR>, label: string}[] = [
    {name: 'image', label: 'image'},
    {name: 'scenesName', label: 'scenesName'},
    {name: 'thumbnail', label: 'thumbnail'},
    {name: 'title', label: 'title'}
];

const RecordVrView = memo(function RecordVrView(props: {
    vrInfoList: VR[],
    setField: (index: number, e: any) => void,
    deleteVrInfo: (index: number) => void,
    addVrInfo: Func,
    submit: Func,
}) {
    const InputView = <>
        {fields.map((item, i) => <Fragment key={i}>
            <Form.Item name={item.name} label={item.label}>
                <Input></Input>
            </Form.Item>
        </Fragment>)}
    </>;

    return <>
        {props.vrInfoList.map((_, i) => <Fragment key={i}>
            <Form onValuesChange={partial(props.setField, i)}>
                {InputView}

                <Button
                    type="dashed"
                    onClick={partial(props.deleteVrInfo, i)}
                    style={{width: '60%'}}
                >Delete</Button>
            </Form>;
        </Fragment>)}

        <Button
            type="dashed"
            style={{width: '60%'}}
            onClick={props.addVrInfo}
        >Add</Button><Button
            type="dashed"
            style={{width: '60%'}}
            onClick={props.submit}
        >提交</Button>
    </>;
});

const RecordVr = () => {
    const dispatch = useDispatch();
    const [vrInfoList, setVrInfoList] = useState<VR[]>([]);

    const addVrInfo = useCallback(() => {
        const payload = vrInfoList.concat(createDefaultVR());
        setVrInfoList(payload);
    }, [vrInfoList]);

    const deleteVrInfo = useCallback(() => {
        const payload = vrInfoList.slice(0, -1);
        setVrInfoList(payload);
    }, [vrInfoList]);

    const setField = useCallback((index: number, vr: {key: GetKey<VR>, value: VR[GetKey<VR>]}) => {
        const target = {...vrInfoList[index]};
        Object.assign(target, vr);
        setVrInfoList(vrInfoList);
    }, [vrInfoList]);

    const submit = useCallback(() => {
        dispatch(setVrs(vrInfoList));
    }, [dispatch, vrInfoList]);

    return <RecordVrView
        {...{
            vrInfoList,
            setField,
            addVrInfo,
            deleteVrInfo,
            submit
        }}
    ></RecordVrView>;
};

export default RecordVr;
