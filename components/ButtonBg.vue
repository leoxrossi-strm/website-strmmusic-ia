<template>
	<NuxtLink
		:to="url"
		class="bg-primaryPurple text-primary text-sm flex font-CabinFont justify-between items-center rounded-[32px] py-3 px-6 gap-2 outline-none font-normal"
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
		default: '#',
		required: true
	}
})
</script>
