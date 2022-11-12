import React from "react";
import './ListTodo.scss'
import AddTodo from "./addTodo";
import { toast } from 'react-toastify';

class ListTodo extends React.Component{
    state = {
        listTodo: [
            {id: 'todo1', title: 'Doing homework'},
            {id: 'todo2', title: 'Making video'}
        ],
        editTodo: {}
    }
    addlist = (job) =>{
       
        this.setState({
            listTodo: [...this.state.listTodo,job]
        })
        toast.success("Create success")
    }
    handledelete = (job) =>{
        let currentTodo = this.state.listTodo;
        currentTodo = currentTodo.filter(item => item.id !== job.id);
        this.setState({
            listTodo: currentTodo  
        })
        toast.success("Delete success")
    }
    handleEdit = (todo) => {
        // let {editTodo} = this.state;
        // let isEmtyObj = Object.keys(editTodo).length === 0;

        // //save
        // if(isEmtyObj == false && editTodo.id === todo.id){
        //     return
        // }
        this.setState({
            editTodo: todo
        })
    }
    handlechange = (event) =>{
        let editTodoCopy = {...this.state.editTodo};
        editTodoCopy.title = event.target.value;
        this.setState({
            editTodo: editTodoCopy
        })
    }
    render() {
        let {listTodo, editTodo} = this.state;
        let isEmtyObj = Object.keys(editTodo).length === 0;
        return(
            <>
                <p>
                    Learn React with huyn
                </p>
                <div className="List-todo_container">
                    <AddTodo addlist = {this.addlist}></AddTodo>
                    <div className="add-todo-content">
                    {listTodo && listTodo.length > 0 &&
                        listTodo.map((item,index) =>{
                            return(
                                <div className="chillTodo" key={item.id}>
                                    {isEmtyObj === true ?
                                        <span>{index +1} - {item.title} </span>
                                        :
                                        <>
                                            {editTodo.id === item.id ?
                                                <span>
                                                    {index+1} - <input
                                                    value={editTodo.title}
                                                    onChange={(event) => this.handlechange(event)}
                                                    />
                                                </span>
                                            :
                                                <span>{index +1} - {item.title} </span>
                                            }
                                        </>
                                        
                                    }
                                    <button 
                                        onClick={() => this.handleEdit(item)} className="edit"
                                    >
                                        {isEmtyObj === false && editTodo.id === item.id ?
                                            'Save' : 'Edit'
                                        }
                                    </button>
                                    <button
                                        onClick={() => this.handledelete(item)} 
                                        className="Delete">
                                        Delete
                                    </button>
                                </div>
                            )
                        })
                    }  
                    </div>
                </div>
            </>
        )
    }
}
export default ListTodo