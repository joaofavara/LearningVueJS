<template>
    <div class="container">
        <h1>Componente Usuário</h1>
        <p>Esse é um componente muito legal!</p>
        <p>Nome eh <strong>{{ nome }}</strong></p>
        <p>Idade eh <strong>{{ idade }}</strong></p>
        <button @click="alterarNome">Altera Nome</button>
        <hr>
        <div class="componentes">
            <app-usuario-info :nome="nome" @nomeMudou="nome = $event" :reiniciarFn="reiniciarNome" :idade="idade"/>
            <app-usuario-editar :idade="idade" @alterarIdade="idade = $event"/>
        </div>
    </div>
</template>

<script>
import AppUsuarioInfo from './UsuarioInfo'
import AppUsuarioEditar from './UsuarioEditar'

export default {
    components: { AppUsuarioInfo, AppUsuarioEditar },
    data() {
        return {
            nome: 'Joao',
            idade: 23
        }
    },
    methods: {
        alterarNome() {
            this.nome = 'Pedro'
        },
        reiniciarNome () {
            this.nome = 'Joao'
        },
    }
}
</script>

<style scoped>
    .container {
        background-color: #27363b;
        color: #fff;
        padding: 10px;
    }

    .container hr {
        margin: 20px 10px;
    }

    .componentes {
        display: flex;
    }

    .componentes > * {
        margin: 10px;
    }
</style>
