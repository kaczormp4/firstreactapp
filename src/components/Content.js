import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './Content.css';
import './ContentMobile.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import LeftMenu from './LeftMenu';
import Home from '../pages/Home';
import Friends from '../pages/Friends';
import Groups from '../pages/Groups';
import Messages from '../pages/Messages';
import Settings from '../pages/Settings';



function Content() {

    return (
        <main>
             <LeftMenu/>
             <Route exact path="/" component={Home}/>
             <Route exact path="/friends" component={Friends}/>
             <Route exact path="/groups" component={Groups}/>
             <Route exact path="/messages" component={Messages}/>
             <Route exact path="/settings" component={Settings}/>
        </main>
    )
}

export default Content
