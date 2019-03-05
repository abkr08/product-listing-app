import React from 'react';
import classes from './SideDrawer.module.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Button from '../../UI/Button/Button';

const sideDrawer = props => {
    let attachedClasses = [classes.SideDrawer, classes.Closed], backdrop = null;
    if (props.showSideDrawer){
        attachedClasses = [classes.SideDrawer, classes.Opened];
        backdrop = <Backdrop clicked={props.backdropClicked}/>
    }
    return  (
        <div>
            <div className={attachedClasses.join(' ')}>
                <span onClick={props.backdropClicked} className={classes.CloseIcon}><i className="fas fa-times"></i></span>
                <div className={classes.NavItems}>
                    <Button borderLess={true}>Home</Button>
                    <Button borderLess>Brands</Button>
                    <Button borderLess>Return policy</Button>
                    <Button borderLess>Log in</Button>
                </div>
            </div>
            {backdrop}
        </div>
        );
}

export default sideDrawer;