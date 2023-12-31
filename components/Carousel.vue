<template>
	<section class="snap-x-start flex w-screen justify-center overflow-x-scroll pt-[73px]">
		<div
			v-for="(item, index) in items"
			:key="index"
			class="mr-4 flex snap-start flex-col items-center"
			:class="{ 'padding-card': index === 0 }"
			:style="{ opacity: opacityValues[index] }"
		>
			<nuxt-img
				:src="item.imageSrc"
				:alt="item.name"
				class="rounded-[28px] pb-4"
				width="289"
				height="304"
				loading="lazy"
			/>
			<div :ref="(el) => (cards[index] = el)" class="gradient-border">
				<div class="gradient-box">
					<div class="flex flex-col items-start px-6 pt-[22px]">
						<p class="font-CabinFont text-2xl font-bold">{{ item.name }}</p>
						<div class="flex items-center pt-[8px]">
							<p class="pr-4 font-CabinFont text-base">{{ item.growth }} {{ item.growthText }}</p>
						</div>
					</div>

					<p class="break-lines px-6 pb-8 pt-2 font-CabinFont text-base text-secondary">
						{{ item.text }}
					</p>
				</div>
			</div>
		</div>
	</section>

	<div class="scrollbar-navigation">
		<div class="scrollbar-track">
			<div
				class="scrollbar-handle"
				:style="{ left: handlePosition + '%', opacity: handleOpacity }"
			></div>
		</div>
	</div>
</template>

<script setup>
const { t, locale } = useI18n()

let items = reactive([])

const createItems = () => {
	return [
		{
			name: 'Tubaína',
			growth: '',
			growthText: t('strm_carousel_title_1'),
			text: t('strm_carousel_text_1'),
			imageSrc: 'images/webp/rapperUpScaler.webp'
		},
		{
			name: 'Sofi Frozza',
			growth: '',
			growthText: t('strm_carousel_title_2'),
			text: t('strm_carousel_text_2'),
			imageSrc: 'images/webp/cantoraUpScaler.webp'
		},
		{
			name: 'Talis e Welinton',
			growth: '',
			growthText: t('strm_carousel_title_3'),
			text: t('strm_carousel_text_3'),
			imageSrc: 'images/webp/sertanejoUpScaler.webp'
		},
		{
			name: 'AMARINA',
			growth: '',
			growthText: t('strm_carousel_title_4'),
			text: t('strm_carousel_text_4'),
			imageSrc: 'images/webp/mbpUpscaler.webp'
		},
		{
			name: 'Viguel',
			growth: '+237%',
			growthText: t('strm_carousel_title_5'),
			text: t('strm_carousel_text_5'),
			imageSrc: 'images/webp/viguel.webp'
		},
		{
			name: 'Malta',
			growth: '',
			growthText: t('strm_carousel_title_6'),
			text: t('strm_carousel_text_6'),
			imageSrc: 'images/webp/malta.webp'
		},
		{
			name: 'O Juh',
			growth: '',
			growthText: t('strm_carousel_title_7'),
			text: t('strm_carousel_text_7'),
			imageSrc: 'images/webp/ojuh.webp'
		},
		{
			name: 'Alex Cohen',
			growth: '+23%',
			growthText: t('strm_carousel_title_8'),
			text: t('strm_carousel_text_8'),
			imageSrc: 'images/webp/alex.webp'
		}
	]
}

watch(
	locale,
	() => {
		items = createItems()
	},
	{ immediate: true }
)

const cardsVisible = ref([])
const cards = ref([])
const handlePosition = ref(0)

const opacityValues = computed(() => {
	return cardsVisible.value.map((visible) => (visible ? 1 : 0.5))
})

let observer

const createObserver = () => {
	observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				const index = cards.value.indexOf(entry.target)
				if (index !== -1) {
					cardsVisible.value[index] = entry.isIntersecting
				}
			})
		},
		{
			root: null,
			threshold: 0.5 // Adjust this value to control the percentage of visibility required for full opacity
		}
	)
}

