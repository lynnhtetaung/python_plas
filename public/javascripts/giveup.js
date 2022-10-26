
function showAnswer(){
    var qid = document.getElementById("statement");
    var subCnt = localStorage.getItem(qid.innerHTML+ "subCnt");
    console.log(qid.innerHTML+ "subCnt");
    if (confirm('Are you sure to give up?\nAfter that, you cannot try again.')) {
        console.log("submission>>"+subCnt);
        if (subCnt >= 1) {

            giveAnswer();
    }
    else {
            alert("Please try to answer the question at least 1 time");
    }
}

}
function giveAnswer(){
    QID = 0;
    QKEY = 1;
    var allText = readFile('answerKey\\Key1.txt');//C:\Users\Su Sandy Wint\Desktop\update_OffJPLAS(2)\update_OffJPLAS\data ,questionData.txt
    console.log(allText);
    allText= allText.replace(/\"/g, '');
    var cols = allText.split('\n');
    console.log(cols);
    var encryptedCipherText = "";
    var qId = document.getElementById("statement").innerHTML;
    console.log(">>>>>"+qId);
    for (var i = 0; i < cols.length; i++) {
            var wk = cols[i].split(',');
            if (qId == wk[QID]) {
                encryptedCipherText = wk[QKEY];
                //console.log(cLv);
                break;
            }
        }
        //showAnswer(encryptedCipherText);
    //giveAnswer();
     var encryptedBase64Key = "bXVzdGJlMTZieXRlc2tleQ==";
        console.log(encryptedBase64Key);
        var parsedBase64Key = CryptoJS.enc.Base64.parse(encryptedBase64Key);
        console.log(parsedBase64Key);
        var encryptedData = null;
        // Encryption process
        var plaintText = "susandywint";
         console.log( "plaintText =" + plaintText );

        // this is Base64-encoded encrypted data
        encryptedData = CryptoJS.AES.encrypt(plaintText, parsedBase64Key, {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
        });
        console.log( "encryptedData = " + encryptedData );
        // Decryption process
       // var encryptedCipherText = "d/LuhpVvTevdKyVB/pN4Tw==";
        // or encryptedData;
        var decryptedData = CryptoJS.AES.decrypt( encryptedCipherText, parsedBase64Key, {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
        } );
         console.log( "DecryptedData =" + decryptedData );

        // this is the decrypted data as a string
        var decryptedText = decryptedData.toString( CryptoJS.enc.Utf8 );
        console.log( "DecryptedText = " + decryptedText );
        var decryptAnswer=decryptedText.split(",");
        var e=document.getElementsByTagName('input');
        for(i=0;i<e.length;i++){
            //e[i].value=decryptAnswer[i].css('color', 'red');
            $("#scoring-res input").eq(i).val(decryptAnswer[i]).css('color', 'red');

        }
}
function showResult(encryptedCipherText){
    var encryptedBase64Key = "bXVzdGJlMTZieXRlc2tleQ==";
    console.log(encryptedBase64Key);
    var parsedBase64Key = CryptoJS.enc.Base64.parse(encryptedBase64Key);
    console.log(parsedBase64Key);
    var encryptedData = null;
    // Encryption process
    var plaintText = "susandywint";
     console.log( "plaintText =" + plaintText );

    // this is Base64-encoded encrypted data
    encryptedData = CryptoJS.AES.encrypt(plaintText, parsedBase64Key, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7
    });
    console.log( "encryptedData = " + encryptedData );
    // Decryption process
   // var encryptedCipherText = "d/LuhpVvTevdKyVB/pN4Tw==";
    // or encryptedData;
    var decryptedData = CryptoJS.AES.decrypt( encryptedCipherText, parsedBase64Key, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7
    } );
     console.log( "DecryptedData =" + decryptedData );

    // this is the decrypted data as a string
    var decryptedText = decryptedData.toString( CryptoJS.enc.Utf8 );
    console.log( "DecryptedText = " + decryptedText );
    var decryptAnswer=decryptedText.split(",");
    var e=document.getElementsByTagName('input');
    for(i=0;i<e.length;i++){
        //e[i].value=decryptAnswer[i].css('color', 'red');
        $("#scoring-res input").eq(i).val(decryptAnswer[i]).css('color', 'red');

    }

}
