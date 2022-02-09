'use strict'

function byPassRoot(){
    var rootDetecter = Java.use('sg.vantagepoint.a.b');
    rootDetecter.a.overload().implementation=()=>{
        return false;
    }
    rootDetecter.b.overload().implementation=()=>{
        return false;
    }
    rootDetecter.c.overload().implementation=()=>{
        return false;
    }
}

function hookCheck(){
    Java.choose('sg.vantagepoint.uncrackable2.CodeCheck',{
        onMatch: function(instance){
            console.log('onMatch');
            instance.a.overload("java.lang.String").implementation = function(param){
                return true;
            }
        },
        onComplete: function(){
            console.log("onComplete");
        }
      });
}

function hookNativeLibFoo(){
    Interceptor.attach(Module.getExportByName("libfoo.so","Java_sg_vantagepoint_uncrackable2_CodeCheck_bar"),{
        onEnter: function (args){
        },
        onLeave: function(ret){
            ret.replace(0x1);
        }
    });
}
if(Java.available){
    Java.perform(function(){
        try{
            byPassRoot();
            hookCheck();
            hookNativeLibFoo();
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