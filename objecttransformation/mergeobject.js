function mergeObjects(obj1, obj2) {

   return {
      ...obj1,
      ...obj2
   };

}

const user = {
   name: "Prinsi",
   age: 22
};

const address = {
   city: "Ahmedabad",
   state: "Gujarat"
};

const result = mergeObjects(user, address);

console.log(result);