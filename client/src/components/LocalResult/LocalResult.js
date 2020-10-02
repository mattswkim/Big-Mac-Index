import React from 'react';
import Container from 'react-bootstrap/Container';
import './LocalResult.css';


const LocalResult = ({ amount, data }) => {
  return (
    <div className="Local-result">
        <Container fluid>
          <h1>Local Result</h1>
          <p>
            You could buy <strong>{(amount/data.Local_price).toFixed(1)}</strong> of Big Macs in your country<br/>
            Your Dollar Purchasing Parity (PPP) is <strong>{(data.Dollar_PPP).toFixed(1)}</strong><br/>
            This is a simple lookup to the table
          </p>
        </Container>
    </div>
  )
}

export default LocalResult