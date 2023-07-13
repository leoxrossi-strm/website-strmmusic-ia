<template>
	<section class="z-50 mx-auto w-[80%] lg:mt-28 lg:max-w-[864px]" id="about">
		<div class="flex flex-col items-center justify-center">
			<p class="font-CabinFont text-base text-primaryPurple">FOUNDERS</p>
			<h2 class="py-4 font-CabinFont text-[40px] font-bold">Strm Music</h2>

			<nuxt-img
				src="images/svg/soundWaveColored.svg"
				alt="strm music"
				class="h-[82] w-[208px] lg:h-[159px] lg:w-[404px]"
				loading="lazy"
			/>
		</div>

		<div class="mt-[74px] flex flex-col">
			<div class="flex items-center">
				<div class="box">
					<nuxt-img
						src="images/webp/01.webp"
						alt="membro da equipe"
						style="width: 97px; height: 97px"
						loading="lazy"
					/>
				</div>
				<div>
					<h2 class="pl-4 text-2xl font-bold lg:text-[40px]">Fernando Gabriel</h2>
					<p class="pl-4 pt-4 font-CabinFont text-primaryPurple">Founder & CEO</p>
				</div>
			</div>
			<div>
				<p class="pt-5 font-CabinFont text-secondary" :class="toggleTruncateClass">
					{{ $t('strm_fernando_gabriel') }}
				</p>

				<p v-show="toggleIsOpen" class="mt-4 font-CabinFont text-secondary">
					{{ $t('strm_fernando_gabriel_2') }}
				</p>

				<div @click="toggleOpen" class="z-50 flex cursor-pointer items-baseline">
					<p class="text-lg text-primaryPurple">{{ toggleIsOpen ? 'Ler menos' : 'Ler mais' }}</p>
					<nuxt-img
						src="images/svg/arrowReadMore.svg"
						alt="leia mais"
						width="18"
						height="18"
						class="ml-4 transition-all delay-200"
						:style="{ transform: toggleIsOpen ? 'rotate(180deg)' : 'rotate(0)' }"
						loading="lazy"
					/>
				</div>
			</div>
		</div>
		<div class="my-12 border border-solid border-gray-300 border-opacity-20"></div>

		<div class="mt-[74px] flex flex-col">
			<div class="flex items-center">
				<div class="box">
					<nuxt-img
						src="images/webp/02.webp"
						alt="membro da equipe"
						class="h-[97px] w-[108px] lg:h-[97px] lg:w-[97px]"
						loading="lazy"
					/>
				</div>
				<div>
					<h2 class="pl-4 text-2xl font-bold lg:text-[40px]">Thiago Lobão</h2>
					<p class="pl-4 pt-4 font-CabinFont text-primaryPurple">
						Founder & Chief Investment Officer
					</p>
				</div>
			</div>
			<div>
				<p class="pt-5 font-CabinFont text-secondary" :class="toggleTruncateClass1">
					{{ $t('strm_thiago_lobo') }}
				</p>
				<p v-show="toggleIsOpen1" class="mt-4 font-CabinFont text-secondary">
					{{ $t('strm_thiago_lobo_2') }}
				</p>
				<div @click="toggleOpen1" class="relative z-50 flex cursor-pointer items-baseline">
					<p class="text-lg text-primaryPurple">{{ toggleIsOpen1 ? 'Ler menos' : 'Ler mais' }}</p>
					<nuxt-img
						src="images/svg/arrowReadMore.svg"
						alt="leia mais"
						class="ml-4 transition-all delay-200"
						:style="{ transform: toggleIsOpen1 ? 'rotate(180deg)' : 'rotate(0)' }"
						width="18"
						height="18"
						loading="lazy"
					/>
				</div>
			</div>
		</div>
	</section>
</template>
<script setup>
const toggleIsOpen = ref(false)
const toggleIsOpen1 = ref(false)

const toggleOpen = () => {
	toggleIsOpen.value = !toggleIsOpen.value
}

const toggleTruncateClass = computed(() => {
	return !toggleIsOpen.value ? 'fade-truncate' : ''
})

const toggleOpen1 = () => {
	toggleIsOpen1.value = !toggleIsOpen1.value
}

const toggleTruncateClass1 = computed(() => {
	return !toggleIsOpen1.value ? 'fade-truncate' : ''
})
</script>

<style scoped>
.box {
	position: relative;
	padding: 0px; /* Adjust the padding */
	border-radius: 99px; /* Adjust the border-radius */
	box-shadow: 0px 0px 26px -6px #7673f2;
}

.box::before {
	content: '';
	position: absolute;
	inset: 0;
	width: 97px;
	border-radius: 99px;
	padding: 2px;
	background: linear-gradient(
		to right,
		#e64b4b 0%,
		#f3795e 14.28%,
		#e4bc5c 28.56%,
		#39d68d 42.84%,
		#37b1e4 57.12%,
		#874fc6 71.4%,
		#f05576 85.68%
	);
	-webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
	-webkit-mask-composite: xor;
	mask-composite: exclude;
}

.fade-truncate {
	width: 100%;
	height: 100%;
	position: relative;
}
.fade-truncate::after {
	content: '';
	position: absolute;
	bottom: 0;
	left: 0px;
	height: 100%;
	inset: 0;
	background: linear-gradient(transparent 0%, #080716 100%);
}
.expand-leave-to {
	opacity: 0;
	transform: scaleY(0);
	transform-origin: top;
}
.expand-enter-from {
	opacity: 0;
	transform: scaleY(-9);
	transform-origin: top;
}

.expand-enter-active,
.expand-leave-active {
	transition: all 0.3s ease-in-out;
}
</style>
