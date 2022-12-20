'use strict'

function byPassRoot(){
    var rootDetecter = Java.use('sg.vantagepoint.a.c');
    rootDetecter.a.overload().implementation=()=>{
            return false;
    }
    rootDetecter.b.overload().implementation=()=>{
            return false;
    }
    rootDetecter.c.overload().implementation=()=>{
        return false;
    }
}

function decryptCode(){
    var androidBase64 = Java.use('android.util.Base64');
    var sgVantagepointAA = Java.use('sg.vantagepoint.a.a');
    var sgVantagepointUncrackable1A = Java.use('sg.vantagepoint.uncrackable1.a');

    var arrayOfByte = androidBase64.decode("5UJiFctbmgbDoLXmpL12mkno8HT4Lv8dlat8FxR2GOc=", 0);
    arrayOfByte = sgVantagepointAA.a(sgVantagepointUncrackable1A.b("8d127684cbc37c17616d806cf50473cc"), arrayOfByte);

    console.log(arrayOfByte.toString());
}

/*function hookCheckFunction(){
    Java.use('sg.vantagepoint.uncrackable1.a').a.overload('java.lang.String').implementation=(a)=>{
        return true;
    };

}*/
function bypassDebugCheck(){
    var sgVantagepointAB = Java.use('sg.vantagepoint.a.b');
    sgVantagepointAB.a.overload('android.content.Context').implementation = (context) => {return false;}
}
if(Java.available){
    Java.perform(function(){
        try{
            byPassRoot();
            bypassDebugCheck();
            decryptCode();
            // hookCheckFunction();
        }
        catch(error){
            console.log("[-] An exception occured");
            console.log(String(error.stack));
        }
    });
}
else{
    console.log("[-] Java is not available");
}
