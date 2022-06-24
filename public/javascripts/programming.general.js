var paths = window.location.href.split("/");
var problemName = paths[paths.length - 1];
var problemNo = problemName.substring(1);

window.onload = function () {
    if (problemNo == 1) {
        document.getElementById('prev').style.display = "none";
    }

    if (problemNo == document.getElementById("totalProblems").value) {
        document.getElementById('next').style.display = "none";
    }

    $("#scoring-res input").each(function (index) {
        problemRoute = window.location.href.toLowerCase();

        console.log('Problem Routes  -> ', problemRoute);

        // Neglet CCP and CAP problems
        // if (problemRoute.includes("ccp") || problemRoute.includes("cap")) {
        //     return
        // }

            // For Auto Filled answers : STA
            input = $(this);
            Object.keys(localStorage)
                .sort(function (a, b) {
                    return Number(a.split("\t").pop()) - Number(b.split("\t").pop());
                }).forEach(function (key) {
                    keyName = key.split("\t")[0].toLowerCase();
                    keyProblemNo = key.split("\t")[1];

                    console.log('Key Name ->', keyName, 'Key Problem ->', keyProblemNo);
                    if (problemRoute.includes(keyName) && problemNo == keyProblemNo) { 
                        console.log('Auto fill -> Answer');
                        value = localStorage.getItem(key).split(",")[index];

                        if (value.includes("[o]")) {
                            input.val(value.replace("[o]", "").replace("\t", ""));
                        }
                    } else {
                        console.log('NOT Auto fill -> Answer');
                    }
                });

            if (!(problemRoute.includes("java_pfp"))) {
                if( (problemRoute.includes("ccp")) || (problemRoute.includes("cap"))) {
                    console.log('CCP ->');
                    $(this).on('focus', function (e) {
                        $(this).attr('size', 150);
                    });
    
                    $(this).on('focusout', function (e) {
                        $(this).attr('size', 150);
                    });
                } else {
                    // For input size change onfocus  
                    $(this).on('focus', function (e) {
                        $(this).attr('size', 20);
                    });

                    $(this).on('focusout', function (e) {
                        $(this).attr('size', 2);
                    });
                }
               
            } else {
                // For input size change onfocus  
                $(this).on('focus', function (e) {
                    $(this).attr('size', 25);
                });

                $(this).on('focusout', function (e) {
                    $(this).attr('size', 25);
                });
            }
    });
}

function onRouteChange(action) {
    if (action == "Next") {
        problemNo++;
    } else {
        problemNo--;
    }

    paths[paths.length - 1] = "p" + problemNo;
    window.location.href = paths.join("/");
}

function goBackToProblemList() {
    var currentRoute = window.location.href;
    var routeNames = currentRoute.split("/");
    location.href = "/java_programming/" + routeNames[routeNames.length - 2]
}

// Java MCP - Ke San Code ==>
// let number1 = 0
// for (let i = 1; i <= 10; i++) {
//     let str = localStorage.getItem('number' + i)
//     if (str != null) {
//         number1 += str * 1
//     }
// }
// let dt = document.getElementById('zdti');
// dt.innerText = number1;
// $(".btn1").click(function () {
//     if (dt.innerText == 0) {
//         alert('Not answered yet.')
//     } else {
//         localStorage.clear()
//         dt.innerText = 0
//         alert('Successfully cleared answercounts.')
//     }
// });

// Java MCP - reset count
//取浏览器地址
function getRequest() {
    return window.location.href.toLowerCase();
}

