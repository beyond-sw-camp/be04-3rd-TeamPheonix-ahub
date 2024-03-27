<template>
    <div class="wrapper">
        <div class="left-box item img-box-wrapper">
            <div class="img-box">
                <img src="resource/cheese-cat.jpg" alt="profile" class="profile-img">
            </div>
        </div>
        <div class="right-box item">
            <h1>{{ member_id }}</h1>
            <p class="introduction-box">
                내 소개가 아직 없습니다!
            </p>
        </div>

        <div class="left-box item">
            <div>이메일</div>
            <br>
            <div>주소</div>
            <br>
            <div>핸드폰 번호</div>
        </div>
        <div class="right-box item">
            <div>{{ member_email }}</div>
            <br>
            <div>{{ member_addr }}</div>
            <br>
            <div>{{ member_phone }}</div>
        </div>
    </div>
    <div class="quit-wrapper">
        <span>
            <button class="modify-btn">수정</button>
            <button class="quit-btn">회원 탈퇴</button>
        </span>
    </div>
</template>

<script setup>

</script>

<style scoped>
    .wrapper {
        display: grid;
        grid-template-columns: 0.4fr 0.6fr;
        grid-template-rows: 1fr 1fr;
        grid-gap: 20px;
        border: 1px solid #ccc;
        border-radius: 10px;
        margin: 10px;
        padding: 40px;
        background-color: #fdfdfd;
    }

    .align {
        text-align: center;
    }

    .quit-wrapper {
        text-align: right;
    }

    span>button {
        color: white;
        width: 80px;
        height: 40px;
        margin: 5px;
        padding: 10px 10px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        font-size: 10px;
    }

    .modify-btn {
        background-color: #6D31ED;
    }

    .quit-btn {
        background-color: #5c5c5c;
    }

    .img-box-wrapper {
        justify-self: end;
    }

    .img-box {
        width: 150px;
        height: 150px;
        border-radius: 70%;
        overflow: hidden;
    }

    .profile-img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .introduction-box {
        width: 60%;
        height: 50%;
        font-size: 12px;
        margin-top: 1rem;
        margin-bottom: 1rem;
        padding: 1rem;
        border-radius: 4px;
        background-color: #ccc;
    }

    .left-box {
        padding: 20px;
        text-align: right;
    }

    .right-box {
        padding: 20px;
    }
</style>