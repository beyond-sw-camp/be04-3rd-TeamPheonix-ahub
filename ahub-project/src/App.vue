<script setup>
    import Post from './components/PostAndReply/Post.vue';
    import Header from './components/Header/Header.vue';
    import Footer from './components/Footer/Footer.vue';
</script>

<template>
        <Header></Header>

    <Post/>

        <Footer></Footer>
</template>

<style scoped>
    @font-face {
            font-family: 'GmarketSansMedium';
            src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff') format('woff');
            font-weight: normal;
            font-style: normal;
        }

        * {
            margin: 0;
            padding: 0;
            font-family: 'GmarketSansMedium';
        }

        html, body {
            height: 100%;
        }
</style>
