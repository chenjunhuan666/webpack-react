import React,{ Component } from 'react'
import { hot } from 'react-hot-loader/root';
class App extends Component{

    render(){
        return(
            <div>
                <h1>webpack-react</h1>
                <h2>devserver-hot</h2>
            </div>
        )
    }
}

export default hot(App)