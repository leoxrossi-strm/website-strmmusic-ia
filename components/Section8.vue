<template>
	<section class="bg relative mt-20 overflow-hidden lg:mt-28">
		<div
			class="relative z-50 mx-auto w-[80%] pt-[90px] text-left lg:max-w-[1440px] lg:pb-[182px] lg:pt-40 lg:text-left"
		>
			<h2
				class="relative z-50 font-CabinFont text-2xl font-bold leading-[33px] lg:text-5xl lg:leading-[58px]"
			>
				<span class="lg:block">
					{{ $t('strm_career_stage') }}
				</span>
				{{ $t('strm_career_stage_2') }}
			</h2>
			<p class="relative z-50 pt-4 font-CabinFont text-base text-secondary lg:text-xl">
				<span class="lg:block">
					{{ $t('strm_eligible_distribute') }}
				</span>

				{{ $t('strm_eligible_distribute_2') }}
				<span class="lg:block">
					{{ $t('strm_eligible_distribute_3') }}
				</span>
			</p>

			<p class="relative z-50 pt-6 font-CabinFont text-base font-bold lg:text-xl">
				<span class="lg:block">
					<span class="text-[#33CAE3]">
						{{ $t('strm_100_openings') }}
					</span>
					{{ $t('strm_100_openings_2') }}
				</span>
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
				<ButtonOut text="Fale com seu A&R" />
			</div>
			<div class="singer z-0 w-[270px] lg:w-[750px]">
				<nuxt-img
					src="images/webp/caucasianFemaleSingerBlur.webp"
					alt="cantora"
					class="lg:hidden"
					loading="lazy"
					placeholder="images/gif/placeholder.gif"
				/>
				<nuxt-img
					src="images/webp/singer.webp"
					alt="cantora"
					class="hidden lg:block"
					loading="lazy"
				/>
			</div>
		</div>
		<div class="pink-shape"></div>
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

	.singer {
		position: absolute;
		top: 26px;
		left: 50%;
		padding: 20px 40px 20px 40px;
		background: radial-gradient(
			75.5% 87.09% at 30.35% 59.7%,
			rgba(44, 68, 194, 0) 0%,
			rgba(87, 121, 255, 0.16) 56.9%,
			rgba(154, 174, 255, 0.47) 100%
		);
		opacity: 0.85;
		backdrop-filter: blur(5.61578px);
		/* Note: backdrop-filter has minimal browser support */
		border-radius: 2139.35px;
		transform: translateX(-50%);
		mix-blend-mode: multiply;
	}
}

@media (min-width: 1024px) {
	.bg {
		background: linear-gradient(180deg, #5a57ff 0%, rgba(90, 87, 255, 0) 67.33%);
	}
	.pink-shape {
		position: absolute;
		width: 900px;
		height: 901px;
		left: 1310px;
		top: -500px;

		background: #f034a6;
		opacity: 0.9;
		filter: blur(107px);
		z-index: 0;
	}

	.singer {
		position: absolute;
		top: 40px;
		right: 0;

		padding: 0 90px 0 90px;

		opacity: 0.85;
		backdrop-filter: blur(5.61578px);
		/* Note: backdrop-filter has minimal browser support */
		border-radius: 2139.35px;
		mix-blend-mode: luminosity;
		opacity: 0.65;
	}
}
</style>
