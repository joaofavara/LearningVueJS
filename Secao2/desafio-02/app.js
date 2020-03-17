new Vue({
    el: '#app',
    data: {
       valor1: '',
       valor2: '',
    },
    methods: {
        exibiAlerta() {
            alert('Alert!!!');
        },
        salvaValor1(e) {
            this.valor1 = e.target.value;
        },
        salvaValor2(e) {
            this.valor2 = e.target.value;
        }
    },
})