import React from 'react';
import './parent.css'
//import { Child } from '../children/children'

export class Parent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {color: [255, 255, 255]}
        this.handleEvent = this.handleEvent.bind(this)
    }

    componentDidMount() {
        this.applyColor();
        //this.applyTextColor();
    }

    componentDidUpdate(prevProps, prevState) {
        this.applyColor();
        //this.applyTextColor();
    }

    handleEvent() {
        this.setState({
            color: this.generateColor()
        })
    }

    generateColor() {
        let colorCode = [];
        for (let i = 0; i < 3; i++) {
            colorCode.push(Math.floor(Math.random() * 255))
        }
        return colorCode;
    }

    formatArray(arr) {
        return `rgb(${arr.join()})`
    }

    applyColor() {
        const color = this.formatArray(this.state.color);
        document.body.style.background = color;
    }

    applyTextColor() {
        let textColor = this.state.color.map(color => Math.floor(color * 0.25));
        const color = this.formatArray(textColor);
        document.body.style.backgroundColor = color;
    }

    isLight() {
        if (this.state.color.reduce((x, y) => x + y) > 382.5) {
            return true;
        } else {
            return false;
        }
    }

    render() {
        return (
            <div className='content'>
                <h1 className={this.isLight() ? 'black' : 'white'}>Your Color RGB is {this.formatArray(this.state.color)}</h1>
                <button onClick={this.handleEvent} className={this.isLight() ? 'black' : 'white'}>Refresh</button>
            </div>
        )
    }
}