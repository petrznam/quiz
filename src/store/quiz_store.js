import { defineStore } from "pinia";
import { getQuizes, getQuiz } from "@/api/quiz";

export const useQuizStore = defineStore("quizes", {
    state: () => ({
        quizes: [],
        openedQuiz: null
    }),
    getters: {
        quizById : (state) => (id) => state.quizes.find(quiz => quiz.id == id)
    },
    actions: {
        async updateQuizes (){
            this.quizes = await getQuizes();
        },
        async updateOneQuiz(id){
            this.openedQuiz = await getQuiz(id);
        }
    }
})