<template>
	<div id="app" class="container">
		<h1>HTTP com Axios</h1>
		<b-card>
			<b-form-group label="Nome: ">
				<b-form-input type="text" size="lg" v-model="usuario.name" aria-placeholder="Informe o Nome"></b-form-input>
			</b-form-group>
			<b-form-group label="Email: ">
				<b-form-input type="text" size="lg" v-model="usuario.email" aria-placeholder="Informe o Email"></b-form-input>
			</b-form-group>
			<hr>
			<b-button variant="primary" @click="salvar">Salvar</b-button>
			<b-button variant="success"  class="ml-2" @click="obterUsuarios">Obter Usuarios</b-button>
		</b-card>
		<hr>
		<b-list-group>
			<b-list-group-item v-for="(usuario, i) in usuarios" :key="i">
				<strong>Nome: </strong>{{ usuario.name }}<br>
				<strong>Email: </strong>{{ usuario.email }}
			</b-list-group-item>
		</b-list-group>
	</div>
</template>

<script>
export default {
	data() {
		return {
			usuarios: [],
			usuario: {
				email: '',
				name: '',
			}
		}
	},
	methods: {
		salvar(){
			this.$http.post('/user', this.usuario)
			.then(() => {
					this.usuario.name = '';
					this.usuario.email = '';
				});
		},
		obterUsuarios(){
			this.$http.get('/')
			.then(res => {
				this.usuarios = res.data;
			})
		}
	},
	// created() {
	// 	this.$http.post('/user', {
	// 		name: 'Maria',
	// 		email: 'maria@gmail.com'
	// 	}).then((res) => console.log(res));
	// }
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
	font-size: 1.5rem;
}

#app h1 {
	text-align: center;
	margin: 50px;
}
</style>
