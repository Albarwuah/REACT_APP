
import React, {Component} from 'react';

export default class Navi extends Component{
    render(){
        return (<nav className="navbar navbar-expand-lg navbar-light bg-light" id="Na">
        <button
          type="button"
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <a className="navbar-brand" href="">
            AfroFuture A
          </a>
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <a className="nav-link" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
                Home 
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="javascript:alert('HIYA! MY REACT APP IS LIVE');">
                Link
              </a>
            </li>
            
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder=" search Google"
              aria-label="Search"
            />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    );
  }
}

            
