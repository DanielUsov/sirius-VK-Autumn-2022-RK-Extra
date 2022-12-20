function controlHistory(value, url = undefined) {
	if (typeof value === Number && url === undefined) {
		window.history.go(value);
	}
	window.history.pushState(value, '', url);
}
