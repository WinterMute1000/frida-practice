'use strict'

if(Java.available){
    try{
        setTimeout(function(){
            setImmediate(function() {
                Java.perform(function() {
                    var chall06=Java.use('uk.rossmarks.fridalab.challenge_06');
                    chall06.addChall06.overload('int').implementation = function(a) {
                        Java.choose('uk.rossmarks.fridalab.MainActivity',{
                            "onMatch": (instance)=>{
                                instance.chall06(chall06.chall06.value)
                            },
                            "onComplete": (instance)=>{
                                console.log("onComplate");
                        }
                    });
                  }
              })
          });
        },10000);
   }
    catch(error){
        console.log("[-] An exception occured");
        console.log(String(error.stack));
    }   
}
else{
    console.log("[-] Java is not available");
}