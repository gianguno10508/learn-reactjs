import axios from 'axios';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actSelectCategory } from '../../actions';
import '../../styles/header_styles.css';
import Search from './Search';
import Popup from "reactjs-popup";
import Login from '../body/home_page/Account/Login';
function Header(props) {
    const [parents, setParent] = useState([]);
    const [childs, setChild] = useState([]);
    const url = 'http://reactjswordpress.com:828/wp-json/wp/v2/primary/menu';
    useEffect(() => {
        const fetchDataMenu = async () => {
            try {
                axios.get(url).then(function (response) {
                    var arr = [];
                    var child = [];
                    response.data.forEach(element => {
                        if (element.menu_item_parent == 0) {
                            arr[element.ID] =
                            {
                                'id': element.ID,
                                'title': element.title,
                            }

                        } else {
                            // if (!arr[element.menu_item_parent]) {
                            //     arr[element.menu_item_parent] = [];
                            // }
                            child[element.ID] =
                            {
                                'id': element.ID,
                                'title': element.title,
                                'cate':element.object_id
                            }
                            arr[element.menu_item_parent]['hasChild'] = [
                                {
                                    'hasChild': 'true'
                                }
                            ]
                            arr[element.menu_item_parent][element.ID] =
                            {
                                'id_child': element.ID,
                                'title': element.title,
                                'parent': element.menu_item_parent,
                            }

                        }
                    });
                    setParent(arr);
                    setChild(child);
                }, function (error) {
                    console.log(error)
                })
            } catch (error) {
                console.log(error);
            }
        };
        fetchDataMenu();
    }, []);
    const handleItemClick = (event, index) => {
        props.chooseDishCate(childs[index].cate);
    };
    return (
        <div className="content">
            <div className="header">
                <div className='menu'>
                    <nav className="navbar navbar-expand-lg">
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <div className='left'>
                                <div className='icon-phone'>
                                    <a href='tel:123456'><i class="fa-solid fa-phone"></i></a>
                                </div>
                                <div className='info-phone'>
                                    <p>Need help?</p>
                                    <a href='tel:123456'>123 456 789</a>
                                </div>
                            </div>
                            <ul className="main navbar-nav mr-auto">
                                {Array.isArray(parents) && parents != null ?
                                    parents.map((item, index) => (
                                        <>
                                            {Array.isArray(parents[item.id]['hasChild']) ?
                                                <li key={item.id} className="nav-item dropdown">
                                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        {item.title}
                                                    </a>
                                                    <div className="dropdown-menu categories" aria-labelledby="navbarDropdown">
                                                        <h3>Categories</h3>
                                                        <ul className='cate-menu'>
                                                            {childs.map((d, i) => (
                                                                <li><Link className="dropdown-item" onClick={(event) => handleItemClick(event, i)} key={d.id} to='detailproductcate' >{parents[item.id][d.id]['title']}</Link></li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </li> :
                                                <li key={item.id} className="nav-item active">
                                                    <Link className="nav-link" to="/">{item.title}</Link>
                                                </li>}
                                        </>

                                    )) : ''}
                            </ul>
                            <Search />
                            <div className='right'>
                                {Array.isArray(props.account) && props.account.length <= 0 ? 
                                    <Popup modal trigger={<i style={{cursor: 'pointer'}} class="fa-regular fa-user"></i>}>
                                        <Login />
                                    </Popup>
                                    :
                                    <Link to='detailaccount'><i style={{cursor: 'pointer'}} class="fa-regular fa-user"></i></Link>
                                }
                                <Link to='detailcart'><i style={{cursor: 'pointer'}} class="fa-solid fa-cart-shopping"></i></Link>

                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    );
}
const mapDispatchToProps = (dispatch) => {
    return {
        chooseDishCate: (data) => {
            dispatch(actSelectCategory(data));
        }
    };
};
const mapStateToProps = (state, ownProps) => {
    return {
        select_category: state.dish_cate,
        account: state.account
    };
};
  
export default connect(mapStateToProps, mapDispatchToProps)(Header);  