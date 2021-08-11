import React ,{useState} from 'react';
import './App.css';
import InputField from './components/InputField'
import { Todo } from './components/model';
import SingleTodo from './components/SingleTodo';
import TodoList from './components/TodoList';



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



  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo("");
    }
  };



  return (
    <div className="App">

      <span className="heading">Taskify</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
      <TodoList todos = {todos} setTodos={setTodos}/>

      
    
    </div>
  );
}

export default App;
