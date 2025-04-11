<template>
    <main>
        <h1> Викторина завершена {{ score }}</h1>
    </main>
</template>
<script>
export default{
    props: {
        score: Number
    },
  
}

</script>
<style scoped>
main{
    width: 700px;
    height: 500px;
    background-color: #5BA199;
    border-radius: 10px;
    box-shadow: 0 0 10px black;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
}
</style>