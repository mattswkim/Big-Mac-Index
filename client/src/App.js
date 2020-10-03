import React, { Component } from 'react';
import './App.css';
import Input from './components/Input/Input';
import LocalResult from './components/LocalResult/LocalResult';
import Navbar from './components/Navbar/Navbar';
import RandResult from './components/RandResult/RandResult';
import Footer from './components/Footer/Footer'


class App extends Component {

  constructor() {
    super();
    this.state = {
    isSubmited: false,
    data: {},
    randomCountryData:{},
    amount: 0
    }
  }
  
  componentDidMount() {
    fetch('http://localhost:5000/query')
    .then(res => res.json())
    .then(data => {
      this.setState({data:data})
    });
    // fetch random country data
    fetch('http://localhost:5000/random')
    .then(res => res.json())
    .then(data => {
      this.setState({randomCountryData:data})
    });
  }

  onInputChange = (event) => {
    this.setState({amount: event.target.value})
  }

  onButtonSubmit = () => {
    this.setState({ isSubmited: true })
  }

  render () {
    const { isSubmited, data, amount, randomCountryData } = this.state;
    return (
      <div className="App">
        <Navbar />
        <div className="Input">
          <Input 
            country={data.Country} 
            onButtonSubmit={this.onButtonSubmit} 
            onInputChange={this.onInputChange}
          />
        </div>
        { isSubmited 
        ?
          <div>
            <LocalResult amount={amount} data={data} />
            <RandResult 
            randomCountryData={randomCountryData} 
            data={data} amount={amount} 
            />
          </div>
        : 
          <div></div>
        }
        <div>
          <Footer />
        </div>
      </div>
    )
    
  }
    
}

export default App;
