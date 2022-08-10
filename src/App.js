import React, {useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Header from "./Components/Header/Header";
import Form from "./Components/Form/Form";
import TodoList from "./Components/TodoList/TodoList";
import {Container} from "react-bootstrap";

function App() {
  
  const [list, setList] = useState([
    {
      id: 1,
      title: "axxxxx",
      block: false,
      editSelect: null
    },
    {
      id: 2,
      title: "aaaaaa",
      block: false,
      editSelect: null
    },
    {
      id: 3,
      title: "sssss",
      block: false,
      editSelect: null
    }
  ])

  return (
    <Container>
      <Header list = {list} setList = {setList} />
      <Form list = {list} setList = {setList} />
      <TodoList list = {list} setList = {setList} />
    </Container>
  );
}

export default App;
