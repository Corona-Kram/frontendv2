<script>
	import { goto } from '@sapper/app';

	async function handleSubmit() {
		await goto('kramSent');

		const response = await fetch("/kram/",
			{
				method: 'POST',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ text: "testing" })
			});
	}
</script>


<style>
	.kram-btn {
		border-radius: 9px;
		text-align: center;
		text-decoration: none;
		margin: 5% auto;
		padding: 15px 32px;
		font-size: 5vw;
		box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
	}
</style>

<svelte:head>
	<title>Corona Kram</title>
</svelte:head>

<div class="center-align">
	<a class="waves-effect waves-light kram-btn white blue-text" on:click={handleSubmit}>SEND ET KRAM</a>
</div>

<a href="/kramSent" style="display:none;"></a>