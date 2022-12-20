function countSpecialKeys(obj) {
	let objKeys = Object.keys(obj);
	let mass = [];
	objKeys.forEach((key) => {
		if (key.length % 2 === 0) {
			mass.push(key);
		}
	});
	return mass;

	let mass = [];
	for (const key in obj) {
		if (key.length % 2 === 0) {
			mass.push(key);
		}
	}
	return mass;

	let mass = [];
	for (const [key] of Object.entries(obj)) {
		if (key.length % 2 === 0) {
			mass.push(key);
		}
	}
	return mass;

	let allKeys = Object.getOwnPropertyNames(obj);
	let mass = [];
	for (const key of allKeys) {
		if (key.length % 2 === 0) {
			mass.push(key);
		}
	}
	return mass;
}

const obj = {
	ok: 'data',
	notok: 'notdata',
	okok: 'data',
};

console.log(countSpecialKeys(obj));
