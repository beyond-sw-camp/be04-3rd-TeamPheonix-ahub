<template>
    <header class="header">
        <div class="logo">
            <img src="@/assets/img/purple.png" class="logoimage">
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
        <div class="loginbtndiv">
            <button type="button" class="loginbtn" onclick="login()">로그아웃</button>
        </div> 
    </header>
</template>

<script setup>

</script>

<style scoped>
    * {
		margin: 0;
		padding: 0;
        font-family: 'GmarketSansMedium';
	}

    .header {
            width: 100%;
            height: 100px;
            position: relative;
            top: 0;
            background-color: #F8F9FC;
        }

    .loginbtn {
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

        .logoimage {
            width:100px;
        }

        .logo {
            float:left;
            cursor: pointer;
        }

        ul li {
                list-style: none;
            }

        a{
                text-decoration: none;
                color:#333;
            }

        #menu {
            text-align: center;
            float:left;
            margin-left: 2%;
            margin-top: 2%;
            line-height: 30px; 
            cursor: pointer;
        }

        #menu > ul > li {
            float:left;
            width:140px;
            position:relative;
        }

        #menu > ul > li > ul {
            width:130px;
            display:none;
            position: absolute;
            font-size:14px;
        }

        #menu > ul > li:hover > ul {
            display:block;
        }

        #menu > ul > li > ul > li:hover {
            background: #8c52ff;
            transition: ease 1s;
        }
</style>