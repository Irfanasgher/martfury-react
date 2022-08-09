import React, { Component } from 'react';
import Link from 'next/link';
import { Form } from 'antd';
class Shop extends Component {
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
                                        <h3>Add Shop</h3>
                                    </div>
                                </Form>
                                <div className={"col-lg-12"}>
                                    <h3>Add Shop</h3>
                                    <div className={'form-group'}>
                                        <label>Name *</label><br/>
                                        <input type={'text'}/>
                                    </div>
                                    <div className={'form-group'}>
                                        <label>Availability</label><br/>
                                        <input type="checkbox" /> <label>Yes</label><br/>
                                        <input type="checkbox" /> <label>No</label>

                                    </div>

                                    <div className={'d-flex justify-content-center'}>
                                        <button type={'submit'}>Submit</button>
                                    </div>
                                </div>
                            </div>
                            {/*<Products />*/}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Shop;
