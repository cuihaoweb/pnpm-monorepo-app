import {debounce,DebouncedFunc,DebounceSettings} from 'lodash-es';
import {useRef} from 'react';
import {Func} from '@/types/utils';

const useDebounce = (wait?: number, options?: DebounceSettings) => {
    const myRef = useRef<DebouncedFunc<Func>>();
    
    if (!myRef.current) {
        myRef.current = debounce((func: Func) => {
            func();
        }, wait, options);
    }

    return myRef.current;
};

export default useDebounce;
