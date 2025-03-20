<template>
  <div class="card">
    <img :src="cardImage" alt="">
    <div class="card-content">
      <div class="card-title">{{ cardTitle }}</div>
      <div class="card-description"> {{ cardDescription }}</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
type Props = {
  cardImage: string,
  cardTitle: string,
  cardDescription: string 
}
const { cardImage, cardTitle, cardDescription } = defineProps<Props>()
</script>

<style>
.card{
  border-radius: 12px;
  border: 1px solid #e7e7e7;
}
.card:hover{
  box-shadow: 0 0 11px rgba(33,33,33,.2);

}
.card-content{
  padding: 16px;
}
</style>