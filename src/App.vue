<script setup>
import { ref, reactive } from "vue" //* refは関数 使うときはデータをオブジェクトにする必要がある
const title = "Vue.js Course"
let price = ref(9.99) //* refに理アクティビティにしたいものを渡す
//* refが返す複雑なオブジェクトはrefオブジェクトっていう名前
// console.log(price.value) //* .valueっていうプロパティがある
const increment = () => {
  price.value += 1
  instructor.age += 1
  instructor.bio = "Hi"
  console.log(instructor)
  // console.log(price)
}

const info = ref({
  students: 1000,
  rating: 4
})
console.log(info.value.students)

const instructor = reactive({
  //* オブジェクトがそのまま使えるように見えるようになる
  name: "Yoshipi",
  age: 25,
  sns: {
    twitter: "@__yoshipi_",  //* ここにもreactive関数適用
    youtube: "@yoshipi",
    a:{

    }
  }
})
instructor.bio = "hello" //* 普通に追加できちゃう
console.log(instructor.age) //* これで呼べちゃう
</script>

<template>
  <h1>{{ title }}</h1>
  <h2>${{ price - 1 }}</h2>
  <!-- こっちは.valueをつけちゃだめ 自動的にref objectかどうかをチェックしてるから -->
  <!--普通にjsの式を入れられて結果が表示される ejsとかと一緒 -->
  <h3>Stundents: {{ info.students }}</h3>
  <h3>instructor: {{ instructor.age }}</h3>
  <h3>instructor SNS: {{ instructor.sns.twitter }}</h3>

  <button @click="increment">button</button>
  <!-- @イベント名="関数名"でイベント時に実行される -->
</template>

<style>
h1 {
  color: skyblue;
}
</style>
