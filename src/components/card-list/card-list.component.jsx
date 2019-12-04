import React from 'react';
 
import './card-list.style.css';

import {Card } from '../card/card.component';

export const CardList = props => (
        <div className='card-list'>
             { 
             props.users.map(username => (
             <Card key={username.id} monster={username} />
             ))}
            
        </div>
        );