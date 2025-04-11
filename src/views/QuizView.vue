<template>
    <div v-if="quizStarted">
        {{ score }}
        <EnemyScoreComponent :enemy-name="enemy.name" :enemy-score="enemy.score"/>
        <QuestionComponent 
            :question="openedQuiz.questions[current].title" 
            @nextQuestion="checkAnswer($event)"
            v-if="!isQuizEnd"
        /> 
        <QuizResultComponent :score="score" v-else />
    </div>
    <QuizStartComponent 
        v-else-if="openedQuiz" 
        :title="openedQuiz.title" 
        :description="openedQuiz.description" 
        @startQuiz="quizStarted = true"
    />
</template>

<script>
import QuestionComponent from '@/components/QuestionComponent.vue';
import EnemyScoreComponent from '@/components/EnemyScoreComponent.vue';
import QuizStartComponent from '@/components/QuizStartComponent.vue';
import QuizResultComponent from '@/components/QuizResultComponent.vue';
import { mapState, mapActions } from 'pinia';
import { useQuizStore } from '@/store/quiz_store';

export default{
    data(){
        return {
            score : 0,
            current : 0,
            quizStarted : false,
            enemy : {
                name : "Соперник",
                score : 0
            }
        }
    },
    computed: {
        ...mapState(useQuizStore, {
            openedQuiz : "openedQuiz"
        }),
        isQuizEnd(){
            return this.current === this.openedQuiz.questions.length;
        }
    },
    methods : {
        ...mapActions(useQuizStore, {
            updateOneQuiz : "updateOneQuiz"
        }),
        checkAnswer(e){
            const answer = e;
            const currentQuestion = this.openedQuiz.questions[this.current];
            if(answer === currentQuestion.correct){
                this.score++;
            }
            this.current++;
        }
    },
    components : {
        QuestionComponent,
        EnemyScoreComponent,
        QuizStartComponent,
        QuizResultComponent
    },
    mounted(){
        this.updateOneQuiz(this.$route.params.id);
    }
}
</script>

<style>

</style>