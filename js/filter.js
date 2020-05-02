document.addEventListener("DOMContentLoaded", () => {
    swal("Be Careful !", "We Haven't Limit The Email-List Lines Numbers , But Know That If You Exagerate A Little Bit , Both The App And Your Browser Will Crash...\nAlso If Your Email-List Is Greater Than +50k, Then You Should Uploading It With The \"UPLOAD\" Button Instead Of Entering It Manually...", "warning");

    // Social Logo Animation
    document.getElementById("social_media").onmouseover = function(){
        document.getElementById("fond").style.display = "block";
        document.getElementById("social_media").style.width = "340px";
        document.getElementById("social_media").style.height = "340px";
        document.getElementById("social_media").style.top = "-160px";
        document.getElementById("social_media").style.left = "-160px";
        document.getElementById("social_media").style.borderBottomRightRadius = "50%";
        document.getElementById("facebook").style.top  = "10px";
        document.getElementById("facebook").style.left = "130px";
        document.getElementById("instagram").style.top  = "70px";
        document.getElementById("instagram").style.left = "110px";
        document.getElementById("youtube").style.top  = "110px";
        document.getElementById("youtube").style.left = "65px";
        document.getElementById("github").style.top  = "130px";
        document.getElementById("github").style.left = "10px";
    }
    document.getElementById("social_media").onmouseout = function(){
        document.getElementById("fond").style.display = "none";
        document.getElementById("social_media").style.width = "70px";
        document.getElementById("social_media").style.height = "70px";
        document.getElementById("social_media").style.top = "10px";
        document.getElementById("social_media").style.left = "10px";
        document.getElementById("social_media").style.borderRadius = "50%";
        var logos = document.querySelectorAll("a");
        for(var logo of logos){
            logo.style.top = "30px";
            logo.style.left = "30px";
        }
    }

    //About Coder Styling
    document.getElementById("xenom-code").onmouseover = function(){
        document.getElementById("fond2").style.display = "flex";
        document.getElementById("fond2").style.alignItems = "center";
        document.getElementById("fond2").style.justifyContent = "center";
    }
    document.getElementById("xenom-code").onmouseout = function(){
        document.getElementById("fond2").style.display = "none";
    }

    document.getElementById("EmailList").addEventListener("keyup", inputEmailsSize);

    var input = document.getElementById("txtFile");
    var output = document.getElementById("EmailList");
    input.addEventListener("change", function(){
        var status = document.getElementById("status");
        setTimeout(() => {
            status.innerHTML = "Uplaoding Emails...";
            status.style.color = "purple";
        }, 3000);
        if(this.files && this.files[0]){
            var myFile = this.files[0];
            var reader = new FileReader();
            reader.addEventListener('load', function(e){
                output.value = e.target.result;
            });
            reader.readAsBinaryString(myFile);
            setTimeout(() => {
                swal("Uploaded !", "Emails List Have Been Uploaded Successfuly...", "success");
                //alert("Emails List Uploaded Successfuly...!")
                status.innerHTML = "Emails Uploaded Successfuly...";
                status.style.color = "green";
                inputEmailsSize();
            }, 3000);
        }
        else{
            status.innerHTML = "Failed...";
            status.style.color = "red";
        };
    });
    /*var Domains = document.getElementsByName("enableDomain");
    for(var i = 0; i < Domains.length; i++){
        Domains[i].addEventListener("click", () => {
            var Doomains = document.querySelectorAll("input[type='checkbox']");
            var domains = document.getElementById("sizeDomains");
            var sizeDomains = parseInt(domains);
            if(Doomains[i].checked){
                sizeDomains += 1;
            }
            if(!Doomains[i].checked){
                sizeDomains -= 1;
            }
            domains.innerHTML = sizeDomains;
        });
    }*/
    var Domains = document.getElementsByName("enableDomain");
    for(var Domain of Domains){
        Domain.addEventListener("click", domainsSettings);
    }
    function domainsSettings(){
        var boxes = document.querySelectorAll("#box");
        for(var i = 0; i < 14; i++){
            boxes[i].style.display = "none";
        }
        var domains = document.getElementById("sizeDomains");
        var sizeDomains = 0;
        var gmailEnabled = document.getElementById("gmailCbx");
        var yahooEnabled = document.getElementById("yahooCbx");
        var hotmailEnabled = document.getElementById("hotmailCbx");
        var outlookEnabled = document.getElementById("outlookCbx");
        var icloudEnabled = document.getElementById("iCloudCbx");
        var mailEnabled = document.getElementById("mailCbx");
        var aolEnabled = document.getElementById("aolCbx");
        var seznamEnabled = document.getElementById("seznamCbx");
        var yandexEnabled = document.getElementById("yandexCbx");
        var comcastEnabled = document.getElementById("comcastCbx");
        var attEnabled = document.getElementById("attCbx");
        var protonmailEnabled = document.getElementById("protonmailCbx");
        var msnEnabled = document.getElementById("msnCbx");
        var wanadooEnabled = document.getElementById("wanadooCbx");
        if(gmailEnabled.checked){
            sizeDomains += 1;
            boxes[0].style.display = "block";
        }
        if(yahooEnabled.checked){
            sizeDomains += 1;
            boxes[1].style.display = "block";
        }
        if(hotmailEnabled.checked){
            sizeDomains += 1;
            boxes[2].style.display = "block";
        }
        if(outlookEnabled.checked){
            sizeDomains += 1;
            boxes[3].style.display = "block";
        }
        if(icloudEnabled.checked){
            sizeDomains += 1;
            boxes[4].style.display = "block";
        }
        if(mailEnabled.checked){
            sizeDomains += 1;
            boxes[5].style.display = "block";
        }
        if(aolEnabled.checked){
            sizeDomains += 1;
            boxes[6].style.display = "block";
        }
        if(seznamEnabled.checked){
            sizeDomains += 1;
            boxes[7].style.display = "block";
        }
        if(yandexEnabled.checked){
            sizeDomains += 1;
            boxes[8].style.display = "block";
        }
        if(comcastEnabled.checked){
            sizeDomains += 1;
            boxes[9].style.display = "block";
        }
        if(attEnabled.checked){
            sizeDomains += 1;
            boxes[10].style.display = "block";
        }
        if(protonmailEnabled.checked){
            sizeDomains += 1;
            boxes[11].style.display = "block";
        }
        if(msnEnabled.checked){
            sizeDomains += 1;
            boxes[12].style.display = "block";
        }
        if(wanadooEnabled.checked){
            sizeDomains += 1;
            boxes[13].style.display = "block";
        }
        domains.innerHTML = sizeDomains;
    }
    
})

