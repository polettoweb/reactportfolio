import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Single extends Component {
    constructor (props) {
        super(props);
        this.state = {
            posts: [],
            image: [],
            title: undefined,
            excerpt: undefined
        }
    }
    componentDidMount() {
        console.log(this.props.match.params);
        fetch(`http://localhost:8888/wordpress/wp-json/wp/v2/posts/${this.props.match.params.id}`)
            .then(data => {
                return data.json();
            })
            .then(res => {
                const posts = res;
                const image = posts.better_featured_image;
                const title = posts.title.rendered;
                const excerpt = posts.excerpt.rendered;
                this.setState({ posts, image, title, excerpt });
            })
    }
    render() {
        return (
            <div className="blog__container">
                <h1>{this.state.title}</h1>
                <div className="blog__post" key={this.state.image ? this.state.image.id : ''}>
                    <div className="blog__image">
                        <img src={this.state.image ? this.state.image.source_url: ''} 
                             alt={this.state.image ? this.state.image.alt_text : ''} />
                    </div>
                    <div className="blog__excerpt" dangerouslySetInnerHTML={{ __html: this.state.excerpt}} />
                    <div className="blog__link"><Link to="/Blog">Go Back</Link></div>
                </div>
            </div>
        );
    }
}

export default Single;
