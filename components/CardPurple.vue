<template>
	<div class="gradient-border">
		<div class="gradient-box">
			<div class="flex items-start justify-between px-4 pt-[22px]">
				<nuxt-img :src="icon" alt="ícone" loading="lazy" />
				<div class="flex items-center pb-[8px]">
					<div :class="status == 'Disponível agora' ? 'avaialable' : 'development'">
						<p class="pr-4 font-CabinFont text-sm font-bold">{{ status }}</p>
					</div>
					<div>
						<nux-img
							v-if="status === 'Disponível agora'"
							src="images/svg/available.svg"
							alt="ícone"
						/>
						<nux-img v-else src="images/svg/development.svg" alt="ícone" loading="lazy" />
					</div>
				</div>
			</div>
			<h2 class="pl-4 pt-0 font-CabinFont text-xl font-bold lg:pb-[8px] lg:pt-[14px]">
				{{ title }}
			</h2>
			<p class="mt-3 pb-8 pl-4 pr-2 text-secondary sm:mt-3">{{ text }}</p>
		</div>
	</div>
</template>
<script setup>
const props = defineProps({
	icon: {
		type: String,
		required: true
	},
	status: {
		type: String,
		required: true
	},
	title: {
		type: String,
		required: true
	},
	text: {
		type: String,
		required: true
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

.avaialable {
	color: #33e0a1;
}

.development {
	color: #edb900;
}

@media (max-width: 480px) {
	.break-lines {
		white-space: pre-line;
	}
	.martop3 {
		margin-top: -16px;
	}
}

@media (max-width: 369px) {
	.break-lines {
		display: inline-block;
	}
}
</style>
