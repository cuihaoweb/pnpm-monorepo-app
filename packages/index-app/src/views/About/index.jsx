import {loadMicroApp} from 'qiankun';
import {useRef} from 'react';
import useMounted from '@/common/hook/useMounted';
import {actions, getGlobalState, onGlobalStateChange} from '@/globalStore';
import './style.module.less';

function About() {
    const vueContainer = useRef<HTMLElement>(null);

    useMounted(() => {
        const microApp = loadMicroApp({
            name: 'sub-home',
            entry: '//localhost:8082',
            container: vueContainer.current,
            props: {
                actions,
                state: getGlobalState(),
                onGlobalStateChange
            }
        });

        return () => {
            microApp.unmount();
        };
    });

    return <div ref={vueContainer}></div>;
}

export default About;
