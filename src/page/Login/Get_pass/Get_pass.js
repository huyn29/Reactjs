import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../../assets/image/logo_form.jpg'
import './Get_pass.css'

export class Get_pass extends Component {
    state = {
        email_account: ''
    }
    handleOnchangeGetPassInput = (event) => {
        this.setState({
            email_account: event.target.value
        })
    }
    HandleOnclickGetpass = () =>{
        alert('Check your Email')
    }
  render() {
    return (
        <div className='auth-form-container'>
            <div className='get_pass'>
            <img src={Logo} width="400" height="200" alt="Logo"/>
            <form>
                <table>
                    <tr>
                        <th className='Get-pass-form-table-th-text'>
                            Tài Khoản
                        </th>
                        <td>
                            <input
                            className='Get-pass-input'
                            type={'text'}
                            value={this.state.email_account}
                            placeholder='Email'
                            onChange={(event) => this.handleOnchangeGetPassInput(event)}></input>
                        </td>
                    </tr>
                </table>
            </form>
            <p className='Get-pass-text'>
                Mật khẩu mới sẽ được gửi về địa chỉ gmail của bạn
            </p>
            <button
                className='Get-pass-submit'
                type='submit'
                onClick={() => this.HandleOnclickGetpass()}>
                    Lấy lại mật khẩu
            </button>
            <Link to={'/Login'}>
                <button
                    className='Get-pass-Login'
                    type='submit'>
                        Đăng Nhập
                </button>
            </Link>
            </div>
        </div>
    )
  }
}

export default Get_pass