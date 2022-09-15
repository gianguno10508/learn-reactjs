import Woocommerce from "./functions/Woocommerce";

function Done(){
    Woocommerce.getProducts().then(res =>
        console.log(res.data)
     );
}

export default Done;