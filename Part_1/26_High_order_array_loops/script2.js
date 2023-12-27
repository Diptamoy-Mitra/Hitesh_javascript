// within array object
const myCoding=[
  {
    languageName: "JavaScript",
    languageFileName: "Js"

  },
  {
    languageName: "Java",
    languageFileName: "Java"
  },
  {
    languageName: "C++",
    languageFileName: "Cpp"
  }
]

//iteration using for each loop
myCoding.forEach((item)=>{
  console.log(item.languageName) //JavaScript Java C++

})