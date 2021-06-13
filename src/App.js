import React, { useEffect, useState } from 'react';
import TodoList from './Components/TodoList';

const App=()=>{


  useEffect(()=>{
    document.title="ToDoList || App";
  })

  const [inputList, setInputList] = useState("");

  const [items, setItems] = useState([]);

  const itemList =(e)=>{
    setInputList(e.target.value);
  };
  const listItem=()=>{
    setItems((oldItems)=>{
      return [...oldItems, inputList];
    });
    setInputList('');
  };

  const deleteItem= (id) =>{
    console.log('deleted');

    setItems((oldItems)=>{
      return oldItems.filter((arrEle,index)=>{
        return index !== id;
      })
    })
}



  return <>
  <div>
  <div className="main center">
    <div className="todo-box">
      <h1 className="heading center">ToDO List</h1>
      <div className="center">
      <input type="text" placeholder="Add an Item" value={inputList} onChange={itemList} className="input" />
      <button type="button" className="btn" onClick={listItem} ><i className="fas fa-plus"></i></button>
      </div>
      <ol>

        {
          items.map( (itemval, index)=>{
            return <TodoList
            key={index} 
            id={index}
            text={itemval}
            onSelect={deleteItem} />;
          } )
        }
      </ol>
    </div>
  </div>
  
  </div>
  
  
  
  
  
  </>
};
export default App;