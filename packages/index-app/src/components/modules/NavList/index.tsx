import {Menu, MenuProps} from 'antd';
import {memo, useMemo, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import style from './style.module.less';

const NavList = memo(function NavList(props: {
    navList: {to: string, label: string, path: string}[],
    defaultSelected?: string
}) {
    const {navList, defaultSelected = navList[0].to} = props;
    const [curSelect, setCurSelect] = useState(defaultSelected);

    const items = useMemo(() => navList.map(({to, label, path}) => ({key: path, label, to})), [navList]);
    const navigate = useNavigate();

    const onSelect: MenuProps['onSelect'] = (e) => {
        const target = items.find(({key}) => key === e.key);
        target?.key && setCurSelect(target.key);
        target?.to && navigate(target.to);
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
