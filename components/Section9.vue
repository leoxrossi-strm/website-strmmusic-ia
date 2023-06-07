<template>
	<section class="mx-auto w-[80%] lg:mt-28 lg:max-w-[864px]">
		<div class="flex flex-col items-center justify-center">
			<p class="font-CabinFont text-base text-primaryPurple">FOUNDERS</p>
			<h2 class="py-4 font-CabinFont text-[40px] font-bold">Strm Music</h2>

			<nuxt-img
				src="images/svg/soundWaveColored.svg"
				alt="strm music"
				sizes="sm:w-[208px] sm:h-[82] lg:w-[404] lg:h-[159px]"
				loading="lazy"
			/>
		</div>

		<div class="mt-[74px] flex flex-col">
			<div class="flex items-center">
				<div class="box">
					<nuxt-img
						src="images/webp/01.webp"
						alt="membro da equipe"
						width="97"
						height="97"
						loading="lazy"
					/>
				</div>
				<div>
					<h2 class="pl-4 text-2xl font-bold lg:text-[40px]">Fernando Gabriel</h2>
					<p class="pl-4 pt-4 font-CabinFont text-primaryPurple">Fundador & CEO</p>
				</div>
			</div>
			<div>
				<p class="pt-5 font-CabinFont text-secondary" :class="toggleTruncateClass">
					Fernando Gabriel iniciou sua carreira artistica como cantor e compositor em 2006 após
					trancar a faculdade de engenharia na Unicamp, após 4 anos cantando profissionalmente o
					lado engenheiro falou mais alto e passou para o outro lado da mesa criando sua produtora
					artística, empresariando e gerindo carreiras de artistas de diversos gêneros musicais.
					Nesta tragetória foi sócio e/ou parceiro de grandes nomes da musica como: Kamilla Fialho
					(primeira empresária da Anitta - funk), Rafael Brahma (Melim - pop), Carlos Aristídes
					(Xand Avião - forró), Rafael Cabral
					<span class="block"> (Naiara Azzevedo - sertanejo).</span>
				</p>

				<p v-show="toggleIsOpen" class="mt-4 font-CabinFont text-secondary">
					Após anos de aprendizados e vivências em diversas regiões do Brasil montou uma consultoria
					que, com um método próprio, captou mais de R$15 milhões de reais para artistas
					independentes via club deals, em menos de 2 anos. O método foi tão bem sucedido que
					motivou a construção da STRM com seus atuais sócios para democratizar o acesso a recursos
					financeiros a artistas, diminuindo o abismo entre o mercado de capitais e a música. Hoje é
					especialista em identificar, diagnosticar e aumentar a performance de ativos musicais,
					combinando inteligência artificial e experiência prática de mercado para conectá-los ao
					universo de investimentos por meio de tecnologia.
				</p>

				<div @click="toggleOpen" class="flex cursor-pointer items-baseline">
					<p class="text-lg text-primaryPurple">{{ toggleIsOpen ? 'Ler menos' : 'Ler mais' }}</p>
					<nuxt-img
						src="images/svg/arrowReadMore.svg"
						alt="leia mais"
						width="18"
						height="18"
						class="ml-4 transition-all delay-200"
						:style="{ transform: toggleIsOpen ? 'rotate(180deg)' : 'rotate(0)' }"
						loading="lazy"
					/>
				</div>
			</div>
		</div>
		<div class="my-12 border border-solid border-gray-300 border-opacity-20"></div>

		<div class="mt-[74px] flex flex-col">
			<div class="flex items-center">
				<div class="box">
					<nuxt-img
						src="images/webp/02.webp"
						alt="membro da equipe"
						width="97"
						height="97"
						loading="lazy"
					/>
				</div>
				<div>
					<h2 class="pl-4 text-2xl font-bold lg:text-[40px]">Thiago Lobão</h2>
					<p class="pl-4 pt-4 font-CabinFont text-primaryPurple">
						Fundador & Diretor de investimentos
					</p>
				</div>
			</div>
			<div>
				<p class="pt-5 font-CabinFont text-secondary" :class="toggleTruncateClass1">
					Thiago Lobão iniciou sua carreira como consultor estratégico especializado em roadmaps
					tecnológicos, com rápida migração para o mercado de Venture Capital, atuando como Sócio da
					SP Ventures por 10 anos, participando ativamente das atividades para geração de valor em
					mais de 30 investidas (Agtechs, SaaS, Fintechs e Healthtechs). Thiago foi peça-chave no
					posicionamento da gestora como referência global em investimentos em Agtechs,
					ultrapassando a marca de R$500 milhões sob gestão.
				</p>
				<p v-show="toggleIsOpen1" class="mt-4 font-CabinFont text-secondary">
					Após seu ciclo na SP Ventures, Thiago fundou a Catarina Capital, gestora de investimentos
					crossover, especializada em ativos de base tecnológica, liderando equipes nas áreas de
					Venture Capital, Advisory, Private Equity e Public Equities. Thiago é apaixonado por
					música e, ao longo de sua carreira, fundou o projeto Acelerarte, primeira aceleradora de
					artistas no Brasil, trabalhando diretamente com mais de 400 artistas da cena independente.
					Neste projeto, conheceu Fernando Gabriel, atual sócio na STRM, startup que revoluciona
					atualmente a indústria da música através da aplicação de ciência de dados para
					desenvolvimento de carreiras artísticas. Thiago é engenheiro pela USP, com MBA pela mesma
					instituição e especialização em Inovação e Empreendedorismo em Stanford/EUA.
				</p>
				<div @click="toggleOpen1" class="flex cursor-pointer items-baseline">
					<p class="text-lg text-primaryPurple">{{ toggleIsOpen1 ? 'Ler menos' : 'Ler mais' }}</p>
					<nuxt-img
						src="images/svg/arrowReadMore.svg"
						alt="leia mais"
						class="ml-4 transition-all delay-200"
						:style="{ transform: toggleIsOpen1 ? 'rotate(180deg)' : 'rotate(0)' }"
						width="18"
						height="18"
						loading="lazy"
					/>
				</div>
			</div>
		</div>
	</section>
</template>
<script setup>
const toggleIsOpen = ref(false)
const toggleIsOpen1 = ref(false)

const toggleOpen = () => {
	toggleIsOpen.value = !toggleIsOpen.value
}

const toggleTruncateClass = computed(() => {
	return !toggleIsOpen.value ? 'fade-truncate' : ''
})

const toggleOpen1 = () => {
	toggleIsOpen1.value = !toggleIsOpen1.value
}

const toggleTruncateClass1 = computed(() => {
	return !toggleIsOpen1.value ? 'fade-truncate' : ''
})
</script>

<style scoped>
.box {
	position: relative;
	padding: 0px; /* Adjust the padding */
	border-radius: 99px; /* Adjust the border-radius */
	box-shadow: 0px 0px 26px -6px #7673f2;
}

.box::before {
	content: '';
	position: absolute;
	inset: 0;
	width: 97px;
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

.fade-truncate {
	width: 100%;
	height: 100%;
	position: relative;
}
.fade-truncate::after {
	content: '';
	position: absolute;
	bottom: 0;
	left: 0px;
	height: 100%;
	inset: 0;
	background: linear-gradient(transparent 0%, #080716 100%);
}
.expand-leave-to {
	opacity: 0;
	transform: scaleY(0);
	transform-origin: top;
}
.expand-enter-from {
	opacity: 0;
	transform: scaleY(-9);
	transform-origin: top;
}

.expand-enter-active,
.expand-leave-active {
	transition: all 0.3s ease-in-out;
}
</style>
