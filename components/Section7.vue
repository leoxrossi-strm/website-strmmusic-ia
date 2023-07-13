<template>
	<section
		class="mx-auto mt-16 w-[80%] md:grid lg:mt-0 lg:max-w-[1440px] xl:grid-cols-1 2xl:grid-cols-3"
	>
		<!-- price 1 -->

		<div class="w-full md:p-7 lg:px-4 lg:pl-0">
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
						<nuxt-img
							src="images/svg/checkIcon.svg"
							alt="check mark"
							style="width: 18px; height: 18px"
						/>
						<p class="pl-2">
							<span class="font-bold"> {{ $t('strm_email') }}</span>
							{{ $t('strm_email_account') }}@{{ $t('strm_email_domain') }}
							{{ $t('strm_email_description') }}
						</p>
					</li>

					<li class="flex items-start pt-6">
						<nuxt-img
							src="images/svg/checkIcon.svg"
							alt="check mark"
							style="width: 18px; height: 18px"
						/>
						<p class="pl-2">
							<span class="font-bold"> {{ $t('strm_chat') }}</span
							>{{ $t('strm_chat_description') }}
						</p>
					</li>
					<li class="flex items-start pt-6">
						<nuxt-img
							src="images/svg/checkIcon.svg"
							alt="check mark"
							style="width: 18px; height: 18px"
						/>
						<p class="pl-2">
							<span class="font-bold">{{ $t('strm_editorial_pitching') }}</span>
							{{ $t('strm_editorial_pitching_description') }}
						</p>
					</li>
					<li class="flex items-start pt-4">
						<nuxt-img
							src="images/svg/checkIcon.svg"
							alt="check mark"
							loading="lazy"
							style="width: 18px; height: 18px"
						/>

						<p class="pl-2">
							<span class="font-bold"> {{ $t('strm_strm_for_labels') }}</span>
							{{ $t('strm_strm_for_labels_description') }}
						</p>
					</li>
					<li class="flex items-start pt-6">
						<nuxt-img
							src="images/svg/checkIcon.svg"
							alt="check mark"
							style="width: 18px; height: 18px"
							loading="lazy"
						/>
						<p class="pl-2">
							<span class="font-bold"> Strm for artists:</span>
							{{ $t('strm_strm_for_labels_description') }}
						</p>
					</li>
					<li class="flex items-start pt-6">
						<nuxt-img
							src="images/svg/checkIcon.svg"
							alt="check mark"
							style="width: 18px; height: 18px"
							loading="lazy"
						/>
						<p class="pl-2">
							<span class="font-bold"> {{ $t('strm_strm_career_diagnosis') }} </span>
							{{ $t('strm_strm_career_diagnosis_description') }}
						</p>
					</li>
				</ul>
			</div>
		</div>

		<!-- price 2  -->

		<div class="w-full pt-7 lg:px-4">
			<div class="gradient-border">
				<div class="gradient-box">
					<div class="flex items-center justify-between px-6 py-6">
						<p class="font-CabinFont text-2xl font-bold">Strm Stars</p>
						<div class="relative">
							<nuxt-img
								src="images/svg/music.svg"
								alt="note musical"
								width="55"
								height="52"
								loading="lazy"
							/>
							<nuxt-img
								src="images/svg/musicStar.svg"
								alt="note musical"
								class="absolute left-[5px] top-[4px]"
								width="16"
								height="16"
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
							style="width: 18px; height: 18px"
							loading="lazy"
						/>
						<p class="pl-2">
							<span class="font-bold"> {{ $t('strm_email') }}</span>
							{{ $t('strm_email_account') }}@{{ $t('strm_email_domain') }}
							{{ $t('strm_email_description') }}
						</p>
					</li>

					<li class="flex items-start pt-6">
						<nuxt-img
							src="images/svg/checkIcon.svg"
							alt="check mark"
							style="width: 18px; height: 18px"
							loading="lazy"
						/>
						<p class="pl-2">
							<span class="font-bold"> {{ $t('strm_chat') }}</span>
							{{ $t('strm_chat_description') }}
						</p>
					</li>

					<li class="flex items-start pt-6">
						<nuxt-img
							src="images/svg/checkIcon.svg"
							alt="check mark"
							style="width: 18px; height: 18px"
							loading="lazy"
						/>
						<p class="pl-2">
							<span class="font-bold"> {{ $t('strm_whatsapp') }} </span>
							{{ $t('strm_whatsapp_description') }}
						</p>
					</li>

					<li class="flex items-start pt-6">
						<nuxt-img
							src="images/svg/checkIcon.svg"
							alt="check mark"
							style="width: 18px; height: 18px"
							loading="lazy"
						/>
						<p class="pl-2">
							<span class="font-bold">{{ $t('strm_events') }}</span>
							{{ $t('strm_events_description') }}
						</p>
					</li>
					<li class="flex items-start pt-6">
						<nuxt-img
							src="images/svg/checkIcon.svg"
							alt="check mark"
							style="width: 18px; height: 18px"
							loading="lazy"
						/>
						<p class="pl-2">
							<span class="font-bold">
								{{ $t('strm_strategic_meetings') }}
							</span>
							{{ $t('strm_strategic_meetings_description') }}
						</p>
					</li>
					<li class="flex items-start pt-6">
						<nuxt-img
							src="images/svg/checkIcon.svg"
							alt="check mark"
							style="width: 18px; height: 18px"
							loading="lazy"
						/>
						<p class="pl-2">
							<span class="font-bold">{{ $t('strm_editorial_pitching') }}</span>
							{{ $t('strm_editorial_pitching_description') }}
						</p>
					</li>

					<li class="flex items-start pt-6">
						<nuxt-img
							src="images/svg/checkIcon.svg"
							alt="check mark"
							style="width: 18px; height: 18px"
							loading="lazy"
						/>
						<p class="pl-2">
							<span class="font-bold"> Pitching 2ID:</span>
							{{ $t('strm_pitching_2id_description') }}
						</p>
					</li>
					<li class="flex items-start pt-4">
						<nuxt-img
							src="images/svg/checkIcon.svg"
							alt="check mark"
							style="width: 18px; height: 18px"
							loading="lazy"
						/>
						<p class="pl-2">
							<span class="font-bold"> {{ $t('strm_strm_for_labels') }}</span>
							{{ $t('strm_strm_for_labels_description') }}
						</p>
					</li>

					<li class="flex items-start pt-6">
						<nuxt-img
							src="images/svg/checkIcon.svg"
							alt="check mark"
							style="width: 18px; height: 18px"
							loading="lazy"
						/>
						<p class="pl-2">
							<span class="font-bold"> Strm for artists:</span>
							{{ $t('strm_strm_for_labels_description') }}
						</p>
					</li>
					<li class="flex items-start pt-6">
						<nuxt-img
							src="images/svg/checkIcon.svg"
							alt="check mark"
							style="width: 18px; height: 18px"
							loading="lazy"
						/>
						<p class="pl-2">
							<span class="font-bold"> {{ $t('strm_strm_career_diagnosis') }}</span>
							{{ $t('strm_strm_career_diagnosis_description') }}
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
		<div class="w-full pt-7 lg:px-4">
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
								class="absolute left-[16px] top-[14px]"
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
							style="width: 18px; height: 18px"
							loading="lazy"
						/>
						<p class="pl-2">
							<span class="font-bold"> {{ $t('strm_email') }}</span>
							{{ $t('strm_email_account') }}@{{ $t('strm_email_domain') }}
							{{ $t('strm_email_description') }}
						</p>
					</li>

					<li class="flex items-start pt-6">
						<nuxt-img
							src="images/svg/checkIcon.svg"
							alt="check mark"
							style="width: 18px; height: 18px"
							loading="lazy"
						/>
						<p class="pl-2">
							<span class="font-bold"> {{ $t('strm_chat') }}</span>
							{{ $t('strm_chat_description') }}
						</p>
					</li>

					<li class="flex items-start pt-6">
						<nuxt-img
							src="images/svg/checkIcon.svg"
							alt="check mark"
							style="width: 18px; height: 18px"
							loading="lazy"
						/>
						<p class="pl-2">
							<span class="font-bold">{{ $t('strm_whatsapp') }}</span>
							{{ $t('strm_whatsapp_description') }}
						</p>
					</li>

					<li class="flex items-start pt-6">
						<nuxt-img
							src="images/svg/checkIcon.svg"
							alt="check mark"
							style="width: 18px; height: 18px"
							loading="lazy"
						/>
						<p class="pl-2">
							<span class="font-bold">
								{{ $t('strm_strm_special_team') }}
							</span>
							{{ $t('strm_strm_special_team_description') }}
						</p>
					</li>
					<li class="flex items-start pt-6">
						<nuxt-img
							src="images/svg/checkIcon.svg"
							alt="check mark"
							style="width: 18px; height: 18px"
							loading="lazy"
						/>
						<p class="pl-2">
							<span class="font-bold">
								{{ $t('strm_in_Person_Meeting') }}
							</span>
							{{ $t('strm_in_Person_Meeting_description') }}
						</p>
					</li>
					<li class="flex items-start pt-6">
						<nuxt-img
							src="images/svg/checkIcon.svg"
							alt="check mark"
							style="width: 18px; height: 18px"
							loading="lazy"
						/>
						<p class="pl-2">
							<span class="font-bold">
								{{ $t('strm_editorial_pitching') }}
							</span>
							{{ $t('strm_editorial_pitching_description') }}
						</p>
					</li>

					<li class="flex items-start pt-6">
						<nuxt-img
							src="images/svg/checkIcon.svg"
							alt="check mark"
							style="width: 18px; height: 18px"
							loading="lazy"
						/>
						<p class="pl-2">
							<span class="font-bold"> Pitching 2ID:</span>
							{{ $t('strm_pitching_2id_description') }}
						</p>
					</li>
					<li class="flex items-start pt-6">
						<nuxt-img
							src="images/svg/checkIcon.svg"
							alt="check mark"
							style="width: 18px; height: 18px"
							loading="lazy"
						/>
						<p class="pl-2">
							<span class="font-bold">
								{{ $t('strm_traffic_management') }}
							</span>
							{{ $t('strm_traffic_management_description') }}
						</p>
					</li>

					<li class="flex items-start pt-6">
						<nuxt-img
							src="images/svg/checkIcon.svg"
							alt="check mark"
							style="width: 18px; height: 18px"
							loading="lazy"
						/>
						<p class="pl-2">
							<span class="font-bold">
								{{ $t('strm_music_channels') }}
							</span>
							{{ $t('strm_music_channels_description') }}
						</p>
					</li>

					<li class="flex items-start pt-6">
						<nuxt-img
							src="images/svg/checkIcon.svg"
							alt="check mark"
							style="width: 18px; height: 18px"
							loading="lazy"
						/>
						<p class="pl-2">
							<span class="font-bold">
								{{ $t('strm_public_relations') }}
							</span>
							{{ $t('strm_public_relations_description') }}
						</p>
					</li>

					<li class="flex items-start pt-4">
						<nuxt-img
							src="images/svg/checkIcon.svg"
							alt="check mark"
							style="width: 18px; height: 18px"
							loading="lazy"
						/>
						<p class="pl-2">
							<span class="font-bold"> {{ $t('strm_strm_for_labels') }}</span>
							{{ $t('strm_strm_for_labels_description') }}
						</p>
					</li>

					<li class="flex items-start pt-6">
						<nuxt-img
							src="images/svg/checkIcon.svg"
							alt="check mark"
							style="width: 18px; height: 18px"
							loading="lazy"
						/>
						<p class="pl-2">
							<span class="font-bold"> Strm for artists:</span>
							{{ $t('strm_strm_for_labels_description') }}
						</p>
					</li>
					<li class="flex items-start pt-6">
						<nuxt-img
							src="images/svg/checkIcon.svg"
							alt="check mark"
							style="width: 18px; height: 18px"
							loading="lazy"
						/>
						<p class="pl-2">
							<span class="font-bold"> {{ $t('strm_strm_career_diagnosis') }}</span>
							{{ $t('strm_strm_career_diagnosis_description') }}
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

.checkmark {
	width: 20px !important;
	height: 20px !important;
}
</style>
