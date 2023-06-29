<template>
	<NuxtLink
		:to="url"
		target="_blank"
		class="hvr flex items-center justify-between gap-2 rounded-[32px] border-2 border-primaryPurple bg-transparent px-6 py-3 font-CabinFont text-sm font-normal text-primary outline-none"
	>
		{{ $t(textButtonOut) }}
		<Icon name="bi:chevron-right" color="white" />
	</NuxtLink>
</template>

<script setup>
const props = defineProps({
	textButtonOut: {
		type: String,
		default: 'strm_talk_to_ar'
	},
	url: {
		type: String,
		default:
			'https://api.whatsapp.com/send?phone=5511978946137&text=Quero%20falar%20com%20um%20A%26R'
	}
})
</script>

<style scoped>
.hvr:hover {
	box-shadow: #5a57ff 0px 0px 10px 0px, #1f1d56 0px 0px 20px 0px;

	transition: all 0.2s ease 0s;
}
</style>
