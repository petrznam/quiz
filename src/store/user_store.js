import { defineStore } from "pinia";
import { signup, signin } from "@/api/user";

export const useUserStore = defineStore("users", {
    state: () => ({
        userData : null
    }),
    actions: {
        async signup(data){
            return await signup(data);
        },
        async signin(data){
            return await signin(data);
        }
    }
})