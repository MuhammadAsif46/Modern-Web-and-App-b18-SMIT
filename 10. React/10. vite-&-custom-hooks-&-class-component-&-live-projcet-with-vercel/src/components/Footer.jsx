// import React from 'react'

// const Footer = () => {
//   return (
//     <div>Footer</div>
//   )
// }

// export default Footer


import { Component } from "react";


class Footer extends Component {

    state = {
        count: 0
    }

    // componentDidMount()
    // componentDidUpdate()
    // componentWillUnmount()

    render() {
        return (
            <div>
                <h1>Footer Component</h1>
                <h2>Counter : {this.state.count}</h2>
                {/* <button onClick={() => this.setState({
                    count: count + 1
                })}>Increment</button> */}
                <button onClick={() => this.setState((prevState) => ({
                    count: prevState.count + 1
                }))}>Increment</button>
                {/* <button>Decrement</button> */}
            </div >
        )
    }
}

export default Footer