function getNatvieLibrary(){
    Interceptor.attach(Module.findExportByName(null, "android_dlopen_ext"), {

        onEnter: function (args) {
    
            var path = Memory.readUtf8String(args[0]);
            console.log(path)
    
        },
    });
    
    Interceptor.attach(Module.findExportByName(null, "dlopen"), {
    
        onEnter: function (args) {
    
            var path = Memory.readUtf8String(args[0]);
            console.log(path)
    
        },
    });
}