import Vue from 'vue'
export default new Vue({
    methods: {
        alterarIdade(idade) {
            this.$emit('alterarIdade', idade);
        },
        quandoIdadeMudar(callback) {
            console.log(callback);
            this.$on('alterarIdade', callback);
        }
    },
})