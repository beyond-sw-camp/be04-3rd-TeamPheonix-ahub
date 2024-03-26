<template>
    <div>

    </div>
</template>

<script setup>
    import { useRoute, useRouter } from 'vue-router';

    const router = useRouter();

    function changeRouter() {
        router.push('/member/regist');
    }

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

    .input-form {
        width: 50vh;
        margin: 0 auto;
        text-align: left !important;
    }

    .input-style {
        width: 50vh;
        padding: 8px 14px;
        display: inline-block;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-sizing: border-box;
        background-color: #fefefe
    }

    .remember-id {
        margin-bottom: 1rem;
    }

    input[type=checkbox] {
        accent-color: #6D31ED;
    }

    span {
        font-size: 12px;
    }

    .find-id-pwd-regist {
        text-align: right;
    }

    input[type=submit] {
        background-color: #6D31ED;
        color: white;
        padding: 14px 20px;
        margin: 1.5rem;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        font-size: 16px;
        font-style: bold;
        width: 30vh;
    }
</style>