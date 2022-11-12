import React from 'react';
import { withRouter } from "react-router";
import color from '../HOC/color';

class Home extends React.Component{
    // componentDidMount(){
    //     setTimeout(() => {
    //         this.props.history.push('/Todo')
    //     },3000)
    // }
    render() {
        console.log(this.props)
        return (
             <div>
                helllllllllllllllllluvgdfgdfg
             </div>
        )
    }
}
export default color(Home)