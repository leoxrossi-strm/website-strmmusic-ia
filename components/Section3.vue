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
        Acelere sua música no digital
      </p>
      <h2 class="py-4 font-CabinFont font-bold text-2xl xl:text-5xl xl:leading-[67px]">
        <span class="block 2xl:hidden">A Strm é a revolução</span>
        <span class="hidden 2xl:block"
          >A 
          <span class="text-primaryPurple"> Strm</span>
         é a revolução</span>

        <span class="block 2xl:hidden">da música digital</span>
        <span class="hidden 2xl:block">da música digital</span>
      </h2>
      <p class="text-lg font-CabinFont">
        <span class="2xl:block">
          Utilizamos <span class="text-primaryPurple font-bold"> inteligência artificial</span> e ciência
          de dados para adquirir um vasto conhecimento exclusivamente da música digital. E a partir disso
          criamos um agente personalizado para artistas acelerarem suas carreiras no mundo digital.
        </span>
        <div class="flex flex-col items-start lg:flex-row pt-6 gap-4">
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
