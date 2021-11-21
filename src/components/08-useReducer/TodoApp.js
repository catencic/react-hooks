import React, {  useEffect, useReducer } from 'react'



import './styles.css'
import { TodoAdd } from './TodoAdd';
import { TodoList } from './TodoList';
import { todoReducer } from './todoReducer';

const init = () => {
   /*  return [{
        id: new Date().getTime(),
        Desc: 'Aprender react',
        done: false,
    }] */

    return JSON.parse(localStorage.getItem('todos')) || [];
} 

export const TodoApp = () => {


        const [todos, dispatch] = useReducer(todoReducer, [], init);

       

        useEffect(() =>{

            localStorage.setItem('todos', JSON.stringify(todos)); 

        }, [todos]);

        const handleDelete = (todoId) => {
                

                 const action = {
                     type: 'delete',
                     payload: todoId
                 }

                 dispatch(action);
                 //console.log(todoId);
        }

        const handleAddTodo= (newTodo)=> {
             
            dispatch({
                type: 'add',
                payload: newTodo
            });
        }

       

        const handleToggle = (todoId) => {
            dispatch({ 
                type: 'toogle', 
                payload: todoId
            });
        }

        

        



    return (
        <div>
            <h1>TodoApp </h1>

            <hr/>
            <h2>Todos: ( { todos.length } )</h2>

            <div className="row">

               <div className="col-7">
                    <TodoList 
                    todos={todos}
                    handleDelete={handleDelete}
                    handleToggle={handleToggle}
                    />
               </div>

               <div className="col-5">
                  

                  <TodoAdd
                  handleAddTodo={handleAddTodo}
                  />



               </div>

            </div>

        </div>
    )
}
