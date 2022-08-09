import React, { Component } from 'react';
import Link from 'next/link';
import { Form } from 'antd';

class Dashboard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const accountLinks = [
            {
                text: 'Products',
                url: '/hobbiyst/products',
                // icon: 'icon-alarm-ringing',
                active: true,
            },
            {
                text: 'Dashboard',
                url: '/hobbiyst/dashboard',
                // icon: 'icon-user',
            },
            {
                text: 'Analytics',
                url: '/hobbiyst/analytics',
                // icon: 'icon-user',
            },
            {
                text: 'Discount',
                url: '/hobbiyst/discount',
                // icon: 'icon-user',
            },
            {
                text: 'Coupes',
                url: '/hobbiyst/coupes',
                // icon: 'icon-user',
            },
            {
                text: 'Shop',
                url: '/hobbiyst/shop',
                // icon: 'icon-papers',
            },
        ];
        return (
            <section className="ps-my-product ps-page--account">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="ps-section__left">
                                <aside className="ps-widget--account-dashboard">
                                    <div className="ps-widget__content">
                                        <ul>
                                            {accountLinks.map(link => (
                                                <li
                                                    key={link.text}
                                                    className={
                                                        link.active
                                                            ? 'active'
                                                            : ''
                                                    }>
                                                    <Link href={link.url}>
                                                        <a>
                                                            <i
                                                                className={
                                                                    link.icon
                                                                }></i>
                                                            {link.text}
                                                        </a>
                                                    </Link>
                                                </li>
                                            ))}

                                        </ul>
                                    </div>
                                </aside>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="ps-page__content">
                                <Form
                                    className="ps-form--account-setting"
                                    onSubmit={this.handleLoginSubmit}>
                                    <div className="ps-form__header">
                                        <h3>Dashboard</h3>
                                    </div>
                                </Form>
                                <div className={"col-lg-12"}>
                                    <div className={'text-center'}>
                                        <h3>Welcome</h3>
                                        <h2>Michael</h2>
                                    </div>
                                    <img src={'/static/img/hobbiyst/user-avatar-png-7.png'} height={100}/>

                                    <div className={'d-flex justify-content-between mt-5 pt-5'}>
                                        <h3>4565 Visiters </h3>
                                        <h3>US1430 Total Purchases</h3>
                                    </div>
                                    <h3 className={'mt-5'}>Purchases by Product</h3>
                                    <div className={'d-flex justify-content-between mt-5 pt-5'}>
                                        <h3>Product </h3>
                                        <h3>Qty</h3>
                                        <h3>Amount</h3>
                                    </div>
                                    <hr/>
                                    <div className={'d-flex justify-content-between'}>
                                        <p>Product Name </p>
                                        <p>3</p>
                                        <p>US 159</p>
                                    </div>
                                    <div className={'d-flex justify-content-between'}>
                                        <p>Product Name </p>
                                        <p>3</p>
                                        <p>US 159</p>
                                    </div>
                                    <div className={'d-flex justify-content-between'}>
                                        <p>Product Name </p>
                                        <p>3</p>
                                        <p>US 159</p>
                                    </div>
                                    <div className={'d-flex justify-content-between'}>
                                        <p>Product Name </p>
                                        <p>3</p>
                                        <p>US 159</p>
                                    </div>
                                    <div className={'d-flex justify-content-between'}>
                                        <p>Product Name </p>
                                        <p>3</p>
                                        <p>US 159</p>
                                    </div>
                                    <div className={'d-flex justify-content-between'}>
                                        <p>Product Name </p>
                                        <p>3</p>
                                        <p>US 159</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Dashboard;
