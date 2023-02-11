const print = (msg) => console.log(msg);

const obj = {
	name: 'Bruce',
	age: 25,
	"key - three": true,
	
	// we can also have functions in object
	sayMyName: function() {
			print(this.name);    // here this refers to obj
	}
};
obj.hobby = 'gym';	// you can set properties even after defining object

print(obj.name);
// print(obj[age]); // throws error as age is variable here not key
print(obj['age']);
print(obj["key - three"]);
print(obj.hobby);
obj.sayMyName();



// creating instances based on an object as blueprint.
print("---- More on Object");
// lets have a blueprint vehicle
const vehicle = {
	wheels: 4,
	engine: function () {
			return 'Vrroooom!';
	}
};
// we create an instance of an object using create method
const car = Object.create(vehicle);
// let us have our own properties for car instance.
car.doors = 4;
print(car);     // { doors: 4 }
// our car eventhough it has only printed doors property, 
// by inheritance it has access to parent object property
// and we can override it by assing value for the corresponding key
car.engine = function () {
  return 'Whoooosh!';
}
print(car.engine());   // Whoooosh! 
print(car.wheels);     // 4
// lets create a type of car
const tesla = Object.create(car);
print(tesla.wheels);   // 4
tesla.engine = function () {
	return 'Ssssshh.....';
}
print(tesla.engine());	// Ssssshh.....



print("---- more Object methods");
const band = {
	vocals: "Robert",
	guitar: "Jimmy",
	bass: "John",
	drums: "John Bonham"
};
print(Object.keys(band));
print(Object.values(band));
print(Object.entries(band));

print(band.hasOwnProperty('drums'));	// check if a property is present.
delete band.drums;   // deletes the property drums in band object
print(band.hasOwnProperty('drums'));




print("---- iterating on object");
for(let job in band) {
	print(`For key: ${job}, value is ${band[job]}`);
}



// destructing objects
print("---- destructing objects");
// here we gonna have variables 
// but we will do that by naming the key and the object that we want to pull the variable from.
const { vocals, guitar, bass, drums } = band;
print(vocals);
print(guitar);
// 			 key	 variablename		fromObject
const { guitar: myVariable, bass: myBass } = band;
print(myVariable);
print(myBass);
// we can do this while passing something to a function.
function sings({ vocals : myVocal }) {
	let vocals = "duplicate local var same as arg key";
	return `${myVocal} sings!, ${vocals}`;
}
print(sings(band));			// sings will only take vocals from this band.