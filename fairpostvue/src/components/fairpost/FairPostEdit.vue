<script>
export default {
    data() {
        return {
            selected1: null,
            options1: [
                { value: 1, text: '서울특별시' },
                { value: 2, text: '부산광역시' },
                { value: 3, text: '대구광역시' },
                { value: 4, text: '인천광역시' },
                { value: 5, text: '광주광역시' },
                { value: 6, text: '대전광역시' },
                { value: 7, text: '울산광역시' },
                { value: 8, text: '세종특별자치시' },
                { value: 9, text: '경기도' },
                { value: 10, text: '강원특별자치도' },
                { value: 11, text: '충청북도' },
                { value: 12, text: '충청남도' },
                { value: 13, text: '전북특별자치도' },
                { value: 14, text: '전라남도' },
                { value: 15, text: '경상북도' },
                { value: 16, text: '경상남도' },
                { value: 17, text: '제주특별자치도' }
            ],
            selected2: [],
            options2: [
                { text: '맥주', value: '맥주' },
                { text: '와인', value: '와인' },
                { text: '위스키', value: '위스키' },
                { text: '전통주', value: '전통주' },
                { text: '칵테일', value: '칵테일' }
            ]
        }
    }
}
</script>

<template>
    <div>
        <h1 class="boardname">페어 정보 게시판</h1>
        <div class="writebtndiv">
            <button class="writebtn">등록/수정</button>
        </div>
        <hr class="boardtitleLine">
        <div class="dropzone">
            <div class="cloudicon">
                <img src="@/assets/cloudicon.png" alt="cloudicon_img" height="50px" width="50px">
            </div>
            <div class="dropzonetext">섬네일 이미지를 등록해 주세요. JPEG, PNG 지원됩니다!</div>
        </div>
        <div class="tags-container1">
            <button class="tagbtn1">제목</button>
            <input type="text" id="tagbtn2" class="tagbtn2" placeholder="제목을 입력해주세요.">
        </div>
        <div class="tags-container2">
            <button class="tagbtn3">지역/장소</button>
            <div>
                <b-form-select v-model="selected1" :options="options1" size="sm" class="tagbtn4"></b-form-select>
            </div>
            <input type="text" id="tagbtn5" class="tagbtn5" placeholder="장소 예시: 삼성동 코엑스">
        </div>
        <div class="tags-container3">
            <button class="tagbtn6">시작일/종료일</button>
            <button class="tagbtn7">2024-02-27</button>
            <h3>~</h3>
            <button class="tagbtn8">2024-02-28</button>
        </div>
        <div class="tags-container4">
            <button class="tagbtn6">태그</button>
            <div class="slot">
                <b-form-group v-slot="{ ariaDescribedby }">
                    <b-form-checkbox-group id="checkbox-group-1" v-model="selected2" :options="options2"
                        :aria-describedby="ariaDescribedby" name="flavour-1"></b-form-checkbox-group>
                </b-form-group>
            </div>
        </div>
        <textarea id="maincontent" class="maincontent" placeholder="내용을 입력해주세요."></textarea>
        <div class="dropzone2">
            <div class="cloudicon2">
                <img src="@/assets/cloudicon.png" alt="cloudicon_img" height="50px" width="50px">
            </div>
            <div class="dropzonetext2">본문 이미지를 등록해 주세요. JPEG, PNG 지원됩니다!</div>
        </div>
    </div>
</template>

<style scoped>
* {
    margin: 0;
    padding: 0;
    font-family: GmarketSansMedium;
}

.boardname {
    font-size: 30px;
    margin-top: 1.5%;
    margin-left: 15%;
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

.writebtn {
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

.maincontent {
    border-radius: 12px;
    background-color: #f9f9f9;
    padding: 20px;
    text-align: center;
    margin-left: 15%;
    margin-bottom: 20px;
    margin-top: -12.5%;
    width: 66.5%;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    resize: none;
    font-size: 14px;
}


.dropzone {
    border: 2px dashed #ccc;
    border-radius: 12px;
    background-color: #f9f9f9;
    padding: 20px;
    text-align: center;
    margin-top: -3.5%;
    margin-left: 15%;
    margin-right: 52%;
    height: 230px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.dropzone2 {
    border: 2px dashed #ccc;
    border-radius: 12px;
    background-color: #f9f9f9;
    padding: 20px;
    text-align: center;
    margin-left: 15%;
    margin-bottom: 10%;
    width: 66.5%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.cloudicon,
.cloudicon2 {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
}

.dropzonetext,
.dropzonetext2 {
    color: #888;
    font-size: 14px;
    margin-bottom: 20px;
}

.tags-container1,
.tags-container2,
.tags-container3,
.tags-container4 {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 10px;
    margin-bottom: 13px;
    margin-left: 50%;
    position: relative;
    top: -220px;
}

.tagbtn1,
.tagbtn2,
.tagbtn3,
.tagbtn4,
.tagbtn5,
.tagbtn6,
.tagbtn7,
.tagbtn8 {
    border: 2px solid rgb(185, 182, 195);
    border-radius: 10px;
    background-color: white;
    padding: 10px 20px;
    font-size: 12px;
    font-weight: bold;
    color: black;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
    resize: none;
}

.tagbtn2,
.tagbtn5 {
    height: 40px;
}

.slot {
    margin-top: 15px;
}
</style>