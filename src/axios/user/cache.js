import sendRequest from '../base';
const CACHE_KEY = 'user_cache_key'

export default  {
	login(options) {
		return sendRequest(CACHE_KEY, 'user-login',options)
	},
	register(options) {
		return sendRequest(CACHE_KEY, 'user-register',options)
	}
}