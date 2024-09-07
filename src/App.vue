<script setup>
import {ref} from "vue" //* refは関数 使うときはデータをオブジェクトにする必要がある
const title = "Vue.js Course"
let price = ref(9.99) //* refに理アクティビティにしたいものを渡す
//* refが返す複雑なオブジェクトはrefオブジェクトっていう名前
console.log(price.value)  //* .valueっていうプロパティがある
const increment = () =>{
  price.value += 1
console.log(price)
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
