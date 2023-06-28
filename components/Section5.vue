<template>
	<section class="mx-auto mt-[94px] w-[80%] lg:max-w-[1440px]">
		<div
			class="flex flex-col items-start justify-start text-left lg:items-center lg:justify-center lg:text-center"
		>
			<p class="font-CabinFont text-lg text-secondary lg:text-3xl">
				{{ $t('strm_music_succeed') }}
			</p>
			<p class="pt-4 font-CabinFont text-2xl lg:text-[40px]">
				{{ $t('strm_music_succeed_2') }}
				<span class="text-primaryPurple"> {{ $t('strm_music_succeed_3') }} </span>
				<span class="block lg:inline"> {{ $t('strm_music_succeed_4') }}</span>
			</p>
		</div>

		<div class="hidden gap-y-14 pt-14 sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
			<div class="mr-4 flex snap-start flex-col items-center">
				<nuxt-img
					src="images/webp/rapperUpScaler.webp"
					alt="musicos"
					class="rounded-[28px] pb-4"
					loading="lazy"
					width="344"
					height="375"
				/>
				<div class="gradient-border">
					<div class="gradient-box">
						<div class="flex flex-col items-start px-6 pt-[22px]">
							<p class="font-CabinFont text-2xl font-bold">Tubaína</p>
							<div class="flex items-center pt-[8px]">
								<p class="pr-4 font-CabinFont text-lg">{{ $t('strm_spotify_news') }}</p>
							</div>
						</div>

						<p class="break-lines px-6 pb-8 pt-2 text-secondary">
							{{ $t('strm_monthly_listeners') }}
						</p>
					</div>
				</div>
			</div>
			<div class="mr-4 flex snap-start flex-col items-center">
				<nuxt-img
					src="images/webp/cantoraUpScaler.webp"
					alt="musicos"
					class="rounded-[28px] pb-4"
					loading="lazy"
					width="344"
					height="375"
				/>
				<div class="gradient-border">
					<div class="gradient-box">
						<div class="flex flex-col items-start px-6 pt-[22px]">
							<p class="font-CabinFont text-2xl font-bold">Sofi Frozza</p>
							<div class="flex items-center pt-[8px]">
								<p class="pr-4 font-CabinFont text-lg">
									{{ $t('strm_indie_brasil') }}
								</p>
							</div>
						</div>

						<p class="break-lines px-6 pb-8 pt-2 text-secondary">
							{{ $t('strm_collaboration') }}
						</p>
					</div>
				</div>
			</div>
			<div class="mr-4 flex snap-start flex-col items-center">
				<nuxt-img
					src="images/webp/sertanejoUpScaler.webp"
					alt="musicos"
					class="rounded-[28px] pb-4"
					loading="lazy"
					width="344"
					height="375"
				/>
				<div class="gradient-border">
					<div class="gradient-box">
						<div class="flex flex-col items-start px-6 pt-[22px]">
							<p class="font-CabinFont text-2xl font-bold">Talis e Welinton</p>
							<div class="flex items-center pt-[8px]">
								<p class="pr-4 font-CabinFont text-lg">
									{{ $t('strm_streams_30_days') }}
								</p>
							</div>
						</div>

						<p class="break-lines px-6 pb-8 pt-2 text-secondary">
							{{ $t('strm_streams_achievement') }}
						</p>
					</div>
				</div>
			</div>
			<div class="mr-4 flex snap-start flex-col items-center">
				<nuxt-img
					src="images/webp/mbpUpscaler.webp"
					alt="musicos"
					class="rounded-[28px] pb-4"
					loading="lazy"
					width="344"
					height="375"
				/>
				<div class="gradient-border">
					<div class="gradient-box">
						<div class="flex flex-col items-start px-6 pt-[22px]">
							<p class="font-CabinFont text-2xl font-bold">AMARINA</p>
							<div class="flex items-center pt-[8px]">
								<p class="pr-4 font-CabinFont text-lg">
									{{ $t('strm_spotify_soft_pop') }}
								</p>
							</div>
						</div>

						<p class="break-lines px-6 pb-8 pt-2 text-secondary">
							{{ $t('strm_collaboration_amarina') }}
						</p>
					</div>
				</div>
			</div>
			<div class="mr-4 flex snap-start flex-col items-center">
				<nuxt-img
					src="images/webp/viguel.webp"
					alt="musicos"
					class="rounded-[28px] pb-4"
					loading="lazy"
					width="344"
					height="375"
				/>
				<div class="gradient-border">
					<div class="gradient-box">
						<div class="flex flex-col items-start px-6 pt-[22px]">
							<p class="font-CabinFont text-2xl font-bold">Viguel</p>
							<div class="flex items-center pt-[8px]">
								<p class="pr-4 font-CabinFont text-lg">
									{{ $t('strm_growth_237') }}
								</p>
							</div>
						</div>

						<p class="break-lines px-6 pb-8 pt-2 text-secondary">
							{{ $t('strm_spotify_listeners') }}
						</p>
					</div>
				</div>
			</div>
			<div class="mr-4 flex snap-start flex-col items-center">
				<nuxt-img
					src="images/webp/malta.webp"
					alt="musicos"
					class="rounded-[28px] pb-4"
					loading="lazy"
					width="344"
					height="375"
				/>
				<div class="gradient-border">
					<div class="gradient-box">
						<div class="flex flex-col items-start px-6 pt-[22px]">
							<p class="font-CabinFont text-2xl font-bold">Malta</p>
							<div class="flex items-center pt-[8px]">
								<p class="pr-4 font-CabinFont text-lg">
									{{ $t('strm_youtube_music_cover') }}
								</p>
							</div>
						</div>

						<p class="break-lines px-6 pb-8 pt-2 text-secondary">
							{{ $t('strm_boosts_malta') }}
						</p>
					</div>
				</div>
			</div>
			<div class="mr-4 flex snap-start flex-col items-center">
				<nuxt-img
					src="images/webp/ojuh.webp"
					alt="musicos"
					class="rounded-[28px] pb-4"
					loading="lazy"
					width="344"
					height="375"
				/>
				<div class="gradient-border">
					<div class="gradient-box">
						<div class="flex flex-col items-start px-6 pt-[22px]">
							<p class="font-CabinFont text-2xl font-bold">O Juh</p>
							<div class="flex items-center pt-[8px]">
								<p class="pr-4 font-CabinFont text-lg">
									{{ $t('strm_spotify_playlist') }}
								</p>
							</div>
						</div>

						<p class="break-lines px-6 pb-8 pt-2 text-secondary">
							{{ $t('strm_assistance_o_juh') }}
						</p>
					</div>
				</div>
			</div>
			<div class="mr-4 flex snap-start flex-col items-center">
				<nuxt-img
					src="images/webp/alex.webp"
					alt="musicos"
					class="rounded-[28px] pb-4"
					loading="lazy"
					width="344"
					height="375"
				/>
				<div class="gradient-border">
					<div class="gradient-box">
						<div class="flex flex-col items-start px-6 pt-[22px]">
							<p class="font-CabinFont text-2xl font-bold">Alex Cohen</p>
							<div class="flex items-center pt-[8px]">
								<p class="pr-4 font-CabinFont text-lg">
									{{ $t('strm_monthly_listeners_23') }}
								</p>
							</div>
						</div>

						<p class="break-lines px-6 pb-8 pt-2 text-secondary">
							{{ $t('strm_monthly_listeners_increase') }}
						</p>
					</div>
				</div>
			</div>
		</div>
	</section>

	<div class="sm:hidden">
		<LazyCarousel />
	</div>
</template>
<style scoped>
.gradient-border {
	box-sizing: border-box;
	display: inline-block;
	position: relative;
	padding: 1px;
	border-radius: 8px;
	overflow: hidden;
	width: 100%;
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
</style>
