    // || member_id.value !== '' || member_pwd.value !== '' || member_addr !== '' || member_email.value !== '' || member_phone.value !== ''
    function requiredText() {
    }

    function inputName() {
        if (member_name.value !== '') {
            console.log('이름 입력 완료');
        } else {
            alert('이름을 입력해주세요');
            return false;
        }
    }

    function inputId() {
        if (member_id.value !== '') {
            console.log('아이디 입력 완료');
        } else {
            alert('아이디를 입력해주세요');
            return false;
        }
    }

    function inputPwd() {
        if (member_pwd.value !== '') {
            console.log('비밀번호 입력 완료');
        } else {
            alert('비밀번호를 입력해주세요');
            return false;
        }
    }
    
    function inputAddr() {
        if (member_addr.value !== '') {
            console.log('주소 입력 완료');
        } else {
            alert('주소를 입력해주세요');
            return false;
        }
    }

    function inputEmail() {
        if (member_email.value !== '') {
            console.log('이메일 입력 완료');
        } else {
            alert('이메일을 입력해주세요');
            return false;
        }
    }

    function inputPhone() {
        if (member_phone.value !== '') {
            console.log('전화번호 입력 완료');
        } else {
            alert('전화번호를 입력해주세요');
            return false;
        }
    }
export default requiredText