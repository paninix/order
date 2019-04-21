import sendRequest from '../base';
const CACHE_KEY = 'customer_cache_key'

export default  {
	getBaseInfor(options) {
		return sendRequest(CACHE_KEY, 'customer-getBaseInfor',options)
	},
	updateBaseInfor(options) {
		return sendRequest(CACHE_KEY, 'customer-updateBaseInfor',options)
	}
}