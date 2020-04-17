const axios = require('axios');

(async function () {
	const sms = await axios({
		url: 'https://api2.totalvoice.com.br',
		method: 'post',
		headers: {
			'Access-Token': '' //para obter entre no site Total Voice e faça o seu cadastro
		},
		data: {
			'numero_destino': '',
			'mensagem': '' 
		}
	});
	console.log(sms.data);
})();