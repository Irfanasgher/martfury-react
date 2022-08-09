import React, { Component } from 'react';
import Slider from 'react-slick';
import ProductHorizontal from '../../../elements/products/ProductHorizontal';
import ProductDealHot from '../../../elements/products/ProductDealHot';
import { carouselSingle } from '../../../../utilities/carousel-helpers';
import { connect } from 'react-redux';
import { getColletionBySlug } from '../../../../utilities/product-helper';

class AutopartDealHot extends Component {
    constructor(props) {
        super(props);
    }

    handleCarouselPrev = e => {
        e.preventDefault();
        this.slider.slickPrev();
    };

    handleCarouselNext = e => {
        e.preventDefault();
        this.slider.slickNext();
    };

    render() {
        const { collections, collectionSlug } = this.props;
        const products = getColletionBySlug(collections, collectionSlug);
        return (
            <div className="ps-deal-hot">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-9 col-lg-12 col-md-12 col-sm-12 col-12 ">
                            <div
                                className="ps-block--deal-hot"
                                data-mh="dealhot">
                                <div className="ps-block__header">
                                    <h3>Deal hot today</h3>
                                    <div className="ps-block__navigation">
                                        <a
                                            className="ps-carousel__prev"
                                            href="#"
                                            onClick={this.handleCarouselPrev}>
                                            <i className="icon-chevron-left"></i>
                                        </a>
                                        <a
                                            className="ps-carousel__next"
                                            href=".ps-carousel--deal-hot"
                                            onClick={this.handleCarouselNext}>
                                            <i className="icon-chevron-right"></i>
                                        </a>
                                    </div>
                                </div>
                                <div className="ps-product__content">
                                    <Slider
                                        ref={slider => (this.slider = slider)}
                                        {...carouselSingle}
                                        className="ps-carousel">
                                        {products.map((product, index) => {
                                            if (index < 2) {
                                                return (
                                                    <ProductDealHot
                                                        product={product}
                                                        key={product.id}
                                                    />
                                                );
                                            }
                                        })}
                                    </Slider>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-12 col-md-12 col-sm-12 col-12 ">
                            <aside
                                className="widget widget_best-sale"
                                data-mh="dealhot">
                                <h3 className="widget-title">
                                    Top 20 Best Seller
                                </h3>
                                <div className="widget__content">
                                    <Slider {...carouselSingle}>
                                        <div
                                            className="ps-product-group"
                                            key="group-1">
                                            {products.map((product, index) => {
                                                if (index < 4) {
                                                    return (
                                                        <ProductHorizontal
                                                            product={product}
                                                            key={product.id}
                                                        />
                                                    );
                                                }
                                            })}
                                        </div>
                                    </Slider>
                                </div>
                            </aside>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(state => state.collection)(AutopartDealHot);
