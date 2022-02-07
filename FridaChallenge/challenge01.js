'use strict'

if(Java.available){
    Java.perform(function(){
        try{
            Java.use('uk.rossmarks.fridalab.challenge_01').chall01.value = 1;
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