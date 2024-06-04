// import React from 'react';
// import './StoryIndex.css';

// const StoryIndex = () => {
//     return (
//         <div className="story-index">            
//             <main className="story-main-content">
//                 <div className="story-photo"><img src="https://picsum.photos/200/200" /></div>
//                 <div className="rating">
//                     <span className="star">&#9733;</span>
//                     <span className="star">&#9733;</span>
//                     <span className="star">&#9733;</span>
//                     <span className="star">&#9733;</span>
//                     <span className="star">&#9733;</span>
//                 </div>
//                 <div className="genre-tags-links">
//                     <div>Genre of Story</div>
//                     <div>Tags</div>
//                     <div>Links</div>
//                 </div>
//                 {/* should have a max character limit. 400-500? */}
//                 <div className="story-description">
//                     <h2>Brief Description of Story:</h2>
//                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci ac auctor augue mauris. Nisi est sit amet facilisis magna etiam tempor orci. Elit ut aliquam purus sit amet luctus venenatis lectus. Netus et malesuada fames ac turpis. Donec adipiscing tristique risus nec feugiat in fermentum posuere. Vel eros donec ac odio. Malesuada proin libero nunc consequat interdum varius. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Vitae tempus quam pellentesque nec nam aliquam sem et.</p>                          
//                 <button className="start-adventure-button">Start your Adventure Here</button>
//                 </div>
//             </main>
//         </div>
//     );
// };

// export default StoryIndex;
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './StoryIndex.css';

const StoryIndex = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { storyName, storyImage, storyDescription, storyGenre, storyTags, chapters } = location.state || {};

    const startStory = () => {
        navigate('/story-path', { state: { storyName, storyImage, storyDescription, storyGenre, storyTags, chapters } });
    };

    if (!storyName || !chapters) {
        return <div>No story data available. Please create a story first.</div>;
    }

    // Split the tags by comma and trim whitespace
    const tagsArray = storyTags ? storyTags.split(',').map(tag => tag.trim()) : [];

    return (
        <div className="story-index">
            <main className="story-main-content">
                <div className="story-photo">
                    <img src={storyImage} alt={storyName} />
                </div>
                <div className="rating">
                    <span className="star">&#9733;</span>
                    <span className="star">&#9733;</span>
                    <span className="star">&#9733;</span>
                    <span className="star">&#9733;</span>
                    <span className="star">&#9733;</span>
                </div>
                <div className="genre-tags-links">
                    <div>Genre: {storyGenre}</div>
                    <div>Tags: {tagsArray.map((tag, index) => (
                        <span key={index} className="tag">{tag}</span>
                    ))}</div>
                </div>
                <div className="story-description">
                    <h2>Brief Description of Story:</h2>
                    <p>{storyDescription}</p>
                    <button className="start-adventure-button" onClick={startStory}>Start your Adventure Here</button>
                </div>
            </main>
        </div>
    );
};

export default StoryIndex;
