<script>
	import { goto } from '@sapper/app';

	function handleSubmit() {
    	goto('kramSent');
  }
</script>


<style>

	button {
		display: block;
		cursor: pointer;
		margin: 10% auto 5%;
		background-color: white;
		border: 2px solid teal;
		border-radius: 4px;
		color: black;
		padding: 15px 32px;
		text-align: center;
		text-decoration: none;
		font-size: 5vw;
		box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
	}
</style>

<svelte:head>
	<title>Corona Kram</title>
</svelte:head>

	<div class="wrapper">
		<button on:click={handleSubmit}>SEND ET KRAM</button>
	</div>

