<template>
    <footer class="footer">
        <div class="leftthings">
        <p>
            <span class="ahub">AHUB</span>
            <span>서비스 소개</span>
            <span> | </span>
            <span>서비스 약관</span>
            <span> | </span>
            <span>개인정보 처리방침</span>
            <span> | </span>
            <span>채용</span>
        </p>
        </div>
        <div class="rightthings">
            <p>
                <span>Team Phoenix | 대표: 백동현 | 사업자등록번호:472-56-00332</span><br>
                <span>주소: 서울특별시 동작구 보라매로 87 SFC빌딩 3층</span><br>
                <span>Copyright@2024XI#CIQ ALL RIGHTS RESERVED</span>
            </p>
        </div>
    </footer>
</template>

<script setup>

</script>

<style scoped>
    .footer {
        position: relative;
        width: 100%;
        height: 100px;
        background-color: #F8F9FC;
    }

    .rightthings{
        margin-right:50px;
        margin-top:1%;
        float: right;
        font-size: 13px;
    }

    .leftthings{
        margin-left:50px;
        margin-top:2%;
        float: left;
        font-size: 13px;
    }

    .ahub{
        font-size: 15px;
        font-weight: bold;
        margin-right:5px;
    }
</style>