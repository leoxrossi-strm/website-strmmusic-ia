<template>
	<nav class="z-50 flex items-center justify-between border-b border-[#2A2A2D] lg:border-none">
		<nuxt-img
			src="images/svg/logo.svg"
			class="pl-3 lg:pl-6"
			width="108"
			height="40"
			alt="logo da strm"
		/>

		<div class="flex items-center py-4 pr-5 lg:hidden">
			<ButtonBg class="mr-9 h-auto w-auto" />
		</div>
		<div class="mr-3 hidden h-[76px] items-center lg:flex">
			<ul class="items-center font-CabinFont text-primary lg:flex">
				<li>
					<a href="#" class="pl-12 text-[14px]">História</a>
				</li>
				<li>
					<a href="#" class="pl-12 text-[14px]">Time</a>
				</li>
				<li>
					<a href="#" class="pl-12 text-[14px]">Diagnóstico</a>
				</li>
				<li class="pl-6">
					<a
						href="#"
						class="inline-block items-center rounded-[32px] border-2 border-primaryPurple bg-transparent px-4 py-3 font-CabinFont text-[14px] text-sm font-normal text-primary outline-none"
						>Área do cliente</a
					>
				</li>
				<li class="mr-5 flex cursor-pointer items-center pl-6">
					<span> login</span>
					<nuxt-img
						src="images/svg/iconLogin.svg"
						alt="login"
						class="ml-3"
						width="16"
						height="16"
					/>
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
			class="absolute right-3 top-5 h-8 w-8 cursor-pointer"
		/>

		<transition name="menu-fade">
			<div v-if="menuOpen" class="menu-container z-50 font-CabinFont">
				<div
					class="flex w-full justify-between border-b border-[#2A2A2D] pb-[18px] pt-[26px] lg:border-none"
				>
					<nuxt-img src="images/svg/logo.svg" alt="logo da strm" class="pl-3" />
					<Icon
						name="bi:x-lg"
						color="white"
						@click="toggleMenu"
						class="close-btn absolute right-6 top-9 h-6 w-6"
						:class="{ rotate: menuOpen }"
					/>
				</div>
				<ul class="flex list-none flex-col items-center font-CabinFont font-normal">
					<li class="pb-5 pt-[95px] text-lg text-white">
						<a href="#" @click="toggleMenu">Planos</a>
					</li>
					<li class="py-5 text-lg text-white"><a href="#" @click="toggleMenu">Cases</a></li>
					<li class="py-5 text-lg text-white"><a href="#" @click="toggleMenu">Serviços</a></li>
					<li class="pt-5 text-lg text-white"><a href="#" @click="toggleMenu">Sobre a Strm</a></li>
				</ul>
				<div>
					<ButtonBg class="my-6 mt-10" />
					<ButtonOut />
				</div>

				<ul>
					<li>
						<a href="#" class="flex cursor-pointer items-center pt-10 font-CabinFont">
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
