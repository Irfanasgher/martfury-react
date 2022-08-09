import React, { Component } from 'react';
import Link from 'next/link';
import { Form } from 'antd';

class AddProduct extends Component {
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
                                        <h3>Add Product</h3>
                                    </div>
                                </Form>
                                <div className={"col-lg-12"}>
                                    <h3>Add Product</h3>

                                    <div className={'row'}>
                                        <div className={'col-lg-6'}>
                                            <div className={'form-group'}>
                                                <label>Select Category *</label><br/>
                                                <select id="pet-select" style={{padding: "5px",width: "200px"}}>
                                                    <option value="">Clothes</option>
                                                    <option value="clothes">Clothes</option>
                                                    <option value="clothes">Clothes</option>
                                                    <option value="clothes">Clothes</option>
                                                    <option value="clothes">Clothes</option>
                                                    <option value="clothes">Clothes</option>
                                                    <option value="clothes">Clothes</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className={'col-lg-6'}>
                                            <div className={'form-group'}>
                                                <label>Select SubCategory *</label><br/>
                                                <select id="pet-select" style={{padding: "5px",width: "200px"}}>
                                                    <option value="">Jersey</option>
                                                    <option value="clothes">Clothes</option>
                                                    <option value="clothes">Clothes</option>
                                                    <option value="clothes">Clothes</option>
                                                    <option value="clothes">Clothes</option>
                                                    <option value="clothes">Clothes</option>
                                                    <option value="clothes">Clothes</option>
                                                </select>
                                            </div>
                                        </div>



                                    </div>
                                    <div className={'row'}>
                                        <div className={'col-lg-6'}>
                                            <label>Upload Image</label><br/>
                                            <input type={'file'} />
                                        </div>
                                        <div className={'col-lg-6'}>
                                            <label>Price in US (S)</label><br/>
                                            <input type={'text'} />
                                        </div>
                                    </div>

                                    <div className={'form-group mt-4'}>
                                        <label>Summary</label><br/>
                                        <textarea rows={6} cols={100}></textarea>
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

export default AddProduct;
