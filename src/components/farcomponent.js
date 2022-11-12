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
        // let currentJob = this.state.arrlist;
        // currentJob.push(Job)

        this.setState({
            // arrlist:currentJob
            arrlist: [...this.state.arrlist, Job] 
        })
    }
    jobDelete = (job) =>{
        let current1Job = this.state.arrlist;
        current1Job = current1Job.filter(item => item.id !== job.id);
        this.setState({
            arrlist: current1Job
        })
    }
    render(){
        return(
            <>
                <Addconponent changelist={this.changelist}></Addconponent>
                <Children
                    list={this.state.arrlist}
                    jobDelete={this.jobDelete}
                />
            </>
        )  
    }
}
export default Father