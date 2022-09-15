import axios from "axios";
import Oauth from "oauth-1.0a";
import CryptoJS from "crypto-js";
import jQuery from "jquery";

const ck = 'ck_43d8557c288c2923ddd9d9d62e3be79a63f14439'
const cs = 'cs_cf3f7bacba118d528f167a6269bffd25fe9a606e'
const baseURL = "http://reactjswordpress.com:828/wp-json";

const Woocommerce = {
  getProducts: () => {
    return makeRequest("/wc/v3/products");
  },
  getCategories: () => {
    return makeRequest("/wc/v3/products/categories");
  },
  getProductByID: id => {
    return makeRequest("/wc/v3/products/" + id);
  }
};

function makeRequest(endpoint, method = "GET") {
  const oauth = getOauth();

  const requestData = {
    url: baseURL + endpoint,
    method,
    data: {
      per_page: 100
    }
  };

  const requestHTTP =
    requestData.url + "?" + jQuery.param(oauth.authorize(requestData));
  return axios.get(requestHTTP);
}

function getOauth() {
  return Oauth({
    consumer: {
      key: ck,
      secret: cs
    },
    signature_method: "HMAC-SHA1",
    hash_function: function(base_string, key) {
      return CryptoJS.enc.Base64.stringify(CryptoJS.HmacSHA1(base_string, key));
    }
  });
}

export default Woocommerce;