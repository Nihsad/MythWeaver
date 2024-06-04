// import React from 'react';
// import './CreateStory.css';
// import { useMutation } from '@apollo/client';
// import { ADD_STORY } from '../../utils/mutations';
// import Auth from '../../utils/auth';

// function CreateStory() {

//     const [addStory, { error }] = useMutation(ADD_STORY);

//     // We'll pull these variables from input/textarea elements eventually.
//     const handleStorySubmit = async () => {

//         const token = Auth.loggedIn() ? Auth.getToken() : null;

//         if (!token) {
//             return false;
//         }

//         try {
//             // Get the user's data, including _id, by decoding their token
//             const profile = await Auth.getProfile();
            
//             const title = `The Enchanted Quest: Secrets of the Hidden Treasure`;
//             // In the Story model, the author field is the user's _id which can be populated into a username as needed. So, when creating a Story, we should pass the user's _id for author.
//             const author = profile.data._id;
//             console.log('The following console log is the user._id which you are using as the author field:');
//             console.log(author);

//             const description = 'Embark on a thrilling journey in "The Enchanted Quest: Secrets of the Hidden Treasure", where every decision you make carves a unique path through a world of magic and danger. Navigate ancient forests, treacherous mountains, and mystical realms, each brimming with enchanted creatures and hidden secrets. With countless possible endings, your choices will determine whether you uncover the legendary treasure or fall victim to the perils that lie in wait.';
//             const imageUrl = '/images/test-story-img.png';
//             const price = 0.00;

//             const steps = [
//                 // Chapter 1

