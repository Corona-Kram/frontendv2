
<script>
import { goto } from '@sapper/app';

let phone = ""

function handleSubmit() {
    	goto('gemt');
  }
</script>

<svelte:head>
	<title>Modtag kram</title>
</svelte:head>

<h1>Send et kram til mig</h1>
		<form class="content">
			<label>Telefon: </label>
			<input type="text" bind:value={phone} />

			<button on:click={handleSubmit}>Gem</button>
		</form>