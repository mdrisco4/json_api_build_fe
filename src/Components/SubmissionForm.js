// For submitting new entries to DB, is changing state on entries
// need to finish connecting to backend by creating new movies with
// an axios post request
// 
// 
//      WITH THE FOLLOWING NOTES CONNECT INPUT TO DB TO CREATE NEW ENTRIES
// 
//      import{ route, link, switch } from react-router-dom
// 
//     `movie.create({
//         req.body.title
//      req.body.release_date
//      req.body.tagline
//      req.body.runtime
//      req.body.overview
//      req.body.revenue
//     })`
// With axios.post and <routes/> in place


import React, { Component } from 'react';
// import{ Route, Link, /*switch*/ } from 'react-router-dom'
import '../Styles/SubmissionForm.css'

class SubmissionForm extends Component {
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
        }
        onChange = e => {
            this.setState({ [e.target.name]: e.target.value })
            console.log(this.state)
        }
    render() {
        const { title, release_date, tagline, runtime, overview, revenue } = this.state
        return (
            <div>
                <div className='form-container'>
                    <form>
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
                            id='tagline'
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
                            id='entry-parag'
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
                    </form>
                </div>
            </div>
        );
    }
}


export default SubmissionForm;