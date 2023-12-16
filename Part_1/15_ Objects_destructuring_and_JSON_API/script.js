//Objects_destructuring_and_JSON_API

const course = {
  courseName: "js in hindi",
  price: "999",
  courseInstructor: "hitesh"
}

//traditional methods
console.log(course.courseInstructor) //hitesh

//destructuring the value from object
const { courseInstructor } = course
console.log(courseInstructor) //hitesh

//rename courseInstructure and destructuring
const { courseInstructor: Instructor } = course
console.log(Instructor) //hitesh

//example in react this concept
const navbar = ({ company }) => {
}

navbar(company = "hitesh")



//Json API

//object send as json format
// {
//   "name": "Hitesh",
//   "Roll" : 45,
// }

//array of json
// [
//   {},
//   {},
// ]

