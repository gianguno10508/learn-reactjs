import { Link } from 'react-router-dom';
import { useState } from 'react';
import { connect } from 'react-redux';
import axios from "axios";
import '../../../../styles/account_styles.css';
function Register() {
    const [email, setEmail] = useState(null);
    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    const [andress, setAndress] = useState(null);
    const [phone, setPhone] = useState(null);
    const [errorLog, setErrorLog] = useState(null);
    const [done, setDone] = useState(null);
    const url = "http://reactjswordpress.com:828/woo_api/create_customer";
    const handleSubmit = (event, index) => {
        event.preventDefault();
        setErrorLog(null);
        setDone(null);
        try {
            axios.post(url, null, {
                params: {
                    email: email,
                    first_name: firstName,
                    last_name: lastName,
                    username: username,
                    password: password,
                    address_1: andress,
                    phone: phone
                }
            }).then(function (response) {
                if(response.data == ''){
                    setDone(1);
                }else{
                    setErrorLog('Username or Email has registered.');
                }
            }, function (error) {
                setErrorLog('Username or Email has registered.');
            })
        } catch (error) {
            setErrorLog('Username or Email has registered.');
        }
    };
    console.log(done);
    return (
        <div className="box-form-register">
            {/* <div className="box-content">
                <h2 className='title'>Register</h2>
                <form id="login_ajax" onSubmit={handleSubmit} class="register">
                    <div class="content row">
                        <div className='top'>
                            <div class="email col-md-2">
                                <label htmlFor='email'>
                                    <p>Email*</p>
                                    <input type="email" required="required" class="input-text" name="email" id="email" placeholder="Email*" onChange={event => setEmail(event.target.value)} />
                                </label>
                            </div>
                            <div class="username_regis col-md-2">
                                <label htmlFor='username'>
                                    <p>Username*</p>
                                    <input type="text" required="required" class="input-text" name="username_regis" id="username_regis" placeholder="Username*" onChange={event => setUsername(event.target.value)} />
                                </label>
                            </div>
                            <div class="password col-md-2">
                                <label htmlFor='password'>
                                    <p>Password*</p>
                                    <input type="password" required="required" class="input-text" name="password" id="password" placeholder="Password*" onChange={event => setPassword(event.target.value)} />
                                </label>
                            </div>
                        </div>
                        <div className='bottom'>
                            <div class="first_name col-md-2">
                                <label htmlFor='first_name'>
                                    <p>First name*</p>
                                    <input type="text" required="required" class="input-text" name="first_name" id="first_name" placeholder="First name*" onChange={event => setFirstName(event.target.value)} />
                                </label>
                            </div>
                            <div class="last_name col-md-2">
                                <label htmlFor='last_name'>
                                    <p>Last name*</p>
                                    <input type="text" required="required" class="input-text" name="last_name" id="last_name" placeholder="Last name*" onChange={event => setLastName(event.target.value)} />
                                </label>
                            </div>
                            <div class="andress col-md-2">
                                <label htmlFor='andress'>
                                    <p>Andress*</p>
                                    <input type="text" required="required" class="input-text" name="andress" id="andress" placeholder="Andress*" onChange={event => setAndress(event.target.value)} />
                                </label>
                            </div>
                            <div class="phone col-md-2">
                                <label htmlFor='phone'>
                                    <p>Phone*</p>
                                    <input type="number" required="required" class="input-text" name="phone" id="phone" placeholder="Phone*" onChange={event => setPhone(event.target.value)} />
                                </label>
                            </div>       
                        </div>
                        <div class="button-register">
                            <input type="submit" class="button" name="register" value="Register" />
                        </div>
                    </div>
                </form>
            </div> */}
            <div>
                <div className="container">

                    <form className="well form-horizontal box-form-register" action=" " method="post" onSubmit={handleSubmit} id="contact_form">
                        {errorLog ?
                            <p class="status error">
                                <ul class="woocommerce-error" role="alert">
                                    <li>{errorLog}</li>
                                </ul>
                            </p>
                            : null
                        }
                        {done == 1 ?
                            <p class="status done">
                                <ul class="woocommerce-done" role="alert">
                                    <li>Create sucssess!!!</li>
                                </ul>
                            </p>
                            : null
                        }
                        <fieldset>
                            <legend><center><h2><b>Registration Form</b></h2></center></legend>
                                <div className="form-group">
                                    <label className="col-md-4 control-label">First Name*</label>
                                    <div className="col-md-4 inputGroupContainer">
                                        <div className="input-group">
                                            <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                                            <input name="first_name" placeholder="First Name" className="form-control" type="text" onChange={event => setFirstName(event.target.value)}/>
                                        </div>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label className="col-md-4 control-label" >Last Name*</label>
                                    <div className="col-md-4 inputGroupContainer">
                                        <div className="input-group">
                                            <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                                            <input name="last_name" placeholder="Last Name" className="form-control" type="text" onChange={event => setLastName(event.target.value)}/>
                                        </div>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label className="col-md-4 control-label">Username*</label>
                                    <div className="col-md-4 inputGroupContainer">
                                        <div className="input-group">
                                            <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                                            <input name="user_name" placeholder="Username" className="form-control" type="text" onChange={event => setUsername(event.target.value)}/>
                                        </div>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label className="col-md-4 control-label" >Password*</label>
                                    <div className="col-md-4 inputGroupContainer">
                                        <div className="input-group">
                                            <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                                            <input name="user_password" placeholder="Password" className="form-control" type="password" onChange={event => setPassword(event.target.value)} />
                                        </div>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label className="col-md-4 control-label" >Andress*</label>
                                    <div className="col-md-4 inputGroupContainer">
                                        <div className="input-group">
                                            <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                                            <input name="confirm_password" placeholder="Andress" className="form-control" type="text" onChange={event => setAndress(event.target.value)}/>
                                        </div>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label className="col-md-4 control-label">E-Mail*</label>
                                    <div className="col-md-4 inputGroupContainer">
                                        <div className="input-group">
                                            <span className="input-group-addon"><i className="glyphicon glyphicon-envelope"></i></span>
                                            <input name="email" placeholder="E-Mail Address" className="form-control" type="text" onChange={event => setEmail(event.target.value)}/>
                                        </div>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label className="col-md-4 control-label">Contact No.*</label>
                                    <div className="col-md-4 inputGroupContainer">
                                        <div className="input-group">
                                            <span className="input-group-addon"><i className="glyphicon glyphicon-earphone"></i></span>
                                            <input name="contact_no" placeholder="(639)" className="form-control" type="number" onChange={event => setPhone(event.target.value)}/>
                                        </div>
                                    </div>
                                </div>

                                <div class="button-next-reregister">
                                    <input type="submit" class="button" name="register" value="Create An Account" />
                                </div>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Register;