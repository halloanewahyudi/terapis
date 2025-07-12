<template>
  <div class="flex flex-col justify-center items-center min-h-screen py-16 bg-lime-100">
  <div class="max-w-screen-md mx-auto w-full px-6">
  <div class="mb-5 text-center">
  <h1 class="text-3xl font-bold mb-3 "> Pendaftaran Therapist / Terapis Massage</h1>
  <p> Silakan isi form dibawah ini</p>
  </div>
  
  <RecruitmentForm />
  </div>
  </div>
</template>

<script lang="ts" setup>
 definePageMeta({
  layout: "form"
 })
</script>

<style>

</style>