import React  from "react";

const Show = (props) => {
        const {items,msg,deleteItems}=props;
        return(
            <div className="show">

                <div className="header">
                    <span>Name</span>
                    <span>Age</span>
                    <span>Action</span>
                </div>
                <div className="msg">
                    <p>{msg}</p>
                </div>
                <div className="containUsers">
                {
                items.map( user => {
                    return(
                        <div key={user.id} className="usersName">
                            <span>{user.name}</span>
                            <span>{user.age}</span>
                            <span onClick={() => deleteItems(user.id)} className="delete">&times;</span>
                        </div>
                    )})
                }
                </div>
            </div>
        )
}

export default Show