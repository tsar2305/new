const{browser, element}=require("protractor");
describe("suite1",function(){
     it("open browser",function(){
        //browser.waitForAngularEnabled(false);
        browser.get("http://qaclickacademy.github.io/protocommerce/");
   
        //browser.sleep(500)
        //element.all(by.css("div[class='form-group']")).count().each(function(item){
         //console.log("count is "+item)
       // })
       // element.all(by.css("div[class='form-group']")).each(function(item){
         //browser.actions().element(by.css("input:nth-child").click().perform().then(function(){
           // browser.sleep(2000)
         //}))
       // })
       element(by.name("name")).sendKeys("dfhdz");
       element(by.css("input[name='email']")).sendKeys("sjhs234@gmail.com")
       element(by.id("exampleInputPassword1")).sendKeys("jhsdgvfhj")
       element(by.css("input[type='checkbox']")).click()
       element(by.cssContainingText("[id='exampleFormControlSelect1'] option","Female")).click()
       element.all(by.name("inlineRadioOptions")).each(function(item){
         item.click();
       })
       var i=0
       element.all(by.buttonText("Submit")).click().then(function(){
      element(by.css("div[class*='alert']")).getText().then(function(text){
         console.log(text);
         browser.sleep(2000)
      });
      element(by.name("email")).clear().then(function(){
         element.all(by.css("div[class*='alert']")).count().then(function(count){
            console.log(count)
         })
      })
      element(by.id("exampleInputPassword1")).clear()
         element(by.name("name")).clear().sendKeys("k").then(function(){
           element.all(by.css("div[class*='alert']")).count().then(function(count){
            console.log(count)
            if(count>1){
               i++;
               element.all(by.css("div[class*='alert']")).get(i).getText().then(function(text){
              
               console.log(text)
               }) }
           })
          //  browser.sleep(1000)

         })
       });
       browser.sleep(2000)
      })
})