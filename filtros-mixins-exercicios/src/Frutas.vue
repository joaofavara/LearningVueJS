<template>
  <div>
      <ul>
          <li v-for="f in frutas" :key="f">{{ f }}</li>
      </ul>

      <input type="text" @keydown.enter="add" v-model="fruta">
  </div>
</template>

<script>
import frutasMixin from './frutasMixin.js';
export default {
    mixins: [frutasMixin],
}
</script>

<style>

</style>