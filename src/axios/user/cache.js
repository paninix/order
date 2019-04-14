import sendRequest from '../base';
const CACHE_KEY = 'user_cache_key'

export default  {
	userLogin(options) {
		return sendRequest(CACHE_KEY, 'user-userLogin',options)
	}
}