import React from 'react';
import './MostViewedPost.scss'

class MostViewedPost extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: true,
            MostViewedPost: {}
        }
    }

    componentDidMount() {
        fetch('https://angelberlanga-blog.herokuapp.com/api/posts')
            .then(response => response.json())
            .then(data => 
                this.setState({
                    isLoading: false,
                    MostViewedPost: data.posts[0]
                })
            )
            .catch(err => console.error(err))
    }

    render() {
        if(!this.state.isLoading) {
            let MostViewedPostDate = `
                ${this.state.MostViewedPost.created_at.month}
                ${this.state.MostViewedPost.created_at.date},
                ${this.state.MostViewedPost.created_at.year}
            `

            return (
                <div id="MostViewedPost">
                    <h1 className="title">Most Viewed Post</h1>
                    <img className="mvp-img" src="https://images.unsplash.com/photo-1580408485028-225972105876" alt="Test"/>
                    <div className="wrapper">
                        <h1 className="mvp-title">{ this.state.MostViewedPost.title }</h1>
                        <p className="mvp-date">{ MostViewedPostDate }</p>
                    </div>
                </div>
            )
        } else {
            return (
                <div id="MostViewedPost">
                    <h1 className="title">Most Viewed Post</h1>
                    <div className="wrapper loading">
                        <p className="mvp-title text-loading">Loading...</p>
                    </div>
                </div>
            )
        }
    }
}

export default MostViewedPost;