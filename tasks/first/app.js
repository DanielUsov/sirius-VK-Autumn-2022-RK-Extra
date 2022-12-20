function controlHistory(value, url) {
	if (typeof value === Number && url === undefined) {
		window.history.go(value);
	}
	switch (value) {
		case 'go':
			window.history.pushState('', '', url);
			break;

		case 'modify':
			window.history.replaceState('', '', url);
			break;
	}
}
