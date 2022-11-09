// This is a JavaScript file
// This is a JavaScript file

let apikey = "ab2d471c-279e-4b6d-933d-682e80854e38"
let url = "https://db.monaca.education/select?apikey=" + apikey

let question = [{
    text: "具体",
    choice: "例",
    ansewer: "だよ"
}];

console.log(url)
fetch(url)
    .then(function (response) {
        return response.json();
    })
    .then(function (db) {
        let mondai = db;

        for (let i = 0; i < 5; i++) {
            let random = Math.floor(Math.random() * (mondai.records.length - 1));
            let a = random
            let text = mondai.records[a].text0;
            let ansewer = mondai.records[a].text1;

            let choice1 = "1", choice2 = "2", choice3 = "3";

            for (let n = 0; n < 3; n++) {
                b = Math.floor(Math.random() * mondai.records.length);
                for (; b == a;) { b = Math.floor(Math.random() * mondai.records.length); }
                if (n == 0) {
                    choice1 = mondai.records[b].text1
                }
                else if (n == 1) { choice2 = mondai.records[b].text1 }
                else if (n == 2) { choice3 = mondai.records[b].text1 };
            };

            let sentaku = {
                0: [choice1, choice2, choice3, ansewer],
                1: [choice1, choice2, ansewer, choice3],
                2: [choice1, ansewer, choice2, choice3],
                3: [ansewer, choice1, choice2, choice3],
            };


            let random2 = Math.floor(Math.random() * 3);
            console.log(random2)
            sentaku = sentaku[random2]
            console.log({
                text: text,
                choice: sentaku,
                ansewer: ansewer
            })

            question.push({
                text: text,
                choice: sentaku,
                ansewer: ansewer
            });

        };
        let missMondai = "間違い　<br>";






        const btnStart = document.getElementById("btnStart"); // トップ画面にて、ゲームを開始するボタン要素です
        const btnReset = document.getElementById("btnReset"); // リザルト画面にて、ゲームをリセットしトップへ戻るボタン要素です


        // sceneXXXは、各ゲーム画面の要素です
        const sceneTop = document.getElementById("sceneTop");
        const sceneGame = document.getElementById("sceneGame");
        const sceneResult = document.getElementById("sceneResult");



        const textQuestion = document.getElementById("textQuestion");// 問題文を表示する要素です
        const listAnswer = document.getElementById("listAnswer"); // 選択肢を表示する要素です



        const numResult = document.getElementById("numResult");// 正解数を表示する要素です

        /*問題文を格納する要素です*/


        // ゲームで使用する共通の変数で  下　一気に定義するのやめてほしいわかり肉イ
        let state = {
            answer: "",      // answer...プレイヤーの答えと比較する、正解のテキストで
            gameCount: 0,   // gameCount...プレイヤーが答えた数です
            success: 0      // success...プレイヤーが答えて、正解した数です
        };

        // ゲームをリセットする関数を書いてみましょう<<<<<<<<まず日本語にしましょう
        function init() {
            state.gameCount = 1;
            state.success = 0;
            changeScene(sceneResult, sceneTop);
            btnStart.addEventListener("click", gameStart, false);
        };

        // 1.トップ画面　2.ゲーム画面　3.リザルト画面
        //////隠すかどうか
        function changeScene(hiddenScene, visibleScene) {
            hiddenScene.classList.add("is-hidden");
            hiddenScene.classList.remove("is-visible");
            visibleScene.classList.add("is-visible");
        };

        // 問題と選択肢をViewに表示し、正解を共通の変数へ代入
        function showQuestion() {
            let str = "";
            for (let R = 0; R < 4; R++) {
                let value = question[state.gameCount].choice[R]//what is it??

                str += '<div class="questionChoice"><button id=button' + R + ' style=" width:50%;height:20%; color:black; font-size:20px; font-weight:500; text-shadow: 1px 1px 0 white, -1px -1px 0 white, -1px 1px 0 white, 1px -1px 0 white, 0 1px 0 white, 0 -1px 0 white, -1px 0px 0px white, 2px 0 0 white">' + value + "</button></div>";//行　に変化
            };
            textQuestion.innerHTML = question[state.gameCount].text;
            listAnswer.innerHTML = str;
        };

        function choiceQuestion() {
            let questionChoice = document.querySelectorAll(".questionChoice");//すべてに対し作用
            questionChoice.forEach(
                function (choice) {
                    choice.addEventListener(
                        "click",
                        function () {
                            state.answer = this.textContent;
                            checkAnswer(question[state.gameCount].ansewer);
                        },
                        false
                    );
                });
        };

        // 解答が正解か不正解かをチェック

        function checkAnswer(answer) {
            if (answer === state.answer) {
                correctAnswer();
            } else {
                incorrectAnswer();
            }
            state.gameCount++;

            if (state.gameCount < question.length) {
                showQuestion();
                choiceQuestion();
            } else {
                gameEnd();
            };
        };

        // 上でチェックし、正解だった場合
        function correctAnswer() {
            state.success++;
           // alert("正解");
        };

        // 上でチェックし、不正解だった場合
        function incorrectAnswer() {
           // alert("不正解　正解は" + question[state.gameCount].ansewer + "です");
  
            missMondai = missMondai + "<li>" + question[state.gameCount].text + "答え" + question[state.gameCount].ansewer + "</li><br>"
        };
        // スタートボタンが押された時
        function gameStart() {
            changeScene(sceneTop, sceneGame);
            showQuestion();
            choiceQuestion();
        };

        // ゲームが終了した時
        function gameEnd() {
            console.log(missMondai)
            /*let a = document.getElementById("miss")
            a.innerHTML=missMondai
*/
            changeScene(sceneGame, sceneResult);
            numResult.innerHTML = state.success;
            btnReset.addEventListener("click", init, false);

        };

        // スタートボタンが押されたら、ゲームスタートの関数を
        // リセットボタンが押されたら、ゲーム終了後にゲームをリセットする関数を実行するイベントです

        init();
    })
    .catch(error => {
        console.log("失敗しました");
        location.reload()
    }
    );