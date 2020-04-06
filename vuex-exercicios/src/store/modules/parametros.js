export default {
    state: {
        quantidade: 2,
        preco: 45.09
    },
    mutations: {
        setQuantidade(state, payload) {
            state.quantidade = payload;
        },
        setPreco(state, payload) {
            state.preco = payload;
        }
    },
}
