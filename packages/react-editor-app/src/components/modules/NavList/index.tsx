import {Menu, MenuProps} from 'antd';
import {memo, useMemo, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import style from './style.module.less';

const NavList = memo(function NavList(props: {
    navList: {to: string, label: string}[],
    defaultSelected?: string
}) {
    const {navList, defaultSelected = navList[0].to} = props;
    const [curSelect, setCurSelect] = useState(defaultSelected);

    const items = useMemo(() => navList.map(({to, label}) => ({key: to, label})), [props]);
    const navigate = useNavigate();

    const onSelect: MenuProps['onSelect'] = (e) => {
        setCurSelect(e.key);
        navigate(e.key);
    };

    return (
        <div className={style.root}>
            <Menu
                mode="inline"
                theme='dark'
                style={{
                    height: '100%'
                }}
                defaultSelectedKeys={[curSelect]}
                items={items}
                onSelect={onSelect}
            />
        </div>
    );
});

export default NavList;
