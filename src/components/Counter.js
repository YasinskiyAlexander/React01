import React from "react";

export class Counter extends React.Component{
    static defaultProps = {
        value: 0,
        min: -5,
        max: 15
    };
    constructor(props){
        super(props);
        this.state = {
            value: props.value
        };
    }
    Increment(){
        this.setState(
            (state, props) => {
                if(state.value < props.max)
                    return {
                        value: state.value +1
                    };
            }
        )
    }
    Decrement(){
        this.setState(
            (state, props) => {
                if(state.value > props.min)
                    return {
                        value: state.value -1
                    };
            }
        )
    }
    render(){
        return(
                <div className="counter">
                    <div className="count">{this.state.value}</div>
                    <div className="buttons">
                        <button onClick={this.Increment.bind(this)}>&#8743;</button>
                        <button onClick={this.Decrement.bind(this)}>&#8744;</button>
                    </div>
                </div>
        );
    }
}