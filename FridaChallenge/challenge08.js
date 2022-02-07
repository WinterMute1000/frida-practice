'use strict'

if(Java.available){
    Java.perform(function(){
        try{
            var button = Java.use('android.widget.Button');
            var stringClass = Java.use('java.lang.String');
            Java.choose('uk.rossmarks.fridalab.MainActivity',{
            onMatch: function(instance){
                var checkButton = Java.cast(instance.findViewById(2131165231),button);
                checkButton.setText(stringClass.$new('Confirm'));
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