//                 // step1
//                 {
//                     stepText: 'You find an ancient map leading to a lost treasure. Where do you start your journey?',
//                     type: 'continuing',
//                     choices: [
//                         {
//                             choiceText: 'Head into the Dark Forest.',
//                             nextStepId: 2,
//                         },
//                         {
//                             choiceText: 'Sail across the Mystic Sea.',
//                             nextStepId: 3,
//                         },
//                         {
//                             choiceText: 'Climb the Treacherous Mountains.',
//                             nextStepId: 4,
//                         },
//                     ],
//                 },
//                 // Chapter 2
//                 // step2
//                 {
//                     stepText: 'You are in a dark forest. What do you want to do next?',
//                     type: 'continuing',
//                     choices: [
//                         {
//                             choiceText: 'Follow the trail marked with strange symbols.',
//                             nextStepId: 5,
//                         },
//                         {
//                             choiceText: 'Befriend a talking owl who offers guidance.',
//                             nextStepId: 6,
//                         },
//                         {
//                             choiceText: 'Set up camp and explore the area at night.',
//                             nextStepId: 7,
//                         },
//                     ],
//                 },
//                 // step3
//                 {
//                     stepText: 'You sailed across the mystic sea. What do you want to do next?',
//                     type: 'continuing',
//                     choices: [
//                         {
//                             choiceText: 'Seek help from a mysterious old sailor.',
//                             nextStepId: 8,
//                         },
//                         {
//                             choiceText: 'Dive underwater to look for clues.',
//                             nextStepId: 9,
//                         },
//                         {
//                             choiceText: 'Navigate using the stars.',
//                             nextStepId: 10,
//                         },
//                     ],
//                 },
//                 // step4
//                 {
//                     stepText: 'You climbed the treacherous mountains. What do you want to do next?',
//                     type: 'continuing',
//                     choices: [
//                         {
//                             choiceText: 'Find a hidden cave entrance.',
//                             nextStepId: 11,
//                         },
//                         {
//                             choiceText: 'Cross a rickety old bridge.',
//                             nextStepId: 12,
//                         },
//                         {
//                             choiceText: 'Climb to the highest peak for a better view.',
//                             nextStepId: 13,
//                         },
//                     ],
//                 },
//                 // Chapter 3
//                 // step5
//                 {
//                     stepText: 'You followed the trail marked with strange symbols. What do you want to do next?',
//                     type: 'continuing',
//                     choices: [
//                         {
//                             choiceText: 'Encounter a band of friendly forest creatures.',
//                             nextStepId: 14,
//                         },
//                         {
//                             choiceText: 'Discover a hidden grove with magical properties.',
//                             nextStepId: 15,
//                         },
//                         {
//                             choiceText: 'Find a treasure chest filled with ancient coins.',
//                             nextStepId: 16,
//                         },
//                     ],
//                 },
//                 // step6
//                 {
//                     stepText: 'You befriended the talking owl. What do you want to do next?',
//                     type: 'continuing',
//                     choices: [
//                         {
//                             choiceText: 'The owl leads you to a hidden treasure chest.',
//                             nextStepId: 17,
//                         },
//                         {
//                             choiceText: 'The owl introduces you to a wise old tree spirit.',
//                             nextStepId: 18,
//                         },
//                         {
//                             choiceText: 'The owl helps you find a secret path to a beautiful clearing.',
//                             nextStepId: 19,
//                         },
//                     ],
//                 },
//                 // step7
//                 {
//                     stepText: 'You set up camp and explored the area at night. What do you want to do next?',
//                     type: 'continuing',
//                     choices: [
//                         {
//                             choiceText: 'Hear a melodious tune and follow it to a gathering of musicians.',
//                             nextStepId: 20,
//                         },
//                         {
//                             choiceText: 'Find an ancient relic buried in the ground.',
//                             nextStepId: 21,
//                         },
//                         {
//                             choiceText: 'Encounter a group of friendly nomads who share their stories.',
//                             nextStepId: 22,
//                         },
//                     ],
//                 },
//                 // step8
//                 {
//                     stepText: 'You sought help from an old sailor. What do you want to do next?',
//                     type: 'continuing',
//                     choices: [
//                         {
//                             choiceText: 'Sail to a deserted island with a pristine beach.',
//                             nextStepId: 23,
//                         },
//                         {
//                             choiceText: 'Discover a shipwreck full of treasure.',
//                             nextStepId: 24,
//                         },
//                         {
//                             choiceText: 'Experience a gentle, magical storm that reveals a rainbow.',
//                             nextStepId: 25,
//                         },
//                     ],
//                 },
//                 // step9
//                 {
//                     stepText: 'You dove underwater to look for clues. What do you want to do next?',
//                     type: 'continuing',
//                     choices: [
//                         {
//                             choiceText: 'Find a sunken city with clues.',
//                             nextStepId: 26,
//                         },
//                         {
//                             choiceText: 'Encounter a playful group of dolphins.',
//                             nextStepId: 27,
//                         },
//                         {
//                             choiceText: 'Discover an underwater cave filled with glowing crystals.',
//                             nextStepId: 28,
//                         },
//                     ],
//                 },
//                 // step10
//                 {
//                     stepText: 'You navigated using the stars. What do you want to do next?',
//                     type: 'continuing',
//                     choices: [
//                         {
//                             choiceText: 'Reach a mysterious floating island with lush gardens.',
//                             nextStepId: 29,
//                         },
//                         {
//                             choiceText: 'Encounter a friendly ghost ship with a helpful crew.',
//                             nextStepId: 30,
//                         },
//                         {
//                             choiceText: 'Find a hidden lagoon with sparkling waters.',
//                             nextStepId: 31,
//                         },
//                     ],
//                 },
//                 // step11
//                 {
//                     stepText: 'You found a hidden cave entrance. What do you want to do next?',
//                     type: 'continuing',
//                     choices: [
//                         {
//                             choiceText: `Find ancient cave paintings depicting the treasure's history.`,
//                             nextStepId: 32,
//                         },
//                         {
//                             choiceText: 'Discover a cave filled with beautiful gemstones.',
//                             nextStepId: 33,
//                         },
//                         {
//                             choiceText: 'Get guided by glowing crystals to the next clue.',
//                             nextStepId: 34,
//                         },
//                     ],
//                 },
//                 // step12
//                 {
//                     stepText: 'You crossed a rickety old bridge. What do you want to do next?',
//                     type: 'continuing',
//                     choices: [
//                         {
//                             choiceText: 'The bridge leads you to a serene meadow with wildflowers.',
//                             nextStepId: 35,
//                         },
//                         {
//                             choiceText: 'Cross safely and find a hidden village of artisans.',
//                             nextStepId: 36,
//                         },
//                         {
//                             choiceText: 'Meet a friendly troll who shares his knowledge of the mountains.',
//                             nextStepId: 37,
//                         },
//                     ],
//                 },
//                 // step13
//                 {
//                     stepText: 'You climbed to the highest peak. What do you want to do next?',
//                     type: 'continuing',
//                     choices: [
//                         {
//                             choiceText: 'Spot the treasure location in the distance.',
//                             nextStepId: 38,
//                         },
//                         {
//                             choiceText: 'Experience a breathtaking view of the landscape.',
//                             nextStepId: 39,
//                         },
//                         {
//                             choiceText: 'Discover an abandoned campsite with valuable supplies.',
//                             nextStepId: 40,
//                         },
//                     ],
//                 },
//                 // Chapter 4 - Final Outcome
//                 // step14
//                 {
//                     stepText: 'You successfully find the treasure and become a legend.',
//                     type: 'ending',
//                 },
//                 // step15
//                 {
//                     stepText: 'You uncover the treasure but face a moral dilemma.',
//                     type: 'ending',
//                 },
//                 // step16
//                 {
//                     stepText: `You find the treasure, but it's enchanted, leading to magical adventures.`,
//                     type: 'ending',
//                 },
//                 // step17
//                 {
//                     stepText: 'You return home with newfound wisdom and stories to tell.',
//                     type: 'ending',
//                 },
//                 // step18
//                 {
//                     stepText: `You gain knowledge of the treasure's location and leave clues for future adventurers.`,
//                     type: 'ending',
//                 },
//                 // step19
//                 {
//                     stepText: `You decide to protect the treasure's secret for future generations.`,
//                     type: 'ending',
//                 },
//                 // step20
//                 {
//                     stepText: 'You make an unexpected ally who enriches your journey.',
//                     type: 'ending',
//                 },
//                 // step21
//                 {
//                     stepText: 'You face a final challenge that brings great rewards.',
//                     type: 'ending',
//                 },
//                 // step22
//                 {
//                     stepText: 'You discover something even more valuable than treasure.',
//                     type: 'ending',
//                 },
//                 // step23
//                 {
//                     stepText: 'You uncover an ancient prophecy about your destiny.',
//                     type: 'ending',
//                 },
//                 // step24
//                 {
//                     stepText: 'You find a portal to another world full of wonders.',
//                     type: 'ending',
//                 },
//                 // step25
//                 {
//                     stepText: 'You are awarded a medal of honor by the local king.',
//                     type: 'ending',
//                 },
//                 // step26
//                 {
//                     stepText: 'You discover a hidden talent within yourself.',
//                     type: 'ending',
//                 },
//                 // step27
//                 {
//                     stepText: 'You unlock the secrets of an ancient civilization.',
//                     type: 'ending',
//                 },
//                 // step28
//                 {
//                     stepText: 'You write a bestselling book about your adventure.',
//                     type: 'ending',
//                 },
//                 // step29
//                 {
//                     stepText: 'You find a map leading to even greater adventures.',
//                     type: 'ending',
//                 },
//                 // step30
//                 {
//                     stepText: `You are invited to join an exclusive explorers' guild.`,
//                     type: 'ending',
//                 },
//                 // step31
//                 {
//                     stepText: 'You establish a museum to share your findings with the world.',
//                     type: 'ending',
//                 },
//                 // step32
//                 {
//                     stepText: `You find the treasure and help a community with the treasure's resources.`,
//                     type: 'ending',
//                 },
//                 // step33
//                 {
//                     stepText: 'You invent a new tool inspired by your journey.',
//                     type: 'ending',
//                 },
//                 // step34
//                 {
//                     stepText: 'You become a mentor for future adventurers.',
//                     type: 'ending',
//                 },
//                 // step35
//                 {
//                     stepText: 'You discover the power of true friendship and loyalty.',
//                     type: 'ending',
//                 },
//                 // step36
//                 {
//                     stepText: 'You discover a rare and precious artifact.',
//                     type: 'ending',
//                 },
//                 // step37
//                 {
//                     stepText: 'You become the guardian of a sacred site.',
//                     type: 'ending',
//                 },
//                 // step38
//                 {
//                     stepText: 'You retrieve the treasure and are celebrated as a hero in a grand festival.',
//                     type: 'ending',
//                 },
//                 // step39
//                 {
//                     stepText: 'You find a magical artifact that brings joy to many.',
//                     type: 'ending',
//                 },
//                 // step40
//                 {
//                     stepText: 'You become an ambassador for peace and harmony between realms.',
//                     type: 'ending',
//                 },
//             ]


