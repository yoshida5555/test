// This is a JavaScript file

let apikey = "d46d7772-1436-4bfc-aecc-80b6be8b0cfa"
let url = "https://db.monaca.education/select?apikey=" + apikey
select();
function select() {
    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (db) {
            console.log(db);
            let meigen = document.getElementById("meigen");
            for (let i = 0; i < db.records.length; i++) {
                // DOM準備
                let tr = document.createElement("tr");
                let id = document.createElement("th");
                let title = document.createElement("td");
                let people = document.createElement("td");
                // DOMに値を格納
                id.innerHTML = db.records[i].id;
                title.innerHTML = db.records[i].text0;
                people.innerHTML = db.records[i].int0;
                // 構築したDOM要素を表に追加
                tr.appendChild(id);
                tr.appendChild(title);
                tr.appendChild(people);
                meigen.appendChild(tr);
            }
            let random = Math.floor(Math.random() * db.records.length);
            alert(db.records[random].text0);
        })
}

function insert() {

    let form = document.getElementById("insertForm");
    let title = form.title.value;
    let people = form.people.value;


    // DBに登録
    let url = "https://db.monaca.education/insert?apikey=" + apikey;
    url += "&text0=" + title + "&int0=" + people;

    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (result) {
            console.log(result);
            location.reload();
        });
}



