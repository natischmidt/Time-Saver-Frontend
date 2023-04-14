import React, {useEffect,useState} from 'react'
import Watch from "./components/Watch";
import axios from 'axios';



import './App.css'

export default function App() {


    // const [startDate, setStartDate] = useState(new Date());
    // const [diff, setDiff] = useState("00:00:00");
    // const [timer, setTimer] = useState<any | null>(null);
     const [time, setSavedTime]
    const [err, setError] = useState({})
    const Update = () => setSavedTime(time);

    const Saved = (UUID: string, time: number) => {
        axios.post('http://localhost:8080/times', {UUID, time})
            .then(() => Update())
            .catch((err) => setError(err.message));
    }
    // interface Time {
    //      UUID: string;
    //      time: number;
    //      saved: boolean;
    //  }




    return (
        <div className="App">
            <Watch Saved={(UUID, time) => Saved(UUID, time)}></Watch>
        </div>
    );

}


