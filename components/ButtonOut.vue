<template>
	<NuxtLink
		:to="url"
		target="_blank"
		class="hvr flex items-center justify-between gap-2 rounded-[32px] border-2 border-primaryPurple bg-transparent px-6 py-3 font-CabinFont text-sm font-normal text-primary outline-none"
	>
		{{ text }}
		<Icon name="bi:chevron-right" color="white" />
	</NuxtLink>
</template>

<script setup>
const props = defineProps({
	text: {
		type: String,
		default: 'Fale com seu A&R',
		required: true
	},
	url: {
		type: String,
		default:
			'https://api.whatsapp.com/send?phone=5511978946137&text=Quero%20falar%20com%20um%20A&R',
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
