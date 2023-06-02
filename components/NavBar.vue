<template>
	<nav class="flex justify-between items-center border-b border-[#2A2A2D] lg:border-none z-50">
		<nuxt-img src="/logo.svg" class="pl-3 lg:pl-6" />

		<div class="py-4 flex items-center pr-5 lg:hidden">
			<ButtonBg class="mr-9" />
		</div>
		<div class="hidden lg:flex h-[76px] items-center mr-3">
			<ul class="lg:flex items-center font-CabinFont text-primary">
				<li>
					<a href="#" class="text-[14px] pl-12">História</a>
				</li>
				<li>
					<a href="#" class="text-[14px] pl-12">Time</a>
				</li>
				<li>
					<a href="#" class="text-[14px] pl-12">Diagnóstico</a>
				</li>
				<li class="pl-6">
					<a
						href="#"
						class="text-[14px] inline-block bg-transparent text-primary border-2 border-primaryPurple text-sm font-CabinFont items-center rounded-[32px] py-3 px-4 outline-none font-normal"
						>Área do cliente</a
					>
				</li>
				<li class="pl-6 mr-5 flex items-center cursor-pointer">
					<span> login</span>
					<nuxt-img src="images/svg/iconLogin.svg" alt="login" class="ml-3" />
				</li>
			</ul>
		</div>
	</nav>

	<!-- mobile -->

	<div class="flex items-center py-4 pr-5 lg:hidden">
		<Icon
			name="bi:list"
			color="white"
			@click="toggleMenu"
			class="cursor-pointer w-8 h-8 absolute right-3 top-5"
		/>

		<transition name="menu-fade">
			<div v-if="menuOpen" class="menu-container font-CabinFont z-50">
				<div
					class="flex justify-between border-b border-[#2A2A2D] lg:border-none w-full pt-[26px] pb-[18px]"
				>
					<nuxt-img src="images/svg/logo.svg" alt="logo" class="pl-3" />
					<Icon
						name="bi:x-lg"
						color="white"
						@click="toggleMenu"
						class="absolute w-6 h-6 top-9 right-6 close-btn"
						:class="{ rotate: menuOpen }"
					/>
				</div>
				<ul class="flex flex-col items-center list-none font-CabinFont font-normal">
					<li class="pt-[95px] pb-5 text-white text-lg">
						<a href="#" @click="toggleMenu">Planos</a>
					</li>
					<li class="py-5 text-white text-lg"><a href="#" @click="toggleMenu">Cases</a></li>
					<li class="py-5 text-white text-lg"><a href="#" @click="toggleMenu">Serviços</a></li>
					<li class="pt-5 text-white text-lg"><a href="#" @click="toggleMenu">Sobre a Strm</a></li>
				</ul>
				<div>
					<ButtonBg class="my-6 mt-10" />
					<ButtonOut />
				</div>

				<ul>
					<li>
						<a href="#" class="flex items-center cursor-pointer pt-10 font-CabinFont">
							<span> login</span>
							<nuxt-img src="images/svg/iconLogin.svg" alt="login" class="ml-3" />
						</a>
					</li>
				</ul>
			</div>
		</transition>
	</div>
</template>

<script setup>
import { ref } from '@vue/runtime-core'

const menuOpen = ref(false)

const toggleMenu = () => {
	menuOpen.value = !menuOpen.value
}
</script>

<style scoped>
.menu-container {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: #1e1e1e;
	display: flex;
	flex-direction: column;
	align-items: center;
}

.close-btn {
	cursor: pointer;
}

.close-btn.rotate {
	animation: rotate-animation 0.5s forwards;
}

@keyframes rotate-animation {
	100% {
		transform: rotate(360deg);
	}
}

.menu-list li {
	padding: 1rem 0;
	color: white;
	font-size: 1.2rem;
	text-align: center;
}

.menu-fade-enter-active,
.menu-fade-leave-active {
	transition: opacity 0.3s;
}

.menu-fade-enter-from,
.menu-fade-leave-to {
	opacity: 0;
}
</style>
