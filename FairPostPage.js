// 로그아웃 버튼 클릭 시 실행될 함수
function logout() {
    var logoutConfirm = confirm('정말 로그아웃 하시겠습니까?');
    if (logoutConfirm) {
        // 로그아웃을 처리하는 로직을 추가
        console.log('로그아웃되었습니다.');
    } else {
        console.log('로그아웃이 취소되었습니다.');
    }
}

// 3번 게시글 수정 버튼 클릭 시 실행될 함수
function editPost() {
    var fairId = "3";
    alert('페어 ID: ' + fairId); // fairId 값 알림
    console.log('게시글이 수정되었습니다. ID:', fairId); // 콘솔 출력
}