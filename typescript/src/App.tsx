import React ,{useState} from 'react';
import './App.css';
import InputField from './components/InputField'



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
  return (
    <div className="App">

      <span className="heading">Taskify</span>
      <InputField/>
   
    </div>
  );
}

export default App;
