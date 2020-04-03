<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	@media (min-width: 1200px) {
		main {
			max-width: 240px;
		}
	}

	.main_button {
		display: block;
		cursor: pointer;
		margin: 10% auto 5%;
		background-color: white;
		border: 3px solid #555555;
		border-radius: 8px;
		color: black;
		padding: 15px 32px;
		text-align: center;
		text-decoration: none;
		font-size: 5vw;
		box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
	}

	.content {
		display: grid;
		grid-template-columns: 20% 80%;
		grid-column-gap: 10px;
	}

	input {
		width: 50%;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>

<svelte:head>
	<title>Corona Kram</title>
</svelte:head>

	<div class="wrapper">
		<button class="main_button">SEND ET KRAM</button>
	</div>

