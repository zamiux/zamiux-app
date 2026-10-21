import React, { Component } from 'react';

class Car extends Component {
    // define state in constructor
    constructor(props){
        super(props);
        this.state = {
            color: "red",
            brand: "BMW",
            year: 2025//,
            //speed : this.props.speed
        }
    }

    handleColor = () => {
        this.setState({color:"blue",year:2021})
    }

    render() {
        return (
            <div>
                <h1>Hello Car</h1>
                <h2>Car Color is : {this.state.color}</h2>
                <h2>Car Brand is : {this.state.brand}</h2>
                <h2>Car Year is : {this.state.year}</h2>
                <h2>Car Speed is : {this.props.Speed}</h2>
                <hr/>  
                <button onClick={this.handleColor}>Change Color Car</button>
            </div>
        );
    }
}

export default Car;