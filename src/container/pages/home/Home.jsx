import React, {Component} from 'react';
import {Helmet} from "react-helmet";
import './Home.scss';
import Card from "../../../components/common/card/Card";

const data = [
    {
        id: 1,
        logo: '/gw_logo.png',
        bgFrontImage: 'url(/card-bg6.jpg)',
        firstName: 'Holding Level ',
        lastName: 'Management',
        to: '/management'
    },
    {
        id : 2,
        logo: '/gw_logo.png',
        bgFrontImage: 'url(/card-bg6.jpg)',
        firstName: 'Underlying ',
        lastName: 'Companies',
        to: '/companies'

    }
]
class Home extends Component {
    render() {
        const renderData = data.map((data, index) => {
            return(
                <div className="col-md-6" key={index}>
                    <Card
                        logo={data.logo}
                        bgFrontImage={data.bgFrontImage}
                        firstName={data.firstName}
                        lastName={data.lastName}
                        link={data.to}
                    />
                </div>
            )
        })
        return (
            <div id={'home'}>

                {/*<Header />*/}

                <Helmet>
                    <title>Gawah Holdings | Home</title>
                    <meta name={"keywords"} content={"gawah, gawah.vip, gawah holdings, gawah dubai, gawah holdings dubai"} />
                    <meta name={"description"} content={"Holding Company - GCC Royals Investment, Management & Development, i-OTA (Old Town Advisory), HEXAA, Evenflow Capital"} />
                </Helmet>

                <div className="header">
                    <div className="row">
                        {renderData}
                    </div>
                </div>

                {/*<Footer />*/}

            </div>
        );
    }
}

export default Home;