//             const data = await addStory({
//                 variables: {
//                     title,
//                     // In the variables above, author is set to be context.user._id
//                     author,
//                     description,
//                     imageUrl,
//                     price,
//                     steps
//                 }
//             });
//             console.log(data);

//         } catch (err) {
//             console.error(err);
//         }
//     };

//     return (
//         <div className="create-story-container">
//             <div className="create-story-content">
//                 <aside className="create-story-sidebar">
//                     <h2 className="story-title">Title</h2>
//                     <ul className="story-options">
//                         <li className="story-option new">New</li>
//                         <li className="story-option edit">Edit</li>
//                         <li className="story-option rename">Rename</li>
//                         <li className="story-option test">Test</li>
//                         <li className="story-option build">Build</li>
//                         <li className="story-option delete">Delete</li>
//                     </ul>
//                 </aside>
//                 <main className="create-story-main">
//                     <div className="story-graph">
//                         <div className="node purple"></div>
//                         <div className="node blue">Chapter 1</div>
//                         <div className="node aqua">Chapter 1 Option 1</div>
//                         <div className="node pink">Chapter 1 Option 2</div>
//                     </div>
//                     <div className="story-editor">
//                         <header className="editor-header">
//                             Chapter 1 Option 2
//                             <button className="close-button">x</button>
//                         </header>
//                         <textarea className="editor-content">Chapter 2:</textarea>
//                     </div>
//                 </main>
//                 <div>
//                     <button className='submit-story-test-btn' onClick={handleStorySubmit}>Test Button</button>
//                 </div>

