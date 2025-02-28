<template>
    <div v-if="quizStarted">
        <EnemyScoreComponent :enemy-name="enemy.name" :enemy-score="enemy.score"/>
        <QuestionComponent :question="quiz[current].title" />
    </div>
    <QuizStartComponent :title="currentQuiz.title" :description="currentQuiz.description" />
    <!-- <button @click="current++">Далее</button> -->
</template>

<script>
import QuestionComponent from '@/components/QuestionComponent.vue';
import EnemyScoreComponent from '@/components/EnemyScoreComponent.vue';
import QuizStartComponent from '@/components/QuizStartComponent.vue';
import { mapState } from 'pinia';
import { useQuizStore } from '@/store/quiz_store';

export default{
    data(){
        return {
            current : 0,
            quizStarted : false,
            quiz : [
                {
                    title : "Сколько будет 2 + 2",
                    correct : "4"
                },
                {
                    title : "Шестью восемь",
                    correct : "48"
                }
            ],
            enemy : {
                name : "Соперник",
                score : 0
            }
        }
    },
    computed: {
        ...mapState(useQuizStore, {
            quizById : "quizById"
        }),
        currentQuiz(){
            return this.quizById(this.$route.params.id);
        }
    },
    components : {
        QuestionComponent,
        EnemyScoreComponent,
        QuizStartComponent
    }
}
</script>

<style>

</style>