import React, { Component } from 'react'

class Messages extends Component{
    constructor(props){
    super(props)
    this.state = {
        inputMessage: '',
        outputMessage: ''
    }
}

    render(){
        return(
            <div>
              <p>{this.props.match.params.name}</p>

            Message: <textarea value={this.state.inputMessage} onChange={this.handleInputMessage}></textarea>
            <br/>
            <br/>
            <button onClick={this.handleButtonClick}>Send</button>

            <p>******Sent Messages *****</p>

            <p>{this.state.outputMessage}</p>
            </div>
        )
    }
    handleInputMessage=(e)=>{
        // e = event!
        this.setState({
            inputMessage: e.target.value
            // without including to that handler, no
            // changes could be made in text box
        })
    }
    handleButtonClick=()=>{
        this.setState({
            outputMessage: this.state.inputMessage

        })
    }
}

export default Messages
