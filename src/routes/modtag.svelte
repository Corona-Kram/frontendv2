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
				console.log(response)
				if (response.status == 442) {
					server_error = "Telefonnummeret ser ikke rigtigt ud. Er du sikker på at nummeret er dansk og har 8 cifre?"
				} else if (response.status >= 400 && response.status != "409") {
					server_error = "Fejl, prøv venligst igen."
				} else {
					goto('/gemt')
				}
			})
	}

	function handleRemove() {
		fetch("/remove_number/",
			{
				method: 'POST',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ phone_number: phone })
			}).then((response) => {
				if (response.status == 442) {
					server_error = "Telefonnummeret ser ikke rigtigt ud. Er du sikker på at nummeret er dansk og har 8 cifre?"
				} else if (response.status >= 400) {
					server_error = "Fejl, prøv venligst igen."
				} else {
					goto('/slettet')
				}
			})
	}

</script>

<svelte:head>
	<title>Modtag kram</title>
</svelte:head>

<style>
	.card {
		background-color: rgba(0, 0, 0, 0.2);
	}
</style>

<div class="row">
	<div class="col s12">
		<div class="card z-depth-2 darken-1">
			<div class="card-content white-text">
				<span class="card-title">Skriv dig op til at modtage kram</span>
				<p>
					Ved at skrive dig op giver du tilsagn til at coronakram.dk må sende dig SMS'er på
					vegne af andre. Vi videregiver <i>aldrig</i> dit nummer, og sletter det så snart servicen lukker
					ned.
				</p>

				<div class="row center-align">
					<br />
					<p class="{server_error ? '' : 'hide' } col s12 red-text flow-text">{server_error}</p>
				</div>

				<div class="row valign-wrapper">
					<div class="input-field col s12">
						<i class="material-icons prefix">phone</i>
						<input type="number" id="phone" pattern="[0-9]*" required placeholder="Skriv dit nummer her"
							bind:value={phone} class="{ has_error ? 'invalid' : undefined } validate" />
					</div>
				</div>
				<div class="row valign-wrapper">
					<button on:click={handleRegister}
						class="{!phone ? 'disabled' : ''} col s10 offset-s1 waves-effect waves-light btn btn-large blue darken-2 white-text">Skriv
						mig op</button>
				</div>
				<div class="row center-align">
					eller
				</div>
				<div class="row valign-wrapper">
					<button on:click={handleRemove}
						class="{!phone ? 'disabled' : ''} col s10 offset-s1 waves-effect waves-light btn btn-large red darken-2 white-text">Fjern
						mig fra listen</button>
				</div>
			</div>
		</div>
	</div>
</div>

<a href="/gemt" style="display:none;"> </a>
<a href="/slettet" style="display:none;"> </a>