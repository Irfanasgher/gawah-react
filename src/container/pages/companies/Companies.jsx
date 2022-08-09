import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import './Companies.scss';
import Card from '../../../components/common/card/Card';

const data = [
	{
		id: 1,
		logo: '/gcc_icon.png',
		logoHeight: '300',
		logoWidth: '170',
		bgFrontImage: 'url(/pattern.jpg)',
		firstName: 'IMD',
		bgFirstName: 'Investment Management &',
		bgLastName: 'Development LLC',
		href: 'https://home.gccroyal.com'
	},
	{
		id: 2,
		logo: '/iota-logo.png',
		bgLogo: true,
		logoHeight: '300',
		bgFrontImage: 'url(https://www.home.i-ota.me/img/background.jpeg)',
		bgFirstName: 'Boutique Financial',
		bgLastName: 'Advisory',
		href: 'http://www.home.i-ota.me'
	},
	{
		id: 3,
		logo: '/logo1.png',
		bgLogo: true,
		logoHeight: '300',
		bgFrontImage: 'url(/theHexaa.jpg)',
		href: 'https://www.thehexaa.com'
	},
	{
		id: 4,
		logo: '/evenflow.png',
		bgLogo: true,
		logoHeight: '300',
		bgFrontImage: 'url(/bg7.jpg)',
		href: 'https://www.evenflowcapital.io'
	}
];

class Companies extends Component {
	render() {
		const renderData = data.map((data, index) => {
			return (
				<div className='col-md-6' key={index}>
					<Card
						logo={data.logo}
						logoHeight={data.logoHeight}
						logoWidth={data.logoWidth}
						bgFrontImage={data.bgFrontImage}
						bgFirstName={data.bgFirstName}
						bgLastName={data.bgLastName}
						firstName={data.firstName}
						href={data.href}
						bgLogo={data.bgLogo}
					/>
				</div>
			);
		});

		return (
			<div id={'companies'}>
				{/*<Header arrow={true} to={'/home'}/>*/}

				<div className='header'>
					<Helmet>
						<title>Gawah Holdings | Underlying Companies</title>
						<meta
							name={'keywords'}
							content={'gawah, gawah.vip, gawah holdings, gawah dubai, gawah holdings dubai'}
						/>
						<meta
							name={'description'}
							content={
								'Holding Company - GCC Royals Investment, Management & Development, i-OTA (Old Town Advisory), HEXAA, Evenflow Capital'
							}
						/>
					</Helmet>

					<div className='row'>{renderData}</div>
				</div>

				{/*<Footer />*/}
			</div>
		);
	}
}

export default Companies;
