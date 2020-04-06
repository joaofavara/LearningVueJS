<template>
	<div id="app">
		<h1>Filtros & Mixins (Desafio)</h1>
		<hr>
		<!-- Exercício 1 -->
		<!-- Construir um filtro local que troca espaços por vírgula -->
		<p>{{ frase | espacoVirgula }}</p>
		
		<hr>
		<!-- Exercício 2 -->
		<!-- Filtro global que conta o tamanho de cada palavra e adiciona o 
			valor na string final -->
		<!-- "Pedro é legal" => "Pedro (5) é (1) legal (5)" -->
		<p>{{ frase | contaLetrasPalavra }}</p>

		<hr>
		<!-- Exercício 3 -->
		<!-- Implementar os exercicios 1 e 2 com propriedade computada -->
		<p>{{ fraseEspacoVirgula }}</p>
		<p>{{ fraseContaLetrasPalavra }}</p>

		<hr>
		<!-- Exercício 4 -->
		<!-- Compartilhe a propriedade computada via mixin -->
		<p>{{ fraseMixin }}</p>
		<p>{{ fraseEspacoVirgulaMixin }}</p>
		<p>{{ fraseContaLetrasPalavraMixin }}</p>

		
	</div>
</template>

<script>
import fraseMixin from './fraseMixin';

export default {
	mixins: [fraseMixin],
	filters: {
		espacoVirgula(valor) {
			return valor.replace(/\s/g, ',');
		},
	},
	data() {
		return {
			frase: 'Joao eh um bom programador',
		}
	},
	computed: {
		fraseEspacoVirgula() {
			return this.frase.replace(/\s/g, ',');
		},
		fraseContaLetrasPalavra() {
			let fraseFinal = '';
			const frase = this.frase.split(' ');
			frase.map((palavra) => {
				fraseFinal += `${palavra} (${palavra.length}) `;
			})
			return fraseFinal;
		}
	}
	
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
</style>
