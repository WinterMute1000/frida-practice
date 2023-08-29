function getLoadedClass(){
    var currentApplication = Java.use("android.app.ActivityThread").currentApplication(); 
    var pkg = currentApplication.getApplicationInfo().packageName.value;               
    var pm = currentApplication.getPackageManager();                                   

    var intent = Java.use("android.content.Intent");                            
    var mi = intent.$new();                                                     
    mi.setAction(intent.ACTION_MAIN.value);                                     
    mi.addCategory(intent.CATEGORY_LAUNCHER.value);                             
    mi.setPackage(pkg); 
                                                    
    var cn = pm.queryIntentActivities(mi, pm.MATCH_UNINSTALLED_PACKAGES.value); 
    
    const collectionClass = Java.use("java.util.Collection");
    const resolveClass = Java.use("android.content.pm.ResolveInfo");

    if (cn != null){
        const objectArray = collectionClass.toArray.apply(cn);

        objectArray.map((Info: any) => {
            let resolveInfo = Java.cast(Info, resolveClass);
            let activityInfo = resolveInfo.activityInfo.value;
            console.log(activityInfo.packageName.value)
            console.log(activityInfo.name.value)
        }); 
    }
}

Java.perform(() => {
    getLoadedClass();
});
