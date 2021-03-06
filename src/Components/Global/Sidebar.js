//Dependecies
import React, { Component } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

//Assets
import "materialize-css/dist/css/materialize.min.css";

//Components
class Sidebar extends Component {

    componentDidMount() {
        var elem = document.querySelector(".sidenav");
        M.Sidenav.init(elem, {
            edge: "left",
            inDuration: 250
        });
    }
    static propTypes = {
          items: PropTypes.array.isRequired
    };

    render() {
        const { items } = this.props;
        return (
            <div>
                <ul id="slide-out" className="sidenav ">
                  <div className="profile-head ">
                    <img  className="responsive-img circle z-depth-1" src={require('../Global/images/mitsh.jpg')} alt="img"/>


                  </div>

                  <p className="center">Mitchel Novoa</p><hr/>
                {
                  items && items.map((item, key) => <li key={key}><Link to={item.url}>{item.title}</Link></li>
                  )
                }
                </ul>
              
            </div>
        );
    }
}

export default Sidebar;
