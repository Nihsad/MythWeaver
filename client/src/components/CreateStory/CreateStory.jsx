import React from 'react';
import './CreateStory.css';

function CreateStory() {
    return (
        <div className="create-story-container">
            <div className="create-story-content">
                <aside className="create-story-sidebar">
                    <h2 className="story-title">Title</h2>
                    <ul className="story-options">
                        <li className="story-option new">New</li>
                        <li className="story-option edit">Edit</li>
                        <li className="story-option rename">Rename</li>
                        <li className="story-option test">Test</li>
                        <li className="story-option build">Build</li>
                        <li className="story-option delete">Delete</li>
                    </ul>
                </aside>
                <main className="create-story-main">
                    <div className="story-graph">
                        <div className="node purple"></div>
                        <div className="node blue">Chapter 1</div>
                        <div className="node aqua">Chapter 1 Option 1</div>
                        <div className="node pink">Chapter 1 Option 2</div>
                    </div>
                    <div className="story-editor">
                        <header className="editor-header">
                            Chapter 1 Option 2
                            <button className="close-button">x</button>
                        </header>
                        <textarea className="editor-content">Chapter 2:</textarea>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default CreateStory;
