import { Link } from 'react-router-dom';
import layout_session_1_left from '../../../img/layout/layer-25.png';
import image_session_1_below from '../../../img/layout/img-19.jpg';
import image_session_1_above from '../../../img/layout/img-20.jpg'
function Session_1() {
    return (
        <section className='session-home-1'>
            <div className='content-session'>
                <div className='container'>
                    <div className='content'>
                        <div className='row'>
                            <div className='col-md-6'>
                                <div className='img-content-session-1'>
                                    <div className='img-content-session-1-above'>
                                        <img src={image_session_1_above} />
                                    </div>
                                    <div className='img-content-session-1-below'>
                                        <img src={image_session_1_below} />
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className='first-title'>
                                    <h2>We strive to provide you with
                                        <br />
                                        the highest quality healthy
                                        <br />
                                        products</h2>
                                </div>
                                <div className='second-title'>
                                    <h2>Delicious.</h2>
                                </div>
                                <div className='first-para'>
                                    Stimulates vast a real proven works discount secure care. Market invigorate a awesome handcrafted bigger comes newer recommended lifetime.
                                </div>
                                <div className='second-para'>
                                    Stimulates vast a real proven works discount secure care. Market invigorate a awesome handcrafted bigger comes newer recommended lifetime.Evulates vast a real proven works discount secure care.
                                </div>
                                <div className='button-about'>
                                    <Link to="/about"><span>About Us</span><span><i class="fa-solid fa-arrow-right-long"></i></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='img-session-bg'>
                    <div className='left'>
                        <img src={layout_session_1_left} />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Session_1;