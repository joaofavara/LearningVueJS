new Vue({
	el: '#desafio',
	data: {
		efeito: false,
		twoClasses: '[ class1, class2 ]',
		nameClass: '',
		boolClass: false,
		styleInput: '',
		porcentagem: 0,
	},
	methods: {
		iniciarEfeito() {
			this.efeito = !this.efeito;
		},
		iniciarProgresso() {
			for(let i = 0; i < 10; i++) {
				console.log(this.porcentagem);
				setTimeout(() => {
					this.porcentagem += 10;
				}, 2000*i);
			}
		}
	},
	computed: {
		startEffect() {
			return {
				destaque: this.efeito,
				encolher: !this.efeito,
			}
		},
		startStyle() {
			return {
				width: '50px',
				padding: '50px',
				backgroundColor: this.styleInput,
			}
		},
		barra() {
			return {
				margin: '10px',
				width: this.porcentagem + 'px',
				backgroundColor: 'red',
				height: '10px',
			}
		}
	}
})
