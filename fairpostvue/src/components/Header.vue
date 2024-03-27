<template>
    <header class="header">
        <div class="logo">
            <img src="@/assets/purple.png" alt="header_img" height="120px" width="130px">
        </div>
        <div id="menu">
            <ul>
                <li><a href="#">일반 게시판 ▼</a>
                    <ul>
                        <li><a href="#">페어 정보</a></li>
                        <li><a href="#">뉴스 정보</a></li>
                    </ul>
                </li>
                <li><a href="#">정보 게시판 ▼</a>
                    <ul>
                        <li><a href="#">후기 게시판</a></li>
                        <li><a href="#">레시피 공유 게시판</a></li>
                    </ul>
                </li>
            </ul>
        </div>
        <div class="logoutbtndiv">
            <button class="logoutbtn" onclick="logout()">로그아웃</button>
        </div>
    </header>
    <div class="wrapper"></div>
    <div class="rightthings"></div>
    <div class="rightthings"></div>
</template>

<style scoped>
.header {
    width: 100%;
    height: 100px;
    position: relative;
    top: 0;
    background-color: #F8F9FC;
}

.boardtitleLine {
    position: relative;
    top: -33px;
    width: 100%;
    height: 3px;
    border: 0;
    background-color: #8c52ff;
}

.titleLine {
    width: 95%;
    margin-left: 2%;
    margin-right: 2%;
    height: 2px;
    border: 0;
    background-color: grey;
    margin-top: 20px;
    position: relative;
    top: -150px;
}

.wrapper {
    height: auto;
    min-height: 100%;
    width: 68%;
    margin-top: 50px;
    padding-bottom: 100px;
    margin-left: 16%;
    margin-right: 16%;
}

/* .logoimage {
    width: 100px;
} */

.logo {
    float: left;
    cursor: pointer;
}

ul li {
    list-style: none;
}

a {
    text-decoration: none;
    color: #333;
}

#menu {
    text-align: center;
    float: left;
    margin-left: 2%;
    margin-top: 2%;
    line-height: 30px;
    cursor: pointer;
}

#menu>ul>li {
    float: left;
    width: 140px;
    position: relative;
}

#menu>ul>li>ul {
    width: 130px;
    display: none;
    position: absolute;
    font-size: 14px;
}

#menu>ul>li:hover>ul {
    display: block;
}

#menu>ul>li>ul>li:hover {
    background: #8c52ff;
    transition: ease 1s;
}

textarea::placeholder {
    font-size: 15px;
    padding-left: 1%;
    padding-top: 1%;
}

.logoutbtn {
    background-color: #8c52ff;
    color: white;
    padding: 14px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 12px;
    font-style: bold;
    float: right;
    margin-top: 1.5%;
    margin-right: 2%;
}

.rightthings {
    margin-right: 50px;
    margin-top: 25px;
    float: right;
    font-size: 13px;
}

.leftthings {
    margin-left: 50px;
    margin-top: 45px;
    float: left;
    font-size: 13px;
}
</style>