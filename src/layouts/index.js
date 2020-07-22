import React from 'react';
import Helmet from 'react-helmet';
import ReactGA from 'react-ga';

import { Nav } from '../components/Nav/Nav';
import '../_sass/index.scss';

const faviconSizes = [16, 32, 64];

export default class Layout extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showSadNotice: true
		};
	}

	componentDidMount() {
		const { location } = this.props;
		ReactGA.initialize('UA-8000008250609-1');
		ReactGA.pageview(location.pathname + location.search);
	}

	componentDidUpdate() {
		const { location } = this.props;
		ReactGA.pageview(location.pathname + location.search);
	}

	render() {
		const { children } = this.props;
		return (
			<div>
				<Helmet>
					<link
						href="https://fonts.googleapis.com/css?family=Montserrat&display=swap"
						rel="stylesheet"
					/>
					{faviconSizes.map(size => (
						<link
							rel="icon"
							type="image/png"
							href={`/social/${size}x${size}.png`}
							sizes={`${size}x${size}`}
							key={`${size}x${size}`}
						/>
					))}
				</Helmet>
				{this.state.showSadNotice && (
					<div className="sad-notice">
						<div className="sad-notice-inner">
							<h3>Hi~ 很高兴见到你呀！😃</h3>
							<p>
							今天你在这里找到了什么宝站？
                            <br></br>

                            悄悄告诉你，<a href="https://community.ofo.moe">
							    宝站社区
								</a>里面可以找到更多好宝站呢。<br></br>
							加入宝站社区，这里总有一个属于你的宝站！
                             {' '}

							</p>

							<button οnclick="window.location.href='https://community.ofo.moe'">
							   宝站社区传送门
							</button>

							<button onClick={() => this.setState({ showSadNotice: false })}>
								继续体验新版网站传送门
							</button>
						</div>
					</div>
				)}
				<Nav />
				{children}
			</div>
		);
	}
}
