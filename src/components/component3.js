import React from 'react';
import './component3.css';

function Component3() {
    const [text, setText] = React.useState("Lorem ipsum dolor sit amet, consectetur");
    const [author, setAuthor] = React.useState("Author");
    const ShowCitate = () => {
        fetch('https://api.quotable.io/random').then(data=> data.json()).then(data => {
            console.log(data);
            setText(data.content);
            setAuthor(data.author);
        }).catch(error=> {
            alert("Error! Check console for more details");
            console.log(error);
        });
    };
    return (
        <div className='component3'>
            <Button onClick={ShowCitate}></Button>
            <p>{text}</p>
            <footer>&copy; {author}</footer>
        </div>
    );
}
function Button(props) {
    const click = () => { props.onClick() };
    return (
        <button className='button-comp3' onClick={click}>Цитата дня</button>
    );
}

export default Component3;