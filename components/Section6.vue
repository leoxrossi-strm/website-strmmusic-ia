<template>
	<section class="relative w-full pt-24">
		<div class="mx-auto w-[80%] lg:max-w-[1440px] lg:pb-[174px] lg:pt-44">
			<h2 class="font-CabinFont text-2xl font-bold leading-[33px] lg:text-5xl lg:leading-[58px]">
				<span class="block">
					{{ $t('strm_services_needed') }}
				</span>

				{{ $t('strm_services_needed_2') }}
			</h2>
			<p
				class="max-w-[194px] pt-4 font-CabinFont text-lg text-secondary sm:max-w-max lg:text-3xl lg:leading-[42px]"
			>
				<span class="lg:block">
					{{ $t('strm_different_packs') }}
				</span>

				{{ $t('strm_different_packs_2') }}
			</p>

			<div class="mt-9 flex flex-col items-start justify-start gap-4 lg:flex-row">
				<span class="lg:hidden">
					<ButtonBg />
				</span>
				<span class="hidden lg:block">
					<ButtonBg />
				</span>
				<ButtonOut text="Fale com seu A&R" />
			</div>
		</div>
		<video
			playsinline
			autoplay
			muted
			loop
			class="absolute right-[-170px] top-[18px] -z-10 w-[340px] rounded-full lg:hidden"
		>
			<source src="/videos/waveVideo.mp4" type="video/mp4" />
		</video>

		<video
			playsinline
			autoplay
			muted
			loop
			class="absolute right-[230px] top-[194px] -z-10 hidden w-[440px] rounded-full lg:block"
		>
			<source src="/videos/waveVideo.mp4" type="video/mp4" />
		</video>
	</section>
</template>
