import {useEffect, useRef, useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [time, setTime] = useState(0)

    useEffect(()=> {
        addTime();
    }, []);


    //Adding one second to the prior number 1000 ms


    function addTime(){

     setInterval(() => {
            setTime( (prior) => prior + 1);
        }, 1000);
    }

  return (
    <div className="App">
      <div>
          <h1> {time}</h1>
       <button>Start</button>
          <button> Stop</button>

      </div>
    </div>
  )
}

export default App
