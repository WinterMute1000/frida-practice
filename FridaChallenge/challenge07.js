'use strict'

if(Java.available){
    Java.perform(function(){
        try{
          var chall07=Java.use('uk.rossmarks.fridalab.challenge_07');
          Java.choose('uk.rossmarks.fridalab.MainActivity',{
            onMatch: function(instance){
                console.log("onMatch.")
                instance.chall07.overload("java.lang.String").implementation = function(a){
                    for (var i = 1000 ; i<=10000; i++){
                        console.log(i)
                        if (chall07.check07Pin(i.toString())) {
                            instance.chall07(i.toString());
                            break;
                        }
                    }
                }
                instance.chall07('');
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