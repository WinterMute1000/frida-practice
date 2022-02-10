'use strict'

function byPassRoot(){
    var rootDetecter = Java.use('sg.vantagepoint.util.RootDetection');
    rootDetecter.checkRoot1.overload().implementation=()=>{
        return false;
    }
    rootDetecter.checkRoot2.overload().implementation=()=>{
        return false;
    }
    rootDetecter.checkRoot3.overload().implementation=()=>{
        return false;
    }
}

function byPassFridaCheck(){
    Interceptor.attach(Module.findExportByName("libfoo.so","strstr"),{
        onEnter: (args)=>{
        },
        onLeave: (ret)=>{
            ret.replace(0x0);
        }
    });
}

function hookCodeCheck(){
    Interceptor.attach(Module.findExportByName("libfoo.so","Java_sg_vantagepoint_uncrackable3_CodeCheck_bar"),{
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
            byPassFridaCheck();
            hookCodeCheck();
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