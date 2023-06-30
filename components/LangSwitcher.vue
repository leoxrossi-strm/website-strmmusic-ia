<template>
	<div>
		<select
			v-model="language"
			class="rounded-full bg-transparent px-2 py-2 opacity-90 outline-none"
		>
			<option
				class="rounded-full bg-[#2A2A2D] px-2 py-2 text-white opacity-90"
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
