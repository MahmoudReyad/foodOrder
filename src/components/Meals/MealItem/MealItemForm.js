import React from "react";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";
const MealItemForm = (props) => {
    return (
        <form className={classes.form}>
            <Input label="Amount" input = {{
                type: "number",
                id: "amount" + props.id ,
                name: "amount",
                min: "1",
                max: "10",
                step: "1",
                value: "1"
            }}/>
            <button>+ Add</button>
        </form>
    )
}
export default MealItemForm;
