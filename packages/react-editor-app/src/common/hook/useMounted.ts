import {EffectCallback, useEffect} from 'react';

function useMounted(callback: EffectCallback) {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(callback, []);
}

export default useMounted;
