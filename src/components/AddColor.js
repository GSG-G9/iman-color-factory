import React from 'react'

export default class AddColor extends React.Component{
    state = {
        newColor: ""
    }
    handelSubmit = (e) => {
        e.preventDefault();
        this.setState({
            newColor: e.target.elements[0].value
        })

    }
    render(){
        const color = this.state.newColor;
        if(color){
            this.props.addColor(color);
        }
        return (
            <>
            <form onSubmit = {this.handelSubmit}>
                <input placeholder='add new color'></input>
            </form>
            </>
        )
    }

}
