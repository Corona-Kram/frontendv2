<script>
	export let segment;
</script>

<style>
	nav {
		border-bottom: 1px solid teal;
		font-weight: 300;
		padding: 0 1em;
	}

	ul {
		margin: 0;
		padding: 0;

		grid-template-columns: 1fr 1fr 1fr; 
		display: flex;
	}

	/* clearfix */
	ul::after {
		content: '';
		display: block;
		clear: both;
	}

	li {
		display: block;
		text-align: center;
		flex: 1;
	}

	[aria-current] {
		position: relative;
		display: inline-block;
	}

	[aria-current]::after {
		position: absolute;
		content: '';
		width: calc(100% - 1em);
		height: 2px;
		background-color: teal;
		display: block;
		bottom: -1px;
	}

	a {
		text-decoration: none;
		padding: 1em 0.5em;
		display: block;
	}
</style>

<nav>
	<ul>
		<li><a aria-current='{segment === undefined ? "page" : undefined}' href='.'>Send Kram</a></li>
		<li><a aria-current='{segment === "modtag" ? "page" : undefined}' href='modtag'>Modtag Kram</a></li>
		<li><a aria-current='{segment === "feed" ? "page" : undefined}' href='feed'>Kram Live Feed</a></li>
	</ul>
</nav>
