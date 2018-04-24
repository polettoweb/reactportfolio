import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Blog extends Component {
    constructor (props) {
        super(props);
        this.state = {
            posts: [],
            dataid: undefined
        }
    }
    componentDidMount() {
        fetch('https://marcopoletto.co.uk/blog/wp-json/wp/v2/posts')
            .then(data => {
                return data.json();
            })
            .then(res => {
                const posts = res.map(obj => obj);
                this.setState({ posts });
            })
    }
    clickHandler() {
        this.setState({
            dataid: this.post.id
        });
        console.log(this.state.dataid)
    }
    render() {
        return (
            <div className="blog-cat__container">
                <h1>Blog</h1>
                {this.state.posts.map(post => (
                    
                    <div className="blog-cat__post" key={post.id}>
                        <Link to={`/Blog/${post.slug}/${post.id}`} slug={post.id}>
                            <div className="blog-cat__image">
                                <img src={post.better_featured_image ? post.better_featured_image.source_url : ''} 
                                    alt={post.better_featured_image ? post.better_featured_image.alt_text : ''} />
                            </div>
                            <h3 className="blog-cat__title">{post.title.rendered}</h3>
                            <div className="blog-cat__excerpt" dangerouslySetInnerHTML={{ __html: post.excerpt.rendered}} />
                            <div className="blog-cat__link"><p>Read more</p></div>
                        </Link>
                    </div>
                ))}
            </div>
        );
    }
}

export default Blog;
