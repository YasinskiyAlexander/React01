import React, {useState} from "react";

export function FunctionalCounter(props){
    const [counterValue, useCounterValue] = useState(props.value);
    function Increment(){
        useCounterValue(
            (prevValue) => {
                if(prevValue < props.max)
                    return prevValue+1;
                else
                    return prevValue;
            }
        );
    }
    function Decrement(){
        useCounterValue(
            (prevValue) => {
                if(prevValue > props.min)
                    return prevValue -1;
                else
                    return prevValue;
            }
        );
    }
    return(
            <div className="counter">
                <div className="count">{counterValue}</div>
                <div className="buttons">
                    <button onClick={Increment}>&#8743;</button>
                    <button onClick={Decrement}>&#8744;</button>
                </div>
            </div>
    );
}
FunctionalCounter.defaultProps = {
    value: 0,
    min: -5,
    max: 15
};