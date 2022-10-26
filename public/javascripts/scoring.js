//通常のJPLASで使用(offlineJPLASでは未使用)
function scoring() {
	$("#scoring-res input").each(function () {
		var stm = statement.childNodes[0].nodeValue;
		var idx = ($("input").index(this)) + 1;
		wk = hex_sha256($(this).val() + stm + idx);
		if (wk != $(this).attr("ans")) {
			$(this).css('background-color', 'pink');
		} else {
			$(this).css('background-color', '#C1FFC1');
		}
	});
}

//ストレージに記録する(「Answer」ボタン)
function newScoring(key) {
	console.log("Coming new scoring" , key);
	vstr = "";
	totalAnsCount = $("#scoring-res input").length;
	correctAnsCount = 0;
	$("#scoring-res input").each(function () {
		// console.log("------Scoring-res");

		var stm = statement.childNodes[0].nodeValue;
		var idx = ($("input").index(this)) + 1;
		var flg = "[x]";

		console.log("Value...", $(this).val(), "Stm..." , stm , "idx...", idx);

		wk = hex_sha256($(this).val() + stm + idx);

		console.log("Wk value..." , wk);
		
		console.log("Answer", $(this).attr("ans"));
		if (wk != $(this).attr("ans")) {
			// console.log("------If condition");

			$(this).css('background-color', 'pink');
		} else {
			console.log("----Else condition");

			$(this).css('background-color', '#C1FFC1');
			flg = "[o]";
			correctAnsCount += 1;
		}
		vstr += (vstr.length == 0) ? "\t" : ",";
		vstr += $(this).val();
		vstr += flg;
	});
	qid = document.getElementById("statement");
	var date = new Date();
	var year = date.getFullYear();
	var month = date.getMonth() + 1;
	if (month < 10) {
		month = "0" + month;
	}
	var day = date.getDate();
	if (day < 10) {
		day = "0" + day;
	}
	var hour = date.getHours();
	if (hour < 10) {
		hour = "0" + hour;
	}
	var minute = date.getMinutes();
	if (minute < 10) {
		minute = "0" + minute;
	}
	var second = date.getSeconds();
	if (second < 10) {
		second = "0" + second;
	}

	problemPercentage = ((correctAnsCount / totalAnsCount) * 100).toFixed(2);
	var kstr = qid.innerHTML + "\t" + year + "-" + month + "-" + day + "\ " + hour + ":" + minute + ":" + second + "\t" + problemPercentage;
	localStorage.setItem(key + "\t" + kstr, vstr); // refactor by SoeThandarAung 
	// localStorage.setItem(key,vstr); 

}

//for Code Modification
// function newScoringCCP(key) {
	function newScoringCMP(key) {


	let vstr = '';
	let correctAnsCount = 0;

	let totalAnsCount = $("#scoring-res input").length;
	console.log("Total Answer Count >> ", totalAnsCount);

	$("#scoring-res input").each(function () {

		var stm = statement.childNodes[0].nodeValue;

		var idx = ($("input").index(this)) + 1;

		var flg = "[o]";

		hk = hex_sha256($(this).val() + stm); //check space
		wk = hex_sha256($(this).val().replace(/\s+/g, "") + stm); //do not check space
		
		//ans is the original correct answer
		if (hk == $(this).attr("ansSpace")) {
			$(this).css('background-color', 'lightgreen');
			correctAnsCount += 1;
			console.log('Correct Answer'); // FEATURE: SoeThandarAung
		}
		else if (wk == $(this).attr("ans")) {
			$(this).css('background-color', 'yellow');
			flg = "[n]";
			correctAnsCount += 1; // FEATURE: SoeThandarAung
		}
		else {
			$(this).css('background-color', 'pink');
			flg = "[x]";
		}
		vstr += (vstr.length == 0) ? "\t" : ",";

		vstr += $(this).val();
		console.log
		vstr += flg;
	});

	qid = document.getElementById("statement");
	var date = new Date();
	var year = date.getFullYear();
	var month = date.getMonth() + 1;
	if (month < 10) {
		month = "0" + month;
	}
	var day = date.getDate();
	if (day < 10) {
		day = "0" + day;
	}
	var hour = date.getHours();
	if (hour < 10) {
		hour = "0" + hour;
	}
	var minute = date.getMinutes();
	if (minute < 10) {
		minute = "0" + minute;
	}
	var second = date.getSeconds();
	if (second < 10) {
		second = "0" + second;
	}
	// var kstr = qid.innerHTML +"\t"+ year+"-"+month+"-"+day+"\ "+hour+":"+minute+":"+second;
	// localStorage.setItem(kstr,vstr);
	problemPercentage = ((correctAnsCount / totalAnsCount) * 100).toFixed(2); // FEATURE: SoeThandarAung
	var kstr = qid.innerHTML + "\t" + year + "-" + month + "-" + day + "\ " + hour + ":" + minute + ":" + second + "\t" + problemPercentage; // FEATURE: SoeThandarAung
	localStorage.setItem(key + "\t" + kstr, vstr); // FEATURE: SoeThandarAung 
}

