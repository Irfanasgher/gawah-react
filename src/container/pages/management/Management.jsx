import React, {Component} from 'react';
import {Helmet} from "react-helmet";
import './Management.scss';
import Card from "../../../components/common/card/Card";

const data = [
    {
        id: 1,
        logo: '/gw_logo.png',
        firstName: ' Muhammad Nawaz ',
        lastName: 'Khan Jadoon',
        subTitle: 'Founder / Chairman',
        to: '/membersData/1'
    },
    {
        id : 2,
        logo: '/gw_logo.png',
        firstName: 'Faraz ',
        lastName: ' Mehmood',
        subTitle: 'Co Founder/ Vice Chairman',
        to: '/membersData/2'
    },
    {
        id : 3,
        logo: '/gw_logo.png',
        firstName: 'Suhail ',
        lastName: 'Al Ansari',
        subTitle: 'Deputy Vice Chairman',
        to: '/membersData/3'
    },
    {
        id : 4,
        logo: '/gw_logo.png',
        firstName: 'Mujtaba ',
        lastName: 'Sarfaraz',
        subTitle: 'Group Chief Executive Officer',
        to: '/membersData/4'
    }
]


class Management extends Component {

    render() {
        const renderData = data.map((data, index) =>{
            return(

                <div className="col-md-3" key={index}>
                    <Card
                        logo={data.logo}
                        firstName={data.firstName}
                        lastName={data.lastName}
                        subTitle={data.subTitle}
                        link={data.to}
                    />
                </div>
            )
        })
        return (
            <div id={'management'}>
                <Helmet>
                    <title>Gawah Holdings | Holding Level Management</title>
                    <meta name={"keywords"} content={"gawah, gawah.vip, gawah holdings, gawah dubai, gawah holdings dubai"} />
                    <meta name={"description"} content={"Holding Company - GCC Royals Investment, Management & Development, i-OTA (Old Town Advisory), HEXAA, Evenflow Capital"} />
                </Helmet>

                <div className="header">
                    <div className="container">
                        <div className="row">
                            {renderData}
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Management;
