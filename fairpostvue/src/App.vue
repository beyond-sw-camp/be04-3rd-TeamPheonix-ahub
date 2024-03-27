<script setup>
    // import Header from './components/Header.vue';
    import FairPost from './components/fairpost/FairPost.vue';
</script>

<template>
    <Header></Header>
        <main>
            <FairPost></FairPost>
        </main>
</template>


<style scoped>
@font-face {
    font-family: 'GmarketSansMedium';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff') format('woff');
}

* {
    font-family: GmarketSansMedium;
}
</style>
