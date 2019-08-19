import React from 'react';
import ListItem from './ListItem/ListItem';
import './ListWrapper.css';
import {twitterAccounts} from '../../data/twitterAccounts'


const ListWrapper = () =>(
    <ul className = "listWrapper__wrapper">
         <ListItem
            name= {twitterAccounts[0].name}
            description={twitterAccounts[0].description}
            image={twitterAccounts[0].image}
            link ={twitterAccounts[0].twitterLink} 
         
         />
         {twitterAccounts.map(item => (
             <ListItem
             name= {item.name}
             description={item.description}
             image={item.image}
             link ={item.twitterLink} 
          
          />

         ))}
    </ul>
);

export default ListWrapper;