import React from 'react';
import classes from './Footer.module.css';
const footer = props => {

    return (
        <div className={classes.Footer}>
            <div className={classes.Icons}>
                <span><i className='fab fa-twitter' /></span>
                <span><i className='fab fa-instagram' /></span>
                <span><i className='fab fa-facebook' /></span>
            </div>
            <span className={classes.Copyright}><i className="far fa-copyright"></i> Schu:Maker</span>
        </div>
    )
}

export default footer;