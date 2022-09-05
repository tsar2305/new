const { Capabilities } = require("protractor");
var Jasmine2HtmlReporter= require("protractor-jasmine2-html-reporter")
exports.config={
    specs:"spec5.js",
    Capabilities:{
        browserName:"chrome"
    },
    onPrepare:function(){
       
        jasmine.getEnv().addReporter(
            new Jasmine2HtmlReporter({
                savePath: "target/screenshots"
            })
        ) }
}