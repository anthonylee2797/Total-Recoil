import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import History from './History'
import AtomView from './atomView'

const Navbar = (props) => (
  <Router>
    <header className='navbar'>
      <div id='link-container'>
        <Link className='a-right' to="/"><div className='navbaritem'>Atom Values</div></Link>
        <Link className='a-right' to="/tab2"><div className='navbaritem' id='tab2'>History</div></Link>
      </div>
      <Switch>
        <Route path="/tab2">
          <History tree={props.tree} history={props.history}  />
        </Route>\
        <Route path="/">
          <AtomView tree={props.tree} />
        </Route>
      </Switch>
    </header>
  </Router>
);

export default Navbar;