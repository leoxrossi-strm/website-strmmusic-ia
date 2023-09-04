<template>
	<NuxtLink :to="loginUrl"> {{ $t('login') }} </NuxtLink>
</template>

<script setup>
const { locale } = useI18n()

let loginUrl = computed(() => {
	if (locale.value === 'pt-BR') {
		return 'https://artists.strmmusic.com/'
	} else if (locale.value === 'en-US') {
		return 'https://artists.strmmusic.com/en/login'
	} else {
		return 'https://artists.strmmusic.com/' // default URL
	}
})
</script>
