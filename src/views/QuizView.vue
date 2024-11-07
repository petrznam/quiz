<template>
    <EnemyScoreComponent :enemy-name="enemy.name" :enemy-score="enemy.score"/>
    <QuestionComponent :question="quiz[current].title" />
    <!-- <button @click="current++">Далее</button> -->
</template>

<script>
import QuestionComponent from '@/components/QuestionComponent.vue';
import EnemyScoreComponent from '@/components/EnemyScoreComponent.vue';
export default{
    data(){
        return {
            current : 0,
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
    components : {
        QuestionComponent,
        EnemyScoreComponent
    }
}
</script>

<style>

</style>