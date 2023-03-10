import { useEffect, useState } from 'react';
import sizes from '../_shared.scss';

const useMedia = (rule = `(max-width: ${sizes.mobile})`) => {
    const result = window.matchMedia(rule);
    const [matches, setMatches] = useState(result.matches);

    useEffect(() => {

        const handleChange = (event) => {
            setMatches(event.matches);
        };

        result.addEventListener('change', handleChange);

        return () => {
            result.removeEventListener('change', handleChange);
        };
    }, [rule]);

    return matches;

};

export default useMedia;