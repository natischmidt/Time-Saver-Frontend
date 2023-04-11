import {useEffect,useState} from 'react'
import moment from "moment";
import {Requests} from "./components/Requests";

import './App.css'

// function App(this: any) {
//   const [time, setTime] = useState(0)
//     useEffect(()=> {
//         addTime();
//     }, []);
//
//    // Adding one second to the prior number 1000 ms
//     function addTime(){
//      setInterval(() => {
//             setTime( (prior) => prior + 0.5);
//         }, 1000);
//     }
//
//     return (
//     <div className="Stopwatch">
//       <div>
//           <h1 className='timer'> {time}</h1>
//        <button className='start-button'
//        >Start</button>
//           <button className='stop-button'> Stop</button>
//       </div>
//     </div>
//   )
// }
export default function App() {
    const [startDate, setStartDate] = useState(new Date());
    const [diff, setDiff] = useState("00:00:00");
    const [timer, setTimer] = useState();

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
                    //error here WIP
                }}
            >
                start
            </button>
            <button onClick={() => clearInterval(timer)}>stop</button>
            <button onClick={() => {Requests}}>Show all</button>
            <p>{diff}</p>
        </div>
    );


}



//export default App;
