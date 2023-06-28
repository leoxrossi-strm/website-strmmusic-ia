<template>
	<section class="my-element mt-[40px] w-screen lg:mt-[210px]">
		<div class="mx-auto w-[80%] lg:w-[71%]">
			<div
				class="flex flex-col items-start justify-start pt-10 text-start lg:items-center lg:justify-center lg:pb-[243px] lg:pt-[230px] lg:text-center"
			>
				<div class="box">
					<nuxt-img
						src="images/svg/searchIcon.svg"
						alt="pesquisar"
						width="24"
						height="24"
						loading="lazy"
					/>
				</div>
				<h2
					class="pt-6 font-CabinFont text-2xl font-bold leading-[34px] lg:pt-8 2xl:text-5xl 2xl:leading-[58px]"
				>
					<span class="2xl:block">{{ $t('strm_ai_knowledge') }}</span>
					<span class="xl:text-primaryPurple"> {{ $t('strm_ai_knowledge_2') }}</span>
				</h2>
				<p class="pt-4 font-CabinFont text-lg text-secondary xl:text-2xl xl:leading-[34px]">
					{{ $t('strm_ai_knowledge_3') }}
					<span class="xl:block"> {{ $t('strm_ai_knowledge_4') }}</span>
				</p>
				<div class="flex pb-24 pt-[48px] xl:pt-7">
					<nuxt-img
						src="images/svg/u_Spotify.svg"
						alt="spotify"
						width="23"
						height="24"
						loading="lazy"
					/>
					<nuxt-img
						src="images/svg/u_apple.svg"
						alt="apple music"
						class="ml-6"
						width="24"
						height="25"
						loading="lazy"
					/>
					<nuxt-img
						src="images/svg/u_TikTok.svg"
						alt="tik tok"
						class="ml-6"
						width="24"
						height="24"
						loading="lazy"
					/>
					<nuxt-img
						src="images/svg/u_youtube.svg"
						alt="youtube"
						class="ml-6"
						width="28"
						height="27"
						loading="lazy"
					/>
				</div>
			</div>
		</div>
	</section>
</template>
<style scoped>
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
