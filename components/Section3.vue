<template>

<section class="mt-20 lg:mt-[210px] w-[80%] lg:max-w-[1440px] mx-auto">
  <div
    class="flex flex-col lg:flex-row lg:px-[110px] 2xl:px-[148px] items-start lg:gap-16 2xl:gap-[316px]"
  >
    <div class="flex justify-start relative">
      <nuxt-img src="images/svg/player.svg" alt="player" class="lg:hidden"  loading="lazy" width="170" height="280" />
      <nuxt-img src="images/svg/playerDesktop.svg" alt="playerDesktop" class="hidden lg:block min-w-[322px]" loading="lazy" />

      <nuxt-img
        src="images/png/playerImage.png"
        format="webp"
        alt="playerImage"
        class="absolute left-1/2 transform -translate-x-1/2 w-[90px] h-[90px] lg:w-[173px] lg:h-[172px]"
        loading="lazy"  
        
      />
    </div>
    <div class="text-left lg:text-left pt-6">
      <p class="text-lg font-CabinFont text-primaryPurple lg:hidden">
        {{ $t('strm_accelerate_music')  }}
      </p>
      <h2 class="py-4 font-CabinFont font-bold text-2xl xl:text-5xl xl:leading-[67px]">
        <span class="block 2xl:hidden">{{$t('strm_digital_revolution') 
          }}</span>
        <span class="hidden 2xl:block"
          > {{ $t('strm_digital_revolutionA')  }}
          <span class="text-primaryPurple"> Strm</span>
         {{ $t('strm_digital_revolution_3')  }}
          </span>

        <span class="block 2xl:hidden">
         {{ $t('strm_digital_revolution_2')   }}  
        </span>
        <span class="hidden 2xl:block"> {{ $t('strm_digital_revolution_2')   }} </span>
      </h2>
      <p class="text-lg font-CabinFont">
        <span class="2xl:block">
          {{ $t('strm_ai_data_science') }} <span class="text-primaryPurple font-bold"> {{ $t('strm_ai_data_science_2') }}</span> {{ $t('strm_ai_data_science_3') }}
        </span>
        <div class="flex flex-col items-start lg:flex-row pt-6 gap-4 invisible">
          <span class="lg:hidden">
            <ButtonBg />
          </span>
          <span class="hidden lg:block">
            <ButtonBg />
          </span>
          <ButtonOut />
        </div>
      </p>
    </div>
  </div>
</section>

</template>
