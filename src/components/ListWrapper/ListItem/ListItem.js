import React from 'react';
import './ListItem.css';
import danAbramovImage from '../../../assets/images/danabramov.jpg'


const ListItem = () => (
    <li className = "listItemWrapper">
        <img src={danAbramovImage}/>
        <div>
            <h2>Dan Abramov</h2>
            <p>It is a good idea to think of your PC as an office. It stores files, programs, pictures. This can be compared to an actual office's files, machines and decorations.</p>
            <button>visit twitter page</button>
        </div>

    </li>
);

export default ListItem;