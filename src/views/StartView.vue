<template>
    <main>
        <h2>Поиск викторины</h2>
        <div>
            <p>Здесь вы можете найти соперника для игры в онлайн викторину!</p>
            <p>Для начала введите своё имя и нажмите кнопку "найти соперника"</p>
        </div>
        <input class="name-input" type="text" v-model="name" placeholder="Введите ваше имя">
        <button class="button">Найти соперника</button>
    </main>
</template>
<script>
export default{
    data(){
        return{
            name: ""
        }
    }
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&display=swap');
main{
    width: 700px;
    height: 500px;
    background-color: #5BA199;
    border-radius: 10px;
    box-shadow: 0 0 10px black;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
}
.name-input{
    width: 480px;
    height: 40px;
    font-family: "Rubik", sans-serif;
    border-radius: 10px;
    border:none;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.63);
    outline: none;
    padding-left: 20px;
    font-size: 16px;
}
.button{
    background-color: #DDBEAA;
    width: 250px;
    height: 40px;
    border: none;
    border-radius: 10px;
    font-weight: 700;
    font-size: 18px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.555);
    cursor: pointer;
}
</style>