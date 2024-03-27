<template>
    <div class="replytitlediv">
        <h2 class="replytitle">댓글</h2>
    </div>
    <hr class="replyline">
    <div class="allreply" v-for="reply in replys" :key="replys.replyId">
        <div class="replywriterdiv">
            <p>{{reply.memberNickname}}</p>
        </div>
        <div class="replycontentdiv">
            <p>
                {{reply.replyContent}}
            </p>
        </div>
        <div class="replydatediv">
            <p> {{ reply.replyDate }}</p>
        </div>
        <div class="closebuttondiv">
            <form action="" name="deleteReply" method="post">
                <button type="button" class="closebutton" onclick="deleteReplyCheck()">
                    <img src="/Users/baekdonghyeon/Desktop/front project/ahub-project/src/assets/free-icon-close-button-61155 (1).png">
                </button>
            </form>
        </div>
    </div>
    
    <hr class="replyregistline">
    <div class="registreplywriterdiv">
        <span>안경따거</span>
    </div>
    <div class="registreplydiv">
        <form id="comment" action="" name="registReply" method="post">
            <div class="commentbox">
            <textarea type="text" class="box" id="reply" placeholder="타인의 권리를 침해하거나 명예를 훼손하는 댓글은 운영원칙 및 관련 법률에 의거, 제재를 받을 수 있습니다." required></textarea>
            </div>
            <input type="submit" class="btn" value="등록" onclick="registReplyCheck()">
        </form>
    </div>
    <hr class="replyregistbottomline">
    
</template>

<script setup>
    import axios from "axios";
    // import { ref } from "vue";

    // const replys = ref([]);

    // const fetchPosts = () => {
    //     axios.get("http://localhost:8000/reply/board/replies/6")
    //     .then(response => {
    //         replys.value = response.data;
    //         console.log(replys.value);
    //         console.log(replys.value[0].replyContent);
    //     })
    // }

    // fetchPosts();
    import { onMounted, ref } from "vue";

    // 초기 데이터 생성
    const replys = ref([]);

    // 마운트 시점에 데이터 호출
    onMounted(async () =>{
        axios.get("http://localhost:8000/reply/board/replies/6")
        .then(response => {
            replys.value = response.data;
            console.log(replys.value);
            console.log(replys.value[0].replyContent);
        })
    });
</script>

<style scoped>
    .box {
            width:100%;
            height:100px;
        }
    
    .closebutton{
            border:0px;
            cursor: pointer;
        }

    .btn {
            background-color: #8c52ff;
            color: white;
            padding: 14px 20px;
            margin: 8px 0;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-size: 16px;
            font-style: bold;
            float: right;

        }
        .replyline {
            width:95%;
            margin-left: 2%;
            margin-right: 2%;
            height: 2px;
            border: 0;
            background-color: #8c52ff;
        }

        .replyregistline {
            width:95%;
            margin-top: 20%;
            margin-left: 2%;
            margin-right: 2%;
            height: 2px;
            border: 0;
            background-color: #8c52ff;
        }

        .replyregistbottomline {
            width:95%;
            margin-top: 3%;
            margin-left: 2%;
            margin-right: 2%;
            height: 2px;
            border: 0;
            background-color: #8c52ff;
        }

        .replytitlediv {
            margin-top: 10%;
            padding-left: 10px;
            padding-right: 10px;
            margin-left: 2%;
            float: left;
        }

        .replywriterdiv {
            padding-left: 10px;
            padding-right: 10px;
            margin-left: 3%;
            width: 10%;
        }

        .replycontentdiv {
            padding-left: 10px;
            padding-right: 10px;
            margin-left: 10%;
            width: 20%;
        }

        .replydatediv {
            padding-left: 10px;
            padding-right: 10px;
            margin-left: 30%;
            width: 15%;
        }

        .closebuttondiv {
            margin-top:1%;
            padding-left: 10px;
            padding-right: 10px;
            margin-left: 2%;
            width: 2%;
        }

        .allreply {
            display: flex;
            flex-direction: rows;
            justify-content: flex-start;
            width: 100%;
            font-size:12px;
        }

        .registreplywriterdiv{
            margin-top:2%;
            padding-left: 10px;
            padding-right: 10px;
            margin-left: 2%;
            float: left;
        }

        .registreplydiv {
            margin-top: 1%;
            margin-left: 5%;
            float: left;
            width: 75%;
        }

        .replytitle {
            font-size: 20px;
            margin-top: 20px;
        }

        textarea::placeholder {
            font-size:15px;
            padding-left: 1%;
            padding-top: 1%;
        }
</style>