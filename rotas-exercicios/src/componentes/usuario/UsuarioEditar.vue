<template>
  <div class="usuario-editar">
      <h3>Usuario Editar</h3>
      <hr>
      <p><strong>Code: </strong>{{ id }}</p>
      <p><strong>Completo: </strong>{{ $route.query.completo ? 'Sim' : 'Nao' }}</p>
      <p><strong>Lingua: </strong>{{ $route.query.lingua }}</p>
      <hr>
      <button primario @click="confirmar = true">Confirmar</button>
  </div>
</template>

<script>
export default {
    props: ['id'],
    data(){
        return {
            confirmar: false,
        }
    },
    beforeRouteLeave (to, from, next) {
        if(this.confirmar){
            next()
        } else {
            if(confirm('Tem certeza?')) {
                next()
            } else {
                next(false)
            }
        }
    }

}
</script>

<style>

</style>