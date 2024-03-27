<template>
    <table class="table">
        <tr><td class="post" colspan="6"><h1>레시피 공유 게시판</h1></td> <td><button onclick="location.href='write.html'">게시글 작성</button></td></tr>
        <tr class="header2"><td colspan ="2">정렬기준 &nbsp; &nbsp; 작성일자 &nbsp; 내림차순</td></tr> 
        <tr class="header1">
            <td class="num">게시글 번호</td>
            <td class="title">게시글 제목</td>
            <td>댓글수</td>
            <td>조회수</td>
            <td>좋아요</td>
            <td>작성자</td>
            <td>작성일자</td>
        </tr>
    <tbody>
        <tr v-for="post in posts" :key="post.postId" class="allpost">
            <td>{{ post.Id }}</td>
            <td class="title clickable-cell">{{ post.title }}</td>
            <td>{{ post.member.code }}</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>{{ post.member.code }}</td>
            <td>{{ post.date }}</td>
            </tr>
    </tbody>        
    </table>    
    </template>
    <script setup>
      var clickableCells = document.querySelectorAll(".clickable-cell");
      clickableCells.forEach(function(cell) {
        cell.addEventListener("click", function() {
          alert("Clicked cell with content: " + this.textContent);
        });
      });
    </script>
    <script setup>
    import axios from "axios";
    import { onMounted, ref } from "vue";

    const replys = ref([]);

    onMounted(async () =>{
        axios.get("http://localhost:8000/posts/member/2")
        .then(response => {
            posts.value = response.data;
            console.log(posts.value);
            console.log(posts.value[0].replyContent);
        })
    });
</script>
    <style scoped>
       table {
            margin: auto;
            width: 80%;
            height: 5000%;
            border-radius: 5px;
            border-collapse: collapse;
            border-top: none;
        }
        .post{
            font-size: 30px;
    
        }
        .header1 {
            background-color: rgb(218, 231, 255);
            height: 80px;
            font-size: 18px;
            text-align: center;
    
        }
        .header1 .title{
            text-align: left;
        }
        .header2 {
            height: 30px;
            font-size: 18px;
    
        }
        .table td, .table th {
            border-bottom: 1px lightgray solid; 
            height: 30px;
            /* font-size: 15px; */
        }
        .num {
            width: 150px;
            font-size: 18px
        }
        .title {
            width: 1000px;
        }
        .body {
            height: 50px;
            text-align: center;
        }
        .body .title {
            text-align: left;
            font-weight: bold;
            cursor: pointer;
        }
        button {
            width: 100px;
            height: 40px;
            font-size: 15px;
            border: 0;
            outline: 1.5px rgb(68, 136, 244) solid;
            border-radius: 5px;
            padding-left: 10px;
            background-color: rgb(164, 199, 255);
        }
        button:active {
            width: 100px;
            height: 40px;
            font-size: 15px;
            border: 0;
            border-radius: 5px;
            outline: 1.5px rgb(27, 76, 155) solid;
            padding-left: 10px;
            background-color: rgb(68, 136, 244);
        }
    </style>