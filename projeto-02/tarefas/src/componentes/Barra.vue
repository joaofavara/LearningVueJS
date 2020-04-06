<template>
    <div class="box-barra">
        <div class="barra">
            <div class="progrecao" :style="{width: this.progrecao + '%'}"></div>
        </div>
        {{ progrecao }}%
    </div>

</template>

<script>
export default {
    props: {
        listaTarefas: {
            type: Array,
        }
    },
    computed: {
        progrecao() {
            const doneTasks = this.listaTarefas.filter(task => task.isDone === true);
            return ((doneTasks.length / this.listaTarefas.length) * 100).toFixed(2);
        },
    }

}
</script>

<style>
.box-barra {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 5px;
}

.barra {
    width: 500px;
    height: 2rem;
    border-radius: 3px;
    border: 2px solid black;
    margin: 10px;
}

.progrecao {
    height: 100%;
    background-color: red;
}
</style>