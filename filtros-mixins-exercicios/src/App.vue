<template>
	<div id="app">
		<h1>Filtros & Mixins</h1>
		<hr>
		<p>{{ usuarioLogado }}</p>
		<p>{{ cpfDoAluno | cpf | inverter }}</p>
		<input type="text" :value="cpfDoAluno | cpf">
		<hr>
		<Frutas />
		<hr>
		<div>
			<ul>
				<li v-for="f in frutas" :key="f">{{ f }}</li>
			</ul>
			<input type="text" @keydown.enter="add" v-model="fruta">
		</div>
	</div>
</template>

<script>
import frutasMixin from './frutasMixin.js';
import usuarioMixin from './usuarioMixin.js';
import Frutas from './Frutas.vue';

export default {
	components: { Frutas },
	mixins: [frutasMixin, usuarioMixin],
	filters: {
		cpf(valor) {
			const arr = valor.split('');
			arr.splice(3, 0, '.');
			arr.splice(7, 0, '.');
			arr.splice(11, 0, '-');
			return arr.join('');
		}	
	},
	data() {
		return {
			cpfDoAluno: '60070080090',
			frutas: ['abacate'],
		}
	},
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
	font-size: 2.5rem;
}

input {
	font-size: 2.5rem;
}
</style>
