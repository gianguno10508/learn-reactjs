import { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from "axios";
import { useEffect } from 'react';
import './details_orders_account.css';
function Details_Orders_Account(props) {
    const [ordersAccount, setOrdersAccount] = useState([]);
    const url = 'http://reactjswordpress.com:828/woo_api/get_customer_id';
    axios.get(url, {
        params: {
            id_customer: props.account['ID'],
        }
    }, null).then(function (response) {
        setOrdersAccount(response.data);
    }, function (error) {
        console.log(error);
    })
    return (
        <div className='col-md-8'>
            <div className="woocommerce-MyAccount-content">
                <form className="woocommerce-EditAccountForm edit-account" action="" method="post">

                <div className='info'>
                    <p className="woocommerce-form-row woocommerce-form-row--first form-row form-row-first">
                        <label htmlFor="account_first_name">First name&nbsp;<span className="required">*</span></label>
                        <input type="text" className="woocommerce-Input woocommerce-Input--text input-text" name="account_first_name" id="account_first_name" autocomplete="given-name" value=""/>
                    </p>
                    <p className="woocommerce-form-row woocommerce-form-row--last form-row form-row-last">
                        <label htmlFor="account_last_name">Last name&nbsp;<span className="required">*</span></label>
                        <input type="text" className="woocommerce-Input woocommerce-Input--text input-text" name="account_last_name" id="account_last_name" autocomplete="family-name" value=""/>
                    </p>
                </div>
                <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                    <label htmlFor="account_andress">Andress&nbsp;<span className="required">*</span></label>
                    <input type="text" className="woocommerce-Input woocommerce-Input--text input-text" name="account_andress" id="account_andress" value="BG"/>
                </p>
                <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                    <label htmlFor="account_display_name">Display name&nbsp;<span className="required">*</span></label>
                    <input type="text" className="woocommerce-Input woocommerce-Input--text input-text" name="account_display_name" id="account_display_name" value="giang12345"/> <span><em>This will be how your name will be displayed in the account section and in reviews</em></span>
                </p>
                <div className="clear"></div>

                <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                    <label htmlFor="account_email">Email address&nbsp;<span className="required">*</span></label>
                    <input type="email" className="woocommerce-Input woocommerce-Input--email input-text" name="account_email" id="account_email" autocomplete="email" value="shanks30508@gmail.com"/>
                </p>

                <fieldset>
                    <legend>Password change</legend>

                    <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                        <label htmlFor="password_current">Current password (leave blank to leave unchanged)</label>
                        <span className="password-input"><input type="password" className="woocommerce-Input woocommerce-Input--password input-text" name="password_current" id="password_current"/><span className="show-password-input"></span></span>
                    </p>
                    <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                        <label htmlFor="password_1">New password (leave blank to leave unchanged)</label>
                        <span className="password-input"><input type="password" className="woocommerce-Input woocommerce-Input--password input-text" name="password_1" id="password_1"/><span className="show-password-input"></span></span>
                    </p>
                </fieldset>
                <button type="submit" class="woocommerce-Button button" name="save_account_details" value="Save changes">Save changes</button>
                </form>
            </div>
        </div>
    )
}
const mapDispatchToProps = (dispatch) => {
    return {
    };
};
const mapStateToProps = (state, ownProps) => {
    console.log(state);
    return {
        account: state.account
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Details_Orders_Account);