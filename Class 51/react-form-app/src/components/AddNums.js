import React, { Component } from 'react'
// equivalent of requiring react
class Adder extends Component{
    constructor(props){
        super(props)
        this.state = {
            num1: '',
            num2:'',
            output:''
        }
    }
    render(){
        return(
            <div>
                 Num1: <textarea value={this.state.num1} onChange={this.handleNum1}></textarea>
            <br/>
            Num2: <textarea value={this.state.num2} onChange={this.handleNum2}></textarea>
            <br/>
                <button onClick={this.handleButtonClick}> Add </button>

            <p>{this.state.output}</p>
            </div>
        )
    }
    handleNum1=(e)=>{
        this.setState({
            num1: e.target.value
        });
    }
    handleNum2=(e)=>{
        this.setState({
            num2: e.target.value
        });
    }
    handleButtonClick=()=>{
        this.setState({
            output: parseInt(this.state.num1, 10)+parseInt(this.state.num2, 10)
            //                              ^ ints need to have a base defined or react throws warnings.
        });
    }
}

export default Adder
