<template>
	<header
		class="mx-auto h-[825px] w-screen lg:h-screen bg-section relative video-background overflow-hidden"
	>
		<NavBar />
		<div
			class="w-full lg:max-w-[1440px] flex flex-col items-start lg:items-start gap-4 lg:pl-36 pt-28 lg:pt-32 2xl:pl-36 2xl:pt-36"
		>
			<div class="hidden lg:block">
				<video playsinline autoplay muted loop>
					<source src="/videos/video_strm01.mp4" type="video/mp4" />
				</video>
			</div>
			<h1 class="titleHeader">
				Tudo que uma <span class="block"> grande gravadora</span> poderia te oferecer
			</h1>
			<h2 class="px-12 lg:px-0 lg:text-2xl font-CabinFont">
				com a liberdade que só um artista independente pode ter.
			</h2>

			<div class="px-12 flex flex-col gap-6 mt-5">
				<span class="lg:hidden">
					<ButtonBg />
				</span>
				<span class="lg:hidden">
					<ButtonOut />
				</span>
			</div>
			<span class="hidden lg:flex gap-4 mt-2">
				<ButtonBg />
				<ButtonOut url="#" />
			</span>
		</div>
		<div class="black-retangle"></div>
		<div class="pink-retangle"></div>
		<div class="blue-retangle"></div>
	</header>
</template>
<style scoped>
.pink-retangle {
	position: absolute;
	width: 663px;
	height: 270px;
	right: -196px;
	top: 303px;
	z-index: 9999;
	background: radial-gradient(27.27% 68.6% at 63.59% 100%, #ec01a7 0%, rgba(236, 1, 144, 0) 100%);
	transform: rotate(-90deg);
	z-index: -1;
}

.blue-retangle {
	position: absolute;
	width: 100%;
	height: 825px;
	left: 0px;
	top: 8px;
	z-index: -1;

	background: radial-gradient(
		148.38% 59.7% at 116.82% 96.36%,
		#5779ff 0%,
		rgba(79, 109, 231, 0.880208) 18.75%,
		rgba(17, 24, 51, 0) 100%
	);
}

@media (min-width: 1024px) {
	.video-background {
		position: relative;
		overflow: hidden;
	}

	.video-background video {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
		z-index: -1;
		opacity: 0.5;
	}
	.black-retangle {
		display: none;
	}
	.bg-section {
		background: radial-gradient(
			117.48% 45.51% at 50% 92.59%,
			#5779ff 0%,
			rgba(79, 109, 231, 0.880208) 5.3%,
			rgba(17, 24, 51, 0) 100%
		);
	}
	.pink-retangle {
		position: absolute;
		width: 1006px;
		height: 742px;
		right: 0px;
		bottom: -150px;
		background: radial-gradient(
			53.33% 58.91% at 80.82% 81.27%,
			#ec01a7 0%,
			rgba(236, 1, 144, 0) 100%
		);
		transform: rotate(0deg);
		top: unset;
	}
	.blue-retangle {
		display: none;
	}

	.break-line-2 {
		display: block;
	}

	.text-stroke {
		-webkit-text-stroke: 1px #e6e3e3;
	}
}

@media (max-width: 1024px) {
	.black-retangle {
		position: absolute;
		width: 100%;
		height: 446px;
		background: linear-gradient(180deg, #080716 0%, rgba(8, 7, 22, 0) 100%);
		transform: rotate(-180deg);
		z-index: 1;
	}
}

@media (max-width: 801px) {
	.black-retangle {
		position: absolute;
		width: 100%;
		height: 379px;
		background: linear-gradient(180deg, #080716 0%, rgba(8, 7, 22, 0) 100%);
		transform: rotate(-180deg);
		z-index: 1;
	}
}

@media (max-width: 491px) {
	.black-retangle {
		position: absolute;
		width: 100%;
		height: 312px;
		background: linear-gradient(
			180deg,
			#080716 0%,
			rgba(8, 7, 22, 0.952) 25%,
			rgba(8, 7, 22, 0.705) 50%,
			rgba(8, 7, 22, 0.418) 75%,
			rgba(8, 7, 22, 0) 100%
		);
		transform: rotate(-180deg);
		z-index: 1;
	}
}

@media (max-width: 492px) {
	.break-line-2 {
		display: inline;
	}
	.break-line {
		display: block;
	}
}
</style>
