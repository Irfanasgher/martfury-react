import React, { Component } from 'react';
import Link from 'next/link';
import { Form } from 'antd';
import Products from './products';
class Info extends Component {
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
                                <div className={"text-center col-lg-12"}>
                                    <h3>Welcome</h3>
                                    <h2>Michael</h2>
                                    <img src={'/static/img/hobbiyst/user-avatar-png-7.png'} height={100}/>
                                    <h3>50 Products</h3>
                                    <div className={'d-flex justify-content-center'}>
                                        <button type={'submit'}>Add Category</button>
                                        <button type={'submit'} className={'ml-4'}>Add Products</button>
                                    </div>
                                </div>
                            </div>
                            <Products />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Info;
