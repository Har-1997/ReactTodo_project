import React, {useState} from 'react';
import "./Form.css";
import { Button, FormControl, Row, Col } from 'react-bootstrap';


 function Form({list, setList}) {
  const [addInfo, setAddInfo] = useState("");

  return (
    <Row>
      <Col className='addColTodo'>
        <FormControl className="inpForm" type="text" value={addInfo} onChange={(e)=> setAddInfo(e.target.value)} />
          <Button className='btnAdd' onClick={(e)=> {
            setList([
              ...list,
              {
                id: Math.random(),
                title: addInfo,
                block: false  
              } 
            ]);
            setAddInfo("");
        }}>Add</Button>
      </Col>
    </Row>
  )
}

export default Form;