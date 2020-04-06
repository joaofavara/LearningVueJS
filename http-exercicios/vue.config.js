module.exports = {

      devServer: {
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, PUT, POST, OPTIONS",
            "Access-Control-Allow-Headers": "*"
        },
        proxy: 'https://http-exercicios-fcdca.firebaseio.com ',
      }
  };