//             </div>
//         </div>
//     );
// }

// export default CreateStory;


// ----------------------------------------------------------

// import React, { useState } from 'react';
// import Modal from 'react-modal';
// import './CreateStory.css';
// import { useMutation } from '@apollo/client';
// import { ADD_STORY } from '../../utils/mutations';
// import Auth from '../../utils/auth';

// function CreateStory() {
//     const [isModalOpen, setIsModalOpen] = useState(false);
//     const [chapters, setChapters] = useState([]);
//     const [chapterIndexToEdit, setChapterIndexToEdit] = useState(null);
//     const [chapterTitle, setChapterTitle] = useState('');
//     const [chapterContent, setChapterContent] = useState('');
//     const [options, setOptions] = useState([{ choiceText: '', nextChapterIndex: null }]);

//     const openModal = () => {
//         setIsModalOpen(true);
//     };

//     const closeModal = () => {
//         setIsModalOpen(false);
//         setChapterIndexToEdit(null); // Reset chapter index after closing the modal
//     };

//     const handleTitleChange = (event) => {
//         setChapterTitle(event.target.value);
//     };

//     const handleContentChange = (event) => {
//         setChapterContent(event.target.value);
//     };

//     const handleOptionChange = (index, field, value) => {
//         const newOptions = [...options];
//         newOptions[index][field] = value;
//         setOptions(newOptions);
//     };

//     const addOption = () => {
//         setOptions([...options, { choiceText: '', nextChapterIndex: null }]);
//     };

//     const removeOption = (index) => {
//         const newOptions = [...options];
//         newOptions.splice(index, 1);
//         setOptions(newOptions);
//     };

//     const handleChapterSubmit = () => {
//         const newChapter = {
//             title: chapterTitle,
//             content: chapterContent
//         };

//         // If editing existing chapter
//         if (chapterIndexToEdit !== null) {
//             const updatedChapters = [...chapters];
//             updatedChapters[chapterIndexToEdit] = newChapter;
//             setChapters(updatedChapters);
//         } else {
//             // Adding new chapter
//             setChapters([...chapters, newChapter]);
//         }

