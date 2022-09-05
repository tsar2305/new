exports.config={
   
   // directConnect:true,
    framework:"jasmine",
    specs:"spec2.js",
    onPrepare:function(){
        browser.driver.manage().window().maximize()
    },
    capabilities:{
        browserName:"chrome"
    },
}
