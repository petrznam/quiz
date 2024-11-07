<template>
    <main>
        <h1>{{ question }}</h1>
        <input class="question-input" type="text" placeholder="введите ответ">
        <button class="button">Далее</button>
    </main>
</template>

<script>
export default{
    props: {
        question: String
    }
}
</script>

<style>
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
.question-input{
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
</style>