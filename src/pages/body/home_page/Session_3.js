import Slider from 'react-slick';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { actCategories, actSelectCategory } from '../../../actions';
import Woocommerce from '../../../functions/Woocommerce';
import { Link } from 'react-router-dom';

function Session_3(props) {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        autoplay: false,
        autoplaySpeed: 3000,
    };
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        Woocommerce.getCategories().then(function (response){
                setCategories(response.data);
                props.setStateCategories(response.data);
            }
        );
    }, []);
    const handleItemClick = (event, index) => {
        props.chooseDishCate(categories[index].id);
    };
    return (
        <section className='session-home-3'>
            <div className='content-session'>
                <div className='row'>
                    <Slider {...settings}>
                        {categories.map((d, index) => (
                            <Link onClick={(event) => handleItemClick(event, index)} key={d.id} to='detailproductcate' >
                                <div
                                    className='col-categories'
                                    key={d.id}
                                >
                                    <div className="img-categories">
                                        <img src={d.image.src} />
                                        <div className="count-categories-product">
                                            <div className='count'>
                                                <p>{d.count}</p>
                                                <span>products</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="content-categories">
                                        <h4>{d.name}</h4>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    );
}
const mapDispatchToProps = (dispatch) => {
	return {
        setStateCategories: (data) =>{
            dispatch(actCategories(data));
        },
        chooseDishCate: (data) => {
            dispatch(actSelectCategory(data));
        }
	};
};
const mapStateToProps = (state, ownProps) => {
    return {
        select_category: state.dish_cate,
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Session_3);