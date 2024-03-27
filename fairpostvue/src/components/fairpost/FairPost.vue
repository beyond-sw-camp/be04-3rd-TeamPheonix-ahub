<script>
export default {
    data() {
        return {
        };
    },
    methods: {
        editPost() {
            var fairId = "3";
            alert('페어 ID: ' + fairId);
            console.log('게시글이 수정되었습니다. ID:', fairId);
        }
    }
};
</script>


<template class>
    <h1 class="boardname">페어 정보</h1>
    <div class="editbtndiv">
        <button class="editbtn" @click="editPost">게시글 수정</button>
    </div>
    <hr class="boardtitleLine">
    <div class="fairinfo">
        <img src="@/assets/fairimage1.png" alt="fair1_img" height="480px" width="370px">
    </div>
    <div class="fairtitlediv">
        <h1 class="fairtitle">2023 부산 국제 주류 & 와인박람회</h1>
    </div>
    <div class="tags-container1">
        <button class="tagbtn1">태그</button>
        <button class="tagbtn2">#칵테일</button>
        <button class="tagbtn3">#증류수</button>
    </div>
    <div class="tags-container2">
        <button class="tagbtn4">개최일</button>
        <button class="tagbtn5">2023. 12. 01</button>
        <h3>~</h3>
        <button class="tagbtn6">2023. 12. 03</button>
    </div>
    <div class="tags-container3">
        <button class="tagbtn7">장소</button>
        <button class="tagbtn8">벡스코 제1전시장 2홀</button>
    </div>
    <hr class="titleLine">
    <div class="fairdetaildiv">
        <button class="fairdetail">상세 정보</button>
    </div>
    <div class="maincontent">
        <p>
            1. 예매 정보
            https://bsiwse.com/html/index/
            사전 예매 : 10,000원
            현장 발권 : 15,000원
            <br><br>
            2. 전시 시간
            2023년 12월 1일 (금) ~ 3(일)
            오전 10:00 ~ 오후 18:00
            <br><br>
            3. 상세 내용
            국내에서 가장 오랜 역사와 높은 인지도를 자랑하는 종합 주류 및 와인 박람회이자 대한민국 주류 산업의 활성화를 위한 최고의 비즈니스 플랫폼! 경남 최대 주류 전문 박람회인
            부산국제주류와인박람회가 여러분을 환영합니다.
            <br><br>
            전시품목 :
            각종와인, 맥주, 스피리츠, 전통주, 사케, RTD, 중국술, 기타주류, 간식류, 셀러, 디스펜서, 전용 글라스, 기타 액세서리, 대사관, 협회, 매체, 교육기관, 각종 주류 전문판매점,
            운송, 포장, 홈브루잉
            <br><br>
        </p>
    </div>
</template>

<script setup>

</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
}

.boardname {
    font-size: 30px;
    margin-top: 1.5%;
    margin-left: 15%;
}

.editbtn {
    background-color: #8c52ff;
    color: white;
    padding: 14px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 12px;
    font-style: bold;
    margin-top: -3%;
    margin-right: 15%;
    float: right;
    font-weight: bold;
}

.fairinfo img {
    display: block;
    margin-left: 15%;
    margin-top: -2%;
    margin-bottom: -31%;
}

.fairtitle {
    font-size: 30px;
    margin-left: 48%;
    margin-top: 10%;
    margin-bottom: 20%;
}


.tags-container1 {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-left: 50%;
    margin-top: -18%;
    margin-bottom: 18%;
}

.tagbtn1,
.tagbtn2,
.tagbtn3 {
    border: none;
    padding: 10px 20px;
    font-size: 12px;
    width: 100px;
    height: 40px;
    font-weight: bold;
}

.tagbtn1 {
    border-radius: 10px;
    background-color: white;
    color: black;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
}


.tagbtn2 {
    border-radius: 20px;
    background-color: #e0f7fa;
    color: #0072e4c6;
}

.tagbtn3 {
    border-radius: 20px;
    background-color: #e9dfff;
    color: #8c52ff;
}

.tags-container2 {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-left: 50%;
    margin-top: -17%;
    margin-bottom: 17%;
}

.tagbtn4,
.tagbtn5,
.tagbtn6 {
    border: none;
    padding: 10px 20px;
    font-size: 12px;
    font-weight: bold;
}

.tagbtn4 {
    border-radius: 10px;
    background-color: white;
    color: black;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
    width: 100px;
    height: 40px;
}

.tagbtn5 {
    border: 2px solid rgb(185, 182, 195);
    border-radius: 10px;
    background-color: white;
    color: black;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
}

.tagbtn6 {
    border: 2px solid rgb(185, 182, 195);
    border-radius: 10px;
    background-color: white;
    color: black;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
}

.tags-container3 {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-left: 50%;
    margin-top: -16%;
    margin-bottom: 16%;
}

.tagbtn7,
.tagbtn8 {
    border: none;
    padding: 10px 20px;
    font-size: 12px;
    font-weight: bold;
}

.tagbtn7 {
    border-radius: 10px;
    background-color: white;
    color: black;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
    width: 100px;
    height: 40px;
}

.tagbtn8 {
    border: 2px solid rgb(185, 182, 195);
    border-radius: 10px;
    background-color: white;
    color: black;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
}

.fairdetail {
    margin-top: 2.5%;
    margin-left: 19%;
    margin-bottom: 60%;
    border-radius: 10px;
    background-color: #e9dfff;
    color: #8c52ff;
    font-size: 20px;
    border: none;
    padding: 10px 20px;
    font-weight: bold;
}

.maincontent {
    font-size: 15px;
    max-width: 80%;
    margin-left: 20%;
    margin-right: 20%;
    margin-top: -57%;
}

.boardtitleLine {
    margin-top: 1px;
    margin-bottom: 70px;
    margin-left: 15%;
    width: 70%;
    height: 3px;
    border: 0;
    background-color: #8c52ff;
}

.titleLine {
    width: 70%;
    margin-left: 15%;
    height: 2px;
    border: 0;
    background-color: grey;
    margin-top: -7%;
}
</style>