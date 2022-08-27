import React from "react";
import classes from './myInput.module.css'

const MyInput = (props) => {

    return (
        <div className={classes.myInput}>
            <input
                value={props.input}
                onChange = {e => props.setInput (e.target.value)}
                className={classes.input} 
                {...props}
            />
            <button 
                className={classes.button}
                onClick={props.add}
            >Добавить</button>
        </div>
    );
};

export default MyInput;