import React from "react";
import Children from "./childcomponent";
import Addconponent from "./addcomponent";
class Father extends React.Component{
    state = {
        arrlist:[
            {id:'01', title:'deverloper',salary:'400$'},
            {id:'02', title:'tester',salary:'500$'},
            {id:'03', title:'BA',salary:'600$'}
        ]
    }
    changelist = (Job) => {
        console.log('check farther: ', Job)
        // let currentJob = this.state.arrlist;
        // currentJob.push(Job)

        this.setState({
            // arrlist:currentJob
            arrlist: [...this.state.arrlist, Job] 
        })
    }
    render(){
        return(
            <>
                <Addconponent changelist={this.changelist}></Addconponent>
                <Children 
                    list={this.state.arrlist}
                />
            </>
        )  
    }
}
export default Father