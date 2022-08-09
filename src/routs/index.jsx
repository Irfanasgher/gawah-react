import React, {Component, Fragment} from 'react';
import {Route, Switch, BrowserRouter} from "react-router-dom";
import Home from "../container/pages/home/Home";
import Companies from "../container/pages/companies/Companies";
import Management from "../container/pages/management/Management";
import Member from "../container/pages/member/Member";
import membersData from "../components/membersData";
import Index from "../container/pages/index/index";
import Header from "../components/common/header/Header";
import Footer from "../components/common/footer/Footer";
class Routs extends Component {
    render() {
        return (
            <Fragment>
                <BrowserRouter basename={'/'}>

                    <Header />
                    <Switch>
                        <Route exact path='/' component={Index }/>
                        <Route exact path={'/home'} component={Home} />
                        <Route exact path={'/companies'} component={Companies} />
                        <Route exact path={'/management'} component={Management} />
                        <Route
                            path='/membersData/:id'
                            render={(props) => {
                                return <Member data={membersData} {...props}/>;
                            }}
                        />
                    </Switch>
                    <Footer />
                </BrowserRouter>

            </Fragment>
        );
    }
}

export default Routs;
