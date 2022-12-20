async function makeRequest(url = '/example', method = 'post', body, callback) {
	await fetch(url, {
		method: method,
		body: body,
	})
		.then((response) => {
			if (response.ok) {
				return callback(response);
			}
		})
		.catch((error) => {
			error.message;
		});
}
