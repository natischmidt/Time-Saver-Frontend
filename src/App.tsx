import React, {useEffect,useState} from 'react'
import moment from "moment";


import './App.css'

export default function App() {

    const [startDate, setStartDate] = useState(new Date());
    const [diff, setDiff] = useState("00:00:00");
    const [timer, setTimer] = useState<any | null>(null);

    // const [savedTime, setSavedTime] = useState([]);

    function Fetch ()  {
        const [savedtimes, setTimes] = useState<any[]>([])
        useEffect(() => {
            fetchData()
        }, [])
        type UUID = string;
        const fetchData = () =>
            fetch("http://localhost:8080/times")
                .then(response => {
                    return response.json()
                })
                .then(data => {
                    (setTimes(data))
                    console.log(savedtimes)
                })


        return (
            <div>
                {savedtimes.length > 0 && (
                    <ul>
                        {savedtimes.map(savedtimes => (
                            <li key="{savedtimes}"> {savedtimes.UUID}
                                {savedtimes.UUID}
                                </li>
                        ))}
                    </ul>
                )}
            </div>
        )
    }
    //fetch to api working this is for testing purposes
    //no array dependency because i want it to always fetch as soon as component is loaded to fetch saved timess?

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
            {/*//<button onClick={() => ()}> Save</button>*/}
            <button onClick={Fetch}>Show all</button>
            <p>{diff}</p>
        </div>
    );

}


// function SavedTimes(this: any) {
//     fetch('http://localhost:8080/api/times')
//         .then(response => response.json())
//         .then(data => this.setState({ totalReactPackages: data.total }));
//
//
//         return (
//             <div className="card text-center m-3">
//                 <h5 className="card-header">GET Request</h5>
//                 <div className="card-body">
//
//                 </div>
//             </div>
//         );
//
// }



//export default App;
