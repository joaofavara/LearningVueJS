export default {
    data() {
		return {
			fraseMixin: 'MIXIN - Joao eh um bom programador',
		}
	},
	computed: {
		fraseEspacoVirgulaMixin() {
			return this.fraseMixin.replace(/\s/g, ',');
		},
		fraseContaLetrasPalavraMixin() {
			let fraseFinal = '';
			const frase = this.fraseMixin.split(' ');
			frase.map((palavra) => {
				fraseFinal += `${palavra} (${palavra.length}) `;
			})
			return fraseFinal;
		}
	}
}