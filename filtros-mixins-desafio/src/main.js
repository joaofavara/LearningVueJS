import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.filter('contaLetrasPalavra', (valor) => {
	let fraseFinal = '';
	const frase = valor.split(' ');
	frase.map((palavra) => {
		fraseFinal += `${palavra} (${palavra.length}) `;
	})
	return fraseFinal;
})

new Vue({
	render: h => h(App),
}).$mount('#app')
