<template>
  <div class="py-3">
    <div class="container">
      <div class="flex justify-between items-center">
        <div class="flex gap-3">
          <div class="flex items-center gap-2">
            <NuxtLink to="/" class="flex gap-2 items-end">
              <h4 class="text-3xl font-bold text-secondary">Bale</h4>
              <span class="text-sm">Massage Home Services</span>
            </NuxtLink>
          </div>
        </div>

        <!-- Search Box -->
        <div class="relative form w-full max-w-[600px]">
          <input
            type="search"
            v-model="lokasi"
            placeholder="Lokasi Anda"
            class="input w-full"
            @keydown="handleKeydown"
            @focus="showResults = true"
            @blur="hideResults"
          />
          <ul
            v-if="showResults && autoCompleteLokasi.length > 0"
            class="absolute top-10 left-0 w-full bg-white shadow-lg z-10 border rounded-md"
          >
            <li
              v-for="(item, index) in autoCompleteLokasi"
              :key="item.slug"
              :class="{ 'bg-gray-200': index === selectedIndex }"
              @mousedown.prevent="navigateToLokasi(item.slug)"
              class="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            >
              {{ item.nama }}
            </li>
          </ul>
        </div>

        <div class="flex gap-3">
          <button class="btn btn-primary">Login</button>
          <button class="btn btn-secondary">Register</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue';
import { useRouter } from 'nuxt/app';

const router = useRouter();
const lokasi = ref<string>('');
const showResults = ref<boolean>(false);
const selectedIndex = ref<number>(-1); // Untuk menyimpan index yang disorot

const listLokasi = [
  { nama: 'Jakarta', slug: 'jakarta' },
  { nama: 'Depok', slug: 'depok' },
  { nama: 'Bogor', slug: 'bogor' },
  { nama: 'Tangerang', slug: 'tangerang' },
  { nama: 'Bekasi', slug: 'bekasi' }
];

const autoCompleteLokasi = computed(() => {
  return lokasi.value
    ? listLokasi.filter(item =>
        item.nama.toLowerCase().includes(lokasi.value.toLowerCase())
      )
    : [];
});

// Navigasi ke halaman berdasarkan slug
const navigateToLokasi = (slug: string) => {
  router.push(`/lokasi/${slug}`);
  showResults.value = false;
};

// Handle navigasi keyboard
const handleKeydown = (event: KeyboardEvent) => {
  if (autoCompleteLokasi.value.length === 0) return;

  if (event.key === 'ArrowDown') {
    // Pindah ke item berikutnya
    selectedIndex.value = (selectedIndex.value + 1) % autoCompleteLokasi.value.length;
  } else if (event.key === 'ArrowUp') {
    // Pindah ke item sebelumnya
    selectedIndex.value =
      selectedIndex.value > 0 ? selectedIndex.value - 1 : autoCompleteLokasi.value.length - 1;
  } else if (event.key === 'Enter') {
    // Pilih item yang disorot saat tekan Enter
    if (selectedIndex.value >= 0) {
      navigateToLokasi(autoCompleteLokasi.value[selectedIndex.value].slug);
    } else if (autoCompleteLokasi.value.length > 0) {
      navigateToLokasi(autoCompleteLokasi.value[0].slug);
    }
  }
};

// Sembunyikan dropdown saat input kehilangan fokus
const hideResults = () => {
  setTimeout(() => {
    showResults.value = false;
    selectedIndex.value = -1; // Reset index
  }, 200);
};
</script>
