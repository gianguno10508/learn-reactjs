import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
function Search(props) {
    const [value, setValue] = useState("");
    const [allproduct, setAllproduct] = useState([]);
    useEffect(() => {
        if (
		    Array.isArray(props.products) &&
		    props.products !== null
		) {
			if (props.products.length) {
				setAllproduct(props.products);
			}
		}
    }, [props.products]);

    const onChange = (event) => {
      setValue(event.target.value);
    };
  
    const onSearch = (searchTerm) => {
      setValue(searchTerm);
    };
    return (
      <div className="search searchBox">
        <div className="search-container">
          <div className="search-inner">
            <input type="text" placeholder="Search products" value={value} onChange={onChange} />
          </div>
          <ul className="dropdown">
            {allproduct
              .filter((item) => {
                const searchTerm = value.toLowerCase();
                const fullName = item.name.toLowerCase();
                return (
                  searchTerm &&
                  fullName.startsWith(searchTerm) &&
                  fullName !== searchTerm
                );
              })
              .slice(0, 10)
              .map((item) => (
                <li
                  onClick={() => onSearch(item.name)}
                  className="dropdown-row"
                  key={item.id}
                >
                <Link to='/' className="item-image" >
                  <img src={item.images[0].src} />
                </Link>
                <div className="item-content">
                  <Link to='/'>
                    <span>{item.name}</span>
                  </Link>
                  <div className="item-price">
                    <span>{item.price}đ</span>
                  </div>
                </div>
                </li>
              ))}
          </ul>
        </div>
      </div>
    );
  }
  const mapStateToProps = (state, ownProps) => {
	return {
		products: state.product,
	};
};

export default connect(mapStateToProps)(Search)