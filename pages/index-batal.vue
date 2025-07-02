<template>
  <section class="bg-light">
    <div class="grid grid-cols-1 lg:grid-cols-2 min-h-screen items-center">
      <div class="flex justify-center items-center">
        <div class="max-w-[500px] p-6">
          <h1 class="text-4xl lg:text-5xl mb-3 text-secondary">
            Sentuhan Profesional untuk Kesehatan dan Relaksasi Anda
          </h1>
          <p class="mb-5">
            Kami menghubungkan Anda dengan terapis pijat profesional di berbagai lokasi, siap memberikan layanan terbaik
            untuk meredakan ketegangan, meningkatkan sirkulasi, atau sekadar memanjakan diri.
          </p>
        </div>
      </div>
      <div class="h-full w-full">
        <img src="/images/img-hero.jpg" alt="Pijat Relaksasi" class="h-full w-full object-cover">
      </div>
    </div>
  </section>

  <section class="py-20">
    <div class="container">
      <div class="max-w-screen-md mx-auto text-center mb-10">
        <h2 class="text-3xl font-bold text-secondary mb-2">Melayani Anda dengan Sepenuh Hati</h2>
        <p class="text-lg ">Sentuhan Profesional untuk Kenyamanan dan Kesehatan Anda</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10">
        <div v-for="(item, index) in features" :key="index"
          class="flex flex-col gap-2 text-center justify-center items-center relative">
          <div class="absolute top-3  left-1/2 -translate-x-1/2 h-10 w-10 rounded-full bg-yellow-200 z-0"></div>
          <div class="relative">
            <component :is="item.icon" class="w-12 h-12 text-secondary mx-auto mb-5" />

            <h5 class="text-primary font-semibold mb-3">{{ item.title }}</h5>
            <p class="text-sm text-gray-600">{{ item.description }}</p>
          </div>

        </div>
      </div>

    </div>
  </section>
  <section class="py-20 bg-light">
    <div class="max-w-screen-md mx-auto text-center mb-10">
      <h2 class="text-3xl font-bold text-secondary mb-2">Tim Kami</h2>
      <p class="text-lg ">Siap Memberikan Layanan Terbaik untuk Anda</p>
    </div>
    <NuxtMarquee autoFill="true" hoverStop="true" class="mb-10">
      <div @click="selectTerapist(item)" v-for="item in terapis.slice(0, terapis.length / 2)" :key="item"
        class=" text-center bg-white rounded-xl w-full max-w-[300px] mx-3 relative hover:shadow-2xl duration-300 group cursor-pointer">
        <div class="relative rounded-xl overflow-hidden ">
          <img :src="item.photo" alt=""
            class="w-full h-32 rounded-xl object-cover group-hover:scale-105 duration-300 ease-in-out">
          <div class="absolute top-3 right-3 z-10 inline-block w-3 h-3 rounded-full border border-white"
            :class="item.status === true ? 'bg-green-500' : 'bg-red-500'">
          </div>
        </div>

        <div class="p-4 flex flex-col ">
          <h6>{{ item.nama }}</h6>
          <span class="text-sm">{{ item.lokasi }}</span>
          <span @click="selectTerapist(item)" class="text-sm cursor-pointer text-secondary">Jadwalkan</span>
        </div>
      </div>
    </NuxtMarquee>
    <NuxtMarquee autoFill="true" direction="right">
      <div v-for="item in terapis.slice(terapis.length - 5, terapis.length)" :key="item"
        class=" text-center bg-white rounded-xl w-full max-w-[300px] mx-3 relative hover:shadow-2xl duration-300 group">
        <div class="relative rounded-xl overflow-hidden ">
          <img :src="item.photo" alt=""
            class="w-full h-32 rounded-xl object-cover group-hover:scale-105 duration-300 ease-in-out">
          <div class="absolute top-3 right-3 z-10 inline-block w-3 h-3 rounded-full border border-white"
            :class="item.status === true ? 'bg-green-500' : 'bg-red-500'">
          </div>
        </div>
        <div class="p-4 flex flex-col ">
          <h6>{{ item.nama }}</h6>
          <span class="text-sm">{{ item.lokasi }}</span>
          <span @click="selectTerapist(item)" class="text-sm cursor-pointer text-secondary">Jadwalkan</span>
        </div>
      </div>
    </NuxtMarquee>
  </section>
  <div v-if="selectedTerapist !== null"
    class="fixed top-0 left-0 w-full h-full min-h-screen bg-primary/80 flex justify-center items-center p-10 z-50">
    <div class="overflow-y-auto w-full max-w-[600px] mx-auto relative">
      <button class="absolute top-3 right-3 z-50 text-red-500 p-2 rounded-full bg-white"
        @click="selectedTerapist = null">
        <IconsClose />
      </button>
      <Jadwalkan :nama="selectedTerapist.nama" :lokasi="selectedTerapist.lokasi" :photo="selectedTerapist.photo" />
    </div>
  </div>

  <section class="bg-primary py-20">
    <div class="container">
      <h2 class="text-3xl font-bold text-white text-center mb-10"> Kata Mereka</h2>
      <Splide :options="{
        autoplay: true,
        interval: 1000,
        type: 'loop',
        perPage: 3,
        gap: '2rem',
      }" aria-label="My Favorite Images">
        <SplideSlide v-for="slide in testimony" :key="slide">
          <div class="p-6 lg:p-10 bg-light rounded-xl shadow-2xl h-full flex flex-col">
            <h4 class="text-2xl font-bold text-primary mb-3">{{ slide.title }}</h4>
            <p class="mb-auto">{{ slide.description }}</p>
            <div class="flex items-center gap-3 ">
              <img :src="slide.photo" alt="" class="w-10 h-10 rounded-full object-cover">
              <span class="text-sm font-medium">{{ slide.nama }}</span>
            </div>
          </div>
        </SplideSlide>
      </Splide>
    </div>
  </section>


</template>

<script lang="ts" setup>
import { defineAsyncComponent } from 'vue'

import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/splide/dist/css/splide.min.css';

const { testimony } = useTestimony()

const { terapis } = useTerapis()
const features = [
  {
    title: 'Terapis Berpengalaman',
    description: 'Terapis kami adalah profesional terlatih yang siap memberikan pijatan yang tepat sesuai kebutuhan Anda.',
    icon: defineAsyncComponent(() => import('~/components/icons/users.vue'))
  },
  {
    title: 'Beragam Jenis Pijat',
    description: 'Dari pijat relaksasi, pijat refleksi, hingga terapi pijat untuk mengatasi nyeri otot.',
    icon: defineAsyncComponent(() => import('~/components/icons/pijat.vue'))
  },
  {
    title: 'Fleksibel & Praktis ',
    description: 'Dengan jadwal yang fleksibel, Anda dapat menentukan waktu dan lokasi pijatan sesuai kebutuhan Anda.',
    icon: defineAsyncComponent(() => import('~/components/icons/calendar.vue'))
  },
  {
    title: 'Aman & Higienis ',
    description: 'Kami memastikan protokol kesehatan dan kebersihan terjaga dalam setiap sesi.',
    icon: defineAsyncComponent(() => import('~/components/icons/higienis.vue'))
  }
]

const selectedTerapist = ref(null)
const selectTerapist = (item) => {
  selectedTerapist.value = item
  console.log(selectedTerapist.value)
}
</script>
