import { useEffect, useState } from 'react';
import { Service } from '../types/Service';
import {Time} from "../types/Time";


export interface Times {
    results: Time[];
}

const usePostTimesService = () => {
    const [result, setResult] = useState<Service<Times>>({
        status: 'loading'
    });

    useEffect(() => {
        fetch('http://localhost:8080/times')
            .then(response => response.json())
            .then(response => setResult({ status: 'loaded', payload: response }))
            .catch(error => setResult({ status: 'error', error }));
    }, []);

    return result;
};

export default usePostTimesService;