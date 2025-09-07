import { useEffect, useState } from "react"
import { useFetcher } from "react-router-dom";

function StudentCard() {

  return (
    <div className="card-outer-border">
        <div className="card-inner-border">
            <h1 className="student-name"> Default Profile </h1>
            <p className="student-details"> Details </p>
        </div>
    </div>
  )
}

export default StudentCard