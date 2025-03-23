<template>
  <div class="mb-20">
    <!-- Hero Section -->
    <div class="py-16 bg-light text-primary mb-16">
      <div class="container" >
        <h1 class="text-3xl font-medium text-center">Terapis di {{ route.params.slug }}</h1>
      </div>
    </div>

    <!-- Filter Section -->
    <div class="container mb-6">
      <div class="flex gap-4 justify-center">
        <button @click="filterStatus = 'all'" :class="{ 'bg-blue-500 ': filterStatus === 'all' }" class="btn">
          Semua
        </button>
        <button @click="filterStatus = 'available'" :class="{ 'bg-green-500 ': filterStatus === 'available' }"
          class="btn">
          Available
        </button>
        <button @click="filterStatus = 'not-available'"
          :class="{ 'bg-red-500 text-white': filterStatus === 'not-available' }" class="btn">
          Not Available
        </button>
      </div>
    </div>

    <!-- Terapis List -->
    <div class="container">
      <div v-if="paginatedTerapis.length > 0" class="grid grid-cols-2 lg:grid-cols-3 gap-6">
        <div class="rounded-xl border bg-white hover:shadow-xl duration-200 flex gap-3 items-center overflow-hidden"
          v-for="item in paginatedTerapis" :key="item.id">
          <div class="relative rounded-xl overflow-hidden ">
            <img :src="item.photo" alt=""
              class="w-[200px] h-32 shrink-0 rounded-xl object-cover group-hover:scale-105 duration-300 ease-in-out ">
            <div class="absolute top-3 right-3 z-10 inline-block w-3 h-3 rounded-full border border-white"
              :class="item.status === true ? 'bg-green-500' : 'bg-red-500'">
            </div>
          </div>
          <div class="p-4 flex flex-col gap-1">
            <h6>{{ item.nama }}</h6>
            <span class="text-sm">{{ item.lokasi }}</span>
            <span @click="selectTerapist(item)" class="text-sm cursor-pointer text-secondary">Jadwalkan</span>
          </div>
        </div>
      </div>
      <p v-else class="text-center text-gray-500">Terapis tidak ditemukan</p>
    </div>

    <!-- Pagination -->
    <div v-if="totalPages > 1" class="container mt-6">
      <div class="flex justify-center gap-3">
        <button @click="prevPage" class="btn max-w-max" :disabled="currentPage === 1">Prev</button>
        <span class="px-4 py-2 border shrink-0">{{ currentPage }} / {{ totalPages }}</span>
        <button @click="nextPage" class="btn max-w-max" :disabled="currentPage === totalPages">Next</button>
      </div>
    </div>

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
  </div>
</template>

<script lang="ts" setup>

const route = useRoute();
const { terapis } = useTerapis();
const selectedTerapist = ref(null)
const selectTerapist = (item) => {
  selectedTerapist.value = item
  console.log(selectedTerapist.value)
}

const currentPage = ref(1);
const perPage = ref(10);
const filterStatus = ref<'all' | 'available' | 'not-available'>('all');

// 🔥 Cari semua terapis berdasarkan lokasi (slug dari URL)
const selectedLocation = computed(() => {
  return terapis.filter(item => item.lokasi?.toLowerCase() === route.params.slug?.toLowerCase());
});

// 🔥 Semua terapis dalam lokasi tersebut
const allTerapis = computed(() => selectedLocation.value);

// 🔥 Terapis yang sudah difilter berdasarkan status
const filteredTerapis = computed(() => {
  if (filterStatus.value === 'available') {
    return allTerapis.value.filter(item => item.status === true);
  } else if (filterStatus.value === 'not-available') {
    return allTerapis.value.filter(item => item.status === false);
  }
  return allTerapis.value;
});

// 🔥 Hitung total halaman (minimal 1 halaman)
const totalPages = computed(() => Math.max(1, Math.ceil(filteredTerapis.value.length / perPage.value)));

// 🔥 Terapis yang akan ditampilkan berdasarkan halaman saat ini
const paginatedTerapis = computed(() => {
  const start = (currentPage.value - 1) * perPage.value;
  return filteredTerapis.value.slice(start, start + perPage.value);
});

// 🔥 Navigasi halaman
const nextPage = () => {
  if (currentPage.value < totalPages.value) currentPage.value++;
};
const prevPage = () => {
  if (currentPage.value > 1) currentPage.value--;
};

// 🔥 Reset halaman ke 1 jika filter berubah
watch(filterStatus, () => {
  currentPage.value = 1;
});
</script>



<style></style>
