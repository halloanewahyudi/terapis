<template>
  <div>
    <section class="bg-light">
      <div class="grid grid-cols-1 lg:grid-cols-2 min-h-screen items-center">
        <div class="flex justify-center items-center">
          <div class="max-w-[500px] p-6">
            <h1 class="text-4xl lg:text-5xl mb-3 text-secondary">
              Sentuhan Profesional untuk Kesehatan dan Relaksasi Anda
            </h1>
            <p class="mb-5">
              Kami menghubungkan Anda dengan terapis pijat profesional di berbagai lokasi,
              siap memberikan layanan terbaik untuk meredakan ketegangan, meningkatkan
              sirkulasi, atau sekadar memanjakan diri.
            </p>
          </div>
        </div>
        <div class="h-full w-full">
          <img
            src="/images/cover.jpg"
            alt="Pijat Relaksasi"
            class="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>

    <section class="py-20">
      <div class="container">
        <div class="max-w-screen-md mx-auto text-center mb-10">
          <h2 class="text-3xl font-bold text-secondary mb-2">
            Melayani Anda dengan Sepenuh Hati
          </h2>
          <p class="text-lg">Sentuhan Profesional untuk Kenyamanan dan Kesehatan Anda</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10">
          <div
            v-for="(item, index) in features"
            :key="index"
            class="flex flex-col gap-2 text-center justify-center items-center relative"
          >
            <div
              class="absolute top-3 left-1/2 -translate-x-1/2 h-10 w-10 rounded-full bg-yellow-200 z-0"
            ></div>
            <div class="relative">
              <component :is="item.icon" class="w-12 h-12 text-secondary mx-auto mb-5" />

              <h5 class="text-secondary font-semibold mb-3">{{ item.title }}</h5>
              <p class="text-sm text-gray-600">{{ item.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="mb-20">
      <div class="container">
        <div class="max-w-screen-md mx-auto text-center mb-10">
          <h2 class="text-3xl font-bold text-secondary mb-2">Layanan & Harga</h2>
          <p class="text-lg">Treatment & Price</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
          <div v-for="item in layanan" :key="item.id">
            <div
              class="grid grid-cols-1 lg:grid-cols-2 items-center rounded-lg overflow-hidden bg-light h-full w-full"
            >
              <img :src="item.photo" alt="" class="w-full h-full object-cover" />
              <div>
                <div class="p-6 flex flex-col gap-2 w-full">
                  <h4 class="text-xl font-semibold">{{ item.title }}</h4>
                  <p class="text-sm text-gray-600">{{ item.description }}</p>
                  <div class="" v-for="item in item.price" :key="item.id">
                    <div class="flex justify-between">
                      <span>{{ item.waktu }}</span>
                      <span>{{ item.harga }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 bg-light">
      <div class="container">
        <div class="max-w-screen-md mx-auto text-center mb-10">
          <h2 class="text-3xl font-bold text-secondary mb-2">Kirim Pesan Order Anda</h2>
          <p class="text-lg">Silakan isi form dibawah ini</p>
        </div>
        <div class="max-w-md mx-auto">
          <form-order />
        </div>
      </div>
    </section>

    <section class="bg-secondary py-20">
      <div class="container">
        <h2 class="text-3xl font-bold text-white text-center mb-10">Kata Mereka</h2>
        <Splide
          :options="{
            autoplay: true,
            interval: 1000,
            type: 'loop',
            perPage: 3,
            gap: '2rem',
            breakpoints: {
              1200: { perPage: 3, gap: '1rem' },
              640: { perPage: 1, gap: 0 , interval: 2000, arrows: false },
            },
          }"
          aria-label="My Favorite Images"
        >
          <SplideSlide v-for="slide in testimony" :key="slide">
            <div class="p-6 lg:p-10 bg-light rounded-xl shadow-2xl h-full flex flex-col">
              <h4 class="text-2xl font-bold text-secondary mb-3">{{ slide.title }}</h4>
              <p class="mb-auto">{{ slide.description }}</p>
              <div class="flex items-center gap-3">
                <img
                  :src="slide.photo"
                  alt=""
                  class="w-10 h-10 rounded-full object-cover"
                />
                <span class="text-sm font-medium">{{ slide.nama }}</span>
              </div>
            </div>
          </SplideSlide>
        </Splide>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import "@splidejs/splide/dist/css/splide.min.css";

const { features } = useFeatures();
const { layanan } = useLayanan();
const { testimony } = useTestimony();
</script>

<style></style>
