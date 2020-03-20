<template>
    <div class="usuario">
        <div v-if="usuario" >
            <p>#ID: {{ usuario.id }}</p>
            <p>Nome: {{ usuario.nome }}</p>
            <p>Idade: {{ usuario.idade }}</p>
        </div>
        <span v-else>Usuario nao selecionado</span>
    </div>
</template>

<script>

export default {
   props: {
       usuario: {
           type: Object,
        }
   },
}
</script>

<style scoped>
    .usuario {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50%;
    }
</style>
