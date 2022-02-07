'use strict'

if(Java.available){
    Java.perform(function(){
        try{
          Java.choose('uk.rossmarks.fridalab.MainActivity',{
            onMatch: function(instance){
                console.log("Found MainActivity");
                instance.chall02();
            },
            onComplete: function(){
                console.log("onComplete");
            }
          });
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