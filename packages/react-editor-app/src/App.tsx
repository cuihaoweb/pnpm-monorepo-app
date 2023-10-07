import {Input, Layout} from 'antd';
import {ChangeEventHandler, memo, useCallback, useRef, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Outlet, useLocation, useNavigate} from 'react-router-dom';
import useMounted from '@/common/hook/useMounted';
import useStaticJsx from '@/common/hook/useStaticJsx';
import NavList from '@/components/modules/NavList';
import {NAV_LIST} from '@/router';
import {RootState} from '@/store';
import {setGroupName} from '@/store/page';

const {Header, Content, Footer, Sider} = Layout;

const AppView = memo(function AppView(props: {
    actionUrl: string,
    groupName: string,
    onChangeGroupName: ChangeEventHandler
}) {
    return <Layout className='flex h-screen' style={{flexDirection: 'column'}}>
        {useStaticJsx(
            <Header className='flex-center'>
                <h1 className='flex-h-center text-white'>VR管理平台</h1>
            </Header>
        )}

        <Layout className='flex-1 overflow-hidden'>
            <Sider className='overflow-hidden h-full' width={200}>
                <Input placeholder='groupName' value={props.groupName} onChange={props.onChangeGroupName}></Input>
                <NavList navList={NAV_LIST} defaultSelected={props.actionUrl}></NavList>
            </Sider>

            {useStaticJsx(
                <Content className='h-full'>
                    <Layout className='h-full'>
                        <Content className='flex-1 overflow-x-hidden overflow-y-scroll px-[24px]'>
                            <Outlet></Outlet>
                        </Content>

                        <Footer className='flex-center'>Ant Design ©2023 Created by Ant UED</Footer>
                    </Layout>
                </Content>
            )}
        </Layout>
    </Layout>;
});

const App = () => {
    const navigate = useNavigate();
    const locationInfo = useLocation();
    const dispatch = useDispatch();
    const {groupName} = useSelector((state: RootState) => state.page);
    const [actionUrl] = useState(locationInfo.pathname || NAV_LIST[0].to);

    const onChangeGroupName: ChangeEventHandler<HTMLInputElement> = useCallback((e) => {
        dispatch(setGroupName(e.target.value));
    }, [dispatch]);

    // useMounted(() => {
    //     navigate(actionUrl);
    // });

    return <AppView
        {...{
            actionUrl,
            groupName,
            onChangeGroupName
        }}
    ></AppView>;
};

export default App;
