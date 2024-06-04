// import React from 'react';
// import './StoryPath.css';

// const StoryPath = () => {
//     return (
//         <div className="story-path">
//             <div className="story-path-container">
//                 <h1>Chapter 1:</h1>
//                 <p>
//                     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci ac auctor augue mauris. Nisi est sit amet facilisis magna etiam tempor orci. Elit ut aliquam purus sit amet luctus venenatis lectus. Netus et malesuada fames ac turpis. Donec adipiscing tristique risus nec feugiat in fermentum posuere. Vel eros donec ac odio. Malesuada proin libero nunc consequat interdum varius. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Vitae tempus quam pellentesque nec nam aliquam sem et.
//                 </p>
//                 <div className="options">
//                     <button className="option">Option 1</button>
//                     <button className="option">Option 2</button>
//                     <button className="option">Option 3</button>
//                     <button className="option">Option 4</button>
//                     <button className="option">Option 5</button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default StoryPath;


import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './StoryPath.css';

const StoryPath = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { storyName, chapters, storyImage, storyDescription } = location.state || {};
    const [currentChapterIndex, setCurrentChapterIndex] = useState(0);

    const currentChapter = chapters[currentChapterIndex];

    const handleOptionClick = (option) => {
        if (option.isEnd) {
            navigate('/story-end', { state: { storyName, storyImage, storyDescription, chapters } });
        } else {
            setCurrentChapterIndex(option.nextChapterIndex);
        }
    };

    return (
        <div className="story-path">
            <div className="story-path-container">
                <h1>{currentChapter.title}</h1>
                <p>{currentChapter.content}</p>
                <div className="options">
                    {currentChapter.options.map((option, index) => (
                        <button key={index} className="option" onClick={() => handleOptionClick(option)}>
                            {option.choiceText}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default StoryPath;

