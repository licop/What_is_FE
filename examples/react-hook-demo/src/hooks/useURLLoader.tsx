import {useState, useEffect} from 'react';
import axios from 'axios'

const useURLLoader = (url: string, deps: any[] = []) => {
    const [data, setData] = useState<any>(null);
    const [show, setShow] = useState(true);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        axios.get(url).then(result => {
            console.log(result, 11);
            setData(result.data);
            setLoading(false)
        })
    }, deps)
    
    return [data, loading];
}

export default useURLLoader;
