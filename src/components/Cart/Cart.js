import React from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
const Cart = (props) => {
    const CartItems = (
    <ul>
        {[{id:'c1' , name:'Pizza', price:10, amount:2}].map((item) => {
               <li>{}</li>
        })}
    </ul>
    );
    return (
        <Modal onClose={props.onClose}>
            {CartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>20</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick = {props.onClose}>Close</button>
                <button className={classes.button}>Order</button>
            </div>
        </Modal>
    )
}
export default Cart;