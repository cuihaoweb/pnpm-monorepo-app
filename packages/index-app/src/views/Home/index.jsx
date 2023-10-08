import {loadMicroApp} from 'qiankun';
import {useRef} from 'react';
import useMounted from '@/common/hook/useMounted';

function Home() {
    const vueContainer = useRef<HTMLElement>(null);

    useMounted(() => {
        const microApp = loadMicroApp({
            name: 'sub-vue',
            entry: '//localhost:8081',
            container: vueContainer.current
        });

        return () => {
            microApp.unmount();
        };
    });

    return <>
        <h1>hello, 你好</h1>
        <div ref={vueContainer}></div>;
    </>;
}

export default Home;
