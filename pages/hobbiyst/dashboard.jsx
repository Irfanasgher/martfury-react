import React, { Component } from 'react';
import { connect } from 'react-redux';

import HeaderDefault from '../../components/shared/headers/HeaderDefault';
import DashboardInfo from '../../components/partials/hobbiyst/dashboard';
import HeaderMobile from '../../components/shared/headers/HeaderMobile';
import NavigationList from '../../components/shared/navigation/NavigationList';
import SubscribePopup from '../../components/shared/SubscribePopup';
import FooterDefault from '../../components/shared/footers/FooterDefault';
 import BreadCrumb from '../../components/elements/BreadCrumb';
import { getProducts, getTotalProducts } from '../../store/product/action';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            subscribe: false,
        };
    }
    componentDidMount() {
        const params = {
            _start: 1,
            _limit: 12,
        };
        this.props.dispatch(getProducts(params));
        this.props.dispatch(getTotalProducts());
    }

    render() {

        const { subscribe } = this.state;

        const breadCrumb = [
            {
                text: 'Home',
                url: '/',
            },
            {
                text: 'Hobbiyst',
                url: '/hobbiyst/dashboard',
            },
            {
                text: 'Dashboard',
            },
        ];
        return (
            <div className="site-content">
                <HeaderDefault />
                <HeaderMobile />
                <NavigationList />
                <SubscribePopup active={subscribe} />
                <main id="homepage-1">
                    <BreadCrumb breacrumb={breadCrumb} />
                    <DashboardInfo />

                </main>
                <FooterDefault />
            </div>
        );
    }
}


export default connect(state => state.collection)(Dashboard);
