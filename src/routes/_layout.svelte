<script>
	import Nav from '../components/Nav.svelte';

	export let segment;
</script>

<style>
	main {
		position: relative;
		max-width: 56em;
		padding: 2em;
		margin: 0 auto;
		box-sizing: border-box;
	}

	.line {
		display: inline-block;
	}

	.nobreak {
		display: inline-block;
	}
</style>

<div class="container center-align">
	<div class="row">
		<p class="flow-text col s12 m10 offset-m1 l8 offset-l2">
			<span class="line">Coronakram.dk er til dig, der savner at kramme din familie, dine venner, dine kolleger og
				alle de andre dejlige <span class="nobreak">mennesker du plejer at kramme.</span></span>
		</p>
		<p class="flow-text col s12 m10 offset-m1 l8 offset-l2">
			<span class="line">Med Coronakram.dk kan du sende et kram eller en besked til den person du synes trænger
				til en kærlig hilsen.</span>
			<span class="line">Du kan også vælge at sende dit kram eller din besked ind i en virtuel bank til en person
				du ikke kender.</span>
		</p>
	</div>
</div>

<Nav {segment} />
<br />
<main class="container">
	<slot></slot>
</main>


<footer class="page-footer indigo">
	<div class="container">
		<div class="row">
			<div class="col l4 s12">
				<h5 class="white-text">Om CoronaKram</h5>
				<p class="grey-text text-lighten-4">Siden er udarbejdet af privatpersoner og drives frivilligt.</p>
			</div>
			<div class="col l8 s12">
				<h5 class="white-text">Tak til</h5>
				<ul>
					<li><a class="text-lighten-3 blue-text" href="https://danielvarab.github.com">Daniel
							Varab</a> for hans arbejde med siden.</li>
					<li>Både <a class="text-lighten-3 blue-text" href="https://danielvarab.github.com">Daniel
							Varab</a> og <a class="text-lighten-3 blue-text" href="https://www.derczynski.com/itu/">Leon
							Derczynski</a>
						for deres sprogforskning, der hjælper med at holde tonen ren i de udsendte beskeder.</li>
					<li><a class="text-lighten-3 blue-text" href="https://inmobile.dk">InMobile.dk</a> for brug af deres
						platform og støtte.</li>
				</ul>
			</div>
		</div>
	</div>
</footer>