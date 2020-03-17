new Vue({
    el: '#app',
    data: {
        nome: 'joao',
        idade: 23,
        image: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fhttp2.mlstatic.com%2Fpinguim-kowalski-madagascar-D_NQ_NP_630666-MLB29639390626_032019-F.jpg&imgrefurl=https%3A%2F%2Fproduto.mercadolivre.com.br%2FMLB-1193990006-pinguim-kowalski-madagascar-_JM&tbnid=meGyptIwk1VrIM&vet=12ahUKEwig-LCi2J_oAhW8CbkGHSp_ARMQMygHegUIARD4AQ..i&docid=iEBJT366GOamUM&w=799&h=1200&q=kowalski&ved=2ahUKEwig-LCi2J_oAhW8CbkGHSp_ARMQMygHegUIARD4AQ'
    },
    methods: {
        tripleAge: function() {
            return this.idade*3;
        },
        random: function() {
            return Math.random();
        }
    },
})