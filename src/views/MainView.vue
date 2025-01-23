<template>
    <main>
        <ul>
            <li><router-link :to="{name : 'start'}">Стартовый экран (сделаем после входа)</router-link></li>
            <li><router-link :to="{name : 'quiz'}">Экран викторины</router-link></li>
        </ul>

        <ul v-if="quizes.length > 0">
            <li v-for="quiz in quizes" :key="quiz.id">{{ quiz.title }}</li>

        </ul>
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