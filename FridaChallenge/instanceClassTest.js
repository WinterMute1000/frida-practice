if(Java.available){
    Java.perform(function(){
        try{
          Java.choose('uk.rossmarks.fridalab.challenge_06',{
            onMatch: function(instance){
                console.log("onMatch")
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