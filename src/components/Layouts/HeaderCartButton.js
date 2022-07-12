import React from "react";
import classes from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
const HeaderCartButton = (props) => {
    return(
        <button onClick={props.onClick} className={classes.button}>
            <span className={classes.icon}><CartIcon/></span>
            <span>You Cart Items </span>
            <span className={classes.badge}> 3</span>
        </button>

    )
}
export default HeaderCartButton;