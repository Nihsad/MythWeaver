import React, { useState } from 'react'; 
import { useNavigate } from 'react-router-dom'; 
import Modal from 'react-modal'; 
import './CreateStory.css'; 


Modal.setAppElement('#root');

// Define the CreateStory component
function CreateStory() {
    // State variables for managing the visibility of various modals
    const [isInitialModalOpen, setIsInitialModalOpen] = useState(false);
    const [isChapterModalOpen, setIsChapterModalOpen] = useState(false);
    const [isOptionModalOpen, setIsOptionModalOpen] = useState(false);
    const [hasStartedStory, setHasStartedStory] = useState(false);

    // State variables for storing story metadata
    const [storyName, setStoryName] = useState('');
    const [storyImage, setStoryImage] = useState('');
    const [storyDescription, setStoryDescription] = useState('');
    const [storyGenre, setStoryGenre] = useState('');
    const [storyTags, setStoryTags] = useState('');

    // State variables for managing chapters and options within the story
    const [chapters, setChapters] = useState([]);
    const [currentChapter, setCurrentChapter] = useState({ title: '', content: '', options: [{ choiceText: '', nextChapterIndex: null, isEnd: false }] });
    const [chapterIndexToEdit, setChapterIndexToEdit] = useState(null);
    const [currentOptionIndex, setCurrentOptionIndex] = useState(null);

    const navigate = useNavigate(); 

    // Handlers for changing story metadata
    const handleStoryNameChange = (event) => {
        setStoryName(event.target.value); // Update story name
    };

    const handleStoryImageChange = (event) => {
        setStoryImage(URL.createObjectURL(event.target.files[0])); // Update story image with a file URL
    };

    const handleStoryDescriptionChange = (event) => {
        setStoryDescription(event.target.value); // Update story description
    };

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

    // Handler for changing option fields
    const handleOptionChange = (index, field, value) => {
        const newOptions = [...currentChapter.options];
        newOptions[index][field] = value; // Update the specified field of the specified option
        setCurrentChapter(prevState => ({
            ...prevState,
            options: newOptions // Update options array in the current chapter
        }));
    };

    // Function to add a new option to the current chapter
    const addOption = () => {
        if (currentChapter.options.length < 3) {
            setCurrentChapter(prevState => ({
                ...prevState,
                options: [...prevState.options, { choiceText: '', nextChapterIndex: null, isEnd: false }] 
            }));
        } else {
            alert("You can only add up to three options."); 
        }
    };

    // Function to remove an option from the current chapter
    const removeOption = (index) => {
        const newOptions = [...currentChapter.options];
        newOptions.splice(index, 1); // Remove the specified option
        setCurrentChapter(prevState => ({
            ...prevState,
            options: newOptions 
        }));
    };

    // Handler for submitting initial story details
    const handleInitialSubmit = (event) => {
        event.preventDefault(); 
        setIsInitialModalOpen(false); 
        setIsChapterModalOpen(true); 
        setHasStartedStory(true); 
    };

    // Handler for submitting a chapter
    const handleChapterSubmit = (event) => {
        event.preventDefault(); 

        // Create a new chapter object
        const newChapter = {
            title: currentChapter.title,
            content: currentChapter.content,
            options: currentChapter.options
        };

        if (chapterIndexToEdit !== null) {
            const updatedChapters = [...chapters];
            updatedChapters[chapterIndexToEdit] = newChapter; // Update existing chapter if in edit mode
            setChapters(updatedChapters);
        } else {
            if (chapters.length < 9) {
                setChapters([...chapters, newChapter]); 
            } else {
                alert("You can only create up to nine chapters."); 
                return;
            }
        }

        // Reset current chapter and close chapter modal
        setCurrentChapter({ title: '', content: '', options: [{ choiceText: '', nextChapterIndex: null, isEnd: false }] });
        setIsChapterModalOpen(false);
        setChapterIndexToEdit(null);
    };

    // Handler for submitting an option as a new chapter
    const handleOptionSubmit = (event) => {
        event.preventDefault(); 

        // Create a new chapter object
        const newChapter = {
            title: currentChapter.title,
            content: currentChapter.content,
            options: currentChapter.options
        };

        // Update chapters array
        const updatedChapters = [...chapters];
        updatedChapters[chapters.length] = newChapter;

        // Set the nextChapterIndex for the option in the parent chapter
        const parentChapterIndex = currentOptionIndex.parentChapterIndex;
        const parentOptionIndex = currentOptionIndex.parentOptionIndex;
        updatedChapters[parentChapterIndex].options[parentOptionIndex].nextChapterIndex = chapters.length;

        setChapters(updatedChapters);

        // Reset current chapter and close option modal
        setCurrentChapter({ title: '', content: '', options: [{ choiceText: '', nextChapterIndex: null, isEnd: false }] });
        setIsOptionModalOpen(false);
        setCurrentOptionIndex(null);
    };

    // Function to add a new chapter for a specific option
    const addNewChapterForOption = (parentChapterIndex, parentOptionIndex) => {
        if (chapters.length >= 9) {
            alert("You can only create up to nine chapters."); 
            return;
        }
        // Set the current option index and open the option modal
        setCurrentOptionIndex({ parentChapterIndex, parentOptionIndex });
        setCurrentChapter({ title: '', content: '', options: [{ choiceText: '', nextChapterIndex: null, isEnd: false }] });
        setIsOptionModalOpen(true);
    };

    // Function to edit an existing chapter
    const editChapter = (index) => {
        const chapterToEdit = chapters[index];
   
        setCurrentChapter({
            title: chapterToEdit.title,
            content: chapterToEdit.content,
            options: chapterToEdit.options
        });
        setChapterIndexToEdit(index);
        setIsChapterModalOpen(true);
    };

    // Function to finalize the story and navigate to the story index page
    const finalizeStory = () => {
        // Navigate to the story index page with the story details in the state
        navigate('/story-index', { state: { storyName, storyImage, storyDescription, storyGenre, storyTags, chapters } });
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
                    {chapter.options.map((option, optionIndex) => (
                        <div key={optionIndex} className={depth < 9 ? `indent-${depth + 1}` : ''}>
                            <button onClick={() => addNewChapterForOption(chapterIndex, optionIndex)}>
                                {option.choiceText || `Option ${optionIndex + 1}`}
                            </button>
                            {option.isEnd && <span> (End)</span>}
                            {option.nextChapterIndex !== null && (
                                <span>
                                    {` -> Chapter ${option.nextChapterIndex + 1}`}
                                    {renderChapters(option.nextChapterIndex, depth + 1)}
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
                    <label htmlFor="storyName">Story Name:</label>
                    <input type="text" id="storyName" value={storyName} onChange={handleStoryNameChange} required />
                    <label htmlFor="storyImage">Story Image:</label>
                    <input type="file" id="storyImage" onChange={handleStoryImageChange} required />
                    <label htmlFor="storyDescription">Brief Description:</label>
                    <textarea id="storyDescription" value={storyDescription} onChange={handleStoryDescriptionChange} required />
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
                    {currentChapter.options.map((option, index) => (
                        <div key={index}>
                            <input
                                type="text"
                                value={option.choiceText}
                                onChange={(e) => handleOptionChange(index, 'choiceText', e.target.value)}
                                placeholder="Option Text"
                                required
                            />
                            <label>
                                <input
                                    type="checkbox"
                                    checked={option.isEnd}
                                    onChange={(e) => handleOptionChange(index, 'isEnd', e.target.checked)}
                                />
                                Ends Story
                            </label>
                            <button type="button" onClick={() => removeOption(index)}>Remove Option</button>
                        </div>
                    ))}
                    {currentChapter.options.length < 3 && <button type="button" onClick={addOption}>Add Option</button>}
                    <button type="submit">{chapterIndexToEdit !== null ? 'Save Changes' : 'Save Chapter'}</button>
                </form>
            </Modal>

            {/* Modal for adding a new chapter for a specific option */}
            <Modal
                isOpen={isOptionModalOpen}
                onRequestClose={() => setIsOptionModalOpen(false)}
                className="modal"
                overlayClassName="overlay"
            >
                <h2>Add New Chapter for Option</h2>
                <form onSubmit={handleOptionSubmit}>
                    <label htmlFor="chapterTitle">Title:</label>
                    <input type="text" id="chapterTitle" value={currentChapter.title} onChange={(e) => handleChapterChange('title', e.target.value)} required />
                    <label htmlFor="chapterContent">Content:</label>
                    <textarea id="chapterContent" value={currentChapter.content} onChange={(e) => handleChapterChange('content', e.target.value)} required />
                    {currentChapter.options.map((option, index) => (
                        <div key={index}>
                            <input
                                type="text"
                                value={option.choiceText}
                                onChange={(e) => handleOptionChange(index, 'choiceText', e.target.value)}
                                placeholder="Option Text"
                                required
                            />
                            <label>
                                <input
                                    type="checkbox"
                                    checked={option.isEnd}
                                    onChange={(e) => handleOptionChange(index, 'isEnd', e.target.checked)}
                                />
                                Ends Story
                            </label>
                            <button type="button" onClick={() => removeOption(index)}>Remove Option</button>
                        </div>
                    ))}
                    {currentChapter.options.length < 3 && <button type="button" onClick={addOption}>Add Option</button>}
                    <button type="submit">Save Chapter</button>
                </form>
            </Modal>
        </div>
    );
}

export default CreateStory;
