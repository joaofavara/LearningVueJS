new Vue({
    el: '#app',
    data: {
       valor: 0,
    },
    watch: {
        resultado() {
            setTimeout(() => {
                this.valor = 0;
            }, 5000)
        }
    },
    computed: {
        resultado() {
            return this.valor === 37 ? 'Valor Igual' : 'Valor Diferente';
        }
    },
    methods: {
        aumentar(count) {
            this.valor += count;
        }
    },
})