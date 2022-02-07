'use strict'

if(Java.available){
    Java.perform(function(){
        try{
            // challenge 6
            setTimeout(function(){
                setImmediate(function() {
                    Java.perform(function() {
                        var chall06=Java.use('uk.rossmarks.fridalab.challenge_06');
                        chall06.addChall06.overload('int').implementation = function(a) {
                            Java.choose('uk.rossmarks.fridalab.MainActivity',{
                                "onMatch": (instance)=>{
                                    instance.chall06(chall06.chall06.value)
                                },
                                "onComplete": (instance)=>{}
                        });
                      }
                  })
              });
            },10000);

            //challenge 1
            Java.use('uk.rossmarks.fridalab.challenge_01').chall01.value = 1;
            var chall07=Java.use('uk.rossmarks.fridalab.challenge_07');
            var button = Java.use('android.widget.Button');
            var stringClass = Java.use('java.lang.String');

            Java.choose('uk.rossmarks.fridalab.MainActivity',{
                onMatch: function(instance){
                    console.log("Found MainActivity");

                    //challenge 2
                    instance.chall02();

                    //challenge 3
                    instance.chall03.overload().implementation = function(){
                        return true;
                    }
                    //challenge 4
                    instance.chall04("frida");

                    //challenge 5
                    instance.chall05.overload("java.lang.String").implementation = function(a){
                        this.chall05("frida");
                    }

                    //challenge 7
                    instance.chall07.overload("java.lang.String").implementation = function(a){
                        for (var i = 1000 ; i<=10000; i++){
                            if (chall07.check07Pin(i.toString())) {
                                instance.chall07(i.toString());
                                break;
                            }
                        }
                    }
                    instance.chall07('');

                    // challenge 8
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