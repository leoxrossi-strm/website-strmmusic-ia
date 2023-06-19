<template>
	<NuxtLink
		:to="url"
		class="hvr flex w-[179.27px] items-center justify-between gap-2 rounded-[32px] bg-primaryPurple px-6 py-3 font-CabinFont text-sm font-normal text-primary outline-none"
	>
		{{ text }}
		<Icon name="bi:chevron-right" color="white" />
	</NuxtLink>
</template>

<script setup>
const props = defineProps({
	text: {
		type: String,
		default: 'Ouse Testar',
		required: true
	},
	url: {
		type: String,
		default: 'https://artists.strmmusic.com/quiz',
		required: true
	}
})
</script>
<style scoped>
.hvr:hover {
	box-shadow: #5a57ff 0px 0px 10px 0px, #1f1d56 0px 0px 20px 0px;

	transition: all 0.2s ease 0s;
}
</style>
