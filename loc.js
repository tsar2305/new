const { browser } = require("protractor")

function location(){
    this.getUrl=function(){
        browser.get("https://juliemr.github.io/protractor-demo/")
    }
    this.firstinput=element(by.model("first"))
    this.secondinput=element(by.model("second"))
    this.goButton=element(by.id("gobutton"))
    this.result=element(by.css("h2[class='ng-binding']"))
}
module.exports=new location()