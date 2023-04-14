import React, { useEffect, useState } from "react"

// export const Fetch = () => {
//     const [savedtimes, setTimes] = useState<any[]>([])
//
//     type UUID = string;
//
//     const fetchData = () => {
//         fetch("http://localhost:8080/times")
//             .then(response => {
//                 return response.json()
//             })
//             .then(data => {
//                 setTimes(data)
//             })
//     }
//
//     useEffect(() => {
//         fetchData()
//     }, [])
//
//     return (
//         <div>
//             {savedtimes.length > 0 && (
//                 <ul>
//                     {savedtimes.map(savedtimes => (
//                         <li key={savedtimes.UUID}>{savedtimes.number}</li>
//                     ))}
//                 </ul>
//             )}
//         </div>
//     )
// }
//
