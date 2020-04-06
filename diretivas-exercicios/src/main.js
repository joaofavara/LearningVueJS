import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.directive('destaque', {
	bind(el, bind) {
		const delay = bind.modifiers['delay'] ? 3000 : 0;

		setTimeout(() => {
			if(bind.arg === 'fundo') {
				el.style.backgroundColor = bind.value;
			} else {
				el.style.color = bind.value;
			}
		}, delay);
	}
});

new Vue({
	render: h => h(App),
}).$mount('#app')
