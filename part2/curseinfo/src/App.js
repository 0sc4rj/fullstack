import React from "react"
import Course from "./Components/Course"

const App = ({courses}) =>
  <>
    {
      courses.map((course) => <Course key={course.id} course={course} />)
    }
  </>

export default App
