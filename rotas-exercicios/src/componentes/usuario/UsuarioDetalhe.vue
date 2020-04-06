<template>
  <div class="usuario-detalhe">
      <h3>Usuario Detalhe</h3>
      <hr>
      <h4><strong>Code: </strong>{{ id }}</h4>
      <!-- <router-link tag="button" primario :to="`/usuario/${id}/editar`">Editar</router-link> -->
      <router-link tag="button" primario
      :to="{ name: 'editarUsuario', params: { id }, query: { completo: true, lingua: 'en' }}"
      >Editar</router-link>
  </div>
</template>

<script>
export default {
    props: ['id'],
    beforeRouteEnter (to, from, next) {
        console.log('dentro do componente -> usuario detalhe');
        next();
    }
    // data() {
    //     return {
    //         id: this.$route.params.id,
    //     }
    // },
    // watch: {
    //     $route(to){
    //         this.id = to.params.id;
    //     }
    // },
}
</script>

<style>

</style>