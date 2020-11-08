<template>
<div class="header">
    <div class="header_day">
        <div class="day_tittle">日历</div>
    </div>

</div>
</template>

<script>
export default {
    name: 'HelloWorld',
    props: {
        msg: String
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss" scoped>
.header {
    display: flex;
    justify-content: center;
}

.header_day {
    width: 1000px;
    display: flex;
    justify-content: center;
    margin-top: 20px;
}

.header .day_tittle {
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-weight: bold;
    font-size: 50px;
    color: #01b7ff;
}
</style>
