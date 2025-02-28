import { defineStore } from "pinia";
import { getquizes } from "@/api/quiz";

export const useQuizStore = defineStore("quizes", {
    state: () => ({
        quizes: []
    }),
    getters: {
        quizById : (state) => (id) => state.quizes.find(quiz => quiz.id == id)
    },
    actions: {
        async updateQuizes (){
            this.quizes = await getquizes();
        }
    }
})