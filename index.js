const form = document.querySelector("body > form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const id = document.getElementById("userId");
  const pw = document.getElementById("upwd");
  const cpw = document.getElementById("cpwd");
  const dob = document.getElementById("dob");

  if (id.value.length === 0) {
    alert("아이디를 입력하세요.");
    return id.focus();
  }
  if (pw.value.length === 0) {
    alert("비밀번호를 입력하세요.");
    return pw.focus();
  }
  if (cpw.value.length === 0) {
    alert("비밀번호를 확인 해주세요.");
    return cpw.focus();
  }

  if (pw.value !== cpw.value) {
    alert("비밀번호를 확인 해주세요.");
    return cpw.focus();
  }

  if (dob.value.length === 0) {
    alert("생년월일을 입력해주세요.");
    return dob.focus();
  }

  if (dob.value.length === 4) {
    alert("출생월, 일을 입력해주세요.");
    return dob.focus();
  }

  const message = `${id.value}, ${dob.value}가 맞으십니까?`;
  if (confirm(message)) {
    alert("회원가입 되셨습니다.");
  } else {
    alert("조금만 더 하시면 됩니다. 다시 ㄱㄱ");
  }
});
