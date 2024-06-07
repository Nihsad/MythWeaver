import React, { useState } from 'react'; 
import { useNavigate } from 'react-router-dom'; 
import { useMutation } from '@apollo/client';
import { ADD_STORY } from '../../utils/mutations';
import Modal from 'react-modal'; 
import './CreateStory.css'; 


Modal.setAppElement('#root');

// Define the CreateStory component
function CreateStory() {
    // Setup for addStory mutation
    const [addStory, { error }] = useMutation(ADD_STORY);

    // State variables for managing the visibility of various modals
    const [isInitialModalOpen, setIsInitialModalOpen] = useState(false);
    const [isChapterModalOpen, setIsChapterModalOpen] = useState(false);
    const [isChoiceModalOpen, setIsChoiceModalOpen] = useState(false);
    const [hasStartedStory, setHasStartedStory] = useState(false);

    // State variables for storing story metadata
    const [storyTitle, setStoryTitle] = useState('');
    const [storyDescription, setStoryDescription] = useState('');
    const [storyImage, setStoryImage] = useState('');
    const [storyPrice, setStoryPrice] = useState('');
    const [storyGenre, setStoryGenre] = useState('');
    const [storyTags, setStoryTags] = useState('');

    // State variables for managing chapters and choices within the story
    const [chapters, setChapters] = useState([]);
    const [currentChapter, setCurrentChapter] = useState({ title: '', content: '', isEnd: false, choices: [{ choiceText: '', nextChapterIndex: null }] });
    const [chapterIndexToEdit, setChapterIndexToEdit] = useState(null);
    const [currentChoiceIndex, setCurrentChoiceIndex] = useState(null);

    const navigate = useNavigate(); 

    // Handlers for changing story metadata
    const handlestoryTitleChange = (event) => {
        setStoryTitle(event.target.value); // Update story title
    };

    const handleStoryDescriptionChange = (event) => {
        setStoryDescription(event.target.value); // Update story description
    };

    const handleStoryImageChange = (event) => {
        setStoryImage(URL.createObjectURL(event.target.files[0])); // Update story image with a file URL
    };

    const handleStoryPriceChange = (event) => {
        setStoryPrice(event.target.value); // Update story price
    }

    const handleStoryGenreChange = (event) => {
        setStoryGenre(event.target.value); // Update story genre
    };

    const handleStoryTagsChange = (event) => {
        setStoryTags(event.target.value); // Update story tags
    };

    // Handler for changing chapter fields
    const handleChapterChange = (field, value) => {
        setCurrentChapter(prevState => ({
            ...prevState,
            [field]: value // Update the specified field of the current chapter
        }));
    };

    // Handler for changing choice fields
    const handleChoiceChange = (index, field, value) => {
        const newChoices = [...currentChapter.choices];
        newChoices[index][field] = value; // Update the specified field of the specified choice
        setCurrentChapter(prevState => ({
            ...prevState,
            choices: newChoices // Update choices array in the current chapter
        }));
    };

    // Function to add a new choice to the current chapter
    const addChoice = () => {
        if (currentChapter.choices.length < 3) {
            setCurrentChapter(prevState => ({
                ...prevState,
                choices: [...prevState.choices, { choiceText: '', nextChapterIndex: null }] 
            }));
        } else {
            alert("You can only add up to three choices."); 
        }
    };

    // Function to remove a choice from the current chapter
    const removeChoice = (index) => {
        const newChoices = [...currentChapter.choices];
        newChoices.splice(index, 1); // Remove the specified choice
        setCurrentChapter(prevState => ({
            ...prevState,
            choices: newChoices
        }));
    };

    // Handler for submitting initial story details
    const handleInitialSubmit = (event) => {
        event.preventDefault(); 
        setIsInitialModalOpen(false); 
        setIsChapterModalOpen(true); 
        setHasStartedStory(true); 
        // All of these console logs are successful
        console.log('Your storyTitle from inside handleInitialSubmit is: ' + storyTitle);
        console.log('Your storyDescription is ' + storyDescription);
        console.log('Your storyImage is ' + storyImage);
        console.log('Your storyPrice is ' + storyPrice);
        console.log('Your storyGenre is ' + storyGenre);
        console.log('Your storyTags is ' + storyTags);
    };

    // Handler for submitting a chapter
    const handleChapterSubmit = (event) => {
        event.preventDefault(); 

        // Create a new chapter object
        const newChapter = {
            title: currentChapter.title,
            content: currentChapter.content,
            isEnd: currentChapter.isEnd,
            choices: currentChapter.choices
        };

        // This console log is successful
        console.log(newChapter);

        if (chapterIndexToEdit !== null) {
            const updatedChapters = [...chapters];
            updatedChapters[chapterIndexToEdit] = newChapter; // Update existing chapter if in edit mode
            setChapters(updatedChapters);
        }

        // Reset current chapter and close chapter modal
        setCurrentChapter({ title: '', content: '', isEnd: false,  choices: [{ choiceText: '', nextChapterIndex: null }] });
        setIsChapterModalOpen(false);
        setChapterIndexToEdit(null);
    };

    // Handler for submitting an choice as a new chapter
    const handleChoiceSubmit = (event) => {
        event.preventDefault(); 

        // Create a new chapter object
        const newChapter = {
            title: currentChapter.title,
            content: currentChapter.content,
            isEnd: currentChapter.isEnd,
            choices: currentChapter.choices
        };

        // Update chapters array
        const updatedChapters = [...chapters];
        updatedChapters[chapters.length] = newChapter;

        // Set the nextChapterIndex for the choice in the parent chapter
        const parentChapterIndex = currentChoiceIndex.parentChapterIndex;
        const parentChoiceIndex = currentChoiceIndex.parentChoiceIndex;
        updatedChapters[parentChapterIndex].choices[parentChoiceIndex].nextChapterIndex = chapters.length;

        setChapters(updatedChapters);

        // Reset current chapter and close choice modal
        setCurrentChapter({ title: '', content: '', isEnd: false, choices: [{ choiceText: '', nextChapterIndex: null }] });
        setIsChoiceModalOpen(false);
        setCurrentChoiceIndex(null);
    };

    // Function to add a new chapter for a specific choice
    const addNewChapterForChoice = (parentChapterIndex, parentChoiceIndex) => {
        // if (chapters.length >= 9) {
        //     alert("You can only create up to nine chapters."); 
        //     return;
        // }
        // Set the current choice index and open the choice modal
        setCurrentChoiceIndex({ parentChapterIndex, parentChoiceIndex });
        setCurrentChapter({ title: '', content: '', isEnd: false, choices: [{ choiceText: '', nextChapterIndex: null }] });
        setIsChoiceModalOpen(true);
    };

    // Function to edit an existing chapter
    const editChapter = (index) => {
        const chapterToEdit = chapters[index];
   
        setCurrentChapter({
            title: chapterToEdit.title,
            content: chapterToEdit.content,
            isEnd: chapterToEdit.isEnd,
            choices: chapterToEdit.choices
        });
        setChapterIndexToEdit(index);
        setIsChapterModalOpen(true);
    };

    // Function to finalize the story and navigate to the story index page
    const finalizeStory = async () => {
        // Navigate to the story index page with the story details in the state
        // Changed to myth-index temporarily
        // navigate('/myth-index', { state: { storyTitle, storyImage, storyDescription, storyGenre, storyTags, chapters } });

        try {
            // Get the user's data, including _id, by decoding their token
            const profile = await Auth.getProfile();

            const userId = profile.data._id;
            const author = profile.data.username;
            console.log('the next console log is your userId');
            console.log(userId);
            console.log('the next console log is your author');
            console.log(author);

            // const storyInput = {
            //     title,
            //     author,
            //     description,
            //     imageUrl,
            //     price,
            //     genre,
            //     tags,
            //     steps
            // }

            // const data = await addStory({
            //     variables: { storyInput }
            // });

        } catch (err) {
            console.error(err);
        }

        console.log('the next console log will be your storyTitle from inside the finalizeStory function:')
        console.log(storyTitle);

        console.log('the next console log will be your storyDescription from inside the finalizeStory function:')
        console.log(storyDescription)

        console.log('the next console log will be your storyImage from inside the finalizeStory function:')
        console.log(storyImage)

        console.log('the next console log will be your price from inside the finalizeStory function');
        console.log(storyPrice);

        console.log('the next console log will be your storyGenre from inside the finalizeStory function:')
        console.log(storyGenre)

        console.log('the next console log will be your storyTags')
        console.log(storyTags)

        console.log('The next console log will be your chapters')
        console.log(chapters)
    };

    // Function to render chapters recursively
    const renderChapters = (chapterIndex, depth = 0) => {
        const chapter = chapters[chapterIndex];
        if (!chapter) return null; 

        const indentClass = `indent-${depth}`; // Class for indenting nested chapters

        return (
            <div className={`chapter-wrapper ${indentClass}`} key={chapterIndex}>
                <button onClick={() => editChapter(chapterIndex)}>
                    {chapter.title}
                </button>
                <div>
                    {chapter.choices.map((choice, choiceIndex) => (
                        <div key={choiceIndex} className={`indent-${depth + 1}`}>
                            <button onClick={() => addNewChapterForChoice(chapterIndex, choiceIndex)}>
                                {choice.choiceText || `Choice ${choiceIndex + 1}`}
                            </button>
                            {chapter.isEnd && <span> (End)</span>}
                            {choice.nextChapterIndex !== null && (
                                <span>
                                    {` -> Chapter ${choice.nextChapterIndex + 1}`}
                                    {renderChapters(choice.nextChapterIndex, depth + 1)}
                                </span>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        );
    };

    return (
        <div className="create-story-container">
            <div className="create-story-content">
                {!hasStartedStory && (
                    <button className="create-story-button" onClick={() => setIsInitialModalOpen(true)}>Create Story</button>
                )}
                <div className="chapter-container">
                    {chapters.length > 0 && renderChapters(0)}
                </div>
                {chapters.length > 0 && <button className="finalize-story-button" onClick={finalizeStory}>Finalize Story</button>}
            </div>

            {/* Modal for initial story details */}
            <Modal
                isOpen={isInitialModalOpen}
                onRequestClose={() => setIsInitialModalOpen(false)}
                className="modal"
                overlayClassName="overlay"
            >
                <h2>Start Your Story</h2>
                <form onSubmit={handleInitialSubmit}>
                    <label htmlFor="storyTitle">Story Title:</label>
                    <input type="text" id="storyTitle" value={storyTitle} onChange={handlestoryTitleChange} required />

                    <label htmlFor="storyDescription">Brief Description:</label>
                    <textarea id="storyDescription" value={storyDescription} onChange={handleStoryDescriptionChange} required />

                    <label htmlFor="storyImage">Story Image:</label>
                    <input type="file" id="storyImage" onChange={handleStoryImageChange} required />

                    <label htmlFor="storyPrice">Price:</label>
                    <input type="number" id="storyPrice" value={storyPrice} onChange={handleStoryPriceChange} required />

                    <label htmlFor="storyGenre">Genre:</label>
                    <input type="text" id="storyGenre" value={storyGenre} onChange={handleStoryGenreChange} required />

                    <label htmlFor="storyTags">Tags (comma-separated):</label>
                    <input type="text" id="storyTags" value={storyTags} onChange={handleStoryTagsChange} required />

                    <button type="submit">Next</button>
                </form>
            </Modal>

            {/* Modal for adding or editing a chapter */}
            <Modal
                isOpen={isChapterModalOpen}
                onRequestClose={() => setIsChapterModalOpen(false)}
                className="modal"
                overlayClassName="overlay"
            >
                <h2>{chapterIndexToEdit !== null ? 'Edit Chapter' : 'Add New Chapter'}</h2>
                <form onSubmit={handleChapterSubmit}>
                    <label htmlFor="chapterTitle">Title:</label>
                    <input type="text" id="chapterTitle" value={currentChapter.title} onChange={(e) => handleChapterChange('title', e.target.value)} required />
                    <label htmlFor="chapterContent">Content:</label>
                    <textarea id="chapterContent" value={currentChapter.content} onChange={(e) => handleChapterChange('content', e.target.value)} required />
                    <label>
                        <input
                            type="checkbox"
                            checked={currentChapter.isEnd}
                            onChange={(e) => handleChapterChange('isEnd', e.target.checked)}
                        />
                        Ends Story
                    </label>

                    {currentChapter.choices.map((choice, index) => (
                        <div key={index}>
                            <input
                                type="text"
                                value={choice.choiceText}
                                onChange={(e) => handleChoiceChange(index, 'choiceText', e.target.value)}
                                placeholder="Choice Text"
                                required
                            />
                            <button type="button" onClick={() => removeChoice(index)}>Remove Choice</button>
                        </div>
                    ))}
                    {currentChapter.choices.length < 3 && <button type="button" onClick={addChoice}>Add Choice</button>}
                    <button type="submit">{chapterIndexToEdit !== null ? 'Save Changes' : 'Save Chapter'}</button>
                </form>
            </Modal>

            {/* Modal for adding a new chapter for a specific choice */}
            <Modal
                isOpen={isChoiceModalOpen}
                onRequestClose={() => setIsChoiceModalOpen(false)}
                className="modal"
                overlayClassName="overlay"
            >
                <h2>Add New Chapter for Choice</h2>
                <form onSubmit={handleChoiceSubmit}>
                    <label htmlFor="chapterTitle">Title:</label>
                    <input type="text" id="chapterTitle" value={currentChapter.title} onChange={(e) => handleChapterChange('title', e.target.value)} required />
                    <label htmlFor="chapterContent">Content:</label>
                    <textarea id="chapterContent" value={currentChapter.content} onChange={(e) => handleChapterChange('content', e.target.value)} required />
                    <label>
                        <input
                            type="checkbox"
                            checked={currentChapter.isEnd}
                            onChange={(e) => handleChapterChange('isEnd', e.target.checked)}
                        />
                        Ends Story
                    </label>

                    {currentChapter.choices.map((choice, index) => (
                        <div key={index}>
                            <input
                                type="text"
                                value={choice.choiceText}
                                onChange={(e) => handleChoiceChange(index, 'choiceText', e.target.value)}
                                placeholder="Choice Text"
                                required
                            />
                            <button type="button" onClick={() => removeChoice(index)}>Remove Choice</button>
                        </div>
                    ))}
                    {currentChapter.choices.length < 3 && <button type="button" onClick={addChoice}>Add Choice</button>}
                    <button type="submit">Save Chapter</button>
                </form>
            </Modal>
        </div>
    );
}

export default CreateStory;