function inputEmailsSize(){
    var Emails = document.getElementById("EmailList").value.split("\n");
    var checkEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var size = document.getElementById("sizeAll");
    var s = 0;
    for(var i = 0; i < Emails.length; i++){
        if(checkEmail.test(Emails[i])){
            s += 1;
        }
    }
    size.innerHTML = s;
}

function uploadFile(){
    var output = document.getElementById("EmailList");
    if (this.files && this.files[0]) {
        var myFile = this.files[0];
        var reader = new FileReader();
        
        reader.addEventListener('load', function (e) {
          output.value = e.target.result;
        });
        
        reader.readAsBinaryString(myFile);
      }
}

function filter(){
	var EmailsBox = document.getElementById("EmailList");
    var Emails = EmailsBox.value.split("\n");
    var checkEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var sizeAll = parseInt(document.getElementById("sizeAll").innerHTML);
    var filtered = document.getElementById("filtered");
    var notFiltered = document.getElementById("notFiltered");
    var results = document.getElementById("results");
    var GmailBox = document.getElementById("@gmail");
    var CheckGmail = /@gmail./;
    var sizeGmail = document.getElementById("sizeGmail");
    var YahooBox = document.getElementById("@yahoo");
    var CheckYahoo = /@yahoo./;
    var sizeYahoo = document.getElementById("sizeYahoo");
    var HotmailBox = document.getElementById("@hotmail");
    var CheckHotmail = /@hotmail./;
    var sizeHotmail = document.getElementById("sizeHotmail");
    var OutlookBox = document.getElementById("@outlook");
    var CheckOutlook = /@outlook./;
    var sizeOutlook = document.getElementById("sizeOutlook");
    var iCloudBox = document.getElementById("@icloud");
    var CheckiCloud = /@icloud./;
    var sizeiCloud = document.getElementById("sizeiCloud");
    var MailBox = document.getElementById("@mail");
    var CheckMail = /@mail./;
    var sizeMail = document.getElementById("sizeMail");
    var AolBox = document.getElementById("@aol");
    var CheckAol = /@aol./;
    var sizeAol = document.getElementById("sizeAol");
    var SeznamBox = document.getElementById("@seznam");
    var CheckSeznam = /@seznam./;
    var sizeSeznam = document.getElementById("sizeSeznam");
    var YandexBox = document.getElementById("@yandex");
    var CheckYandex = /@yandex./;
    var sizeYandex = document.getElementById("sizeYandex");
    var ComcastBox = document.getElementById("@comcast");
    var CheckComcast = /@comcast./;
    var sizeComcast = document.getElementById("sizeComcast");
    var AttBox = document.getElementById("@att");
    var CheckAtt = /@att./;
    var sizeAtt = document.getElementById("sizeAtt");
    var ProtonmailBox = document.getElementById("@protonmail");
    var CheckProtonmail = /@protonmail./;
    var sizeProtonmail = document.getElementById("sizeProtonmail");
    var MsnBox = document.getElementById("@msn");
    var CheckMsn = /@msn./;
    var sizeMsn = document.getElementById("sizeMsn");
    var WanadooBox = document.getElementById("@wanadoo");
    var CheckWanadoo = /@wanadoo./;
    var sizeWanadoo = document.getElementById("sizeWanadoo");
    var OthersBox = document.getElementById("@others");
    var sizeOthers = document.getElementById("sizeOthers");
    var g = "", yah = "", h = "", o = "", ic = "", m = "", ao = "", s = "", yan = "", c = "", at = "", p = "", ms = "", w = "", ot = ""; 
    var gS = 0, yahS = 0, hS = 0, oS = 0, icS = 0, mS = 0, aoS = 0, sS = 0, yanS = 0, cS = 0, atS = 0, pS = 0, msS = 0, wS = 0, otS = 0;
    var invalid = "", checkLinebreak = /\n+/;
    var status = document.getElementById("status");
    for(var i = 0; i < Emails.length; i++){
        if(checkEmail.test(Emails[i])){
            if(CheckGmail.test(Emails[i])){
                g += Emails[i] + "\n <br>";
                gS += 1;
            }
            if(CheckYahoo.test(Emails[i])){
                yah += Emails[i] + "\n <br>";
                yahS += 1;
            }
            if(CheckHotmail.test(Emails[i])){
                h += Emails[i] + "\n <br>";
                hS += 1;
            }
            if(CheckOutlook.test(Emails[i])){
                o += Emails[i] + "\n <br>";
                oS += 1;
            }
            if(CheckiCloud.test(Emails[i])){
                ic += Emails[i] + "\n <br>";
                icS += 1;
            }
            if(CheckMail.test(Emails[i])){
                m += Emails[i] + "\n <br>";
                mS += 1;
            }
            if(CheckAol.test(Emails[i])){
                ao += Emails[i] + "\n <br>";
                aoS += 1;
            }
            if(CheckSeznam.test(Emails[i])){
                s += Emails[i] + "\n <br>";
                sS += 1;
            }
            if(CheckYandex.test(Emails[i])){
                yan += Emails[i] + "\n <br>";
                yanS += 1;
            }
            if(CheckComcast.test(Emails[i])){
                c += Emails[i] + "\n <br>";
                cS += 1;
            }
            if(CheckAtt.test(Emails[i])){
                at += Emails[i] + "\n <br>";
                atS += 1;
            }
            if(CheckProtonmail.test(Emails[i])){
                p += Emails[i] + "\n <br>";
                pS += 1;
            }
            if(CheckMsn.test(Emails[i])){
                ms += Emails[i] + "\n <br>";
                msS += 1;
            }
            if(CheckWanadoo.test(Emails[i])){
                w += Emails[i] + "\n <br>";
                wS += 1;
            }
            if(!CheckGmail.test(Emails[i]) && !CheckYahoo.test(Emails[i]) && !CheckHotmail.test(Emails[i]) && !CheckOutlook.test(Emails[i]) && !CheckiCloud.test(Emails[i]) && !CheckSeznam.test(Emails[i]) && !CheckComcast.test(Emails[i]) && !CheckMail.test(Emails[i]) && !CheckYandex.test(Emails[i]) && !CheckAol.test(Emails[i]) && !CheckAtt.test(Emails[i]) && !CheckProtonmail.test(Emails[i]) && !CheckMsn.test(Emails[i]) && !CheckWanadoo.test(Emails[i])){
                ot += Emails[i] + "\n <br>";
                otS += 1;
            }
        }
		if(!checkEmail.test(Emails[i]) && !EmailsBox.value == "" && !Emails[i] == ""){
            invalid +=  "Invalid Email Syntax At Line " + Number(Emails.indexOf(Emails[i]) + 1) + " ... ! \n"; 
        }
		if(EmailsBox.value == "" || EmailsBox.value == "" && checkLinebreak.test(EmailsBox.value)){
            swal("No Emails Found !", "Please Enter Some Emails...", "error");
            //alert("Please Enter Some Emails ... !");
            return;
        }
    }
    status.innerHTML = "Checking Emails Syntax Validity...";
    status.style.color = "#78cbf2";
    setTimeout(() => {
        if(invalid !== ""){
            status.innerHTML = "Invalid Emails Syntax...";
            status.style.color = "red";
            swal("Warning !", invalid, "warning");
            //alert(invalid);
        }
        if(invalid == "" && sizeAll > 0){
            status.innerHTML = "Start Filtering...";
            status.style.color = "orange";
        }
    }, 3000);
    setTimeout(() => {
        GmailBox.innerHTML = g;
        sizeGmail.innerHTML = gS;
        YahooBox.innerHTML = yah;
        sizeYahoo.innerHTML = yahS;
        HotmailBox.innerHTML = h;
        sizeHotmail.innerHTML = hS;
        OutlookBox.innerHTML = o;
        sizeOutlook.innerHTML = oS;
        iCloudBox.innerHTML = ic;
        sizeiCloud.innerHTML = icS;
        MailBox.innerHTML = m;
        sizeMail.innerHTML = mS;
        AolBox.innerHTML = ao;
        sizeAol.innerHTML = aoS;
        SeznamBox.innerHTML = s;
        sizeSeznam.innerHTML = sS;
        YandexBox.innerHTML = yan;
        sizeYandex.innerHTML = yanS;
        ComcastBox.innerHTML = c;
        sizeComcast.innerHTML = cS;
        AttBox.innerHTML = at;
        sizeAtt.innerHTML = atS;
        ProtonmailBox.innerHTML = p;
        sizeProtonmail.innerHTML = pS;
        MsnBox.innerHTML = ms;
        sizeMsn.innerHTML = msS;
        WanadooBox.innerHTML = w;
        sizeWanadoo.innerHTML = wS; 
        OthersBox.innerHTML = ot;
        sizeOthers.innerHTML = otS;
        filtered.innerHTML = gS + yahS + hS + oS + icS + mS + aoS + sS + yanS + cS + atS + pS + msS + wS;
        filtered.style.color = "rgb(2, 180, 70)";
        notFiltered.innerHTML = otS;
        notFiltered.style.color = "red"; 
        for(var j = 0; j < Emails.length; j++){
            if(CheckGmail.test(Emails[j]) || CheckYahoo.test(Emails[j]) || CheckHotmail.test(Emails[j]) || CheckOutlook.test(Emails[j]) || CheckiCloud.test(Emails[j]) || CheckSeznam.test(Emails[j]) || CheckComcast.test(Emails[j]) || CheckMail.test(Emails[j]) || CheckYandex.test(Emails[j]) || CheckAol.test(Emails[j]) || CheckAtt.test(Emails[j]) || CheckProtonmail.test(Emails[j]) || CheckMsn.test(Emails[j]) || CheckWanadoo.test(Emails[j]) || OthersBox.innerHTML !== ""){
                swal("Done !", "Emails Filtered Successfuly...", "success");
                //alert("Emails Filtered Successfuly...!");
                status.innerHTML = "Success...";
                status.style.color = "green";
                results.style.display = "block";
                window.location = "#results";
                break;
            }
        }
    }, 3000);
    setTimeout(() => {
        status.innerHTML = "Waiting For Emails...";
        status.style.color = "#000";
    }, 15000);
}