//         closeModal();
//     };

//     const editChapter = (index) => {
//         setChapterTitle(chapters[index].title);
//         setChapterContent(chapters[index].content);
//         setChapterIndexToEdit(index);
//         setIsModalOpen(true);
//     };

//     const assembleTestStory = () => {
//         let testStory = '';
//         chapters.forEach((chapter) => {
//             testStory += `${chapter.title}\n${chapter.content}\n`;
//         });
//         alert(testStory);
//     };

//     return (
//         <div className="create-story-container">
//             <div className="create-story-content">
//                 <button onClick={openModal}>Add Chapter</button>
//                 {chapters.map((chapter, index) => (
//                     <div key={index}>
//                         <button onClick={() => editChapter(index)}>
//                             {chapter.title}
//                         </button>
//                     </div>
//                 ))}
//                 <button onClick={assembleTestStory}>Test Story</button>
//             </div>
//             <Modal isOpen={isModalOpen} onRequestClose={closeModal}>
//                 <h2>{chapterIndexToEdit !== null ? 'Edit Chapter' : 'Add New Chapter'}</h2>
//                 <form onSubmit={handleChapterSubmit}>
//                     <label htmlFor="chapterTitle">Title:</label>
//                     <input type="text" id="chapterTitle" value={chapterTitle} onChange={handleTitleChange} />
//                     <label htmlFor="chapterContent">Content:</label>
//                     <textarea id="chapterContent" value={chapterContent} onChange={handleContentChange} />
//                     {options.map((option, index) => (
//                         <div key={index}>
//                             <input
//                                 type="text"
//                                 value={option.choiceText}
//                                 onChange={(e) => handleOptionChange(index, 'choiceText', e.target.value)}
//                                 placeholder="Option Text"
//                             />
//                             <input
//                                 type="number"
//                                 value={option.nextChapterIndex}
//                                 onChange={(e) => handleOptionChange(index, 'nextChapterIndex', parseInt(e.target.value))}
//                                 placeholder="Next Chapter Index"
//                             />
//                             <button type="button" onClick={() => removeOption(index)}>Remove Option</button>
//                         </div>
//                     ))}
//                     <button type="button" onClick={addOption}>Add Option</button>
//                     <button type="submit">{chapterIndexToEdit !== null ? 'Save Changes' : 'Save Chapter'}</button>
//                 </form>
//             </Modal>
//         </div>
//     );
// }

// export default CreateStory;


// -------------------------------------------------------------

import React, { useState } from 'react';
import Modal from 'react-modal';
import './CreateStory.css';
import { useMutation } from '@apollo/client';
import { ADD_STORY } from '../../utils/mutations';
import Auth from '../../utils/auth';

