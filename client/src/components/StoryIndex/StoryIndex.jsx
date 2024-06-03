import React from 'react';
import './StoryIndex.css';

const StoryIndex = () => {
    return (
        <div className="story-index">            
            <main className="story-main-content">
                <div className="story-photo"><img src="https://picsum.photos/200/200" /></div>
                <div className="rating">
                    <span className="star">&#9733;</span>
                    <span className="star">&#9733;</span>
                    <span className="star">&#9733;</span>
                    <span className="star">&#9733;</span>
                    <span className="star">&#9733;</span>
                </div>
                <div className="genre-tags-links">
                    <div>Genre of Story</div>
                    <div>Tags</div>
                    <div>Links</div>
                </div>
                {/* should have a max character limit. 400-500? */}
                <div className="story-description">
                    <h2>Brief Description of Story:</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci ac auctor augue mauris. Nisi est sit amet facilisis magna etiam tempor orci. Elit ut aliquam purus sit amet luctus venenatis lectus. Netus et malesuada fames ac turpis. Donec adipiscing tristique risus nec feugiat in fermentum posuere. Vel eros donec ac odio. Malesuada proin libero nunc consequat interdum varius. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Vitae tempus quam pellentesque nec nam aliquam sem et.</p>                          
                <button className="start-adventure-button">Start your Adventure Here</button>
                </div>
            </main>
        </div>
    );
};

export default StoryIndex;
