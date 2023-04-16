import React from "react";

export default function Buttons(props: {

    handleStart: React.MouseEventHandler<HTMLDivElement> | undefined; handleReset:
        React.MouseEventHandler<HTMLDivElement> | undefined; handlePauseResume: React.MouseEventHandler<HTMLDivElement>
        | undefined; isPaused: any; active: any; handleSave: any; showList: any; }) {

    const StartBtn = (
        <div className="btn btn-one btn-start"
             onClick={props.handleStart}>
            Start
        </div>
    );

    const ActiveBtns = (
        <div className="btn-btn">
            <div className="btn btn-reset"
                 onClick={props.handleReset}>
                Reset
            </div>
            <div className="btn btn-pause"
                 onClick={props.handlePauseResume}>
                {props.isPaused ? "Resume" : "Pause"}
            </div>
            <div className="btn btn-save"
                 onClick={props.handleSave}>
                Save
            </div>
            <div className="btn btn-list"
                 onClick={props.showList}>
                Show All
            </div>

        </div>
    );

    return (
        <div className="Control-Buttons">
            <div>{props.active ? ActiveBtns : StartBtn}</div>
        </div>
    );
}