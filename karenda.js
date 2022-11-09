// This is a JavaScript file


//オフラインかオンライン化で変えてみる　API

//////ato   hiduke adeventclick  予定が出てくる


////////////////////////////////////予定入力//////////////////////////////


function sellect() {

    const Yotei = document.forms.yotei;
    const YoteiHozon = Yotei.Yotei1.value;//予定内容

    let yoteiMonth = Number(document.getElementById("yoteiMonth").value) + 1;//3⃣あと日付け指定　連動　頑張る
    let yoteiDate = Number(document.getElementById("yoteiDate").value) + 1;
    let theDayHozon = String('00' + yoteiMonth).slice(-2) + String('00' + yoteiDate).slice(-2);
    alert(yoteiMonth + "／" + yoteiDate + "　に予定を追加しました");//日付差別化完了
    localStorage.setItem(theDayHozon, YoteiHozon);
};
/*
     let goalnow = localStorage.getItem("");
        document.getElementById('goal').innerHTML = goalnow
        alert("goalnow")
function Hikidasi1() {
    let yoteiMonth = document.getElementById("yoteiMonth").value;//3⃣あと日付け指定　連動　頑張る
    let yoteiDate = document.getElementById("yoteiDate").value;
    let theDayHozon = String(yoteiMonth) + String(yoteiDate);
    let hikidasi = localStorage.getItem(theDayHozon);
    if (hikidasi === null) { alert("NO") } else {
        document.getElementById("hyoji").innerHTML = hikidasi;
        alert("THERE IS");
    };
};*/
/*for( everyDay;everyDay < dateFinal2;everyDay= everyDay+86400 * 1000 ){console.log(new Date(everyDay))};*/

///////////////////////////////////////////////////カレンダー//////////////////////////////////////////////////////////////////////////////////////////
const ttooDay = new Date();
const dates = ["1日", "2日", "3日", "4日", "5日", "6日", "7日", "8日", "9日", "10日", "11日", "12日", "13日", "14日", "15日", "16日", "17日", "18日", "19日", "20日", "21日", "22日", "23日", "24日", "25日", "26日", "27日", "28日", "29日", "30日", "31日"];
const months = ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"];
const days = ["日", "月", "火", "水", "木", "金", "土"];
//月替えのみに使用
let tyear = new Date().getFullYear();//2022
let tmonth = new Date().getMonth();//7 August
let tday = new Date().getDate();// //22

let theDay = String('00' + tmonth).slice(-2) + String('00' + (tday - 1)).slice(-2);
let kyou = localStorage.getItem(theDay)
if (kyou != "") { localStorage.removeItem(kyou) }

