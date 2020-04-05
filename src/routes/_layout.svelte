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

	.line {
		display: inline-block;
	}
	.nobreak {
		display: inline-block;
	}
</style>

<div class="container center-align">
	<div class="row">
		<p class="flow-text col s12 m10 offset-m1 l8 offset-l2">
			<span class="line">Coronakram.dk er til dig, der savner at kramme din familie, dine venner, dine kolleger og
				alle de andre dejlige <span class="nobreak">mennesker du plejer at kramme.</span></span>
		</p>
		<p class="flow-text col s12 m10 offset-m1 l8 offset-l2">
			<span class="line">Med Coronakram.dk kan du sende et kram eller en besked til den person du synes trænger
				til en kærlig hilsen.</span>
			<span class="line">Du kan også vælge at sende dit kram eller din besked ind i en virtuel bank til en person
				du ikke kender.</span>
		</p>
	</div>
</div>

<Nav {segment} />
<br />
<main class="container">
	<slot></slot>
</main>