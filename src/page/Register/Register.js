import React from "react";
import logo from '../../assets/image/logo_form.jpg';
import "./Register.css"
import Form from "./Form";
import { Link } from "react-router-dom";

class Register extends React.Component{
    state = {
        Register:[
            {id:'', mailOrsdt:'',Pass:''}
        ]
    }
    addInfo = (info) =>{
        let currentUser = this.state.Register;
        console.log('check',currentUser)
        currentUser = currentUser.push(info)
        this.state({
            Register: currentUser
        })
    }
    render(){
        return(
            <div className="auth-form-container">
                <div className="register">
                <h2>ĐĂNG KÍ TÀI KHOẢN</h2>
                    <img src={logo} width="200" height="100" alt="Logo"/>
                    <Form addInfo={this.addInfo}></Form>
                    <Link to='/Login' >
                        <button className="register-btn" >Already have an account? Login here.</button>
                    </Link>   
                </div>
            </div>
        )
    }
}
export default Register 