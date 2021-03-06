import code from './base/code';
import userConfig from './user/config';
import customerConfig from './customer/config';
import sellerConfig from './seller/config';
import orderConfig from './order/config';

export default {
    code: code,
    config: {
        user_cache_key: userConfig,
        customer_cache_key: customerConfig,
        seller_cache_key: sellerConfig,
        order_cache_key: orderConfig
    }
}