import React,{useState} from 'react';
import {Todo} from './model';
import {AiFillEdit,AiFillDelete} from 'react-icons/ai'
import {MdDone} from 'react-icons/md';
import './styles.css';

 interface props {

    todo:Todo;
    todos:Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>




 }


const SingleTodo  = ({todo,todos,setTodos} :props) => {


    const [edit,setEdit] = useState<boolean>(false);
    const [editTodo, setEditTodo] = useState<string>(todo.todo)


    const handleDelete = (id:number) => {

        setTodos(todos.filter((todo) => todo.id === id ? {...todo, todo:editTodo} : todo))


      
    }


    const handleDone = (id:number) => {

        setTodos(
            todos.map((todo) =>
            todo.id === id ? {...todo, isDone: !todo.isDone} : todo)
        )




    }


    const handleEdit = (e: React.FormEvent, id:number) => {

        e.preventDefault();


        setTodos(
            todos.map((todo) => (todo.id === id ? {...todo,todo:editTodo}: todo))
        )


        setEdit(false)

    };




    return(
        <form className="todos_single">
          <span className="todos_single_text">{todo.todo}</span>

      <div>
            <span className="icon">
             <AiFillEdit/>
            </span>
            <span className="icon">
                <AiFillDelete/>
            </span>
            <span className="icon" onClick={() => handleDone(todo.id)}>
                <MdDone/>
            </span>

       </div>

        </form>
    )
}


export default SingleTodo