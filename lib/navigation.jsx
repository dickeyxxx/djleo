'use strict';

let React  = require('react');
let {Link} = require('react-router');

class Navigation extends React.Component {
  render() {
    return <nav className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header page-scroll">
          <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand" href="#page-top">DJLEO</a>
        </div>

        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav navbar-right">
            <li className="hidden">
              <a href="#page-top"></a>
            </li>
            <li className="page-scroll">
              <Link to="/">Music</Link>
            </li>
            <li className="page-scroll">
              <Link to="/about">About</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>;
  }
}

module.exports = Navigation;
