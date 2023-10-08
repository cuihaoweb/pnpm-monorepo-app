import {Outlet} from 'react-router-dom';
import style from './style.module.less';

function Home() {
    return (
        <div className={style.root}>
            hello
            <h1>Hom1e</h1>
            <Outlet></Outlet>
        </div>
    );
}

export default Home;
