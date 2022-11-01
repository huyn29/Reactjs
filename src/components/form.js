import React from 'react';

class Huyform extends React.Component {
    state = {
        firstname: '',
        Lastname: ''
    }
    handlefirstname = (event) => {
        this.setState({
            firstname: event.target.value
        })
    }
    hanndlelastname = (event) => {
        this.setState({
            Lastname: event.target.value
        })
    }
    handclick = () => {
        // event.preventDefaulft()
        alert('kiss me')
    }
    render() {
        console.log('>>>>>: ', this.state)
        return (
            <>
                <form >
                    <label>firstname: </label> <br />
                    <input
                        type='text'
                        value={this.state.firstname}
                        onChange={(event) => this.handlefirstname(event)}
                    />
                    <br />
                    <label>Lastname: </label> <br />
                    <input
                        type='text'
                        value={this.state.Lastname}
                        onChange={(event) => this.hanndlelastname(event)}
                    />
                    <br />
                    <input
                        type='submit'
                        onClick={() => this.handclick()}
                    />
                </form>
            </>
        )
    }
}
export default Huyform