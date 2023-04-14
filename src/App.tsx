import React, {useEffect,useState} from 'react'
import moment from "moment";



import './App.css'

export default function App() {

    const [startDate, setStartDate] = useState(new Date());
    const [diff, setDiff] = useState("00:00:00");
    const [timer, setTimer] = useState<any | null>(null);
    const [time, setSavedTime] = useState <Time[]>([])
    const [error, setError] = useState({})


    // interface Time {
    //      UUID: string;
    //      time: number;
    //      saved: boolean;
    //  }




    return (
        <div className="App">
            <button
                onClick={() => {
                    setStartDate(new Date());
                    const timer = setInterval(() => {
                        let start = moment(startDate);
                        let end = moment(new Date());
                        let diff = end.diff(start);
                        let f = moment.utc(diff).format("HH:mm:ss.SSS");
                        setDiff(f);
                    }, 1000);
                    setTimer(timer);
                    //error fixed was always passing null value ands top diddnt work
                }}
            >Start
            </button>
            <button onClick={() => clearInterval(timer)}>Stop</button>
            {/*//<button onClick={() => (handleSumbit)}> Save</button>*/}
            {/*<button onClick={Times}>Show all</button>*/}
            <p>{diff}</p>
        </div>
    );

}


