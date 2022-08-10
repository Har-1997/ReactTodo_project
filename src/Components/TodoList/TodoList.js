import React, { useState } from 'react';
import "./TodoList.css"
import { Button} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSave, faTrash, faEdit, faLock, faLockOpen } from '@fortawesome/free-solid-svg-icons'


function edit(todo,list,setList,setEditInpInfo) {
  let newTodo = list.map((todoSel)=> {
    todoSel.editSelect = null;
    if (todoSel.id === todo.id) {
      todoSel.editSelect = true;
      setEditInpInfo(todoSel.title);
    }

    return todoSel;
  })
  setList(newTodo);
}
function save(todo, list, setList, editInpInfo, setEditInpInfo) {
  let newTodo = list.map((todoSel)=> {
    if (todoSel.id === todo.id) {
      todoSel.editSelect = null;
      todoSel.title = editInpInfo;

    }
    return todoSel;
  })
  setEditInpInfo("")
  setList(newTodo);
}

function changeInfo(todo, list, setList, editInpInfo){
  console.log(editInpInfo);
  let newTodo = list.map((todoSel)=> {
    if (todoSel.id === todo.id) {
      todoSel.title = editInpInfo;
    }
    return todoSel;
  })
  console.log(newTodo);

  setList(newTodo);
}





function Remove(todo,list,setList) {
  let newList = list.filter((todoList)=> todoList.id !== todo.id);
    setList(newList);
    console.log(todo.id);
}
function block(todo,list,setList) {
  let newList = list.map((todoList)=> {
    if(todoList.id === todo.id){
      todoList.block = !todoList.block;
    }
    return todoList;
  });
  console.log(newList)
  setList(newList);
}


function TodoList({list, setList}) {

  const [editInpInfo, setEditInpInfo] = useState("");
  console.log(editInpInfo)

  // console.log(list)
  return (
    <div>
      {
        list.map((todo)=> {
            return (
                <div key={todo.id}>
                    {todo.editSelect ? 
                      <div  className="listItemDiv">
                        <input type="text" value={editInpInfo} onChange={(e)=> {
                          setEditInpInfo(e.target.value)
                          changeInfo(todo, list, setList, editInpInfo)
                        }  
                        } />
                        <Button className='btn' size="sm" onClick={()=> save(todo, list, setList, editInpInfo , setEditInpInfo)}><FontAwesomeIcon icon={faSave} /></Button>
                      </div> :
                      <div  className="listItemDiv">
                        <span className={!todo.block ? "close" : "" }>{todo.title}</span>
                        <div>
                          <Button type='button' size="sm" className='btn' onClick={()=> Remove(todo,list,setList)}><FontAwesomeIcon icon={faTrash} /></Button>
                          <Button type='button' size="sm" className='btn' onClick={()=> block(todo,list,setList)}>{todo.block? <FontAwesomeIcon icon={faLockOpen} /> : <FontAwesomeIcon icon={faLock} />  }</Button>
                          <Button type='button' size="sm" className='btn' onClick={()=> edit(todo,list,setList, setEditInpInfo)}><FontAwesomeIcon icon={faEdit} /></Button>
                        </div>
                      </div> 
                    }
                </div>
            )
        })
      }
    </div>
  )
}


export default TodoList;