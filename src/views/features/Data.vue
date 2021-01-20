<template>
	<div class="data">
		<h1>Maximum Data at a Glance</h1>
		<p class="description">
			DuoCycle always shows you the data, that is most important to you. Both
			the watchOS and iOS apps have been designed for maximum legibility so that
			you can get all important information at a glance. You can chose between
			different view modes that you can switch at any time.
		</p>
		<ViewModes />
	</div>
</template>

<script>
import ViewModes from '../../components/ViewModes';

export default {
	name: 'data',
	components: {
		ViewModes,
	},
};
</script>
