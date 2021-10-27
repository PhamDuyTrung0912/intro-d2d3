export default {
    install: function(Vue) {
        Vue.prototype.$utils = {
			asset(path) {
				var base_path = window._asset || '';
				return base_path + path;
			}
        };
    }
};
