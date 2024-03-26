<template>
    <form class="input-form align">
        <div class="input-form-text">
            <label>이름</label><br>
            <input class="input-style required-text" type="text" ref="name" v-model.trim="member_name"><br>
            <label>아이디</label><br>
            <input class="input-style" type="text" ref="id" v-model.trim="member_id"><br>
            <label>비밀번호</label><br>
            <input class="input-style" type="password" ref="pwd" v-model.trim="member_pwd"><br>
            <label>주소</label><br>
            <input class="input-style" type="text" ref="addr" v-mode="member_addr"><br>
            <label>이메일</label><br>
            <input class="input-style" type="text" ref="email" v-model.trim="member_email"><br>
            <label>전화번호</label><br>
            <input class="input-style" type="text" ref="phone" v-model.trim="member_phone"><br>
            <!-- <button @click="requiredText">test</button> -->
        </div>
        <div class="space">
            <input type="checkbox" id="agreeCheckbox">
            <span>By signing up, I agree with the Terms of Use & Privacy Policy</span>
        </div>
        <div class="space">
            <span @click="changeRouter">Already have an account?Log in</span>
        </div>
        <button @click="inputName">Sign up</button>
    </form>
</template>

<script setup>
    import { ref, watch } from 'vue';

    const member_name = ref('');
    const member_id = ref('');
    const member_pwd = ref('');
    const member_addr = ref('');
    const member_email = ref('');
    const member_phone = ref('');

    // // || member_id.value !== '' || member_pwd.value !== '' || member_addr !== '' || member_email.value !== '' || member_phone.value !== ''
    function inputName() {
        if (member_name.value == '') {
            alert('이름을 입력해주세요');
            $refs.name.focus();
                // console.log('이름 입력됨');
            return false;
        }
        // } else {
        //     console.log('필수 항목 입력 누락');
        //     alert('이름을 입력해주세요');

        //     return false;
        // }
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
    font-size: 12px;
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
}

.input-form-text {
    text-align: left;

}

.required-text {
    border: 2px solid red;
}

.input-style {
    width: 50vh;
    padding: 8px 14px;
    margin: 3px 0 10px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    background-color: #fefefe
}

span {
    font-size: 12px;
}

.space {
    margin: 10px 0 10px 0;
}

input[type=checkbox] {
    accent-color: #6D31ED;
}

button {
    background-color: #6D31ED;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 12px;
    font-style: bold;
    width: 30vh;
}

</style>