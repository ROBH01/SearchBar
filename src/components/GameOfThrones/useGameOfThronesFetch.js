import { useState, useEffect } from 'react';
import gotApi from './got-api';

const useGameOfThronesFetch = () => {
    const [slug, setSlug] = useState('');
    const [results, setResults] = useState([]);

    useEffect(() => {
        (async () => {
            if (slug !== '') {
                const { data } = await gotApi.get(`/${slug}`);
                setResults(data);
            }
        })();
    }, [slug]);

    return { slug, results, setSlug };
};

export default useGameOfThronesFetch;
