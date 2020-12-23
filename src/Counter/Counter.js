
import React, {Component} from 'react';
import "./counter.css"
class Counter extends Component{
constructor(props){
    super(props);
    this.state = {
        startcount: this.props.startcount
    }
    this.increament = this.increament.bind(this)
    this.decreament = this.decreament.bind(this)
    this.reset = this.reset.bind(this)
}

    increament(){
        console.log("increment", this.increament)
        this.setState({
            startcount : this.state.startcount + 1

        })
    }
    decreament (){
        console.log("increment", this.decreament)
        this.setState({
            startcount: this.state.startcount -1

        })
    }
    reset (){
        console.log("increment", this.reset)
        this.setState({

            startcount: this.props.startcount
        })
     
    }
    render(){
    return (
        <div>
            <h2>Counter: {this.state.startcount} </h2 >
          
            <button onClick={() => this.increament()}>+</button>
            <button  onClick={() => this.decreament()}>-</button>
            <button onClick={() => this.reset()}>Reset</button>
    
    
        </div>
    )
    }
}
export default Counter; 