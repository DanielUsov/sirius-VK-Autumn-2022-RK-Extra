function countSpecialKeys(obj) {
	let objKeys = Object.keys(obj);
	let firstTempArray = [];
	objKeys.forEach((key) => {
		if (key.length % 2 === 0) {
			firstTempArray.push(key);
		}
	});

	let secondTempArray = [];
	for (const key in obj) {
		if (key.length % 2 === 0) {
			secondTempArray.push(key);
		}
	}

	let thirdTempArray = [];
	for (const [key] of Object.entries(obj)) {
		if (key.length % 2 === 0) {
			thirdTempArray.push(key);
		}
	}

	let allKeys = Object.getOwnPropertyNames(obj);
	let fourthTempArray = [];
	for (const key of allKeys) {
		if (key.length % 2 === 0) {
			fourthTempArray.push(key);
		}
	}

	return [fourthTempArray, secondTempArray, thirdTempArray, fourthTempArray];
}

const obj = {
	ok: 'data',
	notok: 'notdata',
	okok: 'data',
};
