function handleResponseFromAPI(promise) {
	const body = { statu:200, body: 'Success'};

	return promise
	.then(() => body)
	.catch((error) => error)
	.finally(() => console.log('Got a response from the API'));
}
export default handleResponseFromAPI
