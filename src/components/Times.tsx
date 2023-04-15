import {useEffect, useState} from "react";
import axios from "axios";

interface Time {
    UUID: string,
    time: number
}

const Times = () => {

    const [error, setError] = useState('')
    const [times, setTimes] = useState<Time[]>([])
    const [savedTime, setSavedTime] = useState(false);



    useEffect(() => {
        axios.get<Time[]>('http://localhost:8080/timer')
            .then(res => {
                setTimes(res.data);
                times.map(time => console.log(time))
            })
            .catch((err) => setError(err.message));
    }, [savedTime])

    return {times, error, setError, savedTime, setSavedTime};
}

export default Times;