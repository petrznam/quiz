<template>
    <form action="" class="signin-form">
        <h2>Авторизация</h2>
        <input type="text" placeholder="Никнейм" v-model="userData.nickname">
        <input type="password" placeholder="Пароль" v-model="userData.password">
        <button @click="signin_click($event)">Вход</button>
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
            signin : "signin"
        }),
        signin_click(e){
            e.preventDefault();
            console.log("Запрос")
            // if(this.userData.nickname.length < 4 || this.userData.password.length < 8){
            //     return;
            // }
            this.signin(this.userData).then(res => {
                if(res) alert("Вы успешно авторизировались");
                else alert("Неверные данные");
            }).catch(err => {
                if(err) alert(err.message);
            })
        }
    }
}

</script>
<style scoped>
.signin-form{
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

.signin-form>input{
    width: 290px;
    height: 30px;
    border-radius: 5px;
    border: 2px solid #1B4965;
    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    padding-left: 10px;
    outline: none;
    font-size: 16px;
}
.signin-form>button{
    width: 250px;
    height: 35px;
    background-color: #CAE9FF;
    border: none;
    border-bottom: 5px solid #6b808f;
    border-radius: 6px;
    cursor: pointer;
}
.signin-form>button:active{
    border-bottom: none;
    box-shadow: 0 0 10px black inset;
}
</style>