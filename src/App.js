import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Table from './table';

var Data={
  columns:['Name','Roll','Dept'],
  rows:[{
    'Name':'Nabila',
    'Roll':'01',
    'Dept':'Architechture'
  },
  {
    'Name':'Israq',
    'Roll':'02',
    'Dept':'Mechanical'
  },
  {
    'Name':'Nafisa',
    'Roll':'03',
    'Dept':'Math'
  },
  {
    'Name':'Ila',
    'Roll':'04',
    'Dept':'zoology'
  }
  ]
  
}
class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
       <Table tableData={Data}/>
      </div>
    );
  }
}

export default App;
