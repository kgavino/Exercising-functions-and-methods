#Functions & Methods Exercises Part 2

##Defining your "boxes"

Two "box" object variables have been instantiated for you, creatively named, `boxOne` and `boxTwo`. 

**The objects were created to have random properties.**
Outside of creating methods for these box objects, do not change any of the properties assigned to it. 

_Note : Methods are function properties of objects. Pay attention to their location relative to the object `myObj`_

Function : 
```javascript
var myObj = {
	greeting : "Hello",
}

var greet = function (){
	console.log(myObj.greeting);
}
```

Method :
```javascript
var myObj = {
	greeting : "Hello",

	greet : function(){
		console.log(this.greeting);
	}
}
```
###Creating methods

* [ ] Create a method "paint" that takes a string argument and assigns it to the color property 

* [ ] Create a method "getVolume" that calculates and returns the volume of an object. Not sure how to calculate the volume of a box (cube)? Look it up here : http://bit.ly/2cgU690

* [ ] create a method named "addItem" that takes a string argument, adds it to the box's "contents" array, and logs the updated contents of the box.

###Creating Functions

* [ ] create a function "compareVolumes" that takes two box objects as arguments, and logs the box with the greater volume. 

* [ ] create a function "heavierBox" that takes two box objects as arguments, and returns the heavier box. If they weigh the same, `return` the string "They weigh the same".


##EXTRA CREDIT
* [ ] create a function named "dump" that takes two box objects as arguments, and transfers all the contents of the box with fewer contents into the other box's contents. One box will have an empty "contents" array, and the other will have all the items in it.

* [ ] create a function named "smash" that takes a box object as an argument, and reduces its length, width, height, and mass by a valid random amount (a dimension cannot be < 0). 
 
