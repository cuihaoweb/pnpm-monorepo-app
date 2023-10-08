import {EffectCallback, useEffect} from 'react';

function useWatch(callback: EffectCallback, ...deps: unknown[]) {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(callback, [...deps]);
}

export default useWatch;
