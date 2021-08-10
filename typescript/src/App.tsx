import React ,{useState} from 'react';
import './App.css';
import InputField from './components/InputField'
import { Todo } from './components/model';



let name:string;
let age:number | string;
let isStudent:boolean;
let hobbies: string[];
let role:[number,string];



interface person {
  name:string,
  age?: string | number
}

// a way to typescript an object

const App: React.FC = ()  =>{



  const [todo,setTodo] = useState<string>("")
  const [todos, setTodos] = useState<Todo[]>([])



  const handleAdd = () => {
    


  }


  console.log(todo,"this is the todo")
  return (
    <div className="App">

      <span className="heading">Taskify</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
   
    </div>
  );
}

export default App;