// 判断浏览器地址不是首页隐藏时间
if (!(getRequest().includes('java_mcp'))) {
    sessionStorage.clear('timerCount')
    $(".timeCss").hide();
    $(".token").show();
    console.log('Current Route is other', getRequest());
} else {
    console.log('Current Route is Java MCP', getRequest());
    $(".clickNum").hide();

    //判断有没有开始
    window.onload = () => {

        if (problemNo == 1) {
            document.getElementById('prev').style.display = "none";
        }
    
        if (problemNo == document.getElementById("totalProblems").value) {
            document.getElementById('next').style.display = "none";
        }
        
        console.log('Set Timer is starting');

        $("#scoring-res input").each(function (index) {
            input = $(this);
            Object.keys(localStorage)
                    .sort(function (a, b) {
                        return Number(a.split("\t").pop()) - Number(b.split("\t").pop());
                    }).forEach(function (key) {
                        keyName = key.split("\t")[0].toLowerCase();
                        keyProblemNo = key.split("\t")[1];

                        if (getRequest().includes(keyName) && problemNo == keyProblemNo) { 
                            console.log('MCP -> Auto filled answer');
                            value = localStorage.getItem(key).split(",")[index];

                            if (value.includes("[o]")) {
                                input.val(value.replace("[o]", "").replace("\t", ""));
                            }
                        } else {
                            console.log('MCP NOT Auto fill -> Answer');
                        }
                    }
                );
        });

        var timer = setInterval(
            function setTimer() {

                localStorage.removeItem('timeup');
                localStorage.setItem('timeup', 1);
                // console.log('SS -> innerHTML -> value', s.innerHTML);
                ss.innerHTML++;

                if (ss.innerHTML >= 10) { // 10 seconds
                    s.innerHTML++;
                    console.log('s -> increase', s.innerHTML);
                    console.log('s -> Time Up', localStorage.getItem('timeup'));

                    ss.innerHTML = 0;
                }
                if (s.innerHTML >= 6) { // 1 minute or 60 seconds
                    mm.innerHTML++;
                    console.log('mm -> increase', mm.innerHTML);
                    s.innerHTML = 0;
                }
                if(mm.innerHTML < 5) {
                    localStorage.removeItem('timeup');
                    localStorage.setItem('timeup', 1);
                    console.log(' 5 mins smaller', localStorage.getItem('timeup'));
                } 
                if(mm.innerHTML >= 5) {
                    console.log(' 5 mins greater', localStorage.getItem('timeup'));

                    localStorage.removeItem('timeup');
                    localStorage.setItem('timeup', 5);
                }
                if (mm.innerHTML >= 10) { // 10 mins
                    localStorage.removeItem('timeup');
                    localStorage.setItem('timeup', 5);
                    console.log('m -> Time Up', localStorage.getItem('timeup'));
                    m.innerHTML++;
                    console.log('m -> increase (Timeup)', m.innerHTML);
                    mm.innerHTML = 0;
                }
                
                if (m.innerHTML >= 6) { // 1hr
                    hh.innerHTML++;
                    // console.log('hh -> increase', hh.innerHTML);
                    m.innerHTML = 0;
                }
                if (hh.innerHTML >= 9) {
                    h.innerHTML++;
                    // console.log('h -> increase', h.innerHTML);
                    hh.innerHTML = 0;
                }
                if (h.innerHTML >= 2 && hh.innerHTML >= 4) {
                    dd.innerHTML++
                    // console.log('dd -> increase', dd.innerHTML);
                    h.innerHTML = 0;
                    hh.innerHTML = 0;
                }
                if (dd.innerHTML >= 9) {
                    d.innerHTML++;
                    // console.log('d -> increase', d.innerHTML);
                    dd.innerHTML = 0
                }
            }, 1000);

        // 定义全局计时器
    
        window.onunload = () => {
            clearInterval(timer);
            localStorage.removeItem('timeup');
            console.log('The page is unloaded ->');
        }
    }

    //点击提示事件
    function threeFn(e) {

        answerCount = parseInt(localStorage.getItem('java_mcp' + e));
        timeupNumber = parseInt(localStorage.getItem('timeup'));

        console.log('answer Count >>>>', typeof(answerCount), typeof(timeupNumber));

        if ((answerCount < 5 && timeupNumber == 1) || (answerCount < 5 && timeupNumber == 5) || timeupNumber == 1) {
            alert("Don't give up!");
        } 
        // else if (answerCount == 4 && minute == 5) { //时间 
        //     alert("Don't give up!");
        // }
         else {
             console.log('Show Hint Function ->');
            localStorage.setItem('Tips'+ e,'Hinted')
            $("textarea").removeClass("hidden");
            // alert('Continue to solve!');
        }
    }

    function showAnswerCount() {
        $(".clickNum").show();
        document.getElementById('clickNumText');
    }


}

//MCP 