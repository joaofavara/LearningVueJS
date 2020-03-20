<template>
	<div id="app">
		<app-tabela :usuarios="usuarios" @showInformation="selectUser"/>
		<hr>
		<app-usuario :usuario="usuario" />
	</div>
</template>

<script>
import AppUsuario from "./components/Usuario.vue";
import AppTabela from "./components/Tabela.vue";

export default {
	name: "app",
	components: { AppUsuario, AppTabela },
	data(){
		return {
			usuarios: [
				{id: 1, nome: 'Joao', idade: 23},
				{id: 2, nome: 'Pedro', idade: 23},
				{id: 3, nome: 'Helena', idade: 35},
				{id: 4, nome: 'Miguel', idade: 102},
				{id: 5, nome: 'Eva', idade: 80},
			],
			usuario: null,
		}
	},
	methods: {
		selectUser(event) {
			this.usuario = this.usuarios.find(u => u.id == event);
		}
	},
}
</script>

<style>
#app {
	display: flex;
	justify-content: space-between;
}



</style>
