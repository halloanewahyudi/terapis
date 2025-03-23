<template>
  <div class="w-full max-w-[600px] rounded-xl bg-white  overflow-hidden overflow-y-auto relative">
    <div>
      <form  v-if="dataForm !== null" @submit.prevent="submit" action="" class="form">
        <div class="p-6 lg:p-10 flex flex-col gap-2">
          <div>
            <label for="nama"> Nama</label>
            <input type="text" name="nama" id="nama" v-model="dataForm.nama">
          </div>
          <div>
            <label for="lokasi"> Lokasi</label>
            <input type="text" name="lokasi" id="lokasi" v-model="dataForm.lokasi">
          </div>
          <div>
            <label for="tanggal"> Tanggal</label>
            <input type="date" name="tanggal" id="tanggal" v-model="dataForm.tanggal">
          </div>
          <div>
            <label for="waktu"> Waktu</label>
            <input type="time" name="waktu" id="waktu" v-model="dataForm.waktu">
          </div>
          <div>
            <label for="alamat"> Alamat</label>
            <textarea name="alamat" id="" v-model="dataForm.alamat" rows="4">
         </textarea>
          </div>

        </div>
        <div class="bg-light p-6">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 ">
            <div class="flex flex-wrap item-center gap-3">
              <img :src="props.photo" alt="" class="w-12 h-12 rounded-full object-cover shrink-0">
              <div>
                <h5 class="text-lg font-medium font-sans"> {{ props.nama }}</h5>
                <span class="text-sm">{{ props.lokasi }}</span>
              </div>
            </div>
            <button
              class="btn btn-primary w-full py-3 px-6   duration-200">Jadwalkan</button>
          </div>
        </div>
      </form>
      <div v-else>
        {{ dataForm }}
      </div>
    </div>

  </div>

</template>

<script lang="ts" setup>
type Props = {
  photo: String,
  nama: String,
  lokasi: String
}
const props = defineProps<Props>()

const dataForm = reactive({
  nama: '',
  lokasi: '',
  tanggal: '',
  waktu: '',
  durasi: '',
  alamat: ''

})

const submit = () => {
  console.log(dataForm)
}
</script>

<style></style>