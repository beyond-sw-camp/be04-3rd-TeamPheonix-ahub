function registReplyCheck() {
    if(confirm("댓글을 등록하시겠습니까?") == true && ocument.getElementById("reply") == true) {
        document.registReply.submit();
    } else {
        return false;
    }
}

function deleteReplyCheck() {
    if(confirm("댓글을 삭제하시겠습니까?") == true) {
        document.deleteReply.submit();
    } else {
        return false;
    }
}

function login() {
    if(confirm("로그아웃 하시겠습니까?") == true) {
        document.login.submit();
    } else {
        return false;
    }
}