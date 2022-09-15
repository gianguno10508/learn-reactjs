import { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../../../../styles/account_styles.css';
import axios from "axios";
import { actAccount } from '../../../../actions';
function Login(props) {
    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');
    const [errorLog, setErrorLog] = useState(null);
    const [accountId, setAccountId] = useState(null);
    const url = "http://reactjswordpress.com:828/wp-json/wp/v2/user/login/";
    const handleSubmit = (event, index) => {
        event.preventDefault();
        setErrorLog(null);
        try {
            axios.post(url,null,{
                params:{
                    username: user,
                    password: pass
                }}).then(function (response) {
                    if (response.data.ID) {
                        setAccountId(response.data.ID);
                        props.setAccount(response.data);
                    } else {
                        setErrorLog('Wrong username or password.');
                    }
                }, function (error) {
                    setErrorLog('Wrong username or password.');
                })
        } catch (error) {
            setErrorLog('Wrong username or password.');
        }
    };
    return (
        <div className="box-form-login">
            <div className="box-content">
                <form id="login_ajax" onSubmit={handleSubmit} class="login">
                    {errorLog ?
                        <p class="status error">
                            <ul class="woocommerce-error" role="alert">
                                <li>{errorLog}</li>
                            </ul>
                        </p>
                        : null
                    }
                    {accountId ?
                        <p class="status done">
                            <ul class="woocommerce-done" role="alert">
                                <li>Login sucssess</li>
                            </ul>
                        </p>
                        : null
                    }
                    <h2>Sign in</h2>
                    <div class="content">
                            <div class="username">
                                <input type="text" required="required" class="input-text" name="username" id="username" placeholder="Username or Email*" onChange={event => setUser(event.target.value)}/>
                            </div>
                            <div class="password">
                                <input class="input-text" required="required" type="password" name="password" id="password" placeholder="Password*" onChange={event => setPass(event.target.value)}/>
                            </div>
                            <div class="rememberme-lost">
                                <div class="rememberme">
                                    <input name="rememberme" type="checkbox" id="rememberme" value="forever" />
                                    <label htmlFor="rememberme" class="inline">Remember me</label>
                                </div>
                                <div class="lost_password">
                                    <Link to='/'>Lost your password?</Link>
                                </div>
                            </div>
                            <div class="button-login">
                                <input type="submit" class="button" name="login" value="Login" />
                            </div>
                            <Link to="/register">
                                <div class="button-next-reregister">
                                    Create An Account
                                </div>
                            </Link>
                    </div>
                </form>
            </div>
        </div>
    )
}
const mapDispatchToProps = (dispatch) => {
    return {
        setAccount: (data) => {
            dispatch(actAccount(data))
        },
    };
};
const mapStateToProps = (state, ownProps) => {
    console.log(state);
    return {
       
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);