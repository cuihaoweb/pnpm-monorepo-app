import {Layout} from 'antd';
import {memo, useMemo} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Outlet, useLocation} from 'react-router-dom';
import useStaticJsx from '@/common/hook/useStaticJsx';
import NavList from '@/components/modules/NavList';
import {NAV_LIST} from '@/router';
import useWatch from './common/hook/useWatch';
import {actions} from './globalStore';
import store, {RootState} from './store';
import {setGlobal} from './store/global';

const {Header, Content, Footer, Sider} = Layout;

const AppView = memo(function AppView(props: {
    userName: string,
    actionUrl: string
}) {
    return <Layout className='flex h-screen' style={{flexDirection: 'column'}}>
        <h1 style={{color: 'red'}}>{props.userName}</h1>
        {useStaticJsx(
            <Header className='flex-center'>
                <NavList mode="horizontal" navList={NAV_LIST} defaultSelected={props.actionUrl}></NavList>
            </Header>
        )}

        <Layout className='flex-1 overflow-hidden'>
            <Sider className='overflow-hidden h-full' width={200}>
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
    const locationInfo = useLocation();
    const {userName} = useSelector((state: RootState) => state.global);
    const actionUrl = useMemo(() => {
        const pathName = locationInfo.pathname || NAV_LIST[0].to;
        return pathName.split('/')[1];
    }, [locationInfo.pathname]);

    return <AppView
        {...{
            actionUrl,
            userName
        }}
    ></AppView>;
};

export default App;
