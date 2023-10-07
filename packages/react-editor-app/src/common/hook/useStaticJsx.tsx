import {useRef} from 'react';

const useStaticJsx = (...jsx: JSX.Element[]) => {
    const myRef = useRef<JSX.Element>();

    if (!myRef.current) {
        myRef.current = <>{...jsx}</>;
    }

    return myRef.current;
};

export default useStaticJsx;
