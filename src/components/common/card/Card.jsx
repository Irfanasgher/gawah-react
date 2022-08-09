import React from 'react';
import {Link} from "react-router-dom";
import './Card.scss';
const Card = (props) => {
    const {
        logo,
        firstName,
        lastName,
        subTitle,
        link,
        bgFrontImage,
        bgFirstName,
        bgLastName,
        logoHeight,
        logoWidth,
        bgLogo,
        href
    } = props
        return (
            <div id={'card'}>
            <div className="cards-wrapper">
                <div className="card-container" >
                    <div className="card first-card">
                        <div className="card-contents card-front" style={{backgroundImage: bgFrontImage}}>
                            <div className="card-depth">
                                <img height={logoHeight? logoHeight:  80}
                                     width={logoWidth? logoWidth: logoHeight? logoHeight: 80} src={logo}
                                     alt=""
                                />
                                <hr/>
                                <h4>
                                    {firstName} <br/> {lastName}
                                </h4>
                                <p>
                                    {subTitle}
                                </p>
                            </div>
                        </div>
                        <div className="card-contents card-back card-back-iota-nawaz" style={{backgroundImage: bgFrontImage}}>
                            <div className="card-depth">
                                {(bgLogo)?
                                    <img height='200' width='200' src={logo} alt=""/>
                                    : null
                                }


                                {(firstName)?
                                    <h4>{firstName} <br/> {lastName}</h4>
                                    :null
                                }

                                {(subTitle)?
                                    <p>{subTitle}</p>
                                    :null
                                }

                                {(bgLastName)?
                                    <h4>{bgFirstName} <br/> {bgLastName}</h4>
                                    :null
                                }

                                <hr/>
                                {(link)?
                                    <div className="row">
                                        <Link to={link}  className="btn visit-site">View</Link>
                                    </div>
                                : null}
                                {(href)?
                                    <div className="row">
                                        <a target="_blank"
                                           rel="noopener noreferrer"
                                           href={href}
                                           className="btn visit-site">Visit Site
                                        </a>
                                    </div>
                                : null}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        );

}

export default Card;
