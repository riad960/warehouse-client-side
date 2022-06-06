import { useEffect, useState } from 'react';

const useWatch = () => {
    const [watchs, setWatchs] = useState([]);

    useEffect(() => {
        fetch('https://infinite-inlet-85185.herokuapp.com/watch')
            .then(res => res.json())
            .then(data => setWatchs(data));
    }, []);

    return [watchs, setWatchs];
};

export default useWatch;