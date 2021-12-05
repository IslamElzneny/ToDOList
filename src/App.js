import React ,{Component} from "react";
import ToDoApp from "./components/ToDoList";
import { BrowserRouter,Route } from "react-router-dom";

class App extends Component{
  render(){
    return(
      <div className="App">
        <BrowserRouter>
          <Route path="/ToDOList" component={ToDoApp}/>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
