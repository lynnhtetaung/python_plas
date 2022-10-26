function recommendNext() {
    var nQId = nextQId();
    console.log("next q_id" + nQId);

    // when you want to check console.log(in this js file), comment out this line;
    location.href = 'index.html?pages/page' + nQId + '.html';
}

function nextQId() {
    QID = 0;
    QLEVEL = 1;
    //QTAG = 2;

    /* read question text file */
    var allText = readFile('data\\dataList.txt');//C:\Users\Su Sandy Wint\Desktop\update_OffJPLAS(2)\update_OffJPLAS\data ,questionData.txt
    console.log(allText);
    allText= allText.replace(/\"/g, '');
    var cols = allText.split('\n');
    //console.log(cols);


    /* calcuate next level */
    var cLv = -1;
    var qId = document.getElementById("statement").innerHTML;
    for (var i = 0; i < cols.length; i++) {
        var wk = cols[i].split(',');
        if (qId == wk[QID]) {
            cLv = parseInt(wk[QLEVEL]);
            break;
        }
    }
    var nLv = nextLv(qId, cLv);
    console.log("nextLv:" + nLv);


    /* find next q_id using calcuate next level */
    var nQId = -1;
    var lvAbs = 100;

    var doneQIds = localStorage.getItem("doneQIds").split(',');
    var qIdList = readFile('data\\qIdList.txt').split(',')
    qIdList = qIdList.filter(function(q){
        return !doneQIds.includes(q);
    });
    console.log("qIdList:" + qIdList);



    for (var i = 0; i < cols.length; i++) {
        var wk = cols[i].split(',');

        // find nearest q_id for next question level except done q_id
        var abs= Math.abs(parseInt(wk[QLEVEL]) - nLv);
        if (abs < lvAbs && 0 <= qIdList.indexOf(wk[QID])) {
            lvAbs = abs;
            nQId = wk[QID];
        }
    }
    // console.log("nQId:" + nQId);
    return nQId;
}

function nextLv(qId, cLv) {
    var nLv = 0;
    var mark = parseInt(localStorage.getItem(qId + "mark"));
    console.log("mark:" + mark);
    subCnt = localStorage.getItem(qId + "subCnt");

    console.log("submission counter:" + subCnt);
    if (mark > 80) {
        nLv = parseInt(cLv) + parseInt(up(subCnt));
    } else {
        nLv = parseInt(cLv) + parseInt(down(mark));
    }

    console.log("nextLv:"+nLv);
    return nLv;
}


var RANGE = 2;
var RT_BOUNDS = 3;
var MARK_BOUNDS = 80;

function up(x) {
		var y = 0.0;
		if (0 < x && x <= RT_BOUNDS) {
			y = RANGE;
		} else if (RT_BOUNDS < x) {
			y = RANGE /( x - (RT_BOUNDS - 1));
		}

        console.log("up level :" + y);
		return y;
}

function down(x) {
		var y = 0.0;

		if (0 <= x && x < MARK_BOUNDS) {
            y = -(-RANGE / MARK_BOUNDS) * x - RANGE;

		} else if (MARK_BOUNDS <= x && x < 100) {
			y = 0;
		}

        console.log("down level :" + y);
        return y;
}
