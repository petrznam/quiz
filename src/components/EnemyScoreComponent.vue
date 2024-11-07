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
    width: 700px;
    height: 100px;
}
</style>