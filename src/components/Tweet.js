import React, { Component } from 'react';
import like from '../like.svg';

import './Tweet.css';
import api from '../services/api';

// import { Container } from './styles';

export default class Tweet extends Component {
  handleLike = async () =>{
    const {_id} = this.props.dataTweet;
    
    await api.post(`likes/${_id}`);
  }  

  render() {
      const {dataTweet} = this.props;
    return (
        <li className="tweet">

        <strong>{dataTweet.author}</strong>

        <p>{dataTweet.content}</p>

        <button type="button" onClick={this.handleLike} > 
            <img src={like} alt="Like"/>
            {dataTweet.likes}       
        </button>

        </li>
    );

    //return <h1>{this.props.dataTweet.author}</h1>;
  }
}
