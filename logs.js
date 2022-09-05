const { browser } = require("protractor");

function loc(){

    this.getURL=function(){
       browser.get("http://qaclickacademy.github.io/protocommerce/");}
    this.shop=element(by.linkText("Shop"));
    this.itemlist= element.all(by.tagName("app-card"));
    this.item= element(by.css("[class='card-title']"))
    this.addbutton= element(by.buttonText("Add"));
    this.chkbx= element(by.css("a[class*='nav-link btn btn-primary']"))
this.detail= element.all(by.tagName("tr"))
this.heading=element(by.css("div[class='media-heading']"))
this.no=element(by.css("td:nth-child(2)"))}
module.exports=new loc();