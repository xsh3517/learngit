window.onload = function(){
    var loginbutton = document.getElementById('login-button');
    var tisi = document.getElementById('tisi')

    loginbutton.onclick = function(){
        var paw1 = document.getElementById('paw1').value;
        var paw2 = document.getElementById('paw2').value;
            if (paw1 != paw2) {
                tisi.innerHTML ="<br><font color='red'>两次输入一致";
            }
}
} 