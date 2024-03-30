import './component-style.css';
import React from'react';

function Component1() {
const [bkColor, setBkColor] = React.useState("white");
const [textColor, setTextColor] = React.useState("black");
const stateFunc = (newBkColor, newTextColor) => { 
  setBkColor(newBkColor);
  setTextColor(newTextColor);
};
  return (
    <div>
      <div className="component1">
        <Button className="button" bkColor="red" textColor="black" text="Red" onClick={stateFunc}></Button>
        <Button className="button" bkColor="green" textColor="white" text="Green" onClick={stateFunc}></Button>
        <Button className="button" bkColor="yellow" textColor="blue" text="Yellow" onClick={stateFunc}></Button>
      </div>
      <Display bkColor={bkColor} textColor={textColor}></Display>
    </div>
  );
}

function Button(props) {
    const onClick = () => { props.onClick(props.bkColor, props.textColor)};
    return (
        <button className="button" style={{backgroundColor: props.bkColor, color: props.textColor}} onClick={onClick}>
            {props.text}
        </button>
    );
}

function Display(props) {
    return (
        <div className="display" style={{backgroundColor: props.bkColor, color: props.textColor}}>
            Lorem ipsum dolor sit amet, consectetur adip
            Lorem ipsum dolor sit amet, consectetur adip
            Lorem ipsum dolor sit amet, consectetur adip
            Lorem ipsum dolor sit amet, consectetur adip
            Lorem ipsum dolor sit amet, consectetur adip
        </div>
    );
}

export default Component1;
