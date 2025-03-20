<template>
  <div class="mb-20">
    <!-- Hero Section -->
    <div class="py-16 bg-light text-primary mb-16">
      <div class="container">
        <h1 class="text-3xl font-medium text-center">Terapis Pijat {{ route.params.slug }}</h1>
      </div>
    </div>

    <!-- Filter Section -->
    <div class="container mb-6">
      <div class="flex gap-4 justify-center">
        <button @click="filterStatus = 'all'" :class="{ 'bg-blue-500 text-white': filterStatus === 'all' }" class="btn">Semua</button>
        <button @click="filterStatus = 'available'" :class="{ 'bg-green-500 text-white': filterStatus === 'available' }" class="btn">Available</button>
        <button @click="filterStatus = 'not-available'" :class="{ 'bg-red-500 text-white': filterStatus === 'not-available' }" class="btn">Not Available</button>
      </div>
    </div>

    <!-- Terapis List -->
    <div class="container">
      <div v-if="paginatedTerapis.length > 0" class="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <div class="p-6 rounded-xl border bg-white hover:shadow-xl duration-200" v-for="item in paginatedTerapis" :key="item.id">
          <IconsUser class="text-4xl text-primary-light" />
          <span class="text-lg font-medium">{{ item.nama }}</span> <br>
          <span class="text-sm">{{ item.lokasi }}</span> <br>
          <div class="text-sm  flex justify-between items-center" v-if="item.status">
            <span class="text-green-500">Available</span>
           
          </div>
          <span class="text-sm text-red-500" v-else>Not Available</span>
        </div>
      </div>
      <p v-else class="text-center text-gray-500">Terapis tidak ditemukan</p>
    </div>

    <!-- Pagination -->
    <div class="container mt-6">
      <div class="flex justify-center gap-3">
        <button @click="prevPage" class="btn" :disabled="currentPage === 1">Prev</button>
        <span class="px-4 py-2 border">{{ currentPage }} / {{ totalPages }}</span>
        <button @click="nextPage" class="btn" :disabled="currentPage === totalPages">Next</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>


const route = useRoute()
const { lokasi } = useLokasi()

const currentPage = ref(1)
const perPage = ref(5)
const filterStatus = ref<'all' | 'available' | 'not-available'>('all')

// Cari lokasi yang cocok berdasarkan route.params.slug
const selectedLocation = computed(() => {
  return lokasi.find(item => item.lokasi.toLowerCase() === route.params.slug.toLowerCase()) || null
})

// Ambil daftar terapis dari lokasi yang dipilih
const allTerapis = computed(() => {
  return selectedLocation.value ? selectedLocation.value.terapis : []
})

// Terapis yang sudah difilter berdasarkan status
const filteredTerapis = computed(() => {
  if (filterStatus.value === 'available') {
    return allTerapis.value.filter(item => item.status === true)
  } else if (filterStatus.value === 'not-available') {
    return allTerapis.value.filter(item => item.status === false)
  }
  return allTerapis.value
})

// Hitung total halaman
const totalPages = computed(() => Math.ceil(filteredTerapis.value.length / perPage.value) || 1)

// Terapis yang akan ditampilkan berdasarkan halaman saat ini
const paginatedTerapis = computed(() => {
  const start = (currentPage.value - 1) * perPage.value
  return filteredTerapis.value.slice(start, start + perPage.value)
})

// Navigasi halaman
const nextPage = () => {
  if (currentPage.value < totalPages.value) currentPage.value++
}
const prevPage = () => {
  if (currentPage.value > 1) currentPage.value--
}

// Reset halaman ke 1 jika filter berubah
watch(filterStatus, () => {
  currentPage.value = 1
})

</script>

<style>
.btn {
  padding: 8px 16px;
  border: 1px solid #ddd;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s;
}
.btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
