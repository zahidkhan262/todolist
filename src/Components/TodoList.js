import React  from 'react';


const TodoList=(props)=>{


    return(
    <>

    <div className="delete">
    <li>{props.text}</li>
    <i className="far fa-times-circle" onClick={()=>{
        props.onSelect(props.id);
    }}></i>
    </div>
    </>

    ) 

}
export default TodoList;