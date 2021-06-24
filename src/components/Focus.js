import { useEffect } from 'react';
const Focus = (ref) => {
    useEffect(() => {
        ref.current.focus();
    }, [ref]);
};
export default Focus;