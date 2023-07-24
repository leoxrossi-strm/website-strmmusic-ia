<template>
	<section class="my-element relative mt-0 w-screen lg:mt-[210px]" id="diagnosis">
		<div
			class="mx-auto flex w-[80%] flex-col pb-16 pt-12 text-left lg:max-w-[1440px] lg:pb-40 lg:pt-40 lg:text-left"
		>
			<!-- <div class="flex items-center justify-center">
				<nuxt-img
					src="images/webp/soundwave.webp"
					alt="sound"
					class="lg:hidden"
					width="54"
					height="54"
					loading="lazy"
				/>

				
			</div> -->
			<h2
				class="relative z-50 pt-6 font-CabinFont text-2xl font-bold leading-[33px] lg:text-5xl lg:leading-[58px]"
			>
				<span class="lg:block"> {{ $t('strm_career_stage') }}</span> {{ $t('strm_career_stage_2') }}
			</h2>
			<p class="relative z-50 pt-4 font-CabinFont text-base text-secondary lg:text-xl">
				<span class="lg:block"> {{ $t('strm_eligible_distribute') }}</span>
				{{ $t('strm_eligible_distribute_2') }}
				<span class="lg:block">
					{{ $t('strm_eligible_distribute_3') }}
				</span>
			</p>

			<p class="relative z-50 pt-6 font-CabinFont text-base font-bold lg:text-xl">
				<span class="lg:block">
					<span class="text-[#33CAE3]"> {{ $t('strm_100_openings') }}</span>
					{{ $t('strm_100_openings_2') }}</span
				>
				{{ $t('strm_100_openings_3') }}
			</p>
			<div
				class="invisible relative z-50 flex flex-col items-start justify-start gap-4 pt-8 lg:flex-row"
			>
				<span class="lg:hidden">
					<ButtonBg />
				</span>
				<span class="hidden lg:block">
					<ButtonBg />
				</span>
				<ButtonOut />
			</div>
		</div>

		<video
			playsinline
			autoplay
			muted
			loop
			class="absolute right-[230px] top-[134px] -z-10 hidden w-[440px] rounded-full lg:block"
		>
			<source src="/videos/waveVideo.mp4" type="video/mp4" />
		</video>
	</section>
</template>

<style scoped>
@media (max-width: 1024px) {
	.bg {
		height: 601px;
		background: linear-gradient(180deg, #5a57ff 0%, rgba(90, 87, 255, 0) 67.33%);
	}
	.pink-shape {
		position: absolute;
		width: 285px;
		height: 213px;
		right: -120px;
		top: -80px;

		background: #f034a6;
		opacity: 0.9;
		filter: blur(28.6137px);
		z-index: 0;
	}
}
.box {
	position: relative;
	padding: 20px; /* Adjust the padding */
	border-radius: 99px; /* Adjust the border-radius */
	box-shadow: 0px 0px 26px -6px #7673f2;
}

.box::before {
	content: '';
	position: absolute;
	inset: 0;
	width: 70px;
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

.my-element {
	background: linear-gradient(180deg, #5a57ff 11.74%, rgba(36, 35, 102, 0) 100%);
	background-image: url('/images/webp/bgmobile.webp');
	/* Optional properties */
	background-repeat: no-repeat; /* Prevent the image from repeating */
	background-size: cover; /* Resize the image to cover the entire element */
}

@media (min-width: 640px) {
	.my-element {
		background: linear-gradient(180deg, #5a57ff 11.74%, rgba(36, 35, 102, 0) 100%);

		background-image: url('/images/png/bgMusicMin.png');
		/* Optional properties */
		background-repeat: no-repeat; /* Prevent the image from repeating */
		background-size: cover; /* Resize the image to cover the entire element */
		background-attachment: fixed;
	}
}
</style>
