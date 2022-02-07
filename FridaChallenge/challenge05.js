'use strict'

if(Java.available){
    Java.perform(function(){
        try{
          Java.choose('uk.rossmarks.fridalab.MainActivity',{
            onMatch: function(instance){
                instance.chall05.overload("java.lang.String").implementation = function(a){
                    this.chall05("frida");
                    console.log("Function Overloading")
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