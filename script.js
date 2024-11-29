//complete this code
class Rectangle {
	constructor(width, height){
		this.width = width;
		this.height = height;
	}
	get getwidth(){
		return this.width;
	}
	get getheight(){
		return this.width;
	}
	getArea(){
		return this.width*this.height;
	}

}

class Square extends Rectangle {
	constructor(side){
		;
		
	}
	getPerimeter(){
		return 4*this.side;
	}
}

const rectangle = new Rectangle(5, 10);
console.log(rectangle.width);
console.log(rectangle.height);
console.log(rectangle.getArea());

const sqr = new Square(5);



// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
