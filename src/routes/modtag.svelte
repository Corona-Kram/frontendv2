
<script>
let phone = ""
</script>

<svelte:head>
	<title>Modtag kram</title>
</svelte:head>

<h1>Send et kram til mig</h1>
		<form class="content">
			<label>Telefon</label>
			<input type="text" bind:value={phone} />

			<button formaction='gemt'>Gem</button>
		</form>