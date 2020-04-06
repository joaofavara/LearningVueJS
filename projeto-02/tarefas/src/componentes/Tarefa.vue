<template>
  <div class="lista-tarefas">
      <div class="tarefa" @click="toggleTarefa(index)" :class="{ done: tarefa.isDone}" v-for="(tarefa,index) in listaTarefas" :key="tarefa.name">
            <!-- <div class="delete-box" @click="deletaTarefa(index, $event)">
                <div class="delete">X</div>
            </div> -->
            <span class="delete-box" @click.stop="deletaTarefa(index)">x</span>
            <span :class="{ 'tarefa-name': tarefa.isDone}">{{ tarefa.name }}</span>
      </div>
  </div>
</template>

<script>
export default {
    props: {
        listaTarefas: {
            type: Array
        }
    },
    methods: {
        deletaTarefa(index) {
            this.$emit("deletaTarefa", index);
        },
        toggleTarefa(index) {
            this.$emit("toggleTarefa", index)
        }
    }
}
</script>

<style>
.lista-tarefas {
    width: 60%;
    margin: 10px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}

.tarefa {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    width: 350px;
    height: 150px;
    padding: 10px;
    margin: 10px;
    font-size: 2rem;
    font-weight: 300;
    border-radius: 8px;
    user-select: none;
    background-color: rgb(95.3%, 36.9%, 29.8%);
    border-left: 12px solid rgb(91%, 16.5%, 21.6%);
}

.delete-box {
    cursor: pointer;
    position: absolute;
    top: 10px;
    right: 10px;
    width: fit-content;
    background-color: gray;
    font-size: 0.9rem;
    font-weight: 600;
    width: 20px;
    height: 20px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    /* z-index: 99999999; */
    /* display: flex; */
    /* justify-content: flex-end; */
    /* border: 1px solid black; */
}

/* .delete {
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    background-color: gray;
    font-size: 3.5px;
    width: 7px;
    height: 7px;
    border-radius: 3.5px;
} */

.done {
    background-color: greenyellow;
    border-left: green solid 12px;
}

.tarefa-name {
    text-decoration: line-through;
}

</style>