function Copy(boxId){
    if(window.getSelection){
        if(window.getSelection().empty){ // Chrome
            window.getSelection().empty();
        }else if(window.getSelection().removeAllRanges){ // Firefox
            window.getSelection().removeAllRanges();
        }
    }else if(document.selection){ // IE?
        document.selection.empty();
    }
    if(document.selection){
        var range = document.body.createTextRange();
        range.moveToElementText(document.getElementById(boxId));
        range.select().createTextRange();
        document.execCommand("copy");
    }else if(window.getSelection){
        var range = document.createRange();
        range.selectNode(document.getElementById(boxId));
        window.getSelection().addRange(range);
        document.execCommand("copy");
    }
    if(document.getElementById(boxId).innerHTML !== ""){
        var domain = boxId.replace(/@/, "");
        var Domain = domain.charAt(0).toUpperCase() + domain.slice(1);
        swal("Copied !", Domain +  " List Copied To Clipboard Succesfuly...", "success")
        //alert(Domain +  " List Copied Succesfuly ... !");
    }
}

function Download(filename, text){
    var element = document.createElement('a');
    element.style.display = "none";
    element.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(text));
    element.setAttribute("download", filename);
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}

function Save(boxId){
    var boxContent = document.getElementById(boxId).textContent;
    var text = " " + boxContent;
    var domain = boxId.replace(/@/, "");
    var Domain = domain.charAt(0).toUpperCase() + domain.slice(1);
    var size = document.getElementById("size" + Domain).innerHTML;
    var nSize = parseInt(size);
    if(nSize >= 1000){
        nSize /= 1000;
        size = Math.round(nSize) + "k";
    }
    var filename = "(" + size + ")_" + Domain + "_List";
    if(boxContent !== ""){
        Download(filename, text);
    }
}

