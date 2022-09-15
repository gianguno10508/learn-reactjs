import axios from 'axios'
import OAuth from 'oauth-1.0a'
import CryptoJS from 'crypto-js'
import jQuery from 'jquery'
import { useEffect, useState } from 'react';

function Test() {
  const [dishes, setDishes] = useState([]);
  const ck = 'ck_43d8557c288c2923ddd9d9d62e3be79a63f14439'
  const cs = 'cs_cf3f7bacba118d528f167a6269bffd25fe9a606e'
  const url = 'http://reactjswordpress.com:828/wp-json/wc/v2/products'
  useEffect(() => {
    const fetchDataProduct = async () => {
      try {
        const oauth = OAuth({
          consumer: {
            key: ck,
            secret: cs
          },
          signature_method: 'HMAC-SHA1',
          hash_function: function (base_string, key) {
            return CryptoJS.enc.Base64.stringify(CryptoJS.HmacSHA1(base_string, key));
          }
        });

        const requestData = {
          url: url,
          method: 'GET'
        };

        axios.get(
          requestData.url + '?' + jQuery.param(oauth.authorize(requestData))
        ).then(function (response) {
          console.log(response.data)
          setDishes(response.data);
        }, function (error) {
          console.log(error)
        })
      } catch (error) {
        console.log(error);
      }
    };
    fetchDataProduct();
  }, []);

  return (
    <div className="product">
      <div className='container'>
        {dishes.map((d, index) => (
          <div
            className='col-starter'
            key={d.id}
          >
            <div className="content pt-4">
              <h4>{d.name}</h4>
            </div>
            <div className="icon">
              <img src={d.images[0].src} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Test;