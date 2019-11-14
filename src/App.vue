<template>
	<div id="app">
		<div id="nav">
			<router-link to="/">Home</router-link>
			<router-link to="/features">Features</router-link>
			<router-link to="/privacy">Privacy</router-link>
			<router-link to="/support">Support</router-link>
			<router-link to="/download">Download</router-link>
		</div>
		<router-view />
	</div>
</template>

<style>
#app {
	font-family: 'HelveticaNeue-CondensedBold';
	font-size: 20px;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: black;
}

#nav {
	display: flex;
	padding: 30px;
	justify-content: space-evenly;
}

#nav a {
	color: black;
	text-decoration: none;
}

#nav a.router-link-exact-active {
	color: red;
}

.description {
	margin: 1em 5em;
}
</style>
