
import React, {useState} from "react";
import Buttons from "./Buttons";
import Timer from "./Timer";



interface Time {
    Saved: (id: number, time:number) => void;
}

const Watch = ({Saved}: Time) => {

    const [isActive, setIsActive] = useState(false);
    const [isPaused, setIsPaused] = useState(true);
    const [time, setTime] = useState(0);


    React.useEffect(() => {
        let interval: any = null;

        if (isActive && !isPaused) {
            interval = setInterval(() => {
                setTime((time) => time + 10);
            }, 10);
        } else {
            clearInterval(interval);
        }
        return () => {
            clearInterval(interval);
        };
    }, [isActive, isPaused]);

    const handleStart = () => {
        setIsActive(true);
        setIsPaused(false);
    };

    const handlePauseResume = () => {
        setIsPaused(!isPaused);
    };

    const handleReset = () => {
        setIsActive(false);
        setTime(0);
    };

    const handleSave = () => {
        setIsActive(false);
        console.log(time);
        Saved(0,time)
    }

    const showList = () => {
        setIsActive(false);
    }



    return (
        <div className="stop-watch">
            <Timer time={time} />
            <Buttons
                active={isActive}
                isPaused={isPaused}
                handleStart={handleStart}
                handlePauseResume={handlePauseResume}
                handleReset={handleReset}
                handleSave={handleSave}
                showList={showList}
            />
        </div>
    );
}


export default Watch;