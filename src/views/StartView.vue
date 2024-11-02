<template>
    <h1>Стартовый экран викторины</h1>
    <h3>введите своё имя</h3>
    <input class="name-input" type="text" v-model="name">
    <button>Найти соперника</button>
</template>
<script>
export default{
      created(){
          document.getElementsByTagName('html')[0].style.background = `url(${require('../assets/68e53a77-c2f3-5f2a-a376-d2ac0d61e91b.jpg')}) center`
      },
 data(){
    return{
        name: ""
    }
 }
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&display=swap');
.name-input{
    width: 500px;
    height: 50px;
    font-family: "Rubik", sans-serif;
}
</style>