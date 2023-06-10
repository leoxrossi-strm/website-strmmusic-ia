<template>
	<NuxtLink
		:to="url"
		class="flex w-[179.27px] items-center justify-between gap-2 rounded-[32px] bg-primaryPurple px-6 py-3 font-CabinFont text-sm font-normal text-primary outline-none lg:w-auto"
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
