function login(event) {
    event.preventDefault(); // フォームの送信を止める

    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;
    
    if (user && pass) {
      window.location.href = "dashboard.html";
    } else {
      alert("ユーザー名とパスワードを入力してください。");
    }
  }