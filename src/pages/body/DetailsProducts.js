import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Markup } from 'interweave';
import '../../styles/details_product.css';
import axios from "axios";
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import { actSelectProduct } from '../../actions';
function DetailsProducts(props) {
    const [productDetail, setProductDetail] = useState([]);
    const [productCate, setProductCate] = useState([]);
    const [quantity, setQuantity] = useState(0);
    const [checkLog, setcheckLog] = useState(null);
    const [images, setImages] = useState([]);
    useEffect(() => {
        if (props.id_product != null && Array.isArray(props.products) && props.products != null) {
            var array_product = [];
            var array_product_cate = [];
            var i = 0;
            var id_cate = 0;
            props.products.forEach(element => {
                if (props.id_product == element.id) {
                    array_product = [{
                        'id_product': element.id,
                        'name': element.name,
                        'price': element.price,
                        'regular_price': element.regular_price,
                        'short_description': element.short_description,
                        'description': element.description,
                        'img': element.images
                    }]
                    id_cate = element.categories[0].id;
                    console.log(element.images);
                    if(element.images.length>2){
                        setImages([
                            {
                                original: element.images[0].src,
                                thumbnail: element.images[0].src,
                            },
                            {
                                original: element.images[1].src,
                                thumbnail: element.images[1].src,
                            },
                            {
                                original: element.images[2].src,
                                thumbnail: element.images[2].src,
                            },
                        ]);
                    }else{
                        setImages([
                            {
                                original: element.images[0].src,
                                thumbnail: element.images[0].src,
                            }
                        ]);
                    }
                }
            });
            setProductDetail(array_product);
            props.products.forEach(element => {
                if (id_cate == element.categories[0].id) {
                    array_product_cate[i] = {
                        'id_product': element.id,
                        'name': element.name,
                        'price': element.price,
                        'regular_price': element.regular_price,
                        'img': element.images[0].src
                    }
                    i++;
                }
            });
            setProductCate(array_product_cate);
        }
    }, [props.id_product, props.products]);
    var array_cart = [];
    const url = "http://reactjswordpress.com:828/wp-json/wp/v2/add/cart/";
    const handleSubmit = (event, index) => {
        event.preventDefault();
        setcheckLog(null);
        if (Array.isArray(props.account) && props.account.length <= 0) {
            setcheckLog('Bạn cần đăng nhập!!');
        } else {
            array_cart[props.account.ID] = {
                'id_product': productDetail[0].id_product,
                'img': productDetail[0].img,
                'name': productDetail[0].name,
                'quantity': quantity,
                'price': productDetail[0].price,
                'total_price': quantity * productDetail[0].price
            }
            try {
                axios.post(url, null, {
                    params: {
                        id_user: props.account.ID,
                        id_product: productDetail[0].id_product,
                        name: productDetail[0].name,
                        price: quantity * productDetail[0].price,
                        quantity: quantity,
                        img: productDetail[0].img[0].src
                    }
                }).then(function (response) {
                    if (response.data) {
                        console.log(response.data);
                    }
                }, function (error) {
                    console.log(error);
                })
            } catch (error) {
                console.log(error);
            }
        }
    };
    const handleItemClick = (event, index) => {
        props.chooseDishProduct(productCate[index].id_product);
    };
    return (
        <section className='details-product'>
            <div className='content-session'>
                <div className='container'>
                    {Array.isArray(productDetail) && productDetail[0] != null ?
                        <div className='content'>
                            <h2 className='title'>{productDetail[0].name}</h2>
                            <div className='row'>
                                <div className='col-md-6 col-left'>
                                    <div className="img-product-details">
                                        <div>
                                            <ImageGallery items={images} />;
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-6 col-right'>
                                    <h1 className='name'>{productDetail[0].name}</h1>
                                    <div className='price'><span>{productDetail[0].price + "đ"}</span></div>
                                    <div className='short-descript'><p><Markup content={productDetail[0].short_description} /></p></div>
                                    {checkLog ?
                                        <p className="status error">
                                            <ul className="woocommerce-error" role="alert">
                                                <li>{checkLog}</li>
                                            </ul>
                                        </p>
                                        : null
                                    }
                                    <form className="cart" onSubmit={handleSubmit}>
                                        <div className="quantity-button">
                                            <div className="quantity">
                                                <button type="button" className="minus">-</button>
                                                <input type="number" className="input-text qty text" onChange={event => setQuantity(event.target.value)} />
                                                <button type="button" className="plus">+</button>
                                            </div>
                                            <button type="submit" className="single_add_to_cart_button button alt">Add to cart</button>
                                        </div>
                                        <button class="button quick-buy">Buy Now</button>
                                    </form>
                                </div>
                            </div>
                            <div className='description'>
                                <p><Markup content={productDetail[0].description} /></p>
                            </div>
                        </div>
                        : null}
                    <div className='relate'>
                        <h2 className='title-relate'>Related Products</h2>
                        <div className='row'>
                            {Array.isArray(productCate) && productCate[0] != null ?
                                productCate.map((d, index) => (
                                    <div
                                        className='col-md-3'
                                        key={index}
                                        onClick={(event) => handleItemClick(event, index)}
                                    >
                                        <div className="img-new-product">
                                            <img src={d.img} />
                                        </div>
                                        <div className="content-new-product">
                                            <h4>{d.name}</h4>
                                            <h4>{d.price + "đ"}</h4>
                                        </div>
                                    </div>
                                )) : null
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        chooseDishProduct: (data) => {
            dispatch(actSelectProduct(data))
        },
    };
};
const mapStateToProps = (state, ownProps) => {
    return {
        id_product: state.dish_search,
        products: state.product,
        categories: state.category,
        account: state.account
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailsProducts);