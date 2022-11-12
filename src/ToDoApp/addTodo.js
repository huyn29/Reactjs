import React from 'react';
class AddTodo extends React.Component{
    state = {
        title:''
    }
    handletitle = (event) =>{
        this.setState({
            title: event.target.value
        })
    }
    handleClick = (event) =>{
        if(!this.state.title){
            alert("you missing type")
            return // thoat khoi ham if
        }
        this.props.addlist({
            id: Math.floor(Math.random() * 100),
            title: this.state.title
        })
        this.setState({
            title:''
        })
    }
    render(){
        return(
            <div className="add-todo">
                <input
                    onChange={(event) => this.handletitle(event)} 
                    value= {this.state.title}
                    type='text'>
                </input>
                <button 
                    onClick={(event) => this.handleClick(event)}
                    type="button" 
                    className="add">
                    Add
                </button>
            </div>
        )
    }
    
}
export default AddTodo