import React from 'react';
import "./styles.css";



interface Props {

    todo: string;
    setTodo:React.Dispatch<React.SetStateAction<string>>;
    handleAdd:() => void;

}

const InputField = ({todo,setTodo,handleAdd} : Props )=> {



    return(
       <form className="input">

           <input type="text" placeholder=" Enter a task" value={todo} className="input_box"
            onChange={(e) => setTodo(e.target.value)}/>
           <button className="input_submit" type="submit">
               Go
           </button>
       </form>
    )



}


export default InputField;