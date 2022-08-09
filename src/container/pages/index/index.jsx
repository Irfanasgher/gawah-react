import React, {Component} from 'react';
import {Helmet} from "react-helmet";
import { Link } from 'react-router-dom';
import './Index.scss';
class Index extends Component {
    render() {
        return (
            <div id={'index'}>
                <Helmet>
                    <title>Gawah Holdings | Home</title>
                    <meta name={"keywords"} content={"gawah, gawah.vip, gawah holdings, gawah dubai, gawah holdings dubai"} />
                    <meta name={"description"} content={"Holding Company - GCC Royals Investment, Management & Development, i-OTA (Old Town Advisory), HEXAA, Evenflow Capital"} />
                </Helmet>
                <div
                    className="logo-container">
                    <img src="gw_logo.png" alt="" className={'logo'}/>
                    <Link to={'/home'}>
                        <h1>ENTER</h1>
                    </Link>
                </div>
            </div>
        );
    }
}

export default Index;
