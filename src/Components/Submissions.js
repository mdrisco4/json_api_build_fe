import React, { Component } from 'react';
// import axios from 'axios';
import '../Styles/Submissions.css'

class Submissions extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            release_date:'',
            tagline: '',
            runtime: '',
            overview: '',
            revenue: ''
        }
        this.onChange = this.onChange.bind(this)
        this.onChangeTitle = this.onChangeTitle.bind(this)
        this.onChangeRelease_Date = this.onChangeRelease_Date.bind(this)
        this.onChangeTagline = this.onChangeTagline.bind(this)
        this.onChangeRuntime = this.onChangeRuntime.bind(this)
        this.onChangeOverview = this.onChangeRevenue.bind(this)
        this.onChangeOverview = this.onChangeRevenue.bind(this)
        }
        onChange = e => {
            this.setState({ [e.target.name]: e.target.value })
            console.log(this.state)
        }
        onChangeTitle(evt) {
            this.setState({
                title: evt.target.value
            })
        }
        onChangeRelease_Date(evt) {
            this.setState({
                release_date: evt.target.value
            })
        }
        onChangeTagline(evt) {
            this.setState({
                tagline: evt.target.value
            })
        }
        onChangeRuntime(evt) {
            this.setState({
                runtime: evt.target.value
            })
        }
        onChangeOverview(evt) {
            this.setState({
                overview: evt.target.value
            })
        }
        onChangeRevenue(evt) {
            this.setState({
                revenue: evt.target.value
            })
        }

        onSubmit(evt) {
            evt.preventDefault()
            console.log('submitted')
            console.log(`title: ${this.state.title}`)
            console.log(`release_date: ${this.state.release_date}`)
            console.log(`tagline: ${this.state.tagline}`)
            console.log(`runtime: ${this.state.runtime}`)
            console.log(`overview: ${this.state.overview}`)
            console.log(`revenue: ${this.state.revenue}`)

            const newMovie = {
                title: this.state.title,
                release_date: this.state.release_date,
                tagline: this.state.tagline,
                runtime: this.state.runtime,
                overview: this.state.overview,
                revenue: this.state.revenue,
            };
            console.log(newMovie)
            // axios.post('http://localhost:8080/movies/add', newMovie).then(res => console.log(res.data))

            this.setState({
                title: " ",
                release_date: " ",
                tagline: " ",
                runtime: " ",
                overview: " ",
                revenue: " ",
            })
        }

    render() {
        const { title, release_date, tagline, runtime, overview, revenue } = this.state
        return (
            <div>
                   <h2>Submit a Movie!!!</h2>
        {/* <SubmissionForm /> */}
                <div className='form-container'>
                    <form onSubmit={this.Submit}>
                        <input
                            className='entries'
                            type="text"
                            name='title'
                            placeholder="title"
                            value={title}
                            onChange={this.onChange}
                        />
                        <input
                            className='entries'
                            type="text"
                            name='release_date'
                            placeholder="release date (yyyy-mm-dd)"
                            value={release_date}
                            onChange={this.onChange}
                        />
                        <input
                            className='entries'
                            // id='tagline'
                            type="text"
                            name='tagline'
                            placeholder="tagline"
                            value={tagline}
                            onChange={this.onChange}
                        />
                        <input
                            className='entries'
                            type="text" 
                            name='runtime'
                            placeholder="length (in minutes)"
                            value={runtime}
                            onChange={this.onChange}
                        />
                        <input
                            className='entries'
                            // id='entry-parag'
                            type="text"
                            name='overview'
                            placeholder="synopsis"
                            value={overview}
                            onChange={this.onChange}
                        />
                        <div id='box-office'>
                            <label>$</label>
                            <input
                                className='entries'
                                type="text"
                                name='revenue'
                                placeholder="box office receipts"
                                value={revenue}
                                onChange={this.onChange}
                            />
                        </div>
                        <div>
                            <button>Submit Movie Entry</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}


export default Submissions;
