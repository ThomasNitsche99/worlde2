import {
    MutableRefObject,
    useRef,
  } from 'react';
  
 export const useFocus = (): [any, () => void] => {
    const ref: MutableRefObject<any> = useRef(null);
    const setFocus = (): void => {
      ref?.current?.focus?.();
    };
  
    return [ref, setFocus];
  };
