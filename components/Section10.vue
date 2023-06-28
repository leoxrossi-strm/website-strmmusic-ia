<template>
	<section class="relative mt-20 flex lg:mt-28 lg:items-center">
		<div
			class="relative mx-auto w-[80%] pt-[24px] lg:max-w-[1440px] lg:pb-[182px] lg:pt-[64px] lg:text-left"
		>
			<div class="mt-[24px] flex flex-col">
				<div class="flex items-center">
					<!-- <div class="lg:hidden">
						<div class="box">
							<nuxt-img src="images/webp/soundwave.webp" alt="onda de som" width="54" height="54" />
						</div>
					</div> -->
				</div>
				<div class="flex flex-col">
					<p class="pl-[0px] text-2xl font-bold leading-[33px] lg:pl-0 lg:text-5xl">
						{{ $t('strm_behind_strm') }}
					</p>
					<p
						class="pl-[0px] pt-2 font-CabinFont text-secondary lg:pl-0 lg:pt-5 lg:text-xl lg:leading-7"
					>
						{{ $t('strm_people_breathe_music') }}
						<span class="lg:block">
							{{ $t('strm_people_breathe_music_2') }}
						</span>
					</p>
				</div>
			</div>

			<div class="grid grid-cols-1 gap-x-6 gap-y-1 lg:grid lg:grid-cols-2 2xl:grid-cols-3">
				<div class="mt-[74px] flex flex-col">
					<div class="flex items-center">
						<div class="boxPicture">
							<nuxt-img
								src="images/webp/010.webp"
								alt="membro da equipe"
								width="97"
								height="97"
								loading="lazy"
							/>
						</div>
						<div>
							<h2 class="pl-4 text-2xl font-bold lg:text-xl">Konrad Dantas</h2>
							<p class="pl-4 pt-2 font-CabinFont text-primaryPurple">
								Kondzilla | Investidor & Board Member
							</p>
						</div>
					</div>
					<div>
						<p class="pt-5 font-CabinFont text-lg leading-6 text-secondary">
							{{ $t('strm_konrad_dantas') }}
						</p>
					</div>
				</div>

				<div class="mt-[74px] flex flex-col">
					<div class="flex items-center">
						<div class="boxPicture">
							<nuxt-img
								src="images/webp/08.webp"
								alt="membro da equipe"
								width="97"
								height="97"
								loading="lazy"
							/>
						</div>
						<div>
							<h2 class="pl-4 text-2xl font-bold lg:text-xl">Elliane Boogie Naipe</h2>
							<p class="pl-4 pt-2 font-CabinFont text-primaryPurple">
								Boogie Naipe | Investidora <span class="block"> & Board Member</span>
							</p>
						</div>
					</div>
					<div>
						<p class="pt-5 font-CabinFont text-lg leading-6 text-secondary">
							{{ $t('strm_elliane_boogie') }}
						</p>
					</div>
				</div>
				<div class="md:hidden 2xl:block"></div>
				<div class="mt-[74px] flex flex-col">
					<div class="flex items-center">
						<div class="boxPicture">
							<nuxt-img
								src="images/webp/011.webp"
								alt="membro da equipe"
								width="97"
								height="97"
								loading="lazy"
							/>
						</div>
						<div>
							<h2 class="pl-4 text-2xl font-bold lg:text-xl">Fabio Fakri</h2>
							<p class="pl-4 pt-2 font-CabinFont text-primaryPurple">
								Futurum Capital | F&S | Investidor <span class="block"> & Board Member</span>
							</p>
						</div>
					</div>
					<div>
						<p class="pt-5 font-CabinFont text-lg leading-6 text-secondary">
							{{ $t('strm_fabi_fakri') }}
						</p>
					</div>
				</div>

				<div class="mt-[74px] flex flex-col">
					<div class="flex items-center">
						<div class="boxPicture">
							<nuxt-img
								src="images/webp/012.webp"
								alt="membro da equipe"
								width="97"
								height="97"
								loading="lazy"
							/>
						</div>
						<div>
							<h2 class="pl-4 text-2xl font-bold lg:text-xl">Henrique Portugal</h2>
							<p class="pl-4 pt-2 font-CabinFont text-primaryPurple">
								Skank | Investidor & Board member
							</p>
						</div>
					</div>
					<div>
						<p class="pt-5 font-CabinFont text-lg leading-6 text-secondary">
							{{ $t('strm_henrique_portugal') }}
						</p>
					</div>
				</div>

				<div class="mt-[74px] flex flex-col">
					<div class="flex items-center">
						<div class="boxPicture">
							<nuxt-img
								src="images/webp/22.webp"
								alt="membro da equipe"
								width="97"
								height="97"
								loading="lazy"
							/>
						</div>
						<div>
							<h2 class="pl-4 text-2xl font-bold lg:text-xl">Guilherme Veiga</h2>
							<p class="pl-4 pt-2 font-CabinFont text-primaryPurple">
								Jive | Investidor & Board Member
							</p>
						</div>
					</div>
					<div>
						<p class="pt-5 font-CabinFont text-lg leading-6 text-secondary">
							{{ $t('strm_guilherme_veiga') }}
						</p>
					</div>
				</div>

				<div class="mt-[74px] flex flex-col">
					<div class="flex items-center">
						<div class="boxPicture">
							<nuxt-img
								src="images/webp/23.webp"
								alt="membro da equipe"
								width="97"
								height="97"
								loading="lazy"
							/>
						</div>
						<div>
							<h2 class="pl-4 text-2xl font-bold lg:text-xl">Rodrigo Ribeiro</h2>
							<p class="pl-4 pt-2 font-CabinFont text-primaryPurple">
								Jive | Investidor & Board Member
							</p>
						</div>
					</div>
					<div>
						<p class="pt-5 font-CabinFont text-lg leading-6 text-secondary">
							{{ $t('strm_rodrigo_ribeiro') }}
						</p>
					</div>
				</div>

				<div class="mt-[74px] flex flex-col">
					<div class="flex items-center">
						<div class="boxPicture">
							<nuxt-img
								src="images/webp/015.webp"
								alt="membro da equipe"
								width="97"
								height="97"
								loading="lazy"
							/>
						</div>
						<div>
							<h2 class="pl-4 text-2xl font-bold lg:text-xl">João Teixeira</h2>
							<p class="pl-4 pt-2 font-CabinFont text-primaryPurple">Certsys Investidor</p>
						</div>
					</div>
					<div>
						<p class="pt-5 font-CabinFont text-lg leading-6 text-secondary">
							{{ $t('strm_joao_teixeira') }}
						</p>
					</div>
				</div>

				<div class="mt-[74px] flex flex-col">
					<div class="flex items-center">
						<div class="boxPicture">
							<nuxt-img
								src="images/webp/016.webp"
								alt="membro da equipe"
								width="97"
								height="97"
								loading="lazy"
							/>
						</div>
						<div>
							<h2 class="pl-4 text-2xl font-bold lg:text-xl">Rafael Lopes</h2>
							<p class="pl-4 pt-2 font-CabinFont text-primaryPurple">COO & Board Member</p>
						</div>
					</div>
					<div>
						<p class="pt-5 font-CabinFont text-lg leading-6 text-secondary">
							{{ $t('strm_rafael_lopes') }}
						</p>
					</div>
				</div>
				<div class="mt-[74px] flex flex-col">
					<div class="flex items-center">
						<div class="boxPicture">
							<nuxt-img
								src="images/webp/017.webp"
								alt="membro da equipe"
								width="97"
								height="97"
								loading="lazy"
							/>
						</div>
						<div>
							<h2 class="pl-4 text-2xl font-bold lg:text-xl">Leonardo Rossi</h2>
							<p class="pl-4 pt-2 font-CabinFont text-primaryPurple">CTO & Board Member</p>
						</div>
					</div>
					<div>
						<p class="pt-5 font-CabinFont text-lg leading-6 text-secondary">
							{{ $t('strm_leonardo_rossi') }}
						</p>
					</div>
				</div>

				<div class="mt-[74px] flex flex-col">
					<div class="flex items-center">
						<div class="boxPicture">
							<nuxt-img
								src="images/webp/018.webp"
								alt="membro da equipe"
								width="97"
								height="97"
								loading="lazy"
							/>
						</div>
						<div>
							<h2 class="pl-4 text-2xl font-bold lg:text-xl">Caco Grandino</h2>
							<p class="pl-4 pt-2 font-CabinFont text-primaryPurple">
								NX Zero | Investidor & Board member
							</p>
						</div>
					</div>
					<div>
						<p class="pt-5 font-CabinFont text-lg leading-6 text-secondary">
							{{ $t('strm_caco_grandino') }}
						</p>
					</div>
				</div>

				<div class="mt-[74px] flex flex-col">
					<div class="flex items-center">
						<div class="boxPicture">
							<nuxt-img
								src="images/webp/019.webp"
								alt="membro da equipe"
								width="97"
								height="97"
								loading="lazy"
							/>
						</div>
						<div>
							<h2 class="pl-4 text-2xl font-bold lg:text-xl">Guto Consentino</h2>
							<p class="pl-4 pt-2 font-CabinFont text-primaryPurple">CMO & Board member</p>
						</div>
					</div>
					<div>
						<p class="pt-5 font-CabinFont text-lg leading-6 text-secondary">
							{{ $t('strm_guto_consentino') }}
						</p>
					</div>
				</div>

				<div class="mt-[74px] flex flex-col">
					<div class="flex items-center">
						<div class="boxPicture">
							<nuxt-img
								src="images/webp/20.webp"
								alt="membro da equipe"
								width="97"
								height="97"
								loading="lazy"
							/>
						</div>
						<div>
							<h2 class="pl-4 text-2xl font-bold lg:text-xl">Thomás Camargo</h2>
							<p class="pl-4 pt-2 font-CabinFont text-primaryPurple">CXO</p>
						</div>
					</div>
					<div>
						<p class="pt-5 font-CabinFont text-lg leading-6 text-secondary">
							{{ $t('strm_thomas_camargo') }}
						</p>
					</div>
				</div>

				<div class="mt-[74px] flex flex-col">
					<div class="flex items-center">
						<div class="boxPicture">
							<nuxt-img
								src="images/webp/21.webp"
								alt="membro da equipe"
								width="97"
								height="97"
								loading="lazy"
							/>
						</div>
						<div>
							<h2 class="pl-4 text-2xl font-bold lg:text-xl">Rodrigo Kuster</h2>
							<p class="pl-4 pt-2 font-CabinFont text-primaryPurple">CLO</p>
						</div>
					</div>
					<div>
						<p class="pt-5 font-CabinFont text-lg leading-6 text-secondary">
							{{ $t('strm_rodrigo_kuster') }}
						</p>
					</div>
				</div>
			</div>
			<video
				playsinline
				autoplay
				muted
				loop
				class="absolute right-[30px] top-[134px] -z-10 hidden w-[440px] rounded-full lg:block"
			>
				<source src="/videos/waveVideo.mp4" type="video/mp4" />
			</video>
		</div>
		<div class="bg"></div>
	</section>
