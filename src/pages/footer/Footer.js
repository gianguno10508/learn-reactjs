import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/footer_styles.css'
function Footer() {
  const footer1 = 'http://reactjswordpress.com:828/wp-json/wp/v2/footer/menu1';
  const footer2 = 'http://reactjswordpress.com:828/wp-json/wp/v2/footer/menu2';
  const footer3 = 'http://reactjswordpress.com:828/wp-json/wp/v2/footer/menu3';
  const coppyright = 'http://reactjswordpress.com:828/wp-json/wp/v2/footer/coppyright';
  const [fo1, setFo1] = useState([]);
  const [fo2, setFo2] = useState([]);
  const [fo3, setFo3] = useState([]);
  const [coppy, setCoppy] = useState("Bamboo");
  useEffect(() => {
    const fetchDataMenu = async () => {
      try {
        axios.get(footer1).then(function (response) {
          setFo1(response.data);
        }, function (error) {
          console.log(error)
        })
      } catch (error) {
        console.log(error);
      }
      try {
        axios.get(footer2).then(function (response) {
          setFo2(response.data);
        }, function (error) {
          console.log(error)
        })
      } catch (error) {
        console.log(error);
      }
      try {
        axios.get(footer3).then(function (response) {
          setFo3(response.data);
        }, function (error) {
          console.log(error)
        })
      } catch (error) {
        console.log(error);
      }
      try {
        axios.get(coppyright).then(function (response) {
          setCoppy(response.data);
        }, function (error) {
          console.log(error)
        })
      } catch (error) {
        console.log(error);
      }
    };
    fetchDataMenu();
  }, []);
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="content-above">
              <ul class="list-items">
                <li class="list-item">
                  <span class="list-text">175 Tran Hung Dao, Son Dong, Bac Giang </span>
                </li>
                <li class="list-item">
                  <span class="list-text">Phone: 1800 375 9788 </span>
                </li>
                <li class="list-item">
                  <span class="list-text">gianguno10508@gmail.com</span>
                </li>
              </ul>
            </div>
            <div className="content-under">
              <ul class="list-items">
                <li class="list-item">
                  <span class="list-text">Monday – Friday: 8:00 - 23:00</span>
                </li>
                <li class="list-item">
                  <span class="list-text">Saturady: 07:00 – 23:00</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-2">
            <h2 className='title'>More Services</h2>
            <ul className='list-menu-footer'>
              {Array.isArray(fo1) && fo1 != null ?
                fo1.map((item, index) => (
                  <li key={item.id} className="nav-item active">
                    <Link className="nav-link" to="/">{item.title}</Link>
                  </li>

                )) : ''}
            </ul>
          </div>
          <div className="col-md-2">
            <h2 className='title'>Categories</h2>
            <ul className='list-menu-footer'>
              {Array.isArray(fo2) && fo2 != null ?
                fo2.map((item, index) => (
                  <li key={item.id} className="nav-item active">
                    <Link className="nav-link" to="/">{item.title}</Link>
                  </li>

                )) : ''}
            </ul>
          </div>
          <div className="col-md-2">
            <h2 className='title'>Account</h2>
            <ul className='list-menu-footer'>
              {Array.isArray(fo3) && fo3 != null ?
                fo3.map((item, index) => (
                  <li key={item.id} className="nav-item active">
                    <Link className="nav-link" to="/">{item.title}</Link>
                  </li>

                )) : ''}
            </ul>
          </div>
        </div>
      </div>
      <div className='coppy-right'>
          <h3>{coppy}</h3>
        </div>
    </div>
  );
}

export default Footer;