// Java MCP
function newScoringMCP(key) {
	var problemNo = 'p' + key;
	var clicks = 0;

	var isExist = localStorage.getItem('java_mcp' + key);
	if(isExist) {
		clicks = parseInt(isExist);
		clicks += 1*1;
	} else {
		clicks += 1*1;
	}

	$(".clickNum").show();
	$(".token").show();

	document.getElementById("clickNumText").innerHTML = clicks;
	console.log('Answer Count -> ', clicks);

	let currentRoute = window.location.href.toLowerCase().split("/")[5];

	if( problemNo == currentRoute) {
		localStorage.setItem('java_mcp' + key, clicks);

		var sum = 0;

		// let sessionNum = localStorage.getItem('java_mcp'+ key);	
			var mcp1 = parseInt(localStorage.getItem('java_mcp1')) || 0;
			var mcp2 = parseInt(localStorage.getItem('java_mcp2')) || 0;	
			var mcp3 = parseInt(localStorage.getItem('java_mcp3')) || 0;	
			var mcp4 = parseInt(localStorage.getItem('java_mcp4')) || 0;	
			var mcp5 = parseInt(localStorage.getItem('java_mcp5')) || 0;	
			var mcp6 = parseInt(localStorage.getItem('java_mcp6')) || 0;	
			var mcp7 = parseInt(localStorage.getItem('java_mcp7')) || 0;	
			var mcp8 = parseInt(localStorage.getItem('java_mcp8')) || 0;	
			var mcp9 = parseInt(localStorage.getItem('java_mcp9')) || 0;	
			var mcp10 = parseInt(localStorage.getItem('java_mcp10')) || 0;	
			var mcp11 = parseInt(localStorage.getItem('java_mcp11')) || 0;	
			var mcp12 = parseInt(localStorage.getItem('java_mcp12')) || 0;	
	
			
			sum = mcp1 + mcp2 + mcp3 + mcp4 + mcp5 + mcp6 + mcp7 + mcp8 + mcp9 + mcp10 + mcp11 + mcp12;
			localStorage.setItem('totalAnswerCount', sum);
	}


	vstr = "";
	totalAnsCount = $("#scoring-res input").length;  //refactor by Soe Thandar Aung
	correctAnsCount = 0;  //refactor by Soe Thandar Aung

	$("#scoring-res input").each(function () {
		var stm = statement.childNodes[0].nodeValue;
		var idx = ($("input").index(this)) + 1;
		var flg = "[x]";
		// wk = hex_sha256($(this).val()+stm+idx);
		wk = hex_sha256($(this).val().replace(/\s+/g, "") + stm + idx); //do not check space
		console.log("Wk value..." + idx, wk);

		let anlist = $(this).attr("ans").split(",");
		console.log('Ans List', anlist);

		if (anlist.length > 1) {
			console.log('Anlist  -> is greater than 1');
			let istrue = false;
			console.log("--------------答案循环-----------");
			for (let i in anlist) {
				console.log(anlist[i]);
				if (anlist[i] == wk) {
					istrue = true;
				}
			}
			console.log("------------------分界线-------")
			console.log(wk);
			console.log(istrue);
			if (istrue) {
				console.log("正确进入");
				$(this).css('background-color', '#C1FFC1');
				flg = "[o]";
			} else {
				console.log("错误进入");
				$(this).css('background-color', 'pink');

			}

		} else {
			console.log('Ans List is equal 1 or smaller than 1');
			if (wk != $(this).attr("ans")) {
				$(this).css('background-color', 'pink');
				console.log('MCP -> Wrong Answer');
			} else {
				console.log('MCP -> Correct Answer');
				$(this).css('background-color', '#C1FFC1');
				flg = "[o]";
				correctAnsCount += 1;  //refactor by Soe Thandar Aung
			}
		}

		vstr += (vstr.length == 0) ? "\t" : ",";
		vstr += $(this).val();
		vstr += flg;
	});

	qid = document.getElementById("statement");
	var date = new Date();
	var year = date.getFullYear();
	var month = date.getMonth() + 1;
	if (month < 10) {
		month = "0" + month;
	}
	var day = date.getDate();
	if (day < 10) {
		day = "0" + day;
	}
	var hour = date.getHours();
	if (hour < 10) {
		hour = "0" + hour;
	}
	var minute = date.getMinutes();
	if (minute < 10) {
		minute = "0" + minute;
	}
	var second = date.getSeconds();
	if (second < 10) {
		second = "0" + second;
	}

	problemPercentage = ((correctAnsCount / totalAnsCount) * 100).toFixed(2);  // refactor by SoeThandarAung 
	var kstr = qid.innerHTML + "\t" + year + "-" + month + "-" + day + "\ " + hour + ":" + minute + ":" + second + "\t" + problemPercentage;
	console.log('Java MCP ->', key, 'Kstr ->', kstr , 'Vstr ->', vstr);
	localStorage.setItem('Java_MCP' + "\t" + kstr, vstr); // refactor by SoeThandarAung 
}

