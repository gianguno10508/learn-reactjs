import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { useEffect, useState } from 'react';
import axios from "axios";
import '../../styles/details_cart.css';
function Checkout(props) {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [address, setAdress] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const url = "http://localhost:850/create_order";
    const handleSubmit = (event, index) => {
        event.preventDefault();
        try {
            axios.post(url,null,{
                params:{
                    first_name: firstName,
                    last_name: lastName,
                    address_1: address,
                    email: email,
                    phone: phone,
                    product_id: props.cart.id_product,
                    quantity: props.cart.quantity,
                    customer_id: props.cart.id_user
                }}).then(function (response) {
                    console.log(response.data);
                }, function (error) {
                    console.log(error);
                })
        } catch (error) {
           console.log(error);
        }        
    };
    return (
        <form id='form_checkout' onSubmit={handleSubmit} class="login">
            <label htmlFor='first_name'>Họ*:
                <input type='text' required="required"  name='first_name' id='first_name' onChange={event => setFirstName(event.target.value)}/>
            </label>
            <label htmlFor='last_name'>Tên*:
                <input type='text' required="required"  name='last_name' id='last_name' onChange={event => setLastName(event.target.value)}/>
            </label>
            <label htmlFor='dia_chi'>Địa chỉ*:
                <input type='text' required="required"  name='dia_chi' id='dia_chi' onChange={event => setAdress(event.target.value)}/>
            </label>
            <label htmlFor='email'>Email*:
                <input type='email' required="required"  name='email' id='email' onChange={event => setEmail(event.target.value)} />
            </label>
            <label htmlFor='sdt'>Số điện thoại*:
                <input type='number' required="required"  name='sdt' id='sdt' onChange={event => setPhone(event.target.value)} />
            </label>
            <input type='submit' name='dathang' value='Đặt hàng'/>
            <table>
                <thead>
                    <th>STT</th>
                    <th>Tên sản phẩm</th>
                    <th>Số lượng</th>
                    <th>Giá</th>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>{props.cart.name}</td>
                        <td>{props.cart.quantity}</td>
                        <td>{props.cart.price}</td>
                    </tr>
                </tbody>
            </table>
        </form>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        // chooseDishCate: (data) => {
        //     dispatch(actSelectCategory(data));
        // }
    };
};
const mapStateToProps = (state, ownProps) => {
    console.log(state);
    return {
        cart: state.cart
    };
};
  
export default connect(mapStateToProps, mapDispatchToProps)(Checkout);  