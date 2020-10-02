import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Input.css'

const Input = ({ country, onButtonSubmit, onInputChange }) => {
  return (
    <div>
    <div>
      <h2>{`You are in ${country}`}</h2>
    </div>
      <div>
        <Form.Group>
          <h4>How much do you have?</h4>
          <Form.Control 
            type="number" 
            min="0" 
            placeholder="Amount" 
            onChange={onInputChange}
          />
          <Form.Text className="text-muted">
            Please enter an amount of money in your local currency
          </Form.Text>
        </Form.Group>

        <Button 
          href="#result"
          variant="outline-warning" 
          onClick={onButtonSubmit}
        >
          Submit
        </Button>
      </div>
      <h2 id="result" className="result">...</h2>
    </div>
  )
}

export default Input;