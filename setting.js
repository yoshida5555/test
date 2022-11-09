
////////////////////////////////////////////////////////////////
function Hyoji() {
    const Mokuhyou = document.forms.mokuhyou;
    const MokuhyouHozon = Mokuhyou.mokuhyou1.value;
    if(MokuhyouHozon==""){alert("a")

    }else{

    localStorage.setItem('myMokuhyou', MokuhyouHozon);
    let goalnow = localStorage.getItem("myMokuhyou")
    alert("目標を保存しました");
    let textForm = document.getElementsByName("mokuhyou1");
    textForm.value = '';}
};
//保存できました
////NANDE????? console.log = (MokuhyouHozon);　　なぜか使えないデバック
//目標に表示できるか試す
// This is a JavaScript file
function gate() {
    let userInput = prompt("パスワードを入力して下さい:数字", "");
    if (userInput == "0022134KKK") {
        localStorage.removeItem("aaaaaa")
        location.href = "kankeisya/kadaiYotei.html";
    } else {
        location.href = "kankeisya/nisekadaiYotei.html";
        let b = localStorage.getItem("aaaaaa");
        if (b === null) { b = 1 };
        if (b > 5) { alert("???????????????????????????????????") };
        let a = Number(b) + 1;



        localStorage.setItem("aaaaaa", a);
        location.href = "kankeisya/nisekadaiYotei.html";
    }


};



