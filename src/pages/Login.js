import React, { Component } from 'react';

import twitterLogo from '../react.svg';
import './Login.css';

// import { Container } from './styles';

export default class Login extends Component {
  state = {
    username : ""
  };

  handleSubmit = e =>{
    e.preventDefault();
    const {username} = this.state;
    
    if (!username.length) return;

    localStorage.setItem('@BrBlackCode:username', username);

    this.props.history.push('/timeline');
  };

  handleInputChange = (e) => {    
    this.setState({username: e.target.value});  
  };

  render() {
    return ( 
    <div className="login-wrapper" >
    <div className="form">
      <img className = "displayed" src={twitterLogo} height="220" width="220" alt= "GoTwitter" />

      <form className="login-form" onSubmit={this.handleSubmit}>

        <input type="text" value={this.state.username}
        onChange={this.handleInputChange}
        placeholder="Nome de usuário"/>

        <button type="submit">Entrar</button>

        <p class="message">Não está cadastrado? <a href="/">Crie uma conta</a></p>
      </form>      
      </div>
    </div>


    );
  }
}
