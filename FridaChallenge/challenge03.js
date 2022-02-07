'use strict'

if(Java.available){
    Java.perform(function(){
        try{
          Java.choose('uk.rossmarks.fridalab.MainActivity',{
            onMatch: function(instance){
                instance.chall03.overload().implementation = function(){
                    console.log("Hook chall03");
                    return true;
                }
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