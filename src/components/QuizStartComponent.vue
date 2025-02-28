<template>
    <div class="start-quiz-view">
        <h2>{{ title }}</h2>
        <p>{{ description }}</p>
        <button class="button">Начать</button>
    </div>
</template>
<script>
export default{
    props : {
        title : String,
        description: String
    }
}
</script>

<style scoped>
.start-quiz-view{
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

</style>