<template>
	<section class="relative z-10">
		<div class="illustration mx-auto mt-[-132px] w-[80%] lg:mt-[275px] lg:max-w-[1440px]">
			<h2 class="font-CabinFont text-lg text-primaryPurple">Acelere sua música no digital</h2>
			<p class="py-4 text-2xl font-bold leading-[34px] xl:text-5xl xl:leading-[67px]">
				<span class="lg:block"> Adiantamentos de R$ 1 mil a R$ 20</span> milhões e recomendações
				personalizadas
				<span class="lg:block"> através de inteligência artificial</span>
			</p>

			<p class="font-CabinFont text-lg text-secondary lg:text-2xl lg:leading-[34px]">
				<span class="lg:block"> Tudo que uma grande gravadora poderia te oferecer com a</span>
				liberdade que só um artista independente pode ter:
			</p>

			<div class="mt-8">
				<div class="relative grid grid-cols-1 gap-5 lg:grid-cols-2 xl:grid-cols-4">
					<CardPurple
						title="Distribuição digital"
						text="Disponível agora colocar tipo uma bolinha verde igual do whatsapp quando está ativo ou disponível."
						icon="images/svg/icon1.svg"
						status="Disponível agora"
					/>
					<CardPurple
						title="Acesso a recurso sem burocracia"
						text="Acesse em até 3 dias úteis cheques de \nR$ 1 mil a R$ 20 milhões para investir em seus lançamentos."
						icon="images/svg/icon2.svg"
						status="Disponível agora"
					/>
					<CardPurple
						title="Conexões por ciência de dados"
						text="Conecte-se com os produtores e compositores do seu nicho que mais estão acertando faixas.está ativo ou disponível"
						icon="images/svg/icon2.svg"
						status="Em desenvolvimento"
					/>
					<CardPurple
						title="Planejamento Estratégico"
						text="Planejamento através de inteligência artificial para acelerar seus lançamentos."
						icon="images/svg/icon3.svg"
						status="Em desenvolvimento"
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
		<nuxt-img
			src="images/webp/soundwave.webp"
			alt="ilustração"
			class="absolute right-[-170px] top-[-8px] -z-10 w-[340px] lg:hidden"
		/>
	</section>
</template>
<style scoped>
@media (min-width: 1280px) {
	.illustration {
		background-image: url('/images/webp/soundwave.webp');
		background-repeat: no-repeat;
		background-size: 430px;
		background-position: 100% 0;
	}
}
</style>
