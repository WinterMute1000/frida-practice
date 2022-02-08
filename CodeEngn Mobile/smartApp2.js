'use strict'
if(Java.available){
    Java.perform(function(){
        try{ 
            var javaString = Java.use('java.lang.String');
            Java.choose('com.namdaehyeon.findkey2.MainActivity',{
                 onMatch: function(instance){
                    console.log("onMatch.")

                    // Date and Volume
                    instance.makeDate.overload().implementation=()=>{return Java.cast("2013-11-02-12:35:03",javaString);}
                    instance.Volume.overload().implementation = ()=>{return 53;}

                    // Call Function
                    console.log(instance.keyString());
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