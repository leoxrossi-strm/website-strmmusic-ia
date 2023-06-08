<template>
	<footer>
		<div class="my-12 border border-solid border-gray-300 border-opacity-20 lg:hidden"></div>
		<div class="mx-auto w-[80%] lg:max-w-[1440px] lg:pb-32 lg:pt-14">
			<div class="flex items-center justify-between lg:items-start">
				<div>
					<nuxt-img
						src="images/svg/logo.svg"
						alt="logo strm"
						width="96"
						height="40"
						loading="lazy"
					/>

					<p class="hidden pt-6 font-CabinFont text-secondary lg:block lg:text-xl">
						<span class="block"> A primeira empresa pensada primeiro</span> no artista.
					</p>
				</div>
				<div class="hidden lg:block">
					<p class="font-CabinFont text-primaryPurple">Entenda</p>
					<ul class="pt-3">
						<li>
							<a href="#" class="font-CabinFont text-lg">Planos</a>
						</li>
						<li class="pt-4">
							<a href="#" class="font-CabinFont text-lg">Cases</a>
						</li>
						<li class="pt-4">
							<a href="#" class="font-CabinFont text-lg">Serviços</a>
						</li>
					</ul>
				</div>
				<div class="hidden lg:block">
					<p class="font-CabinFont text-primaryPurple">Empresa</p>
					<ul class="pt-3">
						<li>
							<a href="#" class="font-CabinFont text-lg">Sobre</a>
						</li>
						<li class="pt-4">
							<a href="#" class="font-CabinFont text-lg">Time</a>
						</li>
						<li class="pt-4">
							<a href="#" class="font-CabinFont text-lg">Política de Privacidade</a>
						</li>
						<li class="pt-4">
							<a href="#" class="font-CabinFont text-lg">Termos de Uso</a>
						</li>
					</ul>
				</div>

				<div class="flex items-center">
					<nuxt-img
						src="images/svg/u_instagram.svg"
						alt="instagram"
						class="mr-3"
						width="19"
						height="18"
						loading="lazy"
					/>
					<nuxt-img
						src="images/svg/u_youtube2.svg"
						alt="youtube"
						width="21"
						height="21"
						loading="lazy"
					/>
					<span class="hidden pl-6 lg:block">
						<a
							href="#"
							class="inline-block items-center rounded-[32px] border-2 border-primaryPurple bg-transparent px-4 py-3 font-CabinFont text-[14px] text-sm font-normal text-primary outline-none"
							>Área do cliente</a
						>
					</span>
				</div>
			</div>
			<div class="lg:hidden">
				<div>
					<p class="pt-6 font-CabinFont text-secondary lg:text-xl">
						<span class="block"> A primeira empresa pensada</span> primeiro no artista.
					</p>
					<div class="pt-12">
						<div>
							<p class="font-CabinFont text-primaryPurple">Entenda</p>
							<ul class="pt-3">
								<li>
									<a href="#" class="font-CabinFont text-lg">Planos</a>
								</li>
								<li class="pt-4">
									<a href="#" class="font-CabinFont text-lg">Cases</a>
								</li>
								<li class="pt-4">
									<a href="#" class="font-CabinFont text-lg">Serviços</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div class="pt-12">
					<p class="font-CabinFont text-primaryPurple">Empresa</p>
					<ul class="pt-3">
						<li>
							<a href="#" class="font-CabinFont text-lg">Sobre</a>
						</li>
						<li class="pt-4">
							<a href="#" class="font-CabinFont text-lg">Time</a>
						</li>
						<li class="pt-4">
							<a href="#" class="font-CabinFont text-lg">Política de Privacidade</a>
						</li>
						<li class="pt-4">
							<a href="#" class="font-CabinFont text-lg">Termos de Uso</a>
						</li>
					</ul>
				</div>
			</div>

			<div class="lg:hidden">
				<ul>
					<li class="flex cursor-pointer items-center pt-10 font-CabinFont">
						<span> login</span>
						<nuxt-img
							src="images/svg/iconLogin.svg"
							alt="login"
							class="ml-3"
							width="18"
							height="18"
							loading="lazy"
						/>
					</li>
				</ul>
			</div>
			<ul class="lg:hidden">
				<li class="flex cursor-pointer items-center pb-11 pt-10 font-CabinFont">
					<span> Copyright© 2023 Strm.</span>
				</li>
			</ul>
		</div>
	</footer>
</template>
