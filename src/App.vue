<script setup>
const title = "Vue.js Course"
let price = 9.99
const increment = () =>{
console.log("click")
}
</script>

<template>
  <h1>{{ title }}</h1>
   <h2>${{ price -1 }}</h2> 
   <!--普通にjsの式を入れられて結果が表示される ejsとかと一緒 -->
   <button @click="increment">button</button> <!-- @イベント名="関数名"でイベント時に実行される -->
</template>

<style>
h1 {
  color: skyblue;
}
</style>
