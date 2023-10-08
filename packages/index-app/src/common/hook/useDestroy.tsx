import {useEffect} from 'react';
import {Func} from '@/types/utils';

function useDestroy(callback: Func) {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => callback, []);
}

export default useDestroy;