function SaveFiltered(){
    var FilteredEmails = document.getElementsByClassName("FilteredEmail");
    for(var i = 0; i < 14; i++){
        if(FilteredEmails[i].innerHTML !== ""){
            var Gmail = document.getElementById("@gmail").textContent;
            var Yahoo = document.getElementById("@yahoo").textContent;
            var Hotmail = document.getElementById("@hotmail").textContent;
            var Outlook = document.getElementById("@outlook").textContent;
            var iCloud = document.getElementById("@icloud").textContent;
            var Mail = document.getElementById("@mail").textContent;
            var Aol = document.getElementById("@aol").textContent;
            var Seznam = document.getElementById("@seznam").textContent;
            var Yandex = document.getElementById("@yandex").textContent;
            var Comcast = document.getElementById("@comcast").textContent;
            var Att = document.getElementById("@att").textContent;
            var Protonmail = document.getElementById("@protonmail").textContent;
            var msn = document.getElementById("@msn").textContent;
            var wanadoo = document.getElementById("@wanadoo").textContent;
            var text = "Gmail => \n \n " + Gmail + "\n \n _______________________________________________ \n \n" 
                + "Yahoo => \n \n " + Yahoo + "\n \n _______________________________________________ \n \n" 
                + "Hotmail => \n \n " + Hotmail + "\n \n _______________________________________________ \n \n" 
                + "Outlook => \n \n " + Outlook + "\n \n _______________________________________________ \n \n" 
                + "iCloud => \n \n " + iCloud + "\n \n _______________________________________________ \n \n" 
                + "Mail => \n \n " + Mail + "\n \n _______________________________________________ \n \n" 
                + "Aol => \n \n " + Aol + "\n \n _______________________________________________ \n \n" 
                + "Seznam => \n \n " + Seznam + "\n \n _______________________________________________ \n \n" 
                + "Yandex => \n \n " + Yandex + "\n \n _______________________________________________ \n \n" 
                + "Comcast => \n \n " + Comcast + "\n \n _______________________________________________ \n \n" 
                + "Att => \n \n " + Att + "\n \n _______________________________________________ \n \n"
                + "Protonmail => \n \n " + Protonmail + "\n \n _______________________________________________ \n \n"
                + "MSN => \n \n " + msn + "\n \n _______________________________________________ \n \n"
                + "Wanadoo => \n \n " + wanadoo;
            var sizeFiltered = parseInt(document.getElementById("sizeGmail").innerHTML)
                    + parseInt(document.getElementById("sizeYahoo").innerHTML)
                    + parseInt(document.getElementById("sizeHotmail").innerHTML)
                    + parseInt(document.getElementById("sizeOutlook").innerHTML)
                    + parseInt(document.getElementById("sizeiCloud").innerHTML)
                    + parseInt(document.getElementById("sizeMail").innerHTML)
                    + parseInt(document.getElementById("sizeAol").innerHTML)
                    + parseInt(document.getElementById("sizeSeznam").innerHTML)
                    + parseInt(document.getElementById("sizeYandex").innerHTML)
                    + parseInt(document.getElementById("sizeComcast").innerHTML)
                    + parseInt(document.getElementById("sizeAtt").innerHTML)
                    + parseInt(document.getElementById("sizeProtonmail").innerHTML)
                    + parseInt(document.getElementById("sizeMsn").innerHTML)
                    + parseInt(document.getElementById("sizeWanadoo").innerHTML);
            var nSizeFiltered = sizeFiltered;
            if(nSizeFiltered >= 1000){
                nSizeFiltered /= 1000;
                sizeFiltered = Math.round(nSizeFiltered) + "k";
            }
            var filename = "(" + sizeFiltered + ")" + "_Filtered_Emails_List";
            Download(filename, text);
            return;
        }
    }
    swal("Sorry But...", "We Couldn't Filter Any Email, \n\"Some Domains Are Not Supported\"", "error"); 
    //alert("We Couldn't Filter Any Email, \n\"Some Domains Are Not Supported\"");
}

