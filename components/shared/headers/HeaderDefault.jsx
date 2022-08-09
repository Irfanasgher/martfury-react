import React, { Component } from 'react';
import Link from 'next/link';
import NavigationDefault from '../navigation/NavigationDefault';
import HeaderActions from './modules/HeaderActions';
import MenuCategories from './modules/MenuCategories';
import SearchHeader from './modules/SearchHeader';
import { stickyHeader } from '../../../utilities/common-helpers';

class HeaderDefault extends Component {
	constructor({ props }) {
		super(props);
	}

	componentDidMount() {
		if (process.browser) {
			window.addEventListener('scroll', stickyHeader);
		}
	}

	render() {
		return (
			<header className='header header--1' data-sticky='true' id='headerSticky'>
				<div className='header__top'>
					<div className='ps-container'>
						<div className='header__left'>
							<Link href='/'>
								<a className='ps-logo'>
									<img
										src="/static/img/chc-logo.png"
										alt="chc"
										height='52'
									/>

								</a>
							</Link>
							{/*<Link href='/'>*/}
							{/*<a style={{color: 'white', marginTop: '5px',*/}
							{/*	fontSize: '16px',*/}
							{/*	fontWeight: 'bold'}}>*/}
							{/*	/!*Colorado Hockey Connection*!/*/}
							{/*	CHC*/}
							{/*</a>*/}
							{/*</Link>*/}
							<div className='menu--product-categories'>
								<div className='menu__toggle'>
									<i className='icon-menu' />
									<span>Shop by Category</span>
								</div>
								<div className='menu__content'>
									<MenuCategories />
								</div>
							</div>
						</div>
						<div className='header__center'>
							<SearchHeader />
						</div>
						<div className='header__right'>
							<HeaderActions />
						</div>
					</div>
				</div>
				<NavigationDefault />
			</header>
		);
	}
}

export default HeaderDefault;
