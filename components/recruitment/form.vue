<template>
  <div>
    <form @submit.prevent="formSubmit">
      <div class="form-group">
        <label for="nama">Nama Lengkap</label>
        <input type="text" class="input" v-model="formData.nama" />
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div class="form-group">
          <label for="tempat_lahir">Tempat Lahir</label>
          <input type="text" class="input" v-model="formData.tempat_lahir" />
        </div>

        <div class="form-group">
          <label for="tanggal_lahir">Tanggal Lahir</label>
          <input type="date" v-model="formData.tanggal_lahir" class="input" />
        </div>
      </div>

      <div class="form-group">
        <label for="no_telp">No Telp / WA Aktif</label>
        <input type="text" class="input" v-model="formData.no_telp" />
      </div>

      <div class="form-group">
        <label for="alamat">Alamat Saat Ini</label>
        <textarea v-model="formData.alamat" rows="4" class="input"></textarea>
      </div>

      <div class="form-group">
        <label>
          <input type="checkbox" v-model="formData.pengalaman" />
          Punya pengalaman sebagai terapis
        </label>
      </div>

      <div v-if="formData.pengalaman">
        <div class="form-group">
          <label for="tahun_pengalaman">Tahun Pengalaman</label>
          <select v-model="formData.tahun_pengalaman" class="input">
            <option value="1-2 tahun">1-2 tahun</option>
            <option value="3-5 tahun">3-5 tahun</option>
            <option value="Lebih dari 5 tahun">Lebih dari 5 tahun</option>
          </select>
        </div>

        <div class="form-group">
          <label for="keahlian">Keahlian</label>
          <select v-model="formData.keahlian" class="input">
            <option value="Full body massage">Full body massage</option>
            <option value="Reflexology">Reflexology</option>
            <option value="Totok wajah">Totok wajah</option>
            <option value="Kerokan">Kerokan</option>
            <option value="Bekam">Bekam</option>
            <option value="Lainnya">Lainnya</option>
          </select>
        </div>
      </div>

      <div class="form-group space-y-2">
        <label class="block font-semibold">
          Apakah bersedia bekerja full-time / panggilan?
        </label>
        <div class="flex gap-3">
          <div class="flex items-center space-x-2">
            <input
              type="checkbox"
              id="full-time"
              value="Full time"
              v-model="formData.waktu_kerja"
            />
            <label for="full-time">Full time</label>
          </div>

          <div class="flex items-center space-x-2">
            <input
              type="checkbox"
              id="part-time"
              value="Part time"
              v-model="formData.waktu_kerja"
            />
            <label for="part-time">Part time</label>
          </div>
        </div>
      </div>

      <div class="form-group">
        <label>
          Apakah bersedia ditempatkan di lokasi usaha?
          <input type="checkbox" v-model="formData.penempatan_kerja" />
        </label>
      </div>

      <div
        class="form-group relative bg-lime-50 p-4 rounded-lg border border-dashed border-lime-400 flex flex-col items-center justify-center"
      >
        <p class="text-sm text-gray-600">Upload KTP</p>
        <label for="ktp" class="text-4xl text-gray-400">
          <Icon name="tabler:cloud-upload" />
        </label>
        <input type="file" id="ktp" class="file:invisible" @change="previewKtp" />

        <img
          v-if="ktpPreview"
          :src="ktpPreview"
          alt="Preview KTP"
          class="max-w-xs rounded-lg border"
        />
      </div>

      <button type="submit" class="btn btn-primary">Submit</button>
    </form>

    <div
      v-if="success" class="fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-lime-100 z-50"
    >
      <div class="text-center">
        <Icon name="line-md:check-all" class="text-6xl text-lime-600" />
        <p class="">terimakasih {{ formData.nama }}</p>
        <p class="text-4xl">Form submitted successfully</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, watchEffect } from "vue";
const supabase = useSupabaseClient();

const success = ref(false);
const invalid = ref(false);

const formData = reactive({
  nama: "",
  tempat_lahir: "",
  tanggal_lahir: "",
  alamat: "",
  no_telp: "",
  pengalaman: false,
  tahun_pengalaman: "",
  keahlian: "",
  waktu_kerja: [] as string[],
  penempatan_kerja: false,
  ktp: "",
});

watchEffect(() => {
  if (!formData.pengalaman) {
    formData.tahun_pengalaman = "";
    formData.keahlian = "";
  }
});

const reset = () => {
  formData.nama = "";
  formData.tempat_lahir = "";
  formData.tanggal_lahir = "";
  formData.alamat = "";
  formData.no_telp = "";
  formData.pengalaman = false;
  formData.tahun_pengalaman = "";
  formData.keahlian = "";
  formData.waktu_kerja = [];
  formData.penempatan_kerja = false;
  formData.ktp = "";
};

const ktpPreview = ref<string | null>(null);

const previewKtp = (event: Event) => {
  const target = event.target as HTMLInputElement;
  const file = target.files?.[0];
  if (file) {
    ktpPreview.value = URL.createObjectURL(file);
  } else {
    ktpPreview.value = null;
  }
};

const formSubmit = async () => {
  try {
    const fileInput = document.querySelector<HTMLInputElement>("#ktp");
    const file = fileInput?.files?.[0];

    if (!file) {
      alert("Silakan upload file KTP terlebih dahulu.");
      return;
    }

    const fileName = `ktp/${Date.now()}-${file.name}`;

    const { error: storageError } = await supabase.storage
      .from("images")
      .upload(fileName, file);

    if (storageError) throw storageError;

    // ✅ Ambil public URL dengan cara yang benar
    const { data: urlData, error: urlError } = supabase.storage
      .from("images")
      .getPublicUrl(fileName);

    if (urlError) throw urlError;

    const publicUrl = urlData.publicUrl;

    const { error: insertError } = await supabase.from("recruitment").insert({
      nama: formData.nama,
      tempat_lahir: formData.tempat_lahir,
      tanggal_lahir: formData.tanggal_lahir,
      alamat: formData.alamat,
      no_telp: formData.no_telp,
      pengalaman: formData.pengalaman,
      tahun_pengalaman: formData.pengalaman ? formData.tahun_pengalaman : null,
      keahlian: formData.pengalaman ? formData.keahlian : null,
      waktu_kerja: formData.waktu_kerja,
      penempatan_kerja: formData.penempatan_kerja,
      ktp: publicUrl,
    });

    if (insertError) throw insertError;

    //    alert("Form berhasil dikirim!");
    success.value = true;
    reset();
  } catch (err) {
    console.error("Error saat submit:", err);
     alert("Terjadi kesalahan saat submit.");
   invalid.value = true
  }
};
</script>

<style scoped>
.form-group {
  @apply mb-4;
}
</style>
