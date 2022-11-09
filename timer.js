// This is a JavaScript file
localStorage.removeItem("gakusyuugoukei")
if (null === localStorage.getItem("gakusyuugoukei")) 
{ localStorage.setItem("gakusyuugoukei", Number(0))}
let goukei = localStorage.getItem("gakusyuuNikki")
function a() {
    let b = document.getElementById("kako");
    b.innerHTML = goukei;
}
a()
//
// TODO: Write JavaScript code here
//

function startCount() {


    const second = document.getElementById("seconds").value;
    const minute = document.getElementById("minutes").value;
    const hour = document.getElementById("hours").value;
    s = Number(second);
    m = Number(minute);
    h = Number(hour);
    times = h * 3600 + m * 60 + s;

    console.log(h * 3600 + m * 60 + s);
    sessionStorage.setItem("jisyuu", times);

    countStart();
}

function countStart() {
    if (times > 0) {
        changeButtonToStop();
        document.getElementById('timer').innerHTML = '<div id="timer">' + h + "時間 " + m + "分 " + s + "秒" + '</div>';
        countEverySec = setInterval(countDown, 1000);
    }
}



function countDown() {
    if (times > 0) {
        times--;
        h = Math.floor(times / 3600);
        m = Math.floor(times/ 60) - h * 60;
        s = times - h * 3600 - m * 60;
        document.getElementById('timer').innerHTML = '<div id="timer">' + h + "時間 " + m + "分 " + s + "秒" + '</div>';
    } else {
        clearInterval(countEverySec);
        document.getElementById("timeUp").play();
        alert("タイムアップ！");
        reviseCountInput();
        changeButtonToStart();

        let jisyuujikan = sessionStorage.getItem("jisyuu")
        console.log(jisyuujikan);
        result = confirm("ほぞんしますか？");
        if (result == true) {

            let a = Number(localStorage.getItem("gakusyuugoukei"))+Number(jisyuujikan)
            localStorage.setItem("gakusyuuNikki", localStorage.getItem("gakusyuuNikki") + new Date() + "/" + jisyuujikan + "秒<br>")
            localStorage.setItem("gakusyuugoukei", a );
            alert("合計時間は" + a + "秒です")
        }
    }
};
function stopCount() {
    clearInterval(countEverySec);
    document.getElementById("buttons").innerHTML = '<div class="buttons"><input type="button" class="button" id="restartButton" value="リスタート" onclick=restartCount()><input type="button" class="button" id="resetButton" value="リセット" onclick=resetCount()></div>';
}

function changeButtonToStop() {
    document.getElementById("buttons").innerHTML = '<div class="buttons"><input type="button" class="button" id="stopButton" value="ストップ" onclick=stopCount()><input type="button" class="button" id="resetButton" value="リセット" onclick=resetCount() disabled="true"></div>';
}

function changeButtonToStart() {
    document.getElementById("buttons").innerHTML = '<div class="buttons"><input type="button" class="button" id="startButton" value="スタート" onclick=startCount()><input type="button" class="button" id="resetButton" value="リセット" onclick=resetCount() disabled="true"></div>';
}

function restartCount() {

    countStart();
}


function resetCount() {
    result = confirm("中止しますか？");
    if (result == true) {
        clearInterval(countEverySec);
        reviseCountInput();
    };


}

function reviseCountInput() {
    document.getElementById("timer").innerHTML = '<div id="timer"><select id="hours" class="timer_contents"><option>0</option><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option><option>6</option><option>7</option><option>8</option><option>9</option><option>10</option><option>11</option><option>12</option><option>13</option><option>14</option><option>15</option><option>16</option><option>17</option><option>18</option><option>19</option><option>20</option><option>21</option><option>22</option><option>23</option></select>' + ' ' + '<p class="timer_contents">時間</p>' + ' ' + '<select id="minutes" class="timer_contents"><option>0</option><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option><option>6</option><option>7</option><option>8</option><option>9</option><option>10</option><option>11</option><option>12</option><option>13</option><option>14</option><option>15</option><option>16</option><option>17</option><option>18</option><option>19</option><option>20</option><option>21</option><option>22</option><option>23</option><option>24</option><option>25</option><option>26</option><option>27</option><option>28</option><option>29</option><option>30</option><option>31</option><option>32</option><option>33</option><option>34</option><option>35</option><option>36</option><option>37</option><option>38</option><option>39</option><option>40</option><option>41</option><option>42</option><option>43</option><option>44</option><option>45</option><option>46</option><option>47</option><option>48</option><option>49</option><option>50</option><option>51</option><option>52</option><option>53</option><option>54</option><option>55</option><option>56</option><option>57</option><option>58</option><option>59</option></select>' + ' ' + '<p class="timer_contents">分</p>' + ' ' + '<select id="seconds" class="timer_contents"><option>0</option><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option><option>6</option><option>7</option><option>8</option><option>9</option><option>10</option><option>11</option><option>12</option><option>13</option><option>14</option><option>15</option><option>16</option><option>17</option><option>18</option><option>19</option><option>20</option><option>21</option><option>22</option><option>23</option><option>24</option><option>25</option><option>26</option><option>27</option><option>28</option><option>29</option><option>30</option><option>31</option><option>32</option><option>33</option><option>34</option><option>35</option><option>36</option><option>37</option><option>38</option><option>39</option><option>40</option><option>41</option><option>42</option><option>43</option><option>44</option><option>45</option><option>46</option><option>47</option><option>48</option><option>49</option><option>50</option><option>51</option><option>52</option><option>53</option><option>54</option><option>55</option><option>56</option><option>57</option><option>58</option><option>59</option></select>' + ' ' + '<p class="timer_contents">秒</p></div>'
    changeButtonToStart();
}
