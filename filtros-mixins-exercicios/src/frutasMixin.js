export default {
    data() {
        return {
            fruta: '',
            frutas: ['laranja', 'morango', 'maracuja']
        }
    },
    methods: {
        add() {
            this.frutas.push(this.fruta);
            this.fruta = '';
        }
    },
}