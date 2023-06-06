<template>
  <section class="w-screen flex flex-col justify-center mt-16">
    <div class="px-4 w-full">
      <div class="gradient-border">
        <div class="gradient-box cursor-pointer">
          <div class="flex items-center justify-between py-4 px-6">
            <p class="text-2xl font-CabinFont font-bold">Strm Music</p>
            <div class="relative">
              <img src="images/note.svg" alt="note musical" />
              <img src="images/noteArrow.svg" alt="note musical" class="absolute top-2" />
            </div>
          </div>
        </div>
      </div>

      <div class="bg-[#0F0D2A] pt-8 -mt-4 rounded-b-lg">
        <ul class="px-6 text-secondary font-CabinFont text-base pb-8">
          <li class="flex items-start">
            <img src="images/checkIcon.svg" alt="check mark" />
            <p class="pl-2">
              <span class="font-bold"> Email: </span>distro@strm.com.br com SLA de 24hs
            </p>
          </li>

          <li class="flex pt-6 items-start">
            <img src="images/checkIcon.svg" alt="check mark" />
            <p class="pl-2">
              <span class="font-bold"> Chat: </span>Disponível de segunda a sexta das 9:00 às
              12:00hs e das 13:30 às 17:00hs
            </p>
          </li>
          <li class="flex pt-6 items-start">
            <img src="images/checkIcon.svg" alt="check mark" />
            <p class="pl-2">
              <span class="font-bold"> Pitching editorial: </span> Pitching nas lojas de música com
              critério prévio Strm Distro no Spotify, Apple Music, Deezer, Amazon Music, Resso e
              Youtube Music, através de envio das informações necessárias via preenchimento de
              formulário, com no mínimo 21 dias de antecedência a data de lançamento.
            </p>
          </li>
          <li class="flex pt-4 items-start">
            <img src="images/checkIcon.svg" alt="check mark" />
            <p class="pl-2"><span class="font-bold"> Strm for labels: </span> Acesso premium</p>
          </li>
          <li class="flex pt-6 items-start">
            <img src="images/checkIcon.svg" alt="check mark" />
            <p class="pl-2"><span class="font-bold"> Strm for artists: </span> Acesso premium</p>
          </li>
          <li class="flex pt-6 items-start">
            <img src="images/checkIcon.svg" alt="check mark" />
            <p class="pl-2">
              <span class="font-bold"> Diagnóstico de carreira Strm: </span> Acesso a 2 diagnósticos
              de carreira gratuito por ano
            </p>
          </li>
        </ul>
      </div>
    </div>

    <!-- price 2  -->

    <div class="px-4 w-full pt-7">
      <div class="gradient-border">
        <div @click="toggle" class="gradient-box cursor-pointer">
          <div class="flex items-center justify-between py-4 px-6">
            <p class="text-2xl font-CabinFont font-bold">Strm Stars</p>
            <div class="relative">
              <img src="images/music.svg" alt="note musical" />
              <img
                src="images/musicStar.svg"
                alt="note musical"
                class="absolute top-[4px] left-[5px]"
              />
            </div>
          </div>
        </div>
      </div>
      <transition name="slide-fade">
        <div v-show="isOpen">
          <div class="bg-[#0F0D2A] pt-8 -mt-4 rounded-b-lg">
            <ul class="px-6 text-secondary font-CabinFont text-base pb-8">
              <li class="flex items-start">
                <img src="images/checkIcon.svg" alt="check mark" />
                <p class="pl-2">
                  <span class="font-bold"> Email: </span>distro@strm.com.br com SLA de 24hs
                </p>
              </li>

              <li class="flex pt-6 items-start">
                <img src="images/checkIcon.svg" alt="check mark" />
                <p class="pl-2">
                  <span class="font-bold"> Chat: </span>Disponível de segunda a sexta das 9:00 às
                  12:00hs e das 13:30 às 17:00hs
                </p>
              </li>

              <li class="flex pt-6 items-start">
                <img src="images/checkIcon.svg" alt="check mark" />
                <p class="pl-2">
                  <span class="font-bold">Whatsapp: </span>Contato direto via whatsapp com um Label
                  Manager Strm
                </p>
              </li>

              <li class="flex pt-6 items-start">
                <img src="images/checkIcon.svg" alt="check mark" />
                <p class="pl-2">
                  <span class="font-bold">Eventos: </span> Palestras, workshops e eventos exclusivos
                  Strm
                </p>
              </li>
              <li class="flex pt-6 items-start">
                <img src="images/checkIcon.svg" alt="check mark" />
                <p class="pl-2">
                  <span class="font-bold">Reuniões estratégicas: </span> Reuniões online com a
                  equipe de MKT da Strm para alinhamento do plano estratégico de futuros
                  lançamentos.
                </p>
              </li>
              <li class="flex pt-6 items-start">
                <img src="images/checkIcon.svg" alt="check mark" />
                <p class="pl-2">
                  <span class="font-bold"> Pitching editorial: </span> Pitching nas lojas de música
                  com critério prévio Strm Distro no Spotify, Apple Music, Deezer, Amazon Music,
                  Resso e Youtube Music, através de envio das informações necessárias via
                  preenchimento de formulário, com no mínimo 21 dias de antecedência a data de
                  lançamento.
                </p>
              </li>

              <li class="flex pt-6 items-start">
                <img src="images/checkIcon.svg" alt="check mark" />
                <p class="pl-2">
                  <span class="font-bold"> Pitching 2ID: </span> Pitching para 2ID, para veiculação
                  do lançamento em mais de 3.500 lojas físicas de grandes marcas, saiba mais em
                  www.2id.com.br
                </p>
              </li>
              <li class="flex pt-4 items-start">
                <img src="images/checkIcon.svg" alt="check mark" />
                <p class="pl-2"><span class="font-bold"> Strm for labels: </span> Acesso premium</p>
              </li>

              <li class="flex pt-6 items-start">
                <img src="images/checkIcon.svg" alt="check mark" />
                <p class="pl-2">
                  <span class="font-bold"> Strm for artists: </span> Acesso premium
                </p>
              </li>
              <li class="flex pt-6 items-start">
                <img src="images/checkIcon.svg" alt="check mark" />
                <p class="pl-2">
                  <span class="font-bold"> Diagnóstico de carreira Strm: </span> Acesso a 2
                  diagnósticos de carreira gratuito por ano
                </p>
              </li>
            </ul>
          </div>
        </div>
      </transition>
    </div>

    <!-- price 3  -->
    <div class="px-4 w-full pt-5">
      <div class="gradient-border">
        <div @click="toggle1" class="gradient-box cursor-pointer">
          <div class="flex items-center justify-between py-4 px-6">
            <p class="text-2xl font-CabinFont font-bold">Strm Legends</p>
            <div class="relative">
              <img src="images/mic.svg" alt="note musical" />
              <img
                src="images/micStar.svg"
                alt="note musical"
                class="absolute top-[14px] left-[13.5px]"
              />
            </div>
          </div>
        </div>
      </div>
      <transition name="slide-fade">
        <div v-show="isOpen1">
          <div class="bg-[#0F0D2A] pt-8 -mt-4 rounded-b-lg">
            <ul class="px-6 text-secondary font-CabinFont text-base pb-8">
              <li class="flex items-start">
                <img src="images/checkIcon.svg" alt="check mark" />
                <p class="pl-2">
                  <span class="font-bold"> Email: </span>distro@strm.com.br com SLA de 24hs
                </p>
              </li>

              <li class="flex pt-6 items-start">
                <img src="images/checkIcon.svg" alt="check mark" />
                <p class="pl-2">
                  <span class="font-bold"> Chat: </span>Disponível de segunda a sexta das 9:00 às
                  12:00hs e das 13:30 às 17:00hs
                </p>
              </li>

              <li class="flex pt-6 items-start">
                <img src="images/checkIcon.svg" alt="check mark" />
                <p class="pl-2">
                  <span class="font-bold">Whatsapp: </span>Contato direto via whatsapp com um Label
                  Manager Strm
                </p>
              </li>

              <li class="flex pt-6 items-start">
                <img src="images/checkIcon.svg" alt="check mark" />
                <p class="pl-2">
                  <span class="font-bold">Time especial Distro: </span> Reuniões online com a equipe
                  de MKT da Strm para alinhamento do plano estratégico de futuros lançamentos. Strm
                </p>
              </li>
              <li class="flex pt-6 items-start">
                <img src="images/checkIcon.svg" alt="check mark" />
                <p class="pl-2">
                  <span class="font-bold">Reunião Presencial: </span> Reunião Presencial: Acesso ao
                  nosso escritório da Vila Madalena para reuniões de planejamento e audições.
                  lançamentos.
                </p>
              </li>
              <li class="flex pt-6 items-start">
                <img src="images/checkIcon.svg" alt="check mark" />
                <p class="pl-2">
                  <span class="font-bold"> Pitching editorial: </span> Pitching nas lojas de música
                  com critério prévio Strm Distro no Spotify, Apple Music, Deezer, Amazon Music,
                  Resso e Youtube Music, através de envio das informações necessárias via
                  preenchimento de formulário, com no mínimo 21 dias de antecedência a data de
                  lançamento.
                </p>
              </li>

              <li class="flex pt-6 items-start">
                <img src="images/checkIcon.svg" alt="check mark" />
                <p class="pl-2">
                  <span class="font-bold"> Pitching 2ID: </span> Pitching para 2ID, para veiculação
                  do lançamento em mais de 3.500 lojas físicas de grandes marcas, saiba mais em
                  www.2id.com.br
                </p>
              </li>
              <li class="flex pt-6 items-start">
                <img src="images/checkIcon.svg" alt="check mark" />
                <p class="pl-2">
                  <span class="font-bold"> Gestão de tráfego: </span> Google Ads para o produto
                  audiovisual do lançamento
                </p>
              </li>

              <li class="flex pt-6 items-start">
                <img src="images/checkIcon.svg" alt="check mark" />
                <p class="pl-2">
                  <span class="font-bold"> Canais de música: </span>Envio de video-clipes para os
                  canais de música Multishow, BIS, Music Box Brazil e MTV
                </p>
              </li>

              <li class="flex pt-6 items-start">
                <img src="images/checkIcon.svg" alt="check mark" />
                <p class="pl-2">
                  <span class="font-bold"> Relações Públicas: </span> Trabalho focado de RP nos
                  principais meios de comunicação do segmento musical
                </p>
              </li>

              <li class="flex pt-4 items-start">
                <img src="images/checkIcon.svg" alt="check mark" />
                <p class="pl-2"><span class="font-bold"> Strm for labels: </span> Acesso premium</p>
              </li>

              <li class="flex pt-6 items-start">
                <img src="images/checkIcon.svg" alt="check mark" />
                <p class="pl-2">
                  <span class="font-bold"> Strm for artists: </span> Acesso premium
                </p>
              </li>
              <li class="flex pt-6 items-start">
                <img src="images/checkIcon.svg" alt="check mark" />
                <p class="pl-2">
                  <span class="font-bold"> Diagnóstico de carreira Strm: </span> Acesso a 2
                  diagnósticos de carreira gratuito por ano
                </p>
              </li>
            </ul>
          </div>
        </div>
      </transition>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
const isOpen = ref(false)

const toggle = () => {
  isOpen.value = !isOpen.value
  console.log(isOpen.value)
}

const isOpen1 = ref(false)
const toggle1 = () => {
  isOpen1.value = !isOpen1.value
}
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

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.3s ease;
}
.slide-fade-enter-from {
  opacity: 0;
  transform: translateY(10px);
}
.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
