<template>
    <div class="wrapper">
        <section>
            <h1 class="title align">Sign Up</h1>
            <registInputForm />
            
        </section>
    </div>
</template>

<script setup>
    import registInputForm from './registInputForm.vue';
</script>

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

    .wrapper {
        margin: 16vh;
        height: auto;
        min-height: 100%;
    }

    .title {
        margin-bottom: 50px;
        font-size: 3.5rem;
        font-weight: 700;
    }

    .align {
        text-align: center;
    }
</style>