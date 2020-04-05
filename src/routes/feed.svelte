<script>
	import { onMount } from 'svelte';

	let loading = true;
	let messages = [];
	let server_error = '';

	async function updateMessages(seconds) {
		loading = true;
		await fetch("/kram/" + seconds).then((response) => {
			loading = false;
			return response.json();
		}).then((new_messages) => {
			messages = new_messages.concat(messages);
		})
	}

	onMount(() => {
		updateMessages(10000)

		const interval = setInterval(() => {
			updateMessages(10)
		}, 10000);

		return () => {
			clearInterval(interval);
		};
	});

</script>

<svelte:head>
	<title>Kram Live Feed</title>
</svelte:head>


<h1>Kram Live Feed!</h1>

<div class="row center-align">
	<br />
	<p class="{server_error ? '' : 'hide' } col s12 red-text flow-text">{server_error}</p>
</div>

{#if messages.length == 0 || loading}
<div class="progress">
	<div class="indeterminate"></div>
</div>
{/if}

{#each messages as [ name, time, text ]}
	<div class="row">
		<div class="col s12 m6">
			<div class="card blue darken-1">
				<div class="card-content white-text">
				<span class="card-title">{#if name}{name}{:else}Anonym{/if}</span>
				<span class="card-description">{new Date(time).toLocaleString()}</span>
				<p>{text}</p>
				</div>
			</div>
		</div>
	</div>
{/each}