function CreateStory() {
    const [isInitialModalOpen, setIsInitialModalOpen] = useState(true);
    const [isChapterModalOpen, setIsChapterModalOpen] = useState(false);
    const [isOptionModalOpen, setIsOptionModalOpen] = useState(false);

    const [storyName, setStoryName] = useState('');
    const [storyImage, setStoryImage] = useState('');
    
    const [chapters, setChapters] = useState([]);
    const [currentChapter, setCurrentChapter] = useState({title: '', content: '', options: [{ choiceText: '', nextChapterIndex: null }]});
    const [chapterIndexToEdit, setChapterIndexToEdit] = useState(null);

    const [optionToEditIndex, setOptionToEditIndex] = useState(null);

    const handleStoryNameChange = (event) => {
        setStoryName(event.target.value);
    };

    const handleStoryImageChange = (event) => {
        setStoryImage(event.target.files[0]);
    };

    const handleChapterChange = (field, value) => {
        setCurrentChapter(prevState => ({
            ...prevState,
            [field]: value
        }));
    };

    const handleOptionChange = (index, field, value) => {
        const newOptions = [...currentChapter.options];
        newOptions[index][field] = value;
        setCurrentChapter(prevState => ({
            ...prevState,
            options: newOptions
        }));
    };

    const addOption = () => {
        setCurrentChapter(prevState => ({
            ...prevState,
            options: [...prevState.options, { choiceText: '', nextChapterIndex: null }]
        }));
    };

    const removeOption = (index) => {
        const newOptions = [...currentChapter.options];
        newOptions.splice(index, 1);
        setCurrentChapter(prevState => ({
            ...prevState,
            options: newOptions
        }));
    };

    const handleInitialSubmit = (event) => {
        event.preventDefault();
        setIsInitialModalOpen(false);
        setIsChapterModalOpen(true);
    };

    const handleChapterSubmit = (event) => {
        event.preventDefault();
        
        const newChapter = {
            title: currentChapter.title,
            content: currentChapter.content,
            options: currentChapter.options
        };

        if (chapterIndexToEdit !== null) {
            const updatedChapters = [...chapters];
            updatedChapters[chapterIndexToEdit] = newChapter;
            setChapters(updatedChapters);
        } else {
            setChapters([...chapters, newChapter]);
        }

        setCurrentChapter({title: '', content: '', options: [{ choiceText: '', nextChapterIndex: null }]});
        setIsChapterModalOpen(false);
        setChapterIndexToEdit(null);
    };

    const handleOptionSubmit = (event) => {
        event.preventDefault();
        
        const newChapter = {
            title: currentChapter.title,
            content: currentChapter.content,
            options: currentChapter.options
        };

        const updatedChapters = [...chapters];
        updatedChapters[optionToEditIndex] = newChapter;
        setChapters(updatedChapters);

        setCurrentChapter({title: '', content: '', options: [{ choiceText: '', nextChapterIndex: null }]});
        setIsOptionModalOpen(false);
        setOptionToEditIndex(null);
    };

    const addNewChapterForOption = (optionIndex) => {
        const updatedOptions = [...currentChapter.options];
        const newChapterIndex = chapters.length;
        updatedOptions[optionIndex].nextChapterIndex = newChapterIndex;
        setCurrentChapter(prevState => ({
            ...prevState,
            options: updatedOptions
        }));
        setOptionToEditIndex(newChapterIndex);
        setIsOptionModalOpen(true);
    };

    return (
        <div className="create-story-container">
            <div className="create-story-content">
                <button onClick={() => setIsInitialModalOpen(true)}>Create Story</button>
                {chapters.map((chapter, index) => (
                    <div key={index}>
                        <button onClick={() => editChapter(index)}>
                            {chapter.title}
                        </button>
                        <div>
                            {chapter.options.map((option, optionIndex) => (
                                <div key={optionIndex}>
                                    <button onClick={() => addNewChapterForOption(optionIndex)}>
                                        {`Option ${optionIndex + 1}`}
                                    </button>
                                    {option.nextChapterIndex !== null && (
                                        <span> -> Chapter {option.nextChapterIndex}</span>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <Modal isOpen={isInitialModalOpen} onRequestClose={() => setIsInitialModalOpen(false)}>
                <h2>Start Your Story</h2>
                <form onSubmit={handleInitialSubmit}>
                    <label htmlFor="storyName">Story Name:</label>
                    <input type="text" id="storyName" value={storyName} onChange={handleStoryNameChange} required />
                    <label htmlFor="storyImage">Story Image:</label>
                    <input type="file" id="storyImage" onChange={handleStoryImageChange} required />
                    <button type="submit">Next</button>
                </form>
            </Modal>

            <Modal isOpen={isChapterModalOpen} onRequestClose={() => setIsChapterModalOpen(false)}>
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
                            <button type="button" onClick={() => removeOption(index)}>Remove Option</button>
                        </div>
                    ))}
                    <button type="button" onClick={addOption}>Add Option</button>
                    <button type="submit">{chapterIndexToEdit !== null ? 'Save Changes' : 'Save Chapter'}</button>
                </form>
            </Modal>

            <Modal isOpen={isOptionModalOpen} onRequestClose={() => setIsOptionModalOpen(false)}>
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
                            <button type="button" onClick={() => removeOption(index)}>Remove Option</button>
                        </div>
                    ))}
                    <button type="button" onClick={addOption}>Add Option</button>
                    <button type="submit">Save Chapter</button>
                </form>
            </Modal>
        </div>
    );
}

export default CreateStory;
