<script>
	import Nav from '../components/Nav.svelte';

	export let segment;
</script>

<style>
	main {
		position: relative;
		max-width: 56em;
		padding: 2em;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>

<div class="container center-align">
	<div class="row">
		<p class="flow-text col s12 m8 offset-m2">
			Coronakram.dk er til dig, der savner at kramme din familie, dine venner og alle de andre dejlige mennesker
			du
			plejer
			at kramme.
		</p>
		<p class="flow-text col s12 m8 offset-m2">
			Med Coronakram.dk kan du sende et kram eller en besked til den person du synes trænger til en
			kærlig hilsen.
			Du kan også vælge at sætte dit kram eller din besked ind i en virtuel bank til en person du ikke kender.</p>
	</div>
</div>

<Nav {segment} />
<br />
<main class="container">
	<slot></slot>
</main>