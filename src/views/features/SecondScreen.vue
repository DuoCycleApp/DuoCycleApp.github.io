<template>
	<div class="second-screen">
		<div>
			<img
				src="../../assets/features/second-screen.png"
				alt="Workout data is displayed both on Apple Watch and iPhone"
			/>
		</div>
		<div class="second-screen-desc">
			<h1>Your iPhone as Second Screen</h1>
			<p class="copy">
				With the Apple Watch app you can track your rides and see all
				interesting data at a glance. Heart Rate, Speed, Distance, Elapsed Time,
				Elevation Gain and much more. It makes your Apple Watch a fully fledged
				Bike Computer.
			</p>

			<p class="copy">But DuoCycle can do even more:</p>

			<p class="copy">
				As soon as you take your iPhone with you during a ride, DuoCycle
				transforms it to a second screen. You don’t have to look on your Apple
				Watch anymore during a ride, but see everything you need on your iPhone.
				This is not only convenient but also improves your road safety. You can
				see all the data your Apple Watch is tracking, live on your iPhone.
			</p>
		</div>
	</div>
</template>

<script>
export default {
	name: 'second-screen',
};
</script>

<style scoped>
.second-screen {
	text-align: left;
	display: flex;
	justify-content: space-evenly;
}

.second-screen-desc {
	width: 50vw;
}

img {
	display: block;
	max-width: 100%;
	max-height: 100%;
	width: 40vw;
}

@media (max-width: 776px) {
	.second-screen {
		flex-direction: column;
		align-items: center;
	}

	img {
		width: 80vw;
	}

	.second-screen-desc {
		width: 90vw;
	}
}
</style>
