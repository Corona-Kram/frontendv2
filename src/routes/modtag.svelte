<script>
	import { goto } from '@sapper/app';

	let phone = "";
	let consent = false;

	let has_error = false;

	function handleRegister() {
		fetch("/add_number/",
			{
				method: 'POST',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ phone_number: phone })
			}).then((response) => {
				if (response.status == 442) {

				}
				console.log(response)
				// goto('/gemt')
			})

	}
</script>

<svelte:head>
	<title>Modtag kram</title>
</svelte:head>


<h1>Send kram til mig</h1>

<p>
	Skriv et <i>telefon nummer</i> uden landekoder (<code>+45</code>, <code>0045</code> osv.).
</p>

<label>Telefon</label>

<div class="input-field col s-12">
	<i class="material-icons prefix">phone</i>
	<input type="number" pattern="[0-9]*" required placeholder="Skriv dit nummer her" bind:value={phone}
		class="{ has_error ? 'invalid' : undefined } validate" />
	<span class="helper-text" data-error="Forkert format; et dansk nummer er 8 cifre"></span>
</div>
<label>
	<input type="checkbox" bind:value={consent} />
	<span>Ved at klikke på denne boks, giver du tilsagn til at coronakram.dk må sende dig SMS'er på vegne af andre. Vi
		videregiver <i>aldrig</i> dit nummer til andre, og gemmer det kun indtil servicen lukker ned.</span>
</label>
<button on:click={handleRegister} class="{!consent ? 'disabled' : ''} btn">Gem</button>


<a href="/gemt" style="display:none;"></a>