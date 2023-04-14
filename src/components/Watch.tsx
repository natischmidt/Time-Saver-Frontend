import moment from "moment/moment";
import React, {useState} from "react";

interface Time {

    Saved: (UUID: string, time:number) => void;
}


const Watch = ({Saved}: Time) => {

    const [startDate, setStartDate] = useState(new Date());
    const [diff, setDiff] = useState("00:00:00");
    const [timer, setTimer] = useState<any | null>(null);

    return (
        <>
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

        </>
    );
}


export default Watch;