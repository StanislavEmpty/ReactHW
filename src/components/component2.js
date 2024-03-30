import './component-style.css';
import React from "react";

class Component2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bkColor: "white",
            textColor: "black"
        };
    }
    onClick = (newBkColor, newTextColor) => {
        this.setState({ bkColor: newBkColor });
        this.setState({ textColor: newTextColor });
    };
    render() {
        return (
            <div>
                <div className='component'>
                    <Button bkColor="red" textColor="black" onClick={this.onClick}>Red</Button>
                    <Button bkColor="green" textColor="white" onClick={this.onClick}>Green</Button>
                    <Button bkColor="yellow" textColor="blue" onClick={this.onClick}>Yellow</Button>
                </div>
                <Display bkColor={this.state.bkColor} textColor={this.state.textColor}></Display>
            </div>
        );
    }
}

class Button extends React.Component {
    onClick = (newBkColor, newTextColor) => { this.props.onClick(this.props.bkColor, this.props.textColor)};
    render() {
        return <button className='button' 
                style={{backgroundColor: this.props.bkColor, color: this.props.textColor}} 
                onClick={this.onClick}>{this.props.children}</button>;
    }
}

class Display extends React.Component {
    render() {
        return <div className='display' style={{backgroundColor: this.props.bkColor, color: this.props.textColor}}>
            Lorem ipsum dolor sit amet, consectetur adip
            Lorem ipsum dolor sit amet, consectetur adip
            Lorem ipsum dolor sit amet, consectetur adip
            Lorem ipsum dolor sit amet, consectetur adip
            Lorem ipsum dolor sit amet, consectetur adip
        </div>;
    }
}

export default Component2;