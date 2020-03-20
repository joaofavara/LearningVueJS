<template>
  <div class="tabela-box">
    <table>
      <tr>
        <th>#ID</th>
        <th>Name</th>
      </tr>
      <tr v-for="user in usuarios" :key="user.id" @click="showInformation(user.id)">
        <!-- #ID  -->
        <td>{{ user.id }}</td>
        <td>{{ user.nome }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    usuarios: {
      type: Array
    }
  },
  methods: {
    showInformation(id) {
      this.$emit("showInformation", id);
    }
  }
};
</script>

<style scoped>
.tabela-box {
  width: 50%;
  display: flex;
  justify-content: center;
  align-content: center;
}



</style>
