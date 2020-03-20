<template>
    <div class="componente">
        <h2>As Informações de Usuário</h2>
        <p>Vários detalhes...</p>
        <p>Nome do Usuario: <strong>{{ nome }}</strong></p>
        <p>Idade: <strong>{{ idade }}</strong></p>
        <button @click="reiniciarNome">Reiniciar Nome</button>
        <button @click="reiniciarFn">Reiniciar Nome ( Callback )</button>
    </div>
</template>

<script>
import barramento from '../../barramento';
export default {
    props: {
        nome: {
            type: String,
            // required: true,
            // default: 'BATATA'
            default: () => 'BATATA 2'
        },
        reiniciarFn: {
            type: Function
        },
        idade: Number
    },
    methods: {
        reiniciarNome() {
            this.nome = 'Joao';
            this.$emit('nomeMudou', this.nome);
        }
    },
    created() {
        barramento.quandoIdadeMudar(idade => {
            this.idade = idade;
        })
    }
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #ec485f;
        color: #fff;
    }
</style>
