<script>
export default {
    data() {
        return {
            fairs: [], 
        };
    },
    created() {
        fetch('http://localhost:8080/fair')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                this.fairs = data;
            })
            .catch(error => console.error("Error fetching the fairs:", error));
    }
}
</script>

<template>
    <div>
        <h1 class="boardname">페어 정보</h1>
        <div v-for="fair in fairs" :key="fair.fairId" class="fair-container">
            <div class="editbtndiv">
                <button class="editbtn" @click="editPost(fair.fairId)">게시글 수정</button>
            </div>
            <hr class="boardtitleLine">
            <div class="fairinfo">
                <img src="@/assets/fairimage1.png" alt="fair1_img" height="480px" width="370px">
            </div>
            <div class="fairwritedatediv">
                <h5 class="fairwritedate">{{ fair.fairWriteDate }}</h5>
            </div>
            <div class="fairtitlediv">
                <h1 class="fairtitle">{{ fair.fairTitle }}</h1>
            </div>
            <div class="tags-container1">
                <button class="tagbtn1">태그</button>
                <button class="tagbtn2">{{ fair.fairTag1 }}</button>
                <button class="tagbtn3">{{ fair.fairTag2 }}</button>
                <button class="tagbtn4">{{ fair.fairTag3 }}</button>
            </div>
            <div class="tags-container2">
                <button class="tagbtn5">개최일</button>
                <button class="tagbtn6">{{ fair.fairStartDate }}</button>
                <h3>~</h3>
                <button class="tagbtn7">{{ fair.fairEndDate }}</button>
            </div>
            <div class="tags-container3">
                <button class="tagbtn8">장소</button>
                <button class="tagbtn9">{{ fair.fairLocation }}</button>
            </div>
            <hr class="titleLine">
            <div class="fairdetaildiv">
                <button class="fairdetail">상세 정보</button>
            </div>
            <div class="maincontent">
                <p>{{ fair.fairContent }}</p>
            </div>
        </div>
    </div>
</template>

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

.fairwritedate {
    font-size: 12px;
    margin-top: -34%;
    margin-left: 76%;
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
.tagbtn3,
.tagbtn4 {
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

.tagbtn4 {
    border-radius: 20px;
    background-color: #cbffe3c6;
    color: #00a84ec6;
}

.tags-container2 {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-left: 50%;
    margin-top: -17%;
    margin-bottom: 17%;
}

.tagbtn5,
.tagbtn6,
.tagbtn7 {
    border: none;
    padding: 10px 20px;
    font-size: 12px;
    font-weight: bold;
}

.tagbtn5 {
    border-radius: 10px;
    background-color: white;
    color: black;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
    width: 100px;
    height: 40px;
}

.tagbtn6 {
    border: 2px solid rgb(185, 182, 195);
    border-radius: 10px;
    background-color: white;
    color: black;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
}

.tagbtn7 {
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

.tagbtn8,
.tagbtn9 {
    border: none;
    padding: 10px 20px;
    font-size: 12px;
    font-weight: bold;
}

.tagbtn8 {
    border-radius: 10px;
    background-color: white;
    color: black;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
    width: 100px;
    height: 40px;
}

.tagbtn9 {
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
    margin-bottom: 20%;
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
    margin-top: -4%;
}
</style>