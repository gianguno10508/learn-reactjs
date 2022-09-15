import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../../../../styles/account_styles.css';
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import Details_Orders from './Tabs/Details_Orders';
import Details_Orders_Account from './Tabs/Details_Orders_Account';
// import "react-tabs/style/react-tabs.css";
function DetailsAccount(props) {
    return (
        <div>
            <div className='details-account'>
                <h2 className='title'>My Account</h2>
                <div className='container'>
                    <div className='row'>

                        {/* <nav className="woocommerce-MyAccount-navigation">
                                <ul>
                                    <li className="woocommerce-MyAccount-navigation-link woocommerce-MyAccount-navigation-link--dashboard is-active">
                                        <a href="https://wpbingosite.com/wordpress/akola/my-account/">Dashboard</a>
                                    </li>
                                    <li className="woocommerce-MyAccount-navigation-link woocommerce-MyAccount-navigation-link--orders">
                                        <a href="https://wpbingosite.com/wordpress/akola/my-account/orders/">Orders</a>
                                    </li>
                                    <li className="woocommerce-MyAccount-navigation-link woocommerce-MyAccount-navigation-link--edit-account">
                                        <a href="https://wpbingosite.com/wordpress/akola/my-account/edit-account/">Account details</a>
                                    </li>
                                    <li className="woocommerce-MyAccount-navigation-link woocommerce-MyAccount-navigation-link--customer-logout">
                                        <a href="https://wpbingosite.com/wordpress/akola/my-account/customer-logout/?_wpnonce=8ad778c6fb">Logout</a>
                                    </li>
                                </ul>
                            </nav> */}
                        <Tabs>
                            <div className='col-left col-md-4'>
                                <TabList>
                                    <Tab>Dashboard</Tab>
                                    <Tab>Orders</Tab>
                                    <Tab>Account details</Tab>
                                </TabList>
                            </div>
                            <TabPanel>
                                <div className='col-left col-md-8'>
                                    <p className='content-dashboard'>Hello <strong>{props.account.data.display_name}</strong>(not <strong>{props.account.data.display_name}</strong>? <Link to='/'>Log out</Link>)</p>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <Details_Orders />
                            </TabPanel>
                            <TabPanel>
                                <Details_Orders_Account />
                            </TabPanel>
                        </Tabs>

                    </div>
                </div>
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
export default connect(mapStateToProps, mapDispatchToProps)(DetailsAccount);