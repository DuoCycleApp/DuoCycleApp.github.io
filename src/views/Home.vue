<template>
	<div class="home">
		<h1>Welcome to DuoCycle</h1>
		<img
			id="hero"
			alt="Apple Watch and iPhone with the DuoCycle apps"
			src="../assets/Hero-Home.png"
		/>
		<p class="description">
			DuoCycle is a novel fitness app that tracks your rides with Apple Watch
			and shows all of your workout data live on iPhone. Your Apple Watch and
			iPhone working as a perfect Duo, designed with cyclists in mind.
		</p>
		<a href="https://apps.apple.com/app/id1480010951">
			<img
				id="appstore"
				alt="App Store Link"
				src="../assets/AppStoreBadge.png"
			/>
		</a>
	</div>
</template>

<script>
export default {
	name: 'home',
};
</script>

<style scoped>
#hero {
	height: 60vh;
	max-height: 100%;
	max-width: 100%;
}

@media (max-width: 740px) {
	#hero {
		height: 100%;
		width: 90vw;
	}
}
</style>
