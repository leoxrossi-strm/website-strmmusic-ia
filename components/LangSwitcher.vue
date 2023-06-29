<template>
	<div>
		<select v-model="language" class="rounded-full bg-primaryPurple px-2 py-2 opacity-90">
			<option
				v-for="item in locales"
				:key="item.code"
				:value="item.code"
				@click="locale(item.code)"
			>
				{{ item.name }}
			</option>
		</select>
	</div>
</template>

<script setup>
const { locales, locale, setLocale } = useI18n()

const language = computed({
	get: () => locale.value,
	set: (value) => {
		setLocale(value)
	}
})
</script>
