import React from 'react';

interface Time {
    id: number,
    time: number
}

interface Times {
    times: Time[],
    Delete: (id: number) => void;
}

const List = ({times, Delete}: Times) => {

    if (times.length === 0) return null;

    return (
        <>
        <h1> Times </h1>
            <ul>
                <tbody>
                {times.map(time =>
                    <tr key={time.id}>
                        <td>{(time.time)}</td>
                        <td>
                            <button
                                onClick={() => Delete(time.id)}
                            >Delete
                            </button>
                        </td>
                    </tr>)}
                </tbody>
            </ul>
                    </>
    );

}

export default List;
