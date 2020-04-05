<script>
	export let segment;
</script>

<style>
	ul {
		width: 70%;
	}

	li {
		width: 33%;
		text-align: center;
	}

	li.active {
		background-color:rgb(79,61,224);
		border-bottom: 2px solid white;
	}

	a {
		font-size: 1.5rem;
	}

	.small-menu li {
		display: block;
	}
</style>

<nav class= "indigo darken-3">
	<div class="nav-wrapper">

		<a href="#" class="brand-logo right black-text">Corona Kram</a>
		<ul>
			<li class='{segment === undefined ? "active" : undefined}'><a href='/'><i
						class="material-icons left">send</i>Send Kram</a></li>
			<li class='{segment === "modtag" ? "active" : undefined}'><a href='/modtag'>Modtag Kram</a></li>
			<li class='{segment === "feed" ? "active" : undefined}'><a href='/feed'>Kram Live Feed</a></li>
		</ul>
	</div>

</nav>