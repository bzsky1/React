import React, {useState} from 'react'

class ClassCounter extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }

    increment = () => {
        this.setState({count: this.state.count + 1}) 
    }

    decrement = () => {
        this.setState({count: this.state.count - 1}) 
    }
    
    render () {
        return (
            <div className='class'>
                <h4>Class component</h4>
                <h1>{this.state.count}</h1>
                <div className='buttons'>
                    <button onClick={this.increment}>Increment</button>
                    <button className='decbtn' onClick={this.decrement}>Decrement</button>
                </div>
            </div>
        )
    }
}

export default ClassCounter