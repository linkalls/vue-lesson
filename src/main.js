import { createApp } from "vue"
import App from "./App.vue" //* 重要 default importできるようにviteが勝手にしてくれる

createApp(App) //* createAppは関数 引数にコンポーネントを渡す必要あり
