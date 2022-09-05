const{browser}=require("protractor")
describe("Calculator",function(){
    var using= require("jasmine-data-provider")
    var obj=require("./loc.js")
    var d=require("./data.js")
    beforeAll ( async function() {
       await browser.driver.manage().window().maximize()
        await obj.getUrl()
    });

   
        using(d.Datadriven, function(data,description){
            it("calculate"+description,async function(){
               
                await obj.firstinput.sendKeys(data.firstdata);
                await obj.secondinput.sendKeys(data.seconddata);
                await obj.goButton.click();
                await obj.result.getText().then(function(text){
                    console.log("Result is :................................."+text);
                });            
            })
          
        })
       

   
})