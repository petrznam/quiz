<template>
    <form action="" class="signup-form">
        <h2>Регистрация</h2>
        <input type="text" placeholder="Никнейм" v-model="userData.nickname">
        <input type="password" placeholder="Пароль" v-model="userData.password">
        <button @click="signup_click($event)">Зарегистрироваться</button>
    </form>
</template>

<script>
import { mapActions } from 'pinia';
import { useUserStore } from '@/store/user_store';
export default{
    data(){
        return {
            userData : {
                nickname: "",
                password: ""
            }
        }
    },
    methods : {
        ...mapActions(useUserStore, {
            signup : "signup"
        }),
        signup_click(e){
            e.preventDefault();
            console.log("Запрос")
            if(this.userData.nickname.length < 6 || this.userData.password.length < 8){
                return;
            }
            this.signup(this.userData).then(res => {
                if(res) alert("Вы успешно зарегистрировались");
            })
        }
    }
}

</script>
<style scoped>
.signup-form{
    width: 400px;
    height: 300px;
    background-color: #62B6CB;
    border-radius: 10px;
    box-shadow: 0 0 10px black;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}

.signup-form>input{
    width: 290px;
    height: 30px;
    border-radius: 5px;
    border: 2px solid #1B4965;
    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    padding-left: 10px;
    outline: none;
    font-size: 16px;
}
.signup-form>button{
    width: 250px;
    height: 35px;
    background-color: #CAE9FF;
    border: none;
    border-bottom: 5px solid #6b808f;
    border-radius: 6px;
    cursor: pointer;
}
.signup-form>button:active{
    border-bottom: none;
    box-shadow: 0 0 10px black inset;
}
</style>