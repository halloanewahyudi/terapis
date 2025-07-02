<template>
  <div>
    <div class="">
      <form @submit.prevent="submit" class="flex flex-col gap-4">
        <input type="text" v-model="formData.nama" placeholder="Nama" class="input" />
        <input
          type="text"
          v-model="formData.no_telp"
          placeholder="No Telp"
          class="input"
        />

        <select v-model="formData.layanan" class="input" placeholder="Layanan">
          <option value="">Pilih Layanan</option>
          <option v-for="item in options" :value="item.value" :key="item.value">
            {{ item.label }}
          </option>
        </select>
        <select class="input" id="" v-model="formData.durasi">
          <option value="">Pilih Durasi</option>
          <option value="60 Menit">60 Menit</option>
          <option value="90 Menit">90 Menit</option>
          <option value="120 Menit">120 Menit</option>
        </select>
        <textarea
          id=""
          cols="30"
          rows="4"
          v-model="formData.alamat"
          placeholder="Alamat"
          class="input"
        ></textarea>
        <button type="submit" class="btn btn-secondary">Submit</button>
      </form>
    </div>
  </div>
</template>

<script lang="ts" setup>
const formData = ref({
  nama: "",
  no_telp: "",
  layanan: "",
  durasi: "",
  alamat: "",
});

const submit = () => {
  const { nama, no_telp, layanan, durasi, alamat } = formData.value;
  const pesan = `
Halo Admin,
Saya ingin melakukan pemesanan dengan detail berikut:
🧑 Nama: ${nama}
📞 No. Telp: ${no_telp}
🙌 Layanan: ${layanan}
⏱️ Durasi: ${durasi}
📍 Alamat: ${alamat}
`;
  const nomorAdmin = "62895611020302"; // Ganti dengan nomor WhatsApp tujuan, tanpa tanda +
  const url = `https://wa.me/${nomorAdmin}?text=${encodeURIComponent(pesan)}`;
  window.open(url, "_blank");

  console.log(formData.value);
};

const { layanan } = useLayanan();

const options = layanan.map((item) => {
  return {
    value: item.title,
    label: item.title,
  };
});
</script>

<style></style>
