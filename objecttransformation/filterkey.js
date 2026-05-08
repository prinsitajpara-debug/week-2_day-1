function filterKeys(obj, keys) {

   let filteredObject = {};

   for (let key of keys) {

      if (obj.hasOwnProperty(key)) {
         filteredObject[key] = obj[key];
      }

   }

   return filteredObject;
}

const student = {
   name: "Prinsi",
   age: 22,
   city: "Ahmedabad",
   course: "FULL STACK AI"
};

const result = filterKeys(student, ["name", "course"]);

console.log(result);