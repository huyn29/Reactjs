import React from 'react';
import { Link } from "react-router-dom";
class Form extends React.Component {
    state = {
        setmailOrsdt:'',
        setPass:'',
        setRePass:'',
        setCheckbox: false
    }
    handleOnchangemailOrsdt = (event) =>{
        this.setState({
            setmailOrsdt: event.target.value
        })
    }
    handleOnchangePass = (event) =>{
        this.setState({
            setPass: event.target.value
        })
    }
    handleOnchangeRePass = (event) =>{
        this.setState({
            setRePass: event.target.value
        })
    }
    handleChangeCheckbox = () =>{
        this.setState({
            setCheckbox: true
        })
    }
    handleSubmit = (event) =>{
        // event.preventDefault();
        if(!this.state.setmailOrsdt || !this.state.setPass || !this.state.setRePass || this.state.setCheckbox === false){
            alert('Missing info')
            return
        }
        if(this.state.setPass !== this.state.setRePass){
            alert('two passwords do not match')
            return
        }
        this.props.addInfo({
            id: Math.floor(Math.random()*100),
            mailOrsdt: this.state.setmailOrsdt,
            Pass: this.state.setPass
        })
        this.setState({
            setmailOrsdt:'',
            setPass:'',
            setRePass:'',
            setCheckbox: false
        })
        
    }
    render() {
        return (
            <form className="register-form">
                <label htmlFor="name" className='register-input-label'>Email/SĐT</label>
                <input 
                    value={this.state.setmailOrsdt}
                    className="register-input" 
                    type="text" 
                    placeholder="Email/Phone"
                    onChange={(event) => this.handleOnchangemailOrsdt(event)}>
                </input>
                <label htmlFor="password" className='register-input-label'>Mật Khẩu</label>
                <input 
                    className="register-input" 
                    type="password" 
                    placeholder="**********"
                    onChange={(event) => this.handleOnchangePass(event)}>
                </input>
                <label htmlFor="confirm_password" className='register-input-label'>Xác Nhận Mật Khẩu</label>
                <input 
                    className="register-input"  
                    type="password" 
                    placeholder="**********"
                    onChange={(event) => this.handleOnchangeRePass(event)}>
                </input>
                <label htmlFor="checkbox" className='register-input-label'>
                    <input 
                        value={this.state.setCheckbox}
                        className="checkbox"
                        type="checkbox"
                        onChange={() => this.handleChangeCheckbox()}>
                    </input>
                    Tôi không phải là robot
                </label>
                <Link to='/Login' >
                    <button  
                        className='register-submit'
                        type="submit"
                        onClick={(event) => this.handleSubmit(event)}>
                        Đăng ký
                    </button> 
                </Link>
            </form>
        )
    }
}   
export default Form;
