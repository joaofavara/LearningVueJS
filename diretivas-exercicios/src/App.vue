<template>
  <div id="app">
    <h1>Diretivas</h1>
    <hr />
    <p v-text="'Usando v-text'"></p>
    <p v-html="'Usando <strong>v-text</strong>'"></p>
    <hr />
    <p v-destaque:fundo="'red'">Usando v-destaque</p>
    <p v-destaque.delay="cor">Usando v-destaque</p>
    <hr />
    <p v-destaque-local:fundo.alternar="{cor1: 'red', cor2: 'green', delay: 2000, intervalo: 200}">Usando v-destaque</p>
    <p v-destaque-local.delay.alternar="{cor1: 'red', delay: 2000}">Usando v-destaque</p>
  </div>
</template>

<script>
export default {
  directives: {
    "destaque-local": {
		bind(el, bind) {
			const delay = bind.modifiers['delay'] ? bind.value.delay : 0;
			const aplicarCor = cor => {
				if(bind.arg === 'fundo') {
					el.style.backgroundColor = cor;
				} else {
					el.style.color = cor;
				}
			};

			const cor1 = bind.value.cor1;
			const cor2 = bind.value.cor2;
			let corAtual = cor1;

			setTimeout(() => {
				if(bind.modifiers['alternar']) {
					setInterval(() => {
						corAtual = corAtual === cor1 ? cor2 : cor1;
						aplicarCor(corAtual);
					}, bind.value.intervalo);
				} else {
					aplicarCor(bind.value.cor1);
				}
			}, delay);
		}
    }
  },
  data() {
    return {
      cor: "green"
    };
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  font-size: 2.5rem;
}
</style>
