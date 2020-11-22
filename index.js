import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: null,
      password: ''
    };
  }
  mySubmitHandler = (event) => {
    event.preventDefault();
    let email= this.state.email;
    if (!Number(email)) {
      alert("You have successfully login");
    }
  }
  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]: val});
  }
  render() {
    return (
      <form onSubmit={this.mySubmitHandler}>
      <h1>My React Form{this.state.username} {this.state.email}</h1>
      <p>Enter your full name:</p>
      <input
        id='op'
        type='text'
        name='username'
        placeholder='E.g Adengbono Rebecca'
        onChange={this.myChangeHandler}
      />
      <p>Enter your email:</p>
      <input id='rr'
        type='text'
        name='email' 
        placeholder='E.g rebeccaadengbono2017@gmail.com'
        onChange={this.myChangeHandler}
      />
      <p>Enter your password:</p>
      <input
         id='op'
        type='text, number'
        name='password'
        font-size='13px' 
        placeholder='*******'
        onChange={this.myChangeHandler}
      />
      <br/>
      <br/>
      <button class="button">Login</button>
      </form>
    );
  }
}

ReactDOM.render(<MyForm />, document.getElementById('root'));
