import React from 'react';

class Requests extends React.Component{

    constructor(props: {} | Readonly<{}>) {
        super(props);

        this.state = {
            totalReactPackages: null
        };
    }

    componentDidMount() {
        fetch('http://localhost:8080/api/times')
            .then(response => response.json())
            .then(data => this.setState({ totalReactPackages: data.total }));
    }

    render() {
        return (
            <div className="card text-center m-3">
                <h5 className="card-header">Get times</h5>

            </div>
        );
    }



}
export { Requests };
