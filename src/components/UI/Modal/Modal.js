import React from 'react';
import classes from './Modal.module.css';
import Backdrop from '../Backdrop/Backdrop';

const modal = props => {
    let modal = null;
    if (props.showModal) {
        modal = (
            <div className={classes.Wrapper}>
                <div className={classes.Modal}>
                    <span onClick={props.backdropClicked} className={classes.Close}>
                    <i className='fas fa-times'></i>
                    </span>
                {props.children}</div>
                <Backdrop clicked={props.backdropClicked}/>
            </div>
        )
    }
    return modal;
}

export default modal;