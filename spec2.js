
const{browser, element}=require("protractor")
describe("suite2",function(){
   
   var ob=require("./logs.js")
beforeEach(function(){
    ob.getURL();
    browser.driver.manage().windows().maximize()
})
    it("open shop",function(){
     
        ob.shop.click()
       // browser.sleep(5000)
 selectItems("iphone X")
 selectItems("Nokia Edge")
 ob.chkbx.click().then(function(){
   ob.detail.each(function(product){
        product.ob.heading.getText().then(function(name){
            console.log(name)
        })
    var x=Number(product.ob.no).getText().split(".")
    console.log(x)    
})
 })
 
    })

    function selectItems(wis){
        ob.itemlist.each(function(items){
            items.ob.item.getText().then(function(value){
                  if(value==wis){
                     console.log(value);
                     items.ob.addbutton.click()
                    //element(by.partialLinkText("Checkout")).getText().then(function(txt){
                     ob.chkbx.getText().then(function(txt){
                     
                          console.log(txt);
                    //  browser.sleep(2000);
                          var res= txt.split("(")
                         // var num=Number(res[1].trim().charAt(0))
                          console.log("no. of items added to cart "+res[1].trim().charAt(0))
                           //expect(res[1].trim().charAt(0)).toBe("2")
                      
                     })
                  }
              })
           })
      }
      afterEach(function(){
        console.log("test is completed")
      })
})