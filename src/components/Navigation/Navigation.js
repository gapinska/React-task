import React from 'react';
import {Link} from 'react-router-dom'

const Navigation = () => (
    <ul>
        <li><Link to="/articles">Articles</Linktoi>
        <li><Link to="/notes">Notes</Linktoi>
        <li><Link to="/">Twitters</Linktoi>
    </ul>
);

export default Navigation;