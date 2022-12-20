function countSpecialKeys(obj) {
	// let objKeys = Object.keys(obj);
	// let mass = [];
	// objKeys.forEach((key) => {
	// 	if (key.length % 2 === 0) {
	// 		mass.push(key);
	// 	}
	// });

	// return mass;
	// let mass = [];
	// for (const key in obj) {
	// 	if (key.length % 2 === 0) {
	// 		mass.push(key);
	// 	}
	// }
	// return mass;

	const [key] = Object.entries(obj);
	return key;
}

const obj = {
	ok: 'data',
	notok: 'notdata',
	okok: 'data',
};

console.log(countSpecialKeys(obj));
