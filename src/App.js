import React ,{Component} from "react";
import ToDoApp from "./components/ToDoList";

class App extends Component{
  render(){
    return(
      <div className="App">
        <ToDoApp />
      </div>
    )
  }
}

export default App;
