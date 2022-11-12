import React from "react";

class Addconponent extends React.Component{
    state = {
        title: '',
        salary: ''
    }
    handletitle = (event) => {
        this.setState({
            title: event.target.value
        })
    }
    hanndlesalary = (event) => {
        this.setState({
            salary: event.target.value
        })
    }
    handclick = (event) => {
        event.preventDefault()
        // alert('kiss me')
       if(!this.state.title || !this.state.salary){
            alert('You missing required para')
            return
       }
        this.props.changelist({
            id: Math.floor(Math.random() * 100),
            title: this.state.title,
            salary: this.state.salary 
        })
        this.setState({
            title: '',
            salary:''
        })
    }
    render() {
        return (
            <>
                <form >
                    <label>Title Job: </label> <br />
                    <input
                        type='text'
                        value={this.state.title}
                        onChange={(event) => this.handletitle(event)}
                    />
                    <br />
                    <label>Salary: </label> <br />
                    <input
                        type='text'
                        value={this.state.salary}
                        onChange={(event) => this.hanndlesalary(event)}
                    />
                    <br />
                    <input
                        type='submit'
                        onClick={(event) => this.handclick(event)}
                    />
                </form>
            </>
        )
    }
}
export default Addconponent