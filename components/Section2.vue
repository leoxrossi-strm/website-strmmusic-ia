<template>
	<section class="relative z-10">
		<div class="mx-auto mt-[-132px] w-[80%] lg:mt-[275px] lg:max-w-[1440px]">
			<h2 class="font-CabinFont text-lg text-primaryPurple">{{ $t('strm_accelerate_music') }}</h2>
			<p class="py-4 text-2xl font-bold leading-[34px] xl:text-5xl xl:leading-[67px]">
				<span class="lg:block">
					{{ $t('strm_advances') }}
				</span>
				{{ $t('strm_advances_2') }}
				<span class="lg:block"> {{ $t('strm_advances_3') }} </span>
			</p>

			<p class="font-CabinFont text-lg text-secondary lg:text-2xl lg:leading-[34px]">
				<span class="lg:block"> {{ $t('strm_major_label') }} </span>
				{{ $t('strm_major_label_2') }}
			</p>

			<div class="mt-8">
				<div class="relative grid grid-cols-1 gap-5 lg:grid-cols-2 xl:grid-cols-4">
					<CardPurple
						title="strm_digital_distribution"
						text="strm_active_indicator"
						icon="images/svg/icon1.svg"
						status="strm_available_now"
					/>
					<CardPurple
						title="strm_access_resource"
						text="strm_access_invest"
						icon="images/svg/icon2.svg"
						status="strm_available_now"
					/>
					<CardPurple
						title="strm_data_science"
						text="strm_connect_producers"
						icon="images/svg/icon2.svg"
						status="strm_under_development"
					/>
					<CardPurple
						title="strm_strategic_planning"
						text="strm_planning_ai"
						icon="images/svg/icon3.svg"
						status="strm_under_development"
					/>
				</div>
			</div>
			<div class="flex flex-col items-start gap-4 pt-8 lg:flex-row lg:pt-11">
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
			class="absolute right-[-170px] top-[-8px] -z-10 w-[340px] rounded-full lg:hidden"
		>
			<source src="/videos/waveVideo.mp4" type="video/mp4" />
		</video>

		<video
			playsinline
			autoplay
			muted
			loop
			class="absolute right-[230px] top-[-8px] -z-10 hidden w-[440px] rounded-full lg:block"
		>
			<source src="/videos/waveVideo.mp4" type="video/mp4" />
		</video>
	</section>
</template>
