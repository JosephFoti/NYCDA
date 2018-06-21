import React, { Component } from 'react'
// equivalent of requiring react
class AdderRefs extends Component{
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
                 Num1: <input type="number" ref='num1'/>
            <br/>
              Num2: <input type="number" ref='num2'/>
            <br/>
                <button onClick={this.handleButtonClick}> Add </button>

            <p>{this.state.output}</p>
            </div>
        )
    }

    handleButtonClick=()=>{
        this.setState({
            output: parseInt(this.refs.num1.value,10)+parseInt(this.refs.num2.value,10)
            //                              ^ In parseint need to have a base defined or react throws warnings.
        });
    }
}

export default AdderRefs
