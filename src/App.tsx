import React, {useEffect,useState} from 'react'
import Watch from "./components/Watch";
import axios from 'axios';
import Times from "./components/Times";



import './App.css'

export default function App() {

    const Update = () => setSavedTime(!savedTime);
    const {times, error, setError, savedTime, setSavedTime} = Times();

    const Saved = (id: number, time: number) => {
        axios.post('http://localhost:8080/timer', {id, time})
            .then(() => Update())
            .catch((err) => setError(err.message));
    }

    return (
        <div className="App">
            <Watch Saved={(id, time) => Saved(id, time)}></Watch>
        </div>
    );

}


