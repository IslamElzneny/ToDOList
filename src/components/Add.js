import React ,{Component} from "react";

class Add extends Component{
    state={
        name:'',
        age:''
    }

    handleChange= (e) =>{
        this.setState({
            [e.target.id]:e.target.value
        });
    }
    handleSubmit= (e) =>{   
        e.preventDefault();
        if(this.state.name !="" && this.state.age !="" ){
            this.props.addItems(this.state);
            this.setState({
                name:'',
                age:''
            });
        }else{
            alert("Inputs is empty!!!! ");
        }
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input type="text" id="name" placeholder="Enter the Your Name..." onChange={this.handleChange} value={this.state.name}/>
                <input type="number" id="age" placeholder="Enter the Your Age..." onChange={this.handleChange} value={this.state.age}/>
                <input type="submit" id="add" value="Add"/>  
            </form>
        )
    }
}

export default Add