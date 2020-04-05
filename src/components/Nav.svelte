<script>
	export let segment;
</script>

<style>
	nav {
		background-color: rgba(0, 0, 0, 0.2);
	}
	ul {
		width: 100%;
	}

	li {
		width: 33%;
		text-align: center;
	}

	li.active {
		border-bottom: 4px solid rgba(0, 0, 0, 0.1);
	}

	a {
		font-size: 1.5rem;
	}

	.small-menu li {
		display: block;
	}
</style>

<nav class="darken-4">
	<div class="nav-wrapper">

		<ul class="hide-on-small-and-down">
			<li class='{segment === undefined ? "active" : undefined}'><a href='/'>Send et kram</a></li>
			<li class='{segment === "modtag" ? "active" : undefined}'><a href='/modtag'>Modtag kram</a></li>
			<li class='{segment === "feed" ? "active" : undefined}'><a href='/feed'>Livefeed</a></li>
		</ul>

		<ul class="hide-on-med-and-up">
			<li class='{segment === undefined ? "active" : undefined}'><a href='/'>Send</a></li>
			<li class='{segment === "modtag" ? "active" : undefined}'><a href='/modtag'>Modtag</a></li>
			<li class='{segment === "feed" ? "active" : undefined}'><a href='/feed'>Livefeed</a></li>
		</ul>
	</div>

</nav>