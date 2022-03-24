import { useState, useEffect } from 'react';
import gameOfThrones from './got-api';

const useGameOfThronesFetch = () => {
    const [slug, setSlug] = useState('')
    const [results, setResults] = useState([])

    useEffect(() => {
        if (slug !== '') {
            const timeoutId = setTimeout(async () => {
                try {
                    const res = await gameOfThrones.get(`/${slug}`);
                    setResults(res.data)
                } catch (err) {
                    console.error(err);
                }
            }, 1000);

            return () => clearTimeout(timeoutId);
        }
    }, [slug]);

    return { slug, results, setSlug};
}

export default useGameOfThronesFetch