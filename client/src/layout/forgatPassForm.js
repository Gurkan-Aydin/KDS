import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import NewPassword from '../components/newPassword'
import Logo from '../components/logo'


export class forgatPassForm extends Component {

    state = {
        username: '',
        question: '',
        answer: '',
        correctAnswer: '',
        isVisible: false,
        isNewpass: false,
        message: ''

    }


    findQuestion = async () => {
        if (this.state.username !== '') {
            const response = await fetch(`/api/admin/getByUsername/${this.state.username}`)
            const admin = await response.json();
            if (admin.length === 0) {
                this.setState({
                    message: "there is no such user",
                    isVisible: false
                })
            } else {
                this.setState({
                    question: admin[0].question,
                    correctAnswer: admin[0].answer,
                    isVisible: true,
                    message: ""
                })
            }
        }
    }

    checkQuestion = () => {
        if (this.state.answer === this.state.correctAnswer) {
            this.setState({
                isNewpass: true,
                message: ""
            })
        } else {
            this.setState({
                isNewpass: false,
                message: "wrong answer"
            })
        }
    }



    changeInput = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    render() {
        const { username, question, answer, message, isVisible, isNewpass } = this.state

        return (
            <div>
                <Logo link="/"/>
                <div style={{ maxWidth: "40%", marginLeft: "30%", marginTop: "20px" }}>
                    <hr />
                    {
                        !isNewpass ? <div>
                            {
                                !isVisible ? <div>
                                    <input className="formCenter form-control form-control-user" type="text" id="username" placeholder="Username" value={username} onChange={this.changeInput} />
                                    <button className="btn btn-primary btn-user btn-block" id="next" onClick={this.findQuestion}> Next </button>
                                </div> : <div>

                                        <h4 className="formCenter" id="question" >{question}</h4>
                                        <input className="formCenter form-control form-control-user" type="text" id="answer" placeholder="Answer" value={answer} onChange={this.changeInput} />
                                        <button className="btn btn-primary btn-user btn-block" id="next2" onClick={this.checkQuestion}> Next </button>
                                    </div>
                            }
                        </div> : <NewPassword username={username} />


                    }

                    <h6 className="formCenter" id="message" onChange={this.changeInput}   >{message}</h6>
                    <hr />
                    <Link className="formCenter" to="/login"> Login </Link>
                    <br />
                    <Link className="formCenter" to="/signup"> Sign Up </Link>
                </div>

            </div>

        )
    }
}

export default forgatPassForm


