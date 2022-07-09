import React from "react";
import classes from "./Header.module.css";
import mealsImage from "../../assets/images/meals.jpg";
const Header = (props) => {
    return(
        <React.Fragment>
            <header className={classes.header}>
                <h1>{props.title}</h1>
                <button>Cart</button>
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImage} alt='Main Header' />
            </div>
        </React.Fragment>
    )
}
export default Header;