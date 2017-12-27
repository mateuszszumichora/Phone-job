function Phone(brand, price, color, rating) {
    this.brand = brand;
    this.price = price;
    this.color = color;
    this.rating = rating;
    Phone.prototype.printInfo = function() {
		console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + ".");
	Phone.prototype.printRating = function(){
		console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + "-rating is: " + this.rating + ".");
}
}
}
var iPhone6S = new Phone("Apple", 2250, "silver", "7");
var SamsungGalaxy6 = new Phone("Samsung", 1800, "black", "5");
var NokiaLumia1200 = new Phone("Nokia", 1200, "red", "1");

iPhone6S.printInfo()
SamsungGalaxy6.printInfo()
NokiaLumia1200.printInfo()
iPhone6S.printRating()
SamsungGalaxy6.printRating()
NokiaLumia1200.printRating()
