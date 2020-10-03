import React from 'react';
import Container from 'react-bootstrap/Container';
import './RandResult.css';


const RandResult = ({ amount, randomCountryData, data }) => {
    return (
    <div>
        <Container fluid className="Rand-section">
            <h1>Results compared to random country</h1>
            <p>
            Random Country: <strong>{randomCountryData.Country}</strong> <br />
            You could buy <strong>{((amount/data.Local_price) * (data.Dollar_price / randomCountryData.Dollar_price)).toFixed(1)}</strong> of Big Macs in <strong>{randomCountryData.Country}</strong> with <strong>{amount}</strong>!<br />
            Your <strong>{amount}</strong> is worth about <strong>{((amount / data.Dollar_ex) * randomCountryData.Dollar_ex).toFixed(1)}</strong> in <strong>{randomCountryData.Country}</strong>
            </p>
            <p className="footnote">* data last updated in 2016</p>
        </Container>
    </div>
    )
}

export default RandResult