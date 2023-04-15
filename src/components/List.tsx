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


        <button
            className="btn btn-outline-danger"
            onClick={() => Delete(times.)}
        >Delete
        </button>





    );


}

export default List;
