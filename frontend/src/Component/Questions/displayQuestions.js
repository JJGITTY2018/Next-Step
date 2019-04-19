import React from "react";
import {NavLink} from "react-router-dom";
import "./questions.css"


const DisplayQuestions = ({ allQuestions, selectedCategory,userAnsweredList}) => {
    return(allQuestions.map((question, i) => {

        if(userAnsweredList.includes(question.id)){
                   if(question.category === selectedCategory){
            return(
                <NavLink  to={"/questions/" + question.id}>
                
                <div key = {i} className = "questionsParent">
                  <img className = "answered" src = "https://img.icons8.com/color/45/000000/checked-checkbox.png" alt = "answered_logo" />
                 {question.question_body}
                </div>
                 </NavLink>
                  
                    
            )
        }
        }

        else {
               if(question.category === selectedCategory){
            return(
                    <NavLink key = {i} className = "questionsParent" to={"/questions/" + question.id}>
                    
                    {question.question_body}


                    </NavLink>
            )
        }


        }

     
    }))
}

export default DisplayQuestions;
