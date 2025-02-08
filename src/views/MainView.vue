<template>
    <main>
        <ul>
            <div><router-link :to="{name : 'start'}">Стартовый экран (сделаем после входа)</router-link></div>
            <div><router-link :to="{name : 'quiz'}">Экран викторины</router-link></div>
            <div><router-link :to="{name : 'signup'}">Регистрация</router-link></div>
        </ul>

        <div class="quiz-cards" v-if="quizes.length > 0">
            <div class="quiz-card" v-for="quiz in quizes" :key="quiz.id">{{ quiz.title }} </div>

        </div>
    </main>
</template>

<script>
import { mapState, mapActions } from "pinia";
import { useQuizStore } from "@/store/quiz_store";

export default {
    computed : {
        ...mapState(useQuizStore, {
            quizes : "quizes"
        })
    },
    methods : {
        ...mapActions(useQuizStore, {
            updateQuizes : "updateQuizes"
        })
    },
    mounted(){
        this.updateQuizes();
    }
}

</script>

<style scoped>

.quiz-card{
    width: 100px;
    height: 100px;
    background-color: aqua;
}
.quiz-cards{
    display: flex;
    justify-content: center;
    gap: 10px;
}

</style>