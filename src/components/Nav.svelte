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
		background-color: rgba(210, 30, 30, 0.4);
		border-bottom: 4px solid rgba(150, 30, 30, 0.7)
	}

	a {
		font-size: 1.5rem;
	}

	.small-menu li {
		display: block;
	}
</style>

<nav>
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