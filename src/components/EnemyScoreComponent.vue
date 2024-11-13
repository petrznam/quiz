<template>
    <div class="enemy-score">
        <h4>Противник "{{ enemyName }}"</h4>
        <h5>Счёт {{ enemyScore }}</h5>
    </div>
</template>

<script>
export default {
    props : {
        enemyName : String,
        enemyScore : Number
    }
}
</script>
<style scoped>
.enemy-score{
    width: 199px;
    height: 100px;
    background-color: #9c9b75;
}
</style>