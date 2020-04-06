<template>
	<div id="app">
		<h1>Formulário Desafio</h1>
		<div class="conteudo">
			<form class="painel" v-if="!enviado">
				<div class="cabecalho">Formulário</div>
				<!-- Exercicio 01 -->
				<!-- Criar uma formulário de registro -->
				<!-- Nome completo (Nome e Sobrenome) -->
				<!-- Email -->
				<!-- Senha -->
				<!-- Armazenar Dados? (Sim/Não) -->
				<rotulo nome="Nome">
					<input type="text" v-model="usuario.nome">
				</rotulo>
				<rotulo nome="Sobrenome">
					<input type="text" v-model="usuario.sobrenome">
				</rotulo>
				<rotulo nome="Email">
					<input type="text" v-model="usuario.email">
				</rotulo>
				<rotulo nome="Senha">
					<input type="password" v-model="usuario.senha">
				</rotulo>
				<rotulo nome="Armazenar dados?">
					<span>Sim<input type="radio" value="Sim" v-model="armazenar"></span>
					<span>Nao<input type="radio" value="Nao" v-model="armazenar"></span>
				</rotulo>

				<!-- Exercicio 02 -->
				<!-- Só mostrar o fomulário de não tiver sido submetido -->
				<!-- Mostrar a área de Resultado apenas quando o formulário for submetido -->
				<button @click.prevent="enviar">Enviar</button>
				
				<!-- Exercicio 03 -->
				<!-- Crie um componente personalizado NomeCompleto -->
				<!-- Esse componente deve receber Nome e Sobrenome -->
			</form>
			<div class="painel" v-else>
				<div class="cabecalho">Resultado</div>
				<div class="name-input"><span><strong>Nome: </strong> {{ usuario.nome }}</span></div>
				<div class="name-input"><span><strong>Sobrenome: </strong> {{ usuario.sobrenome }}</span></div>
				<div class="name-input"><span><strong>Email: </strong> {{ usuario.email }}</span></div>
				<div class="name-input"><span><strong>Senha: </strong> {{ usuario.senha }}</span></div>
				<div class="name-input"><span><strong>Armazenar dados? </strong> {{ armazenar }}</span></div>
			</div>
		</div>
	</div>
</template>

<script>
import Rotulo from './components/Rotulo.vue'

export default {
	name: 'app',
	components: { Rotulo },
	data() {
		return {
			usuario: {
				nome: '',
				sobrenome: '',
				email: '',
				senha: '',
			},
			armazenar: 'Sim',
			enviado: false,
		}
	},
	methods: {
		enviar() {
			this.enviado = true;
		}
	},
}
</script>

<style>

body {
	background-color: #ECECEC;
}

#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	display: flex;
	flex-direction: column;
}

.conteudo {
	display: flex;
}

.painel {
	flex: 1;
	background: #FFF;
	margin: 0px 10px;
	padding: 20px;
	border: 1px solid #AAA;
	border-radius: 5px;
}

.painel .cabecalho {
	width: 100%;
	background-color: #DDD;
	padding: 10px 0px;
	border-radius: 5px;
	font-size: 1.4rem;
}

#app form button {
	float: right;
	margin: 10px 0px;
	padding: 10px 20px;
	font-size: 1.4rem;
	border-radius: 5px;
	color: #FFF;
	background-color: #2196F3;
}

.name-input {
	display: flex;
	align-items: flex-start;
	flex-direction: column;
	margin: 10px;
}

/* .painel input {
	display: flex;
	flex-direction: column;
	margin: 10px;
}

input span {
	display: flex;
	justify-content: flex-start;
	margin: 10px;
} */

#app h1 {
	font-weight: 200;
	margin: 20px;
	padding: 0;
}

.mr-4 {
	margin-right: 40px;
}
</style>
