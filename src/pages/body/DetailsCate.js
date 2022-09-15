import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actSelectProduct } from '../../actions';
import '../../styles/details_cate.css';
function DetailsCate(props) {
    const [productCate, setProductCate] = useState([]);
    const [title, setTitle] = useState("");
    const [banner, setBanner] = useState("");
    const [currentCate, setCurrentCate] = useState(props.cate);
    useEffect(() => {
        if (props.cate != null && Array.isArray(props.products) && props.products != null) {
            var array_product_cate = [];
            var i = 0;
            props.products.forEach(element => {
                if (props.cate == element.categories[0].id) {
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
            setCurrentCate(props.cate);
            if (array_product_cate != null) {
                setProductCate(array_product_cate);
            }
            props.categories.forEach(e => {
                if (props.cate == e.id) {
                    setTitle(e.name);
                    if (e.image.src) {
                        setBanner(e.image.src);
                    }
                }
            })
        }
    }, [props.cate, props.products]);
    const handleItemClick = (event, index) => {
        props.chooseDishProduct(productCate[index].id_product);
    };
    return (
        <section className='details-cate'>
            <div className='content-session'>
                <h2 className='title' style={{ backgroundImage: "url(" + banner + ")" }}>{title}</h2>
                <div className='container'>
                    <div className='row'>
                        {Array.isArray(productCate) && productCate[0] != null ?
                            productCate.map((d, index) => (
                                
                                    <div
                                        onClick={(event) => handleItemClick(event, index)}
                                        className='col-md-3'
                                        key={index}
                                    >
                                        <Link to='/detailproduct'>
                                            <div className="img-new-product">
                                                <img src={d.img} />
                                            </div>
                                            <div className="content-new-product">
                                                <h4>{d.name}</h4>
                                                <h4>{d.price + " đ"}</h4>
                                            </div>
                                        </Link>
                                    </div>
                            )) : <h3>So sorry we will update later</h3>
                        }
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
        }
    };
};
const mapStateToProps = (state, ownProps) => {
    return {
        cate: state.dish_cate,
        products: state.product,
        categories: state.category
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailsCate);