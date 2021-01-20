<template>
	<div class="download">
		<h1>Download DuoCycle</h1>
		<img id="hero" alt="iOS and watchOS icons" src="../assets/both-icons.png" />
		<p class="description">
			Live-Workout-Streaming from Apple Watch to iPhone. Different View Modes to
			always show you the most relevant data. Detailed workout analysis.
		</p>
		<p class="description">
			Download DuoCycle for FREE from the App Store and start recording your
			rides!
		</p>
		<a href="https://apps.apple.com/app/id1480010951">
			<img
				id="appstore"
				alt="App Store link"
				src="../assets/AppStoreBadge.png"
			/>
		</a>
	</div>
</template>

<script>
export default {
	name: 'download',
};
</script>

<style scoped>
#hero {
	height: 40vh;
}

@media (max-width: 550px) {
	#hero {
		height: 100%;
		width: 90vw;
	}
}
</style>
