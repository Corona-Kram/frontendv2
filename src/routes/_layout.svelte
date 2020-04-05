<script>
	import Nav from '../components/Nav.svelte';

	export let segment;
</script>

<style>
	
	main {
		position: relative;
		max-width: 56em;
		background-color: rgb(79,61,224);
		padding: 2em;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>

<Nav {segment} />
<br />
<main class="container">
	<slot></slot>
</main>