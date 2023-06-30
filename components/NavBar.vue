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
			<!-- <ButtonBg class="mr-9 h-auto w-auto" /> -->
			<span class="h-[44px]"></span>
		</div>
		<div class="mr-28 hidden h-[76px] items-center lg:flex">
			<div class="relative inline-block text-left">
				<div
					class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
					role="menu"
					aria-orientation="vertical"
					aria-labelledby="menu-button"
					tabindex="-1"
				></div>
			</div>
			<ul class="items-center font-CabinFont text-primary lg:flex">
				<li>
					<NuxtLink to="#services" class="pl-12 text-[14px]">{{ $t('strm_services') }} </NuxtLink>
				</li>
				<li>
					<NuxtLink to="#cases" class="pl-12 text-[14px]">{{ $t('strm_cases') }} </NuxtLink>
				</li>
				<li>
					<NuxtLink to="#plans" class="pl-12 text-[14px]">{{ $t('strm_plans') }} </NuxtLink>
				</li>
				<li>
					<NuxtLink to="#about" class="pl-12 text-[14px]"> {{ $t('history') }} </NuxtLink>
				</li>
				<li>
					<NuxtLink to="#team" class="pl-12 text-[14px]">{{ $t('team') }}</NuxtLink>
				</li>
				<li>
					<NuxtLink to="#diagnosis" class="pl-12 text-[14px]">{{ $t('diagnosis') }} </NuxtLink>
				</li>
				<!-- <li class="pl-6">
					<a
						href="#"
						class="inline-block items-center rounded-[32px] border-2 border-primaryPurple bg-transparent px-4 py-3 font-CabinFont text-[14px] text-sm font-normal text-primary outline-none"
						>{{ $t('client_area') }}</a
					>
				</li> -->
				<li class="ml-7 mr-11 flex cursor-pointer items-center pl-6">
					<Login />
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
						<a href="#" @click="toggleMenu">{{ $t('strm_plans') }}</a>
					</li>
					<li class="py-5 text-lg text-white">
						<a href="#" @click="toggleMenu">
							{{ $t('strm_cases') }}
						</a>
					</li>
					<li class="py-5 text-lg text-white">
						<a href="#" @click="toggleMenu">
							{{ $t('strm_services') }}
						</a>
					</li>
					<li class="pt-5 text-lg text-white">
						<a href="#" @click="toggleMenu">{{ $t('strm_about') }}</a>
					</li>
				</ul>

				<div>
					<ButtonBg class="my-6 mt-10" />
					<ButtonOut />
				</div>

				<ul>
					<li>
						<a href="#" class="flex cursor-pointer items-center pt-10 font-CabinFont">
							<span>
								{{ $t('login') }}
							</span>
							<nuxt-img src="images/svg/iconLogin.svg" alt="login" class="ml-3" />
						</a>
					</li>
				</ul>
			</div>
		</transition>
	</div>
</template>

<script setup>
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
