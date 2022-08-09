import React, {Component} from 'react';
import './Footer.scss';
import { withRouter } from 'react-router-dom'
class Footer extends Component {

    render() {
        if(this.props.location.pathname === '/' ||
            this.props.location.pathname === '/membersData/1' ||
            this.props.location.pathname === '/membersData/2' ||
            this.props.location.pathname === '/membersData/3' ||
            this.props.location.pathname === '/membersData/4') {return null;}

        return (
            <div id={'footer'}>
                <div className="doctor-note">
                    We are supporters of <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/drjenniferdustow/"> Dr.
                    Jennifer Dustow’s </a> cause to help children with Autism - please do devote a little time to view
                    her recently developed application for children with autism: <a target="_blank" rel="noopener noreferrer"
                                                                                    href="https://apps.apple.com/us/app/happy-drj/id1500990609"> Happy
                    drj</a>
                </div>
                <footer>
                        <img src="/calligraphy_transparent.png" alt="" />
                        <div className={'footer-heading'}>
                            &copy; {(new Date().getFullYear()) }&nbsp;
                             Gawah Holdings. All Rights Reserved. Powered by
                            <a target="_blank" rel="noopener noreferrer" href='https://www.thehexaa.com' > The Hexaa</a>
                        </div>

                </footer>
            </div>
        );
    }
}

export default withRouter(Footer);
