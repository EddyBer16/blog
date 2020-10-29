import React, { Component } from 'react';
import './Posts.scss'

class Posts extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: true,
            posts: []
        }
    }

    componentDidMount() {
        fetch('https://angelberlanga-blog.herokuapp.com/api/posts')
            .then(response => response.json())
            .then(data => 
                this.setState({
                    isLoading: false,
                    posts: data.posts
                })
            )
            .catch(err => console.error(err))
    }

    render() {
        let posts = this.state.posts.slice(0, 4).map((postData) => {
            return (
                <article id={postData._id} className="post">
                    <img className="post-img" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/745af01a-5d51-441b-9c45-a8feda5f195c/d9rvafq-17ed8863-1ae5-4e0d-b8b4-5192c20e8648.jpg/v1/fill/w_1600,h_900,q_75,strp/mr_robot_evil_corp_wallpaper_no_text_by_valencygraphics_d9rvafq-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD05MDAiLCJwYXRoIjoiXC9mXC83NDVhZjAxYS01ZDUxLTQ0MWItOWM0NS1hOGZlZGE1ZjE5NWNcL2Q5cnZhZnEtMTdlZDg4NjMtMWFlNS00ZTBkLWI4YjQtNTE5MmMyMGU4NjQ4LmpwZyIsIndpZHRoIjoiPD0xNjAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.PbgLuqrbgLRPrj6UJWViWfgeiJXrMRJjgbnMcDMIkN0" alt="Test"/>
                    <div className="post-data-wrapper">
                        <h1 className="post-title">{ postData.title }</h1>
                        <p className="post-date date">
                            {`${postData.created_at.month} ${postData.created_at.date}, ${postData.created_at.year}`}
                        </p>
                    </div>
                </article>
            )
        })

        if(!this.state.isLoading) {
            return (
                <div id="Posts" className="wrapper">
                    <h1 className="title">Recent Posts</h1>
                    <section className="posts-wrapper">
                        { posts }
                    </section>
                </div>
            )
        } else {
            return (
                <div id="Posts" className="wrapper">
                    <h1 className="title">Recent Posts</h1>
                    <p className="text-loading">Loading...</p>
                </div>
            )
        }

    }
}

export default Posts
