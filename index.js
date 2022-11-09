
/*　　https://education-db.monaca.education/ja/database/6326eb0de78885a74d3758a8
    マスター　3e8f3fe0-3e57-42ef-afd3-92478921819f
    取得　　　b9b42aa4-dc1b-4414-a270-17671aa9501b
    追記　　　7cb7a2ac-9de0-4dfd-9765-a400e4b77832



*/
/////名言//https://education-db.monaca.education/ja/database/631ec31de788854d6287800e
let apikey = "d46d7772-1436-4bfc-aecc-80b6be8b0cfa"
let url = "https://db.monaca.education/select?apikey=" + apikey

function select() {
    fetch(url)

        .then(function (response) {
            return response.json();
        })
        .then(function (db) {
            let random = Math.floor(Math.random() * db.records.length);


            console.log(db.records[random].text0)
            console.log(db.records[random].int0)

        })
};

////////////////////////////////////////////////////////////////
function Hyoji() {
    const Mokuhyou = document.forms.mokuhyou;
    const MokuhyouHozon = Mokuhyou.mokuhyou1.value;
    localStorage.setItem('myMokuhyou', MokuhyouHozon);
    let goalnow = localStorage.getItem("myMokuhyou")
    alert("目標を保存しました");
    var textForm = document.getElementsByName("mokuhyou1");
    textForm.value = '';
};
//保存できました
////NANDE????? console.log = (MokuhyouHozon);　　なぜか使えないデバック
//目標に表示できるか試す
function mokuhyouYomikomi() {
    let goalnow = localStorage.getItem("myMokuhyou");
    document.getElementById('goal').innerHTML = goalnow
    //alert("goalnow")
}
////////////////////////////////////////////////////////////////
/*
https://ics.media/entry/11763/

https://pushjs.org/docs/quick-start



const json = [{ "name": 1 }];
json.push({ name: 2 });//⇔　json.pop
json.area = "nenrei";
console.log(json);

json.push({ name: String(task)});

let jsonData= JSON.stringfy(uers)

*/

const taskValue = document.getElementsByClassName('task_value')[0];
const taskSubmit = document.getElementsByClassName('task_submit')[0];
const taskList = document.getElementsByClassName('task_list')[0];

let jjson = JSON.parse(localStorage.getItem("TODO"));
if (jjson == null) { jjson = [{ cnt: 0, todo: " task" }]; } else { };
let json = jjson;
let i = Object.keys(json).length;

for (n = 1; n < i; n++) {

    if (json[n].todo === null) { } else {
        let He = json[n].todo;
        let cnt = n;
        const listItem = document.createElement('ul');//要素追加

        const showItem = taskList.appendChild(listItem);
        showItem.innerHTML = He;

        const deleteButton = document.createElement('button');
        deleteButton.innerHTML = '完了';
        deleteButton.className = "N" + cnt;
        listItem.appendChild(deleteButton);


        // 削除ボタンをクリックし、イベントを発動(タスクが削除)
        deleteButton.addEventListener('click', evt => {
            evt.preventDefault();
            deleteTasks(deleteButton);
        });
    };
};




// 追加ボタンを作成
const addTasks = (task) => {
    // 入力したタスクを追加・表示
    const listItem = document.createElement('ul');//要素追加
    let cnt = Object.keys(json).length;
    listItem.className = cnt
    json.push({ cnt: cnt, todo: task });
    const showItem = taskList.appendChild(listItem);
    showItem.innerHTML = task;

    // タスクに削除ボタンを付与
    const deleteButton = document.createElement('button');

    deleteButton.innerHTML = '完了';
    deleteButton.className = "N" + cnt;
    //console.log(deleteButton.className);

    listItem.appendChild(deleteButton);
    // 削除ボタンをクリックし、イベントを発動(タスクが削除)
    deleteButton.addEventListener('click', evt => {
        evt.preventDefault();
        deleteTasks(deleteButton);
    });
    localStorage.setItem("TODO", JSON.stringify(json));
    json = JSON.parse(localStorage.getItem("TODO"));

};

// 削除ボタンにタスクを消す機能を付与
const deleteTasks = (deleteButton) => {
    let jjj = deleteButton.className;
    const chosenTask = deleteButton.closest('ul');
    taskList.removeChild(chosenTask);

    let newData = json.filter(function (h) {
        if (h.cnt != jjj.slice(1)) return true;
    });
    json = newData;

    //console.log(JSON.stringify(json));
    localStorage.setItem("TODO", JSON.stringify(json));
    json = JSON.parse(localStorage.getItem("TODO"));
};

// 追加ボタンをクリックし、イベントを発動(タスクが追加)
taskSubmit.addEventListener('click', evt => {
    
    const task = taskValue.value;
   
    //console.log(task)
    
    if (task == "") {

        alert("入力なし")
    } else {
        evt.preventDefault();
        addTasks(task);
        taskValue.value = '';
    }
    // let toDoHozon = Todo.toDo.value;
});


