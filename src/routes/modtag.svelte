<script>
	import { goto } from '@sapper/app';

	let phone = "";
	let consent = false;

	let has_error = false;
	let server_error = undefined;

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
				console.log(response.status)
				console.log(response.states == 442)
				if (response.status == 442) {
					server_error = "Telefonnummeret ser ikke rigtigt ud. Er du sikker på at telefonnummeret er dansk og har 8 cifre?"
				} else if (response.status >= 400 && !response.status == 409) {
					server_error = "Fejl, prøv venligst igen."
				} else {
					goto('/gemt')
				}
			})

	}
</script>

<svelte:head>
	<title>Modtag kram</title>
</svelte:head>


<h1>Send kram til mig</h1>

<p>
	Hvis du gerne vil modtage kram, skriv dit <i>telefon nummer</i> uden landekoder (<code>+45</code>, <code>0045</code>
	osv.).
</p>

<p class="{server_error ? '' : 'hide' } red-text">{server_error}</p>

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
		videregiver <i>aldrig</i> dit nummer, og sletter det så snart servicen lukker ned.</span>
</label>
<button on:click={handleRegister} class="{!consent ? 'disabled' : ''} btn">Gem</button>


<a href="/gemt" style="display:none;"></a>