</template>

<style scoped>
.bg {
	position: absolute;
	top: 0;
	z-index: -1;
	width: 100%;
	height: 226px;
	background: linear-gradient(
		180deg,
		#5a57ff 0%,
		rgba(57, 54, 161, 0.1) 80%,
		rgba(36, 35, 102, 0) 100%
	);
}

.box {
	position: absolute;
	top: 55px;
	left: -5px;

	padding: 0px; /* Adjust the padding */
	border-radius: 97px; /* Adjust the border-radius */
	box-shadow: 0px 0px 26px -6px #7673f2;
}

.box::before {
	content: '';
	position: absolute;
	inset: 0;
	width: auto;
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

@media (min-width: 1024px) {
	.bg {
		position: absolute;
		top: 0;
		z-index: -1;
		width: 100%;
		height: 560px;
		background: linear-gradient(
			180deg,
			#5a57ff 0%,
			rgba(57, 54, 161, 0.2) 40%,
			rgba(57, 54, 161, 0.1) 50%,
			rgba(36, 35, 102, 0) 100%
		);
	}
}

.boxPicture {
	position: relative;
	padding: 0px; /* Adjust the padding */
	border-radius: 99px; /* Adjust the border-radius */
	box-shadow: 0px 0px 26px -6px #7673f2;
}

.boxPicture::before {
	content: '';
	position: absolute;
	inset: 0;
	width: auto;
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
</style>
