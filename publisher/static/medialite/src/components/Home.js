import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';

import ArticleApi from '../api/ArticleApi';
import CommentApi from '../api/CommentApi';

class Home extends Component {

    componentDidMount(){
        this.getArticles();
    };

    render() {
        return (
                <div>
                    <h5> Get the Latest News Articles from MediaLite</h5>
                    <p>
                        To browse, our list of Editors and Writers, please, 
                        see the <Link to="/manager">Manager section</Link> of the platform.
                    </p>
                    <p>
                        To read the latest news articles from local communities around the world,
                        please, see the <Link to="/publisher">Publisher </Link> news reader tool.
                    </p>
                </div>
        )
    }

    getArticles(){
        ArticleApi.getAllArticles()
            .then(res => {
                this.setState({
                    articles : res.data
                });
                console.log(this.state.articles);
            })
            .catch(err => {
                console.log(err);
            })
            .finally(() => {
                console.log("ArticleApi.getAllArticles() ran...");
            })

    };

}

Home.propTypes = {
    user: PropTypes.object.isRequired
}

export default Home;
