<script>
	import { onMount } from 'svelte';

	let loading = true;
	let messages = [];
	let count = 0;

	async function updateMessages(seconds) {
		loading = true;
		setTimeout(() => loading = false, 1000);

		await fetch("/kram/" + seconds).then((response) => {
			return response.json();
		}).then((new_messages) => {
			if (new_messages) {
				messages = new_messages.concat(messages);
				count += new_messages.length;
			}
		}).catch(() => { })
	}

	async function getCount() {
		await fetch("/count/").then((response) => response.text()).then((text) => {
			count = Number(text);
		}).catch(() => { })
	}

	onMount(() => {
		updateMessages(100000, true).then(() => {
			getCount()
		})

		const interval = setInterval(() => {
			updateMessages(10, false)
		}, 10000);

		return () => {
			clearInterval(interval);
		};
	});

</script>

<svelte:head>
	<title>Kram Live Feed</title>
</svelte:head>


<h1>Kram Live Feed</h1>

<p class="flow-test">Coronakram.dk har sendt {count} kram indtil videre.</p>

<div class="progress">
	<div class="{!messages || loading ? 'indeterminate' : 'determinate'}"
		style="{messages && !loading ? 'width: 100%;' : ''}"></div>
</div>

<br />

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