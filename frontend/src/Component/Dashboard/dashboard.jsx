import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

import Progress from '../Progress/progress'
import DashSplash from './dashSplash'
import RandomQuestion from './randomQuestion'
import WelcomeMessage from './welcomeMessage'

import Leaderboard from "../Leaderboard/leaderboard"
import './dashboard.css'

class Dashboard extends Component {
    constructor (props) {
        super (props)
        this.state = {
            questionId: '',
            categoryId: '',
            questionBody: '',
            category: ''
        }
    }
    componentDidMount () {
       this.props.function_checkStatus()
       axios.get('/api/questions/random')
       .then(res => {
           let randomQuestion = res.data.question[0]
           this.setState({
               questionId: randomQuestion.id,
               categoryId: randomQuestion.category_id,
               questionBody: randomQuestion.question_body,
               category: randomQuestion.category
           })
       })
    }

    render () {
      // console.log(this.props.state.CurrentAutState.userID)
        const { questionId, categoryId, questionBody, category } = this.state
        return (
            <div className='dashboardContainer'>
                <div className='splashAndQuestion'>

                <div className="dashsplashDiv">
                    <DashSplash userName={ this.props.state.CurrentAutState.username }/>
                    </div>
                    <div className="welcomeMessageDiv">
                    <WelcomeMessage />
                    </div>
                    <div className="progressDiv">
                     <Link to="/answers">
                        <Progress userID={this.props.state.CurrentAutState.userID}/>
                     </Link>
                    </div>
                    <div className="randomQdiv">
                        <RandomQuestion
                        questionId={questionId}
                        categoryId={categoryId}
                        questionBody={questionBody}
                        category={category}/>
                    </div>
                    <div className="leaderBoarddiv">

                     <Leaderboard />

                    </div>

                </div>

            </div>
        )
    }
}

export default Dashboard