onMounted(() => {
	createObserver()
	cards.value.forEach((card) => observer.observe(card))
})

onUnmounted(() => {
	cards.value.forEach((card) => observer.unobserve(card))
	observer.disconnect()
})

const scrollToSlide = (index) => {
	if (cards.value[index]) {
		cards.value[index].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' })
	}
}

const thumbWidthPercentage = 100 * (40 / (80 * items.length))
const trackWidthPercentage = 100 - thumbWidthPercentage

const handleOpacity = computed(() => {
	const ratio = handlePosition.value / ((6 / (items.length - 1)) * 100)
	return 1 - ratio
})

watchEffect(() => {
	const activeIndex = cardsVisible.value.findIndex((visible) => visible)
	if (activeIndex !== -1) {
		handlePosition.value = (activeIndex / (items.length - 1)) * trackWidthPercentage
	}
})
</script>

<style scoped>
.gradient-border {
	box-sizing: border-box;
	display: inline-block;
	position: relative;
	padding: 1px;
	border-radius: 8px;
	width: 289px;
	overflow: hidden;
}

.gradient-border::before {
	content: '';
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background: linear-gradient(180deg, rgba(90, 87, 255, 1) 0%, rgba(90, 87, 255, 0) 100%) left,
		linear-gradient(180deg, rgba(90, 87, 255, 1) 0%, rgba(90, 87, 255, 0) 100%) right,
		linear-gradient(90deg, rgba(90, 87, 255, 1) 0%, rgba(90, 87, 255, 1) 100%) top,
		linear-gradient(
				90deg,
				rgba(90, 87, 255, 0.01) 0%,
				rgba(90, 87, 255, 0) 50%,
				rgba(90, 87, 255, 0.01) 100%
			)
			bottom,
		radial-gradient(circle at top left, rgba(90, 87, 255, 0.5) 0%, rgba(90, 87, 255, 0) 100%),
		radial-gradient(circle at top right, rgba(90, 87, 255, 0.5) 0%, rgba(90, 87, 255, 0) 100%),
		radial-gradient(circle at bottom left, rgba(90, 87, 255, 0) 50%, rgba(90, 87, 255, 0.1) 100%),
		radial-gradient(circle at bottom right, rgba(90, 87, 255, 0) 50%, rgba(90, 87, 255, 0.1) 100%);

	background-repeat: no-repeat;
	background-size: 4px 100%, 4px 100%, 100% 2px, 100% 2px, 16px 16px, 16px 16px; /* Fixed the bottom border size */

	background-position: 0px -4px, /* left */ 100% -0.5px, /* right */ 0px 0px, /* top */ 0px 100%,
		/* bottom */ 0px 2px, /* top-left */ 100% 2px; /* top-right */

	border-radius: 8px 8px 8px 8px; /* Adjusted the border radius values */
	z-index: -1;
}

.gradient-box {
	box-sizing: border-box;
	background: linear-gradient(180deg, #242366 0%, rgba(36, 35, 102, 0) 100%);
	border-radius: 8px 8px 8px 8px; /* Adjusted the border radius values */
	width: 100%;
	height: auto;
}

.snap-x-start {
	scroll-snap-type: x mandatory;
}

.snap-start {
	scroll-snap-align: center;
}
section::-webkit-scrollbar {
	display: none;
}

.scrollbar-navigation {
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 26px;
}

.scrollbar-track {
	position: relative;
	height: 4px;
	background-color: #ccc;
	border-radius: 3px;
	width: 80%;
	background: linear-gradient(90deg, #242366 18.34%, rgba(36, 35, 102, 0) 92.01%);
}

.scrollbar-handle {
	position: absolute;
	width: 40px;
	height: 4px;
	background-color: #5a57ff;
	border-radius: 11px;
	transition: left 0.5s;
	box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
}

@media (max-width: 640px) {
	.padding-card {
		padding-left: 2050px;
	}
}
@media (max-width: 428px) {
	.padding-card {
		padding-left: 2090px;
	}
}
@media (max-width: 405px) {
	.padding-card {
		padding-left: 2112px;
	}
}
</style>
