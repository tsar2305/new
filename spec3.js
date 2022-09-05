function Car(){
    this.color="red";
    this.brand="bmw";
    this.engine="300cc";
    

    this.getModel=function(){
        console.log(this.color+this.brand+" is 2020 model");
    };
};
module.exports=new Car;