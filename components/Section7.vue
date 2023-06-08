<template>
	<section
		class="mx-auto mt-16 w-[80%] md:grid lg:mt-0 lg:max-w-[1440px] xl:grid-cols-1 2xl:grid-cols-3"
	>
		<!-- price 1 -->

		<div class="w-full px-4 md:p-7 lg:pl-0">
			<div class="gradient-border">
				<div class="gradient-box">
					<div class="flex items-center justify-between px-6 py-6">
						<p class="font-CabinFont text-2xl font-bold">Strm Music</p>
						<div class="relative">
							<nuxt-img
								src="images/svg/note.svg"
								alt="note musical"
								width="48"
								height="50"
								loading="lazy"
							/>
							<nuxt-img
								src="images/svg/noteArrow.svg"
								alt="note musical"
								class="absolute top-2"
								width="11"
								height="14"
								loading="lazy"
							/>
						</div>
					</div>
				</div>
			</div>

			<div class="-mt-4 rounded-b-lg bg-[#0F0D2A] pt-8">
				<ul class="px-6 pb-8 font-CabinFont text-base text-secondary" ref="price1">
					<li class="flex items-start">
						<nuxt-img src="images/svg/checkIcon.svg" alt="check mark" width="18" height="18" />
						<p class="pl-2">
							<span class="font-bold"> Email:</span>distro@strm.com.br com SLA de 24hs
						</p>
					</li>

					<li class="flex items-start pt-6">
						<nuxt-img src="images/svg/checkIcon.svg" alt="check mark" width="18" height="18" />
						<p class="pl-2">
							<span class="font-bold"> Chat:</span>Disponível de segunda a sexta das 9:00 às 12:00hs
							e das 13:30 às 17:00hs
						</p>
					</li>
					<li class="flex items-start pt-6">
						<nuxt-img src="images/svg/checkIcon.svg" alt="check mark" width="18" height="18" />
						<p class="pl-2">
							<span class="font-bold"> Pitching editorial:</span> Pitching nas lojas de música com
							critério prévio Strm Distro no Spotify, Apple Music, Deezer, Amazon Music, Resso e
							Youtube Music, através de envio das informações necessárias via preenchimento de
							formulário, com no mínimo 21 dias de antecedência a data de lançamento.
						</p>
					</li>
					<li class="flex items-start pt-4">
						<nuxt-img
							src="images/svg/checkIcon.svg"
							alt="check mark"
							width="18"
							height="18"
							loading="lazy"
						/>
						<p class="pl-2"><span class="font-bold"> Strm for labels:</span> Acesso premium</p>
					</li>
					<li class="flex items-start pt-6">
						<nuxt-img
							src="images/svg/checkIcon.svg"
							alt="check mark"
							width="18"
							height="18"
							loading="lazy"
						/>
						<p class="pl-2"><span class="font-bold"> Strm for artists:</span> Acesso premium</p>
					</li>
					<li class="flex items-start pt-6">
						<nuxt-img
							src="images/svg/checkIcon.svg"
							alt="check mark"
							width="18"
							height="18"
							loading="lazy"
						/>
						<p class="pl-2">
							<span class="font-bold"> Diagnóstico de carreira Strm:</span> Acesso a 2 diagnósticos
							de carreira gratuito por ano
						</p>
					</li>
				</ul>
			</div>
		</div>

		<!-- price 2  -->

		<div class="w-full px-4 pt-7">
			<div class="gradient-border">
				<div class="gradient-box">
					<div class="flex items-center justify-between px-6 py-6">
						<p class="font-CabinFont text-2xl font-bold">Strm Stars</p>
						<div class="relative">
							<nuxt-img src="images/svg/music.svg" alt="note musical" loading="lazy" />
							<nuxt-img
								src="images/svg/musicStar.svg"
								alt="note musical"
								class="absolute left-[5px] top-[4px]"
								loading="lazy"
							/>
						</div>
					</div>
				</div>
			</div>

			<div class="relative -mt-4 rounded-b-lg bg-[#0F0D2A] pt-8">
				<ul class="relative px-6 pb-8 font-CabinFont text-base text-secondary" :style="priceClass">
					<li class="flex items-start">
						<nuxt-img
							src="images/svg/checkIcon.svg"
							alt="check mark"
							width="18"
							height="18"
							loading="lazy"
						/>
						<p class="pl-2">
							<span class="font-bold"> Email:</span>distro@strm.com.br com SLA de 24hs
						</p>
					</li>

					<li class="flex items-start pt-6">
						<nuxt-img
							src="images/svg/checkIcon.svg"
							alt="check mark"
							width="18"
							height="18"
							loading="lazy"
						/>
						<p class="pl-2">
							<span class="font-bold"> Chat:</span>Disponível de segunda a sexta das 9:00 às 12:00hs
							e das 13:30 às 17:00hs
						</p>
					</li>

					<li class="flex items-start pt-6">
						<nuxt-img
							src="images/svg/checkIcon.svg"
							alt="check mark"
							width="18"
							height="18"
							loading="lazy"
						/>
						<p class="pl-2">
							<span class="font-bold">Whatsapp:</span>Contato direto via whatsapp com um Label
							Manager Strm
						</p>
					</li>

					<li class="flex items-start pt-6">
						<nuxt-img
							src="images/svg/checkIcon.svg"
							alt="check mark"
							width="18"
							height="18"
							loading="lazy"
						/>
						<p class="pl-2">
							<span class="font-bold">Eventos:</span> Palestras, workshops e eventos exclusivos Strm
						</p>
					</li>
					<li class="flex items-start pt-6">
						<nuxt-img
							src="images/svg/checkIcon.svg"
							alt="check mark"
							width="18"
							height="18"
							loading="lazy"
						/>
						<p class="pl-2">
							<span class="font-bold">Reuniões estratégicas:</span> Reuniões online com a equipe de
							MKT da Strm para alinhamento do plano estratégico de futuros lançamentos.
						</p>
					</li>
					<li class="flex items-start pt-6">
						<nuxt-img
							src="images/svg/checkIcon.svg"
							alt="check mark"
							width="18"
							height="18"
							loading="lazy"
						/>
						<p class="pl-2">
							<span class="font-bold"> Pitching editorial:</span> Pitching nas lojas de música com
							critério prévio Strm Distro no Spotify, Apple Music, Deezer, Amazon Music, Resso e
							Youtube Music, através de envio das informações necessárias via preenchimento de
							formulário, com no mínimo 21 dias de antecedência a data de lançamento.
						</p>
					</li>

					<li class="flex items-start pt-6">
						<nuxt-img
							src="images/svg/checkIcon.svg"
							alt="check mark"
							width="18"
							height="18"
							loading="lazy"
						/>
						<p class="pl-2">
							<span class="font-bold"> Pitching 2ID:</span> Pitching para 2ID, para veiculação do
							lançamento em mais de 3.500 lojas físicas de grandes marcas, saiba mais em
							www.2id.com.br
						</p>
					</li>
					<li class="flex items-start pt-4">
						<nuxt-img
							src="images/svg/checkIcon.svg"
							alt="check mark"
							width="18"
							height="18"
							loading="lazy"
						/>
						<p class="pl-2"><span class="font-bold"> Strm for labels:</span> Acesso premium</p>
					</li>

					<li class="flex items-start pt-6">
						<nuxt-img
							src="images/svg/checkIcon.svg"
							alt="check mark"
							width="18"
							height="18"
							loading="lazy"
						/>
						<p class="pl-2"><span class="font-bold"> Strm for artists:</span> Acesso premium</p>
					</li>
					<li class="flex items-start pt-6">
						<nuxt-img
							src="images/svg/checkIcon.svg"
							alt="check mark"
							width="18"
							height="18"
							loading="lazy"
						/>
						<p class="pl-2">
							<span class="font-bold"> Diagnóstico de carreira Strm:</span> Acesso a 2 diagnósticos
							de carreira gratuito por ano
						</p>
					</li>
				</ul>
				<div
					@click="toggle1"
					:class="
						isOpen1
							? 'absolute bottom-2 flex cursor-pointer items-baseline pl-5'
							: 'absolute bottom-0 flex h-20 w-full cursor-pointer items-center bg-gradient-to-t from-[#080716] via-[#0F0D2A] pl-5'
					"
				>
					<p class="font-CabinFont text-lg text-primaryPurple">
						{{ isOpen1 ? 'Ler menos' : 'Ler mais' }}
					</p>
					<nuxt-img
						src="images/svg/arrowReadMore.svg"
						alt="leia mais"
						class="ml-4 transition delay-150 ease-in-out"
						:style="{ transform: isOpen1 ? 'rotate(180deg)' : 'rotate(0)' }"
						width="18"
						height="18"
						loading="lazy"
					/>
				</div>
			</div>
		</div>

		<!-- price 3  -->
		<div class="w-full px-4 pt-7">
			<div class="gradient-border">
				<div class="gradient-box">
					<div class="flex items-center justify-between px-6 py-6">
						<p class="font-CabinFont text-2xl font-bold">Strm Legends</p>
						<div class="relative">
							<nuxt-img
								src="images/svg/mic.svg"
								alt="note musical"
								width="48"
								height="50"
								loading="lazy"
							/>
							<nuxt-img
								src="images/svg/micStar.svg"
								alt="note musical"
								class="absolute left-[15.5px] top-[14px]"
								width="16"
								height="16"
								loading="lazy"
							/>
						</div>
					</div>
				</div>
			</div>

			<div class="relative -mt-4 rounded-b-lg bg-[#0F0D2A] pt-8">
				<ul class="px-6 pb-8 font-CabinFont text-base text-secondary" :style="priceClass1">
					<li class="flex items-start">
						<nuxt-img
							src="images/svg/checkIcon.svg"
							alt="check mark"
							width="18"
							height="18"
							loading="lazy"
						/>
						<p class="pl-2">
							<span class="font-bold"> Email:</span>distro@strm.com.br com SLA de 24hs
						</p>
					</li>

					<li class="flex items-start pt-6">
						<nuxt-img
							src="images/svg/checkIcon.svg"
							alt="check mark"
							width="18"
							height="18"
							loading="lazy"
						/>
						<p class="pl-2">
							<span class="font-bold"> Chat:</span>Disponível de segunda a sexta das 9:00 às 12:00hs
							e das 13:30 às 17:00hs
						</p>
					</li>

					<li class="flex items-start pt-6">
						<nuxt-img
							src="images/svg/checkIcon.svg"
							alt="check mark"
							width="18"
							height="18"
							loading="lazy"
						/>
						<p class="pl-2">
							<span class="font-bold">Whatsapp:</span>Contato direto via whatsapp com um Label
							Manager Strm
						</p>
					</li>

					<li class="flex items-start pt-6">
						<nuxt-img
							src="images/svg/checkIcon.svg"
							alt="check mark"
							width="18"
							height="18"
							loading="lazy"
						/>
						<p class="pl-2">
							<span class="font-bold">Time especial Distro:</span> Reuniões online com a equipe de
							MKT da Strm para alinhamento do plano estratégico de futuros lançamentos. Strm
						</p>
					</li>
					<li class="flex items-start pt-6">
						<nuxt-img
							src="images/svg/checkIcon.svg"
							alt="check mark"
							width="18"
							height="18"
							loading="lazy"
						/>
						<p class="pl-2">
							<span class="font-bold">Reunião Presencial:</span> Reunião Presencial: Acesso ao nosso
							escritório da Vila Madalena para reuniões de planejamento e audições. lançamentos.
						</p>
					</li>
					<li class="flex items-start pt-6">
						<nuxt-img
							src="images/svg/checkIcon.svg"
							alt="check mark"
							width="18"
							height="18"
							loading="lazy"
						/>
						<p class="pl-2">
							<span class="font-bold"> Pitching editorial:</span> Pitching nas lojas de música com
							critério prévio Strm Distro no Spotify, Apple Music, Deezer, Amazon Music, Resso e
							Youtube Music, através de envio das informações necessárias via preenchimento de
							formulário, com no mínimo 21 dias de antecedência a data de lançamento.
						</p>
					</li>

					<li class="flex items-start pt-6">
						<nuxt-img
							src="images/svg/checkIcon.svg"
							alt="check mark"
							width="18"
							height="18"
							loading="lazy"
						/>
						<p class="pl-2">
							<span class="font-bold"> Pitching 2ID:</span> Pitching para 2ID, para veiculação do
							lançamento em mais de 3.500 lojas físicas de grandes marcas, saiba mais em
							www.2id.com.br
						</p>
					</li>
					<li class="flex items-start pt-6">
						<nuxt-img
							src="images/svg/checkIcon.svg"
							alt="check mark"
							width="18"
							height="18"
							loading="lazy"
						/>
						<p class="pl-2">
							<span class="font-bold"> Gestão de tráfego:</span> Google Ads para o produto
							audiovisual do lançamento
						</p>
					</li>

					<li class="flex items-start pt-6">
						<nuxt-img
							src="images/svg/checkIcon.svg"
							alt="check mark"
							width="18"
							height="18"
							loading="lazy"
						/>
						<p class="pl-2">
							<span class="font-bold"> Canais de música:</span>Envio de video-clipes para os canais
							de música Multishow, BIS, Music Box Brazil e MTV
						</p>
					</li>

					<li class="flex items-start pt-6">
						<nuxt-img
							src="images/svg/checkIcon.svg"
							alt="check mark"
							width="18"
							height="18"
							loading="lazy"
						/>
						<p class="pl-2">
							<span class="font-bold"> Relações Públicas:</span> Trabalho focado de RP nos
							principais meios de comunicação do segmento musical
						</p>
					</li>

					<li class="flex items-start pt-4">
						<nuxt-img
							src="images/svg/checkIcon.svg"
							alt="check mark"
							width="18"
							height="18"
							loading="lazy"
						/>
						<p class="pl-2"><span class="font-bold"> Strm for labels:</span> Acesso premium</p>
					</li>

					<li class="flex items-start pt-6">
						<nuxt-img
							src="images/svg/checkIcon.svg"
							alt="check mark"
							width="18"
							height="18"
							loading="lazy"
						/>
						<p class="pl-2"><span class="font-bold"> Strm for artists:</span> Acesso premium</p>
					</li>
					<li class="flex items-start pt-6">
						<nuxt-img
							src="images/svg/checkIcon.svg"
							alt="check mark"
							width="18"
							height="18"
							loading="lazy"
						/>
						<p class="pl-2">
							<span class="font-bold"> Diagnóstico de carreira Strm:</span> Acesso a 2 diagnósticos
							de carreira gratuito por ano
						</p>
					</li>
				</ul>

				<div
					@click="toggle2"
					:class="
						isOpen2
							? 'absolute bottom-2 flex cursor-pointer items-baseline pl-5'
							: 'absolute bottom-0 flex h-20 w-full cursor-pointer items-center bg-gradient-to-t from-[#080716] via-[#0F0D2A] pl-5'
					"
				>
					<p class="text-lg text-primaryPurple">{{ isOpen2 ? 'Ler menos' : 'Ler mais' }}</p>
					<nuxt-img
						src="images/svg/arrowReadMore.svg"
						alt="leia mais"
						class="ml-4 w-[18px] transition delay-150 ease-in-out"
						:style="{ transform: isOpen2 ? 'rotate(180deg)' : 'rotate(0)' }"
						width="18"
						height="10"
						loading="lazy"
					/>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup>
