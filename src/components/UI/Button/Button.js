import React from 'react';
import classes from './Button.module.css';

const button = props => {
    let attachedClasses = classes.Button;
    if (props.borderLess){
        attachedClasses = classes.BorderLessButton;
    }
    return <button onClick={props.clicked} className={attachedClasses}>{props.children}</button>
}

export default button;