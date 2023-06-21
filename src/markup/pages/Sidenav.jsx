import React from 'react';
// import './sidenav.css'; // Assuming the CSS file is in the same directory

class Sidenav extends React.Component {
  render() {
    return (
      <body className="sidenav_body">
        <div className="wrapper">
          <nav id="sidebar">
            <div className="sidebar-header">
              <img className="sidebar_logo" src={require('../../assets/images/shape/logo_bridgehealth.png')}  alt="Bridge Health" />
              <h3 className="sidenav_title">Bridge Health</h3>
            </div>

            <ul className="list-unstyled components">
              <li>
                <a className="on_hover_components" href="#">
                  <i className="material-icons">dashboard</i> Dashboard
                </a>
              </li>

              <li>
                <a className="on_hover_components" href="#">+ Add New Job</a>
              </li>
              <li>
                <a className="on_hover_components" href="#">&#9745; Job listings</a>
              </li>
              <li>
                <a className="on_hover_components" href="#">&#9881; Settings</a>
              </li>
            </ul>
          </nav>
        </div>
      </body>
    );
  }
}

export default Sidenav;
