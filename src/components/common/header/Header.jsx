import React, {Component} from 'react';
import './Header.scss';
import {Link, withRouter} from "react-router-dom";
class Header extends Component {


    handleBack =() => {
        this.props.history.goBack();
    }

    render() {

        if(this.props.location.pathname ==='/'){ return null;}

        return <div id={'header'}>
            <div id="nav" className="home">
                <div onClick={this.handleBack} >
                    <i className="la la-arrow-left"/>
                </div>
                <Link to={'/'}>
                    <img src="/gw_logo.png" alt="" className="img"/>
                </Link>
            </div>
        </div>


    }
}

export default withRouter(Header);
