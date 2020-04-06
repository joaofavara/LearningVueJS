<template>
	<div id="app">
		<h1>Tarefas</h1>
		<barra :listaTarefas="tasks"/>
		<div class="box-input">
			<input type="text" v-model="task">
			<button @click="createNewTask">+</button>
		</div>
		<tarefas :listaTarefas="tasks" @deletaTarefa="deletaTarefa" 
		@toggleTarefa="toggleTarefa" />
	</div>
</template>

<script>
import tarefas from './componentes/Tarefa.vue';
import barra from './componentes/Barra.vue';
export default {
	components: {
		tarefas,
		barra,
	},
	data() {
		return {
			tasks: null,
			task: '',
		}
	},
	methods: {
		createNewTask() {
			this.tasks.push({
					name: this.task,
					isDone: false,
				});
			this.task = '';
		},
		deletaTarefa(index) {
			this.tasks.splice(index, 1);
		},
		toggleTarefa(index) {
			this.tasks[index].isDone = !this.tasks[index].isDone;
		}
	},
	created() {
		this.tasks = JSON.parse(localStorage.getItem('tasks')) || [];		
	},
	watch: {
		tasks: {
			deep: true,
			handler() {
				localStorage.setItem('tasks', JSON.stringify(this.tasks));
			}
		}
	}
}
</script>

<style>
	body {
		font-family: 'Lato', sans-serif;
		background: linear-gradient(to right, rgb(22, 34, 42), rgb(58, 96, 115));
		color: #FFF;
	}

	#app {
		display: flex;
		flex: 1;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100vh;
	}

	#app h1 {
		margin-bottom: 5px;
		font-weight: 300;
		font-size: 3rem;
	}

	.box-input {
		display: flex;
	}
</style>
