<template>
	<NuxtLink
		:to="url"
		class="hvr flex w-[179.27px] items-center justify-between gap-2 rounded-[32px] bg-primaryPurple px-6 py-3 font-CabinFont text-sm font-normal text-primary outline-none"
	>
		{{ $t(textButton) }}
		<Icon name="bi:chevron-right" color="white" />
	</NuxtLink>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
	textButton: {
		type: String,
		default: 'strm_dare_to_test'
	}
})

// Get current locale
const { locale } = useI18n()

// Compute URL based on locale
let url = computed(() => {
	if (locale.value === 'pt-BR') {
		return 'https://artists.strmmusic.com/quiz?simple=true'
	} else if (locale.value === 'en-US') {
		return 'https://artists.strmmusic.com/quiz/en?simple=true'
	} else {
		return 'https://artists.strmmusic.com/quiz?simple=true' // default URL
	}
})
// Get current locale
</script>

<style scoped>
.hvr:hover {
	box-shadow: #5a57ff 0px 0px 10px 0px, #1f1d56 0px 0px 20px 0px;
	transition: all 0.2s ease 0s;
}
</style>
