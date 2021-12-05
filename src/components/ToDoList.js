import React ,{Component} from "react";
import Show from "./Show";
import Add from "./Add";
class ToDoApp extends Component{
    state={
        users:[
           {id:1,name:"eslam",age:21},
           {id:2,name:"Omar",age:18},
           {id:3,name:"osama",age:35}
        ],
        msg:''
    }
    deleteItems= (id) =>{
        console.log(id);
        for( var i = 0; i < this.state.users.length; i++){ 
            if ( this.state.users[i].id === id) { 
                this.state.users.splice(i, 1); 
            }
        }
        // const items=this.state.users.filter(item =>{return item.id !==id } )
        if(this.state.users.length>0){
            this.setState({
                users:this.state.users,
                msg:''
            })
        }else{
            this.setState({
                msg:'No items Now !!!'
            })
        }
        
    }

    addItems = (users)=>{
        const ID=this.state.users.length+1;
        const item={id:ID,name:users.name,age:users.age}; 
        this.state.users.push(item);
        this.setState({
            users:this.state.users
        });
    }
    render(){
        return(
            <div className="to_do_lists">
                <div className="titleName">To Do ListApp</div>
                <Show items={this.state.users} msg={this.state.msg} deleteItems={this.deleteItems}/>
                <Add addItems={this.addItems}/>
            </div>
        )
    }
}

export default ToDoApp