<template>
	<NuxtLink
		:to="url"
		class="bg-primaryPurple text-primary text-sm flex font-CabinFont justify-between items-center rounded-[32px] py-3 px-6 gap-2 outline-none font-normal"
	>
		{{ text }}
		<Icon name="bi:arrow-right-short" color="white" />
	</NuxtLink>
</template>

<script setup>
const props = defineProps({
	text: {
		type: String,
		required: true
	},
	url: {
		type: String,
		required: true
	}
})
</script>
