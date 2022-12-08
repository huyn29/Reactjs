import React, { Component } from 'react'
import { Link } from "react-router-dom";
import "./Login.css"
import Logo from '../../assets/image/logo_form.jpg'
export class Login extends Component {
  state = {
    account:'',
    Password:'',
    savePassword:false
  }
  handleOnchangeAccount = (event) =>{
    this.setState({
      account: event.target.value
    })
  }
  handleOnchangePassword = (event) =>{
    this.setState({
      Password: event.target.value
    })
  }
  render() {
    return(
      <div className='auth-form-container'>
        <div className='Login'>
          <img src={Logo} width="400" height="200" alt="Logo"/>
          <form>
            <table>
                <tr>
                  <th className='Login-form-table-th-text'>Tài khoản</th>
                  <td>
                    <input
                      type='text'
                      className='Login-input'
                      value={this.state.account}
                      placeholder='Email/Phone'
                      onChange={(event) => this.handleOnchangeAccount(event)}>
                    </input>
                  </td>
                </tr>
                <tr>
                <th className='Login-form-table-th-text'>Mật khẩu</th>
                  <td>
                    <input
                    type='password'
                    className='Login-input'
                    value={this.state.Password}
                    placeholder='**************'
                    onChange={(event) => this.handleOnchangePassword(event)}>
                    </input>
                  </td>
                </tr>
            </table>
            <label>
              <input 
                className='checkbox'
                value={this.state.savePassword}
                type='checkbox'>
              </input>
              Nhớ mật khẩu
            </label>
            <Link to='/Get-pass'>
              <button className='Forgot-password-bnt'>Quên mật khẩu</button>
            </Link>
          </form>
          <Link to='/home'>
            <button 
              className='Login-submit'
              type="submit"
              onClick={(event) => this.handleSubmit(event)}>
              Đăng nhập
            </button>
          </Link>
          <Link to='/' >
            <button className="register-btn">Bạn chưa có tài khoản? Đăng Kí.</button>
          </Link>
        </div> 
      </div>
      
    )
  }
}
export default Login