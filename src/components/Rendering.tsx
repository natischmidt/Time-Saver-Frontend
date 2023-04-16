import React from "react";

export const Rendering = (time: number) => {

    let centiseconds = ("0" + (Math.floor(time / 10) % 100)).slice(-2);
    let seconds = ("0" + (Math.floor(time / 1000) % 60)).slice(-2);
    let minutes = ("0" + (Math.floor(time / 60000) % 60)).slice(-2);
    let hours = ("0" + Math.floor(time / 3600000)).slice(-2);
    return hours + ' h ' + minutes + ' m ' + seconds + ' s ' + centiseconds + ' ms';

}