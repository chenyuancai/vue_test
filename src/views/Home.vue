<template>
<div class="home">
    <Header></Header>
    <Content></Content>
</div>
</template>

<script>
import Header from "../components/Header";
import Content from "../components/Content.vue";

export default {
    name: "about",
    components: {
        Header,
        Content,
    },
};
</script>
