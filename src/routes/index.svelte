<script>
	import { goto } from '@sapper/app';
	import Message from '../components/Message.svelte'

</script>

<svelte:head>
	<title>Corona Kram</title>
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
				<span class="card-title">Send et tilfældigt kram</span>
				<p>Du kan sende en besked til en tilfældig person, der har tilmeldt sig på Coronakram.dk.</p>
				<Message extended={false}></Message>
			</div>
		</div>
	</div>
</div>

<div class="row flow-text center-align">
	<p class="align-center">eller</p>
</div>


<div class="row">
	<div class="col s12">
		<div class="card z-depth-2 darken-1">
			<div class="card-content white-text">
				<span class="card-title">Send et kram til en du kender</span>
				<p>Du kan sende en besked til en udvalgt person.</p>

				<Message extended={true}></Message>
			</div>
		</div>
	</div>
</div>

<a href="/kramSent" style="display:none;"> </a>