import { ref, onMounted, nextTick, computed } from 'vue'

const isOpen1 = ref(false)
const toggle1 = () => {
	isOpen1.value = !isOpen1.value
}

const isOpen2 = ref(false)
const toggle2 = () => {
	isOpen2.value = !isOpen2.value
}

const price1 = ref(null)
const priceHeight = ref(0)

const updateHeight = () => {
	if (window.innerWidth <= 768) {
		priceHeight.value = 0
	} else {
		priceHeight.value = price1.value.clientHeight
	}
}

onMounted(() => {
	window.addEventListener('resize', updateHeight)
	updateHeight() // Call the function initially to set the correct height
})

onUnmounted(() => {
	window.removeEventListener('resize', updateHeight)
})

const priceClass = computed(() => {
	if (isOpen1.value) {
		return {
			height: 'auto',
			overflow: 'visible',
			padding: '0rem 1.5rem 3rem 1.5rem',
			transition: 'all 0.5s ease-in-out'
		}
	} else {
		return {
			height: `${priceHeight.value}px`,
			overflow: 'hidden',
			transition: 'all 0.5s ease-in-out'
		}
	}
})

const priceClass1 = computed(() => {
	if (isOpen2.value) {
		return {
			height: 'auto',
			overflow: 'visible',
			padding: '0rem 1.5rem 3rem 1.5rem',
			transition: 'all 0.5s ease-in-out'
		}
	} else {
		return {
			height: `${priceHeight.value}px`,
			overflow: 'hidden',
			transition: 'all 0.5s ease-in-out'
		}
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
	width: 100%;
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
	background: linear-gradient(180deg, #242366 0%, rgba(13, 13, 42, 1) 100%);
	border-radius: 8px 8px 8px 8px; /* Adjusted the border radius values */
	min-width: 100%;
	height: auto;
}

.price-container {
	display: flex;
}
.price-box {
	flex-grow: 1;
}
</style>
