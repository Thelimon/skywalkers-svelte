import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		companyName: 'Skywalkers'
	}
});

export default app;

