
const{browser,element}=require("protractor");

describe("suite1",function(){
    it("open booking.com",function(){
        browser.waitForAngularEnabled(false)
        browser.ignoreSynchronization(true)
        browser.get()
        browser.actions().mouseMove(element(by.id("ss"))).sendKeys("lon").perform().then(function(){
            browser.sleep(1000)
            browser.actions().sendKeys(protractor.Key.ARROW_DOWN).sendKeys(protractor.Key.ENTER).perform()
               })
               browser.actions().mouseMove(element(by.css("div[data-placeholder='Check-in']"))).click().perform().then(function(){
            element.all(by.css("td[class*='bui-calender__date']")).each(function(dates){
                console.log(dates.element(by.css("td:nth-child(1)")).getText())
                browser.sleep(2000)
            })   
            })
            browser.actions().mouseMove(element(by.css("label[class*='xp__input']"))).click().perform().then(function(){
      //  browser.actions().mouseMove(element(by.id("ss"))).sendKeys(ARROW_DOWN).perform()
            })
})
})