// Java MCP - reset count
function resetCount() {
	console.log('calling clear ===>');
	document.getElementById("totalAnswerCount").innerHTML = 0;
	localStorage.clear();
}
//MCP problem finished

function call() {
	var blue = "#1E90FF";
	var purple = "#FF00FF";
	var missingelement = [];
	var incorrectinput = [];
	var aa = document.getElementsByTagName("input")[0].getAttribute('ansHint');
	var arrayCorrect = aa.split("\^"); //correct answer from java
	var lineNo = document.getElementById("myinput").value; //line number to get hint
	var stuAnsStr = document.getElementById("mytext" + lineNo).value;  //get student answer for hint number
	var correctAnsStr = arrayCorrect[lineNo - 1];         //get correct answer for hint

	var bb = document.getElementsByTagName("input")[0].getAttribute('missingele'); //missing element
	var bbarr = bb.split("\^"); //missing element array


	//split both stuAns and correctAns by space
	var stuAnsArr = stuAnsStr.split("<").join(",").split(">").join(",").split("(").join(",").split(")").join(",").split(";").join(",").split(".").join(",").split(" ").join(",").split("[").join(",").split("]").join(",").split(":").join(",").split(",");
	var correctAnsArr = correctAnsStr.split("<").join(",").split(">").join(",").split("(").join(",").split(")").join(",").split(";").join(",").split(".").join(",").split(" ").join(",").split("[").join(",").split("]").join(",").split(":").join(",").split(",");
	//alert(correctAnsStr.indexOf("printArray"));

	//filter null value from each array
	var filterStuAnsArr = stuAnsArr.filter(function (e) {
		return e;
	});
	var filterCorrectAnsArr = correctAnsArr.filter(function (e) {
		return e;
	})

	var mei = 0;
	var iii = 0;
	//to find missing element
	var found = new Boolean(false);
	for (var i = 0; i < bbarr.length; i++) {
		var find = bbarr[i];
		found = filterStuAnsArr.includes(find);
		if (!found) {
			if (filterCorrectAnsArr.includes(find)) {
				var idx = filterCorrectAnsArr.indexOf(find);
				missingelement[mei] = filterCorrectAnsArr[idx + 1];
				mei++;
			}
		}
	}
	//find incorrect input
	var foundincorrect = new Boolean(false);
	for (var i = 0; i < filterStuAnsArr.length; i++) {
		var findincorrect = filterStuAnsArr[i];
		foundincorrect = filterCorrectAnsArr.includes(findincorrect);
		if (!foundincorrect) {
			incorrectinput[iii] = filterStuAnsArr[i];
			iii++;
		}
	}

	//to highlight missing elements
	document.getElementById("inputholder").innerHTML = stuAnsStr;
	var divText = document.getElementById("inputholder");
	//var innerHTML = divText.innerHTML;
	for (var i = 0; i < missingelement.length; i++) {
		var innerHTML = divText.innerHTML;
		var text = missingelement[i];
		var index = innerHTML.indexOf(text);
		innerHTML = innerHTML.substring(0, index) + "<span style = 'background-color:blue;color:yellow'>....</span>" + innerHTML.substring(index, index + text.length) + innerHTML.substring(index + text.length);
		divText.innerHTML = innerHTML;
	}

	//to highlight incorrect input
	for (var i = 0; i < incorrectinput.length; i++) {
		var innerHTML2 = divText.innerHTML;
		var text2 = incorrectinput[i];
		var index2 = innerHTML2.indexOf(text2);
		innerHTML2 = innerHTML2.substring(0, index2) + "<span style = 'background-color:purple;color:white'>" + innerHTML2.substring(index2, index2 + text2.length) + "</span>" + innerHTML2.substring(index2 + text2.length);
		divText.innerHTML = innerHTML2;
	}

}