function calendar() {

    let tbody = document.getElementById('tbodyID');
    tbody.innerHTML = "";

    let everyDay = new Date(tyear, tmonth).getTime();// 8/1 の秒
    let toMonth = new Date(everyDay).getMonth() + 1; //8
    let toYears = new Date(everyDay).getFullYear();




    for (i = 0; i < 6; i++) {//everydau kawarazu

        let tr = document.createElement('tr');//ぎょうつくった
        for (j = 0; j < 7; j++) {

            let toDates = new Date(everyDay).getDate();
            let toDay = new Date(everyDay).getDay();

            if (j == new Date(everyDay).getDay()) {


                let td = document.createElement('td');//日曜日
                let dayHozon = (String("0" + toMonth) + (String("0" + toDates).slice(-2))).slice(-4);

                td.setAttribute("data-year", toYears);
                td.setAttribute("data-month_name", months[toMonth - 1]);
                td.className = "date-picker";
                td.setAttribute("id", "n" + dayHozon);


                let yotei = localStorage.getItem(dayHozon);
                if (yotei !== null) {
                    td.className = "date-picker yotei";
                    td.innerHTML = '<span onclick = "yoteiKakunin(' + Number(dayHozon) + ')";>' + toDates + '</span>';
                    //https://job-support.ne.jp/blog/javascript/basic-argument  オブジェクト型やったから色々塗り替えられた
                    //td.innerHTML = '<span onclick = "yoteiKakunin(' + dayHozon + ')";>' + toDates + '</span>';

                    console.log(td.id)

                } else if (toDates == ttooDay.getDate() && toYears == ttooDay.getFullYear() && Number(toMonth) - 1 == ttooDay.getMonth()) {
                    td.className = "date-picker selected";
                    td.innerHTML = '<span>' + toDates + '</span>';

                }
                else if (toDay == 0) { td.className = "date-picker sun"; td.innerHTML = '<span>' + toDates + '</span>'; }
                else if (toDay == 6) { td.className = "date-picker stu"; td.innerHTML = '<span>' + toDates + '</span>'; }
                else { td.innerHTML = '<span>' + toDates + '</span>'; };
                tbody.appendChild(td);

                everyDay = everyDay + 86400000;
                if (tmonth === new Date(everyDay).getMonth()) { } else {
                    if (0 === new Date(everyDay).getDay()) { } else {
                        let c = 7 - new Date(everyDay).getDay();
                        for (let i = 0; i < c; i++) {
                            let td = document.createElement('td');
                            td.className = "date-picker";
                            td.innerHTML = "<span>ー</span>";
                            tbody.appendChild(td);
                        };
                    }; break;
                };
            }
            else {
                let td = document.createElement('td');
                td.className = "date-picker";
                td.innerHTML = "<span>ー</span>";
                tbody.appendChild(td);
            };
        }
        tbody.appendChild(tr);//一行入力
        if (tmonth === new Date(everyDay).getMonth()) { } else { break };
    };
    month.innerHTML = toMonth + "月　";// toYears + "年";
    year.innerHTML = toYears + "年";
    /*for(everyDay;everyDay < dateFinal2;everyDay= everyDay+86400 * 1000 ){console.log(new Date(everyDay))};*/
};
function saikinyoteisagasi() {
    let a = ttooDay.getTime();
    let b = ttooDay;
    const c = new Date(b.getFullYear() + 1, b.getMonth(), b.getDate()).getTime();
    for (a; a < c; a = a + 86400000) {
        let e = String('00' + (new Date(a).getMonth() + 1)).slice(-2) + String('00' + new Date(a).getDate()).slice(-2);
        let yotei = localStorage.getItem(e);
        if (yotei !== null) {
            let d = (a - b.getTime()) / 86400000;
            saikinNoYotei.innerHTML = "";
            saikinNoYotei.innerHTML = new Date(a).getMonth() + 1 + "月" + new Date(a).getDate() + "日    " + String(yotei) + "です。<br>あと" + d + "日";
            break;
        } else {
            saikinNoYotei.innerHTML = "";
            saikinNoYotei.innerHTML = "なし";
        };
    };
};
window.onload = calendar(), saikinyoteisagasi();

//////////////////////////////////
function previous() {
    if (tmonth == 0) {
        tyear = tyear - 1;
        tmonth = 11;
    } else { tmonth = tmonth - 1 };
    calendar();
    saikinyoteisagasi();
};
function next() {
    if (tmonth == 11) {
        tyear = tyear + 1;
        tmonth = 0;
    } else { tmonth = tmonth + 1 };
    calendar();
    saikinyoteisagasi();
};
///////////////////////////////

function yoteiKakunin(k) {

    let g = ("0" + k).slice(-4);
    console.log(k)

    const modal = document.getElementById('easyModal');
    const buttonClose = document.getElementsByClassName('modalClose')[0];
    modal.style.display = 'block';

    buttonClose.addEventListener('click', modalClose);
    function modalClose() {
        modal.style.display = 'none';
    };
    addEventListener('click', outsideClose);
    function outsideClose(e) {
        if (e.target == modal) {
            modal.style.display = 'none';
        };
    };
    yoteiResult.innerHTML = '';


    let hikidasi = localStorage.getItem(g);
    yoteiResult.innerHTML = "<span>" + String(hikidasi) + "</span>";
    localStorage.setItem("date", g);
};

function yoteiSakujo() {
    let sakujoDate = localStorage.getItem("date");
    localStorage.removeItem(sakujoDate);
    localStorage.removeItem("date");

    alert("予定削除しました");
    const modal = document.getElementById('easyModal');

    calendar();
    saikinyoteisagasi();
    modal.style.display = 'none';
};

    ////////////////////////////////


