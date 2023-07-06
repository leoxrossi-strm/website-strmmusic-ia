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
						<span class="block">
							{{ $t('strm_strm_first_company') }}
						</span>

						{{ $t('strm_strm_first_company_2') }}
					</p>
				</div>
				<div class="hidden lg:block">
					<p class="font-CabinFont text-primaryPurple">
						{{ $t('strm_getting_to_know') }}
					</p>
					<ul class="pt-3">
						<li>
							<a href="#services" class="font-CabinFont text-lg">
								{{ $t('strm_company_services') }}
							</a>
						</li>
						<li class="pt-4">
							<a href="#cases" class="font-CabinFont text-lg">
								{{ $t('strm_company_cases') }}
							</a>
						</li>
						<li class="pt-4">
							<a href="#plans" class="font-CabinFont text-lg">
								{{ $t('strm_company_plans') }}
							</a>
						</li>

						<li class="pt-4">
							<a href="#diagnosis" class="font-CabinFont text-lg">
								{{ $t('diagnosis') }}
							</a>
						</li>
					</ul>
				</div>
				<div class="hidden lg:block">
					<p class="font-CabinFont text-primaryPurple">
						{{ $t('strm_company') }}
					</p>
					<ul class="pt-3">
						<li>
							<a href="#about" class="font-CabinFont text-lg">
								{{ $t('strm_company_about_us') }}
							</a>
						</li>
						<li class="pt-4">
							<a href="#team" class="font-CabinFont text-lg">
								{{ $t('strm_company_team') }}
							</a>
						</li>
						<li class="pt-4">
							<NuxtLink
								to="https://artists.strmmusic.com/terms-of-use.html"
								class="font-CabinFont text-lg"
								target="_blank"
							>
								{{ $t('strm_company_privacy_policy') }}
							</NuxtLink>
						</li>
						<li class="pt-4">
							<NuxtLink
								to="https://artists.strmmusic.com/privacy-policy.html"
								class="font-CabinFont text-lg"
								target="_blank"
							>
								{{ $t('strm_company_terms_of_use') }}
							</NuxtLink>
						</li>
					</ul>
				</div>

				<div class="flex items-center">
					<NuxtLink to="https://www.instagram.com/strm.music/" target="_blank">
						<nuxt-img
							src="images/svg/u_instagram.svg"
							alt="instagram"
							class="mr-3"
							width="19"
							height="18"
							loading="lazy"
						/>
					</NuxtLink>
					<NuxtLink to="https://www.youtube.com/@strm9820" target="_blank">
						<nuxt-img
							src="images/svg/u_youtube2.svg"
							alt="youtube"
							width="21"
							height="21"
							loading="lazy"
						/>
					</NuxtLink>
					<span class="hidden pl-6 lg:block">
						<ul>
							<li class="mr-5 flex cursor-pointer items-center pl-6">
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
					</span>
				</div>
			</div>
			<div class="lg:hidden">
				<div>
					<p class="pt-6 font-CabinFont text-secondary lg:text-xl">
						<span class="block"> {{ $t('strm_strm_first_company') }}</span>
						{{ $t('strm_strm_first_company_2') }}
					</p>
					<div class="pt-12">
						<div>
							<p class="font-CabinFont text-primaryPurple">{{ $t('strm_getting_to_know') }}</p>
							<ul class="pt-3">
								<li>
									<a href="#" class="font-CabinFont text-lg">
										{{ $t('strm_company_services') }}
									</a>
								</li>
								<li class="pt-4">
									<a href="#cases" class="font-CabinFont text-lg">
										{{ $t('strm_company_cases') }}
									</a>
								</li>
								<li class="pt-4">
									<a href="#plans" class="font-CabinFont text-lg">
										{{ $t('strm_company_plans') }}
									</a>
								</li>

								<li class="pt-4">
									<a href="#diagnosis" class="font-CabinFont text-lg">
										{{ $t('diagnosis') }}
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div class="pt-12">
					<p class="font-CabinFont text-primaryPurple">
						{{ $t('strm_company') }}
					</p>
					<ul class="pt-3">
						<li>
							<a href="#about" class="font-CabinFont text-lg">
								{{ $t('strm_company_about_us') }}
							</a>
						</li>
						<li class="pt-4">
							<a href="#team" class="font-CabinFont text-lg">
								{{ $t('strm_company_team') }}
							</a>
						</li>
						<!-- terms and policy -->
						<li class="pt-4">
							<NuxtLink
								to="https://artists.strmmusic.com/terms-of-use.html"
								class="font-CabinFont text-lg"
								target="_blank"
							>
								{{ $t('strm_company_privacy_policy') }}
							</NuxtLink>
						</li>
						<li class="pt-4">
							<a
								href="https://artists.strmmusic.com/privacy-policy.html"
								class="font-CabinFont text-lg"
							>
								{{ $t('strm_company_terms_of_use') }}
							</a>
						</li>
					</ul>
				</div>
			</div>

			<div class="lg:hidden">
				<ul>
					<li class="flex cursor-pointer items-center pt-10 font-CabinFont">
						<Login />
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