function SaveNotFiltered(){
    var text = document.getElementById("@others").textContent;
    var size = document.getElementById("sizeOthers").innerHTML;
    var nSize = parseInt(size);
    if(nSize >= 1000){
        nSize /= 1000;
        size = Math.round(nSize) + "k";
    }
    var filename = "(" + size + ")_NotFiltered_Emails_List";
    if(text !== ""){
        Download(filename, text);
        return;
    }
    swal("All Emails Have Been Filtered !", "No Such \"Not-Filtered\" Emails", "error");
    //alert("No Such \"Not-Filtered\" Emails");
}

function SaveAll(){
    var Gmail = document.getElementById("@gmail").textContent;
    var Yahoo = document.getElementById("@yahoo").textContent;
    var Hotmail = document.getElementById("@hotmail").textContent;
    var Outlook = document.getElementById("@outlook").textContent;
    var iCloud = document.getElementById("@icloud").textContent;
    var Mail = document.getElementById("@mail").textContent;
    var Aol = document.getElementById("@aol").textContent;
    var Seznam = document.getElementById("@seznam").textContent;
    var Yandex = document.getElementById("@yandex").textContent;
    var Comcast = document.getElementById("@comcast").textContent;
    var Att = document.getElementById("@att").textContent;
    var Protonmail = document.getElementById("@protonmail").textContent;
    var msn = document.getElementById("@msn").textContent;
    var wanadoo = document.getElementById("@wanadoo").textContent;
    var others = document.getElementById("@others").textContent;
    var text = "Gmail => \n \n " + Gmail + "\n \n _______________________________________________ \n \n" 
        + "Yahoo => \n \n " + Yahoo + "\n \n _______________________________________________ \n \n" 
        + "Hotmail => \n \n " + Hotmail + "\n \n _______________________________________________ \n \n" 
        + "Outlook => \n \n " + Outlook + "\n \n _______________________________________________ \n \n" 
        + "iCloud => \n \n " + iCloud + "\n \n _______________________________________________ \n \n" 
        + "Mail => \n \n " + Mail + "\n \n _______________________________________________ \n \n" 
        + "Aol => \n \n " + Aol + "\n \n _______________________________________________ \n \n" 
        + "Seznam => \n \n " + Seznam + "\n \n _______________________________________________ \n \n" 
        + "Yandex => \n \n " + Yandex + "\n \n _______________________________________________ \n \n" 
        + "Comcast => \n \n " + Comcast + "\n \n _______________________________________________ \n \n" 
        + "Att => \n \n " + Att + "\n \n _______________________________________________ \n \n"
        + "Protonmail => \n \n " + Protonmail + "\n \n _______________________________________________ \n \n"
        + "MSN => \n \n " + msn + "\n \n _______________________________________________ \n \n"
        + "Wanadoo => \n \n " + wanadoo + "\n \n _______________________________________________ \n \n"
        + "Others => \n \n " + others;
    var sizeAll = parseInt(document.getElementById("sizeGmail").innerHTML)
                + parseInt(document.getElementById("sizeYahoo").innerHTML)
                + parseInt(document.getElementById("sizeHotmail").innerHTML)
                + parseInt(document.getElementById("sizeOutlook").innerHTML)
                + parseInt(document.getElementById("sizeiCloud").innerHTML)
                + parseInt(document.getElementById("sizeMail").innerHTML)
                + parseInt(document.getElementById("sizeAol").innerHTML)
                + parseInt(document.getElementById("sizeSeznam").innerHTML)
                + parseInt(document.getElementById("sizeYandex").innerHTML)
                + parseInt(document.getElementById("sizeComcast").innerHTML)
                + parseInt(document.getElementById("sizeAtt").innerHTML)
                + parseInt(document.getElementById("sizeProtonmail").innerHTML)
                + parseInt(document.getElementById("sizeMsn").innerHTML)
                + parseInt(document.getElementById("sizeWanadoo").innerHTML)
                + parseInt(document.getElementById("sizeOthers").innerHTML);
    var nSizeAll = sizeAll;
    if(nSizeAll >= 1000){
        nSizeAll /= 1000;
        sizeAll = Math.round(nSizeAll) + "k";
    }
    var filename = "";
    if(document.getElementById("@others").textContent == ""){
        filename = "(" + sizeAll + ")" + "_Filtered_Emails_List";
    }
    else{
        filename = "(" + sizeAll + ")" + "_Filtered_And_NotFiltered_Emails_List";
    }
    Download(filename, text);
}

