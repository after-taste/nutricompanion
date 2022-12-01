import axios from 'axios';

export const post = async (URL, data) => {
	let result = null;

	try {
		const response = await axios({
			method: 'post',
			url: URL,
			data: data,
			timeout: 0
		});

		result = {
			success: true,
			data: response.data,
			pendingCalls: response.pendingCalls
		};
	} catch (error) {
		result = {
			success: false,
			error,
			pendingCalls: error.pendingCalls
		};
	}

	return result;
};

export const get = async (URL) => {
	let result = null;

	try {
		const response = await axios({
			method: 'get',
			url: URL,
			timeout: 0
		});

		result = {
			success: true,
			data: response.data
		};
	} catch (error) {
		result = {
			success: false,
			error
		};
	}

	return result;
};

export const put = async (URL) => {
	let result = null;

	try {
		const response = await axios({
			method: 'put',
			url: URL,
			timeout: 0
		});

		result = {
			success: true,
			data: response.data
		};
	} catch (error) {
		result = {
			success: false,
			error
		};
	}

	return result;
};
