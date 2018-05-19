import React, { Component } from 'react';

import {Switch, Route} from 'react-router-dom';

import ReaderMain from '../../pages/Reader/index';
import WriterMain from '../../pages/Writer/index';
import MHome from '../../pages/MHome/index';

class MMain extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div>
            <Switch>
                <Route exact path='/' component={ReaderMain}/>
                <Route path='/m_reader' component={ReaderMain}/>
                <Route path='/m_writer' component={WriterMain}/>
                <Route path='/m_home' component={MHome}/>
            </Switch>
        </div> )
    }
}
 
export default MMain;