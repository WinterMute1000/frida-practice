function bypassProxyCheck(){
    var System = Java.use("java.lang.System");

    if (System.getProperty){
      System.getProperty.overloads[0].implementation = function(prop){
          send("[S] called : system.getProperty("+ prop.toString() +")")
          if (prop.toString().toLowerCase().indexOf("proxy") > -1){
              send("[W] bypass proxy check : " + prop);
              return null;
          }
          var ret = this.getProperty(prop);
          send("[W] ret value : " + ret.toString());
          return ret;
      }
    }
}

if(Java.available){
    Java.perform(function(){
        try{
            bypassProxyCheck();
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
