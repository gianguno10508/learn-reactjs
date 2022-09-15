import Slider from 'react-slick';
import { useEffect, useState } from 'react';
import image_session_2 from '../../../img/layout/layer-24.png'
import { connect } from 'react-redux';
import { actProducts, actSelectProduct } from '../../../actions';
import Woocommerce from '../../../functions/Woocommerce';
import { Link } from 'react-router-dom';

function Session_2(props) {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        autoplay: false,
        autoplaySpeed: 3000,
    };
    const [product, setProducts] = useState([]);
    useEffect(() => {
        Woocommerce.getProducts().then(function (response) {
            setProducts(response.data);
            props.setStateProduct(response.data);
        }
        );
    }, []);
    const handleItemClick = (event, index) => {
        props.chooseDishProduct(product[index].id);
    };
    return (
        <section className='session-home-2'>
            <div className='content-session'>
                <div className='img-session-bg'>
                    <img src={image_session_2} />
                </div>
                <div className='container'>
                    <div className='content'>
                        <h2 className='title-session-2'>New products</h2>
                        <div className='row'>
                            <Slider {...settings}>
                                {product.map((d, index) => (
                                    <div
                                        onClick={(event) => handleItemClick(event, index)}
                                        className='col-new-product'
                                        key={d.id}
                                    >
                                        <Link to='detailproduct'>
                                            <div className="img-new-product">
                                                <img src={d.images[0].src} />
                                            </div>
                                            <div className="content-new-product">
                                                <h4>{d.name}</h4>
                                                <h4>{d.price + " đ"}</h4>
                                            </div>
                                        </Link>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
const mapDispatchToProps = (dispatch) => {
    return {
        chooseDishProduct: (data) => {
            dispatch(actSelectProduct(data))
        },
        setStateProduct: (data) => {
            dispatch(actProducts(data));
        },
    };
};
const mapStateToProps = (state, ownProps) => {
    return {
        products: state.product,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Session_2);