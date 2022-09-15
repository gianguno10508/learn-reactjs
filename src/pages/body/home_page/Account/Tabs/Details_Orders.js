import { connect } from 'react-redux';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './details_orders.css';
function DetailsOrders(props) {
    const [orders, setOrders] = useState([]);
    const [detailsOrders, setDetailsOrders] = useState([]);
    const url = 'http://localhost:828/wp-json/wp/v2/get/orders/';
    useEffect(() => {
        const fetchDataCategories = async () => {
            try {
                axios.get(url, {
                    params: {
                        customer_id: props.account['ID'],
                    }
                }, null).then(function (response) {
                    setOrders(response.data);
                    //console.log(response.data);
                    // (response.data).map((d,i)=>{
                    //     //console.log(d.date);
                    //     console.log('ds');
                    // })
                }, function (error) {
                    console.log(error);
                })
            } catch (error) {
                console.log(error);
            }
        };
        fetchDataCategories();
    }, []);
    const handleItemClick = (event, index) => {
        setDetailsOrders(orders[index]);
    };
    console.log(detailsOrders);
    return (
        <div className='col-left col-md-8'>
            <table className="shop_table shop_table_responsive cart woocommerce-cart-form__contents" cellspacing="0">
                <thead>
                    <tr>
                        <th className="stt">STT</th>
                        <th className="product-price">Price</th>
                        <th className="product-date">Date</th>
                        <th className="action_details">Details</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((items, index) => (
                        <tr className="woocommerce-cart-form__cart-item cart_item">
                            <td className="product-stt">
                                <p>{index + 1}</p>
                            </td>
                            <td className="product-price">
                                <span className="woocommerce-Price-amount amount"><bdi>{items.value}<span className="woocommerce-Price-currencySymbol">đ</span></bdi></span>
                            </td>
                            <td className="product-date">
                                <span className="woocommerce-Price-amount amount"><bdi>{items.date}</bdi></span>
                            </td>
                            <td className="action_details">
                                <Link to='/detailaccount' onClick={(event) => handleItemClick(event, index)}>View</Link>
                            </td>
                        </tr>
                    ))}

                </tbody>
            </table>
            {detailsOrders['id'] ?
                <div className='row details-orders'>
                    <div className='col-md-4'>
                        <h2 className='info'>Customer Infomation</h2>
                        <div className='content-bill'>
                            <div className='name'>
                                <p><span>Name: </span>{detailsOrders['billing']['first_name']} {detailsOrders['billing']['last_name']}</p>
                            </div>
                            <div className='andress'>
                                <p><span>Andress: </span>{detailsOrders['billing']['address_1']}</p>
                            </div>
                            <div className='email'>
                                <p><span>Email: </span>{detailsOrders['billing']['email']}</p>
                            </div>
                            <div className='phone'>
                                <p><span>Phone: </span>{detailsOrders['billing']['phone']}</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-8'>
                        <h2 className='total'>Details</h2>
                        <table className="shop_table shop_table_responsive cart woocommerce-cart-form__contents" cellspacing="0">
                            <thead>
                                <tr>
                                    <th className="stt">STT</th>
                                    <th className="date-details">Date</th>
                                    <th className="product-details">Product</th>
                                    <th className="quantity-details">Quantity</th>
                                    <th className="total-details">Total</th>
                                </tr>
                            </thead>
                            <tbody>

                                <tr className="woocommerce-cart-form__cart-item cart_item">
                                    <td>
                                        <span><bdi>1</bdi></span>
                                    </td>
                                    <td className="product-details">
                                        <span><bdi>{detailsOrders['name']}</bdi></span>
                                    </td>
                                    <td className="quantity-details">
                                        <span><bdi>{detailsOrders['quantity']}</bdi></span>
                                    </td>
                                    <td className="date-details">
                                        <p>{detailsOrders['date']}</p>
                                    </td>
                                    <td className="total-details">
                                        <span className="woocommerce-Price-amount amount"><bdi>{detailsOrders['total']}<span className="woocommerce-Price-currencySymbol">đ</span></bdi></span>
                                    </td>
                                </tr>

                            </tbody>
                        </table>
                        <h3 className='total_bill'>Total bill: {detailsOrders['value']}<span className="woocommerce-Price-currencySymbol">đ</span></h3>
                    </div>
                </div>
                : null}
        </div>
    )
}
const mapDispatchToProps = (dispatch) => {
    return {
    };
};
const mapStateToProps = (state, ownProps) => {
    //console.log(state);
    return {
        account: state.account
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(DetailsOrders);