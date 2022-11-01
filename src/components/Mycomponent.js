import React from 'react';

class Huyn extends React.Component {
    // let name = 'huy';
    state = {
        ten: 'huy',
        tuoi: '22'
    }
    handleOnchangeName = (event) => {
        this.setState({
            ten: event.target.value
        })
    }
    handleclick = () => {
        alert('click me')
    }
    render() {
        return (
            <>
                <div className='huyn1'>
                    <input value={this.state.ten} type='text'
                        onChange={(event) => this.handleOnchangeName(event)} />
                    test 1 : {this.state.ten}
                </div>
                {/* {console.log('Toi ten la: ', name)} */}
                <div className='huyn2'>
                    test 2: {this.state.tuoi}
                </div>
                <div className='huyn3'>
                    <button onClick={() => this.handleclick()}>click me</button>
                </div>
            </>
        )
    }
}
export default Huyn;