//Java PFP problem
function newScoringPFP(key){
	console.log("COming new PFP... >>>");
	vstr = ""; 
	totalAnsCount = $("#scoring-res input").length;
	correctAnsCount = 0;

	$("#scoring-res input").each(function(){
		var stm = statement.childNodes[0].nodeValue;
		var idx = ($("input").index(this))+1;
		var flg = "[x]";
		//wk = hex_sha256($(this).val()+stm+idx);
		wk = hex_sha256($(this).val().replace(/\s+/g, "")+stm+idx); //do not check space
	
		let anlist = $(this).attr("ans").split(",");
		if(anlist.length > 1){
			let istrue = false;
			console.log("--------------答案循环-----------");
			for(let i in anlist){
				console.log(anlist[i]);
				if(anlist[i]==wk){
					istrue = true;
				}
			}
			console.log("------------------分界线-------")
			console.log(wk);
			console.log(istrue);
			if(istrue){
				console.log("正确进入");
				$(this).css('background-color','#C1FFC1');
				flg = "[o]";
			}else{
				console.log("错误进入");
				$(this).css('background-color','pink');
				
			}
			
		}else{
			if(wk!=$(this).attr("ans")){
				$(this).css('background-color','pink');
			}else{
				$(this).css('background-color','#C1FFC1');
				flg = "[o]";
				correctAnsCount += 1;

			}
		}
		
		
	vstr += (vstr.length==0)?"\t":",";
	vstr += $(this).val();
	vstr += flg;
	});
	qid = document.getElementById("statement");
	var date = new Date();
	var year = date.getFullYear();
	var month = date.getMonth()+1;
	if(month<10){
		month="0"+month;
	}
	var day = date.getDate();
	if(day<10){
		day="0"+day;
	}
	var hour = date.getHours();
	if(hour<10){
		hour="0"+hour;
	}
	var minute = date.getMinutes();
	if(minute<10){
		minute="0"+minute;
	}
	var second = date.getSeconds();
	if(second<10){
		second="0"+second;
	}

	problemPercentage = ((correctAnsCount / totalAnsCount) * 100).toFixed(2);  //refactor by SoeThandarAung
	var kstr = qid.innerHTML + "\t" + year + "-" + month + "-" + day + "\ " + hour + ":" + minute + ":" + second + "\t" + problemPercentage;
	localStorage.setItem(key + "\t" + kstr, vstr); // refactor by SoeThandarAung 
}

// Java EFP
function newScoringEFP(key){
	console.log("Coming new scoring EFP" , key);
	vstr = "";
	totalAnsCount = $("#scoring-res input").length;
	correctAnsCount = 0;
	$("#scoring-res input").each(function () {

		var stm = statement.childNodes[0].nodeValue;
		var idx = ($("input").index(this)) + 1;
		var flg = "[x]";

		wk = hex_sha256($(this).val() + stm + idx);
		console.log("Wk value..." + idx, wk);
		
		console.log("Answer", $(this).attr("ans"));

		if (wk != $(this).attr("ans")) {
			$(this).css('background-color', 'pink');
		} else {
			$(this).css('background-color', '#C1FFC1');
			flg = "[o]";
			correctAnsCount += 1;
		}
		vstr += (vstr.length == 0) ? "\t" : ",";
		vstr += $(this).val();
		vstr += flg;
	});

	qid = document.getElementById("statement");
	var date = new Date();
	var year = date.getFullYear();
	var month = date.getMonth() + 1;
	if (month < 10) {
		month = "0" + month;
	}
	var day = date.getDate();
	if (day < 10) {
		day = "0" + day;
	}
	var hour = date.getHours();
	if (hour < 10) {
		hour = "0" + hour;
	}
	var minute = date.getMinutes();
	if (minute < 10) {
		minute = "0" + minute;
	}
	var second = date.getSeconds();
	if (second < 10) {
		second = "0" + second;
	}

	problemPercentage = ((correctAnsCount / totalAnsCount) * 100).toFixed(2);
	var kstr = qid.innerHTML + "\t" + year + "-" + month + "-" + day + "\ " + hour + ":" + minute + ":" + second + "\t" + problemPercentage;
	localStorage.setItem(key + "\t" + kstr, vstr); // refactor by SoeThandarAung 
}