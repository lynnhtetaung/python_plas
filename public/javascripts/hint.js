function hintWord(){
    var qid = document.getElementById("statement");
    var subCnt = localStorage.getItem(qid.innerHTML+ "subCnt");
    console.log(qid.innerHTML+ "subCnt");
 
        if (subCnt >= 1) {

            hint();
    }
    else {
            alert("Please try to answer the question at least 1 time");
    }
}

function hint(){
    var allText = readFile('data\\hint.txt');
    var line = allText.split('\n');



    var hintStr = "";
	var qId = $('#statement').text();
	localStorage.setItem(qId + "hintWord", "");

	var remark = getRemark(qId);

    $("#scoring-res input").each(function(){
        var stm = statement.childNodes[0].nodeValue;
        var idx = ($("input").index(this))+1;

        /* create sha with hint*/
        KWD = 0;
        HINT = 1;
		
		var kwdList = new Array();
        var kwdShaList = new Array();
        var hintList = new Array();

        for (var i = 0; i < line.length; i++) {
            var wk = line[i].split('","');
            //console.log(wk[KWD]);
            console.log(wk[HINT]);

			kwdList.push(wk[KWD]);
            kwdShaList.push(hex_sha256(wk[KWD].replace(/\"/g, '')+stm+idx));
            hintList.push(wk[HINT].replace(/\"/g, ''));
        }

        // check blank correct or not

        var stAns = hex_sha256($(this).val()+stm+idx);
        if(stAns != $(this).attr("ans")){
            /* give hint for missed blanks */
            for (var i = 0; i < hintList.length; i++) {
                if (kwdShaList[i] == $(this).attr("ans")){
					var wk = localStorage.getItem(qId + "hintWord") + ", ";
					
					localStorage.setItem(qId + "hintWord", wk + kwdList[i]);
					hintStr = hintStr + "No." + idx + ": " + hintList[i] + "<br>";
                    //console.info(hintStr);
                }
            }
        }
    });
	console.info(localStorage.getItem(qId + "hintWord"));
    //alert(hintStr);
	$('#hint').html(hintStr);
}


