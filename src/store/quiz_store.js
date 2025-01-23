import { defineStore } from "pinia";
import { getquizes } from "@/api/quiz";

export const useQuizStore = defineStore("quizes", {
    state: () => ({
        quizes: []
    }),
    actions: {
        async updateQuizes (){
            this.quizes = await getquizes();
        }
    }
})