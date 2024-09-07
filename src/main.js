import { createApp } from "vue"
import App from "./App.vue" //* 重要 default importできるようにviteが勝手にしてくれる

const app = createApp(App) //* createAppは関数 引数にコンポーネントを渡す必要あり UIを作るだけで表示はしないから書かなきゃいけない 返り値を返してる
app.mount("#app") //* メソッドを使って表示 引数にcss selectorと同じルールで場所を指定
