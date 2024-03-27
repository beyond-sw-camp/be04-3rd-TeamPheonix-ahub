<template>
    <form class="align">
        <div class="input-form">
            <label for="member_id">아이디</label><br>
            <input class="input-style" type="text" id="member_id" name="member_id"><br>
            <div class="span-margin">
                <input type="checkbox" id="remember_id">
                <span>아이디 저장</span>
            </div>
            <label for="member_id">비밀번호</label><br>
            <input class="input-style" type="password" id="member_pwd" name="member_pwd"><br>
            <div class="find-id-pwd-regist span-margin">
                <span><a href="#">아이디 찾기</a>&nbsp;|</span>
                <span><a href="#">비밀번호 찾기</a>&nbsp;| </span>
                <span><a href="registPage.html">회원 가입</a> &nbsp;</span>
            </div>
        </div>
        <button @click.prevent="tokenCheck">Login</button>
    </form>
</template>

<script setup>
function tokenCheck() {
    if(member_id.value == ''){
        alert('아이디를 입력해주세요.');
        return false;
    } else if (member_pwd.value == ''){
        alert('비밀번호를 입력해주세요.');
        return false;
    } else {
        // 서버 연동하여 토큰값 가져온 후 유효성 검사 코드 추가
        console.log('로그인 성공');
        return true;
    }
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

input[type=checkbox] {
    accent-color: #6D31ED;
}

.span-margin {
    font-size: 12px;
    margin-top: 5px;
    margin-bottom: 1.5rem;
}

.find-id-pwd-regist {
    text-align: right;
}

button {
    background-color: #6D31ED;
    color: white;
    padding: 14px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    font-style: bold;
    width: 30vh;
}
</style>