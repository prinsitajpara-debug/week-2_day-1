function objectToArray(obj) {

   return Object.entries(obj);

}

const student = {
   name: "Prinsi",
   age: 22,
   city: "Ahmedabad"
};

const result = objectToArray(student);

console.log(result);