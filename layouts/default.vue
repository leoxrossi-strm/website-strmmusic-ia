<template>
	<div class="md: line h-2 w-full"></div>
	<main class="overflow-hidden">
		<slot />
	</main>
</template>

<script setup>
useHead({
	htmlAttrs: {
	},
	title: 'Strm | Inteligência Artificial para impulsionar a carreira de músicos',
	meta: [
		{
			name: 'description',
			content:
				'A Strm é uma empresa inovadora que usa Inteligência Artificial para impulsionar a carreira de músicos, oferecendo soluções personalizadas para gestão de carreira, promoção e distribuição de música. Descubra como a STRM pode transformar a sua carreira musical.'
		},
		{
			name: 'keywords',
			content:
				'Strm, Inteligência Artificial, Carreira Musical, Promoção de Música, Distribuição de Música, Gestão de Carreira, IA na Música, Transformação Musical, Tecnologia Musical'
		}
	]
})
</script>

<style>
html {
	font-family: 'Cabin', sans-serif;
	background-color: #080716;
	color: #f2f2f2;
	overflow-x: hidden;
}
.line {
	position: relative;
	z-index: 9999;

	background: linear-gradient(
		90deg,
		#e64b4b 0%,
		#f3795e 18.75%,
		#e4bc5c 35.94%,
		#39d68d 52.6%,
		#37b1e4 68.23%,
		#874fc6 84.38%,
		#f05576 100%
	);
}
</style>
