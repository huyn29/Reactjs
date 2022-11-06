import React from "react";
class Children extends React.Component{
    state = {
        arrShow:false
    }
    handleOnClick = () => {
        this.setState({
            arrShow: !this.state.arrShow
        })
    }
    handleDelete = () => {
        alert('click me')
    }
    render(){
        console.log(this.props)
        // let ten = this.props.name
        // let tuoi = this.props.age
        let {list} = this.props;
        let {arrShow} = this.state;
        let check = arrShow === true ? 'arrShow = true' : 'arrShow = false';
        console.log(check)
        return(
            <>
                {/* {arrShow === false && */}
                {arrShow === false ?
                    <div>
                        <button onClick={() => this.handleOnClick()}>Show</button>
                    </div>
                // }
                // {arrShow === true &&
                :
                    <>
                        <div className="test list">
                            {
                                list.map((item,index) =>{
                                    return(
                                        <div key={item.id}>
                                            {item.title} - {item.salary} <></>
                                            <span onClick={() => this.handleDelete()}>x</span>
                                        </div>
                                    )
                                })}
                            </div>
                        <div>
                            <button onClick={() => this.handleOnClick()}>Hide</button>
                        </div>
                    </>
                }
            </>
        )
    }
}
export default Children