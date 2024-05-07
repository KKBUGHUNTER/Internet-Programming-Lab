import React, { useState, useEffect } from 'react';
import CookieHelper from '../../utils/CookieHelper';

const MainTestPage = () => {
    const [userDetails, setUserDetails] = useState();
    const [regno, setRegNo] = useState();
    const [questionSet, setQuestionSet] = useState({});
    const [selectedOptions, setSelectedOptions] = useState({});
    const [score, setScore] = useState(null);
    const [prevScore, setPrevScore] = useState();
    const Subject = new URLSearchParams(window.location.search).get('Subject');
    const [timer, setTimer] = useState(10 * 60); // 10 minutes timer

    useEffect(() => {
        const userId = CookieHelper.getUserId(); 
        setRegNo(userId);
        if (userId) {
            LoadUserData(userId);
            fetch(`http://localhost:7020/taketest?testName=${Subject}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setQuestionSet(data.questionSet || {});
                    const initialSelectedOptions = {};
                    data.questionSet?.Question?.forEach((question, index) => {
                        initialSelectedOptions[index] = '';
                    });
                    setSelectedOptions(initialSelectedOptions);
                })
                .catch(error => console.log(error));

            const countdown = setInterval(() => {
                setTimer(prevTimer => prevTimer - 1);
                if (timer <= 0) {
                    clearInterval(countdown);
                    handleSubmit();
                }
            }, 1000);
            
            return () => clearInterval(countdown);
        } else {
            window.location.href = '/';
        }
    }, [Subject]);

    const LoadUserData = (regNo) => {
        fetch(`http://localhost:7020/userDetails?userId=${regNo}`)
            .then(res => res.json())
            .then(data => {
                setUserDetails(data.username);
                setPrevScore(data.score);
            })
            .catch(error => console.log(error));
    };

    const handleOptionSelect = (index, option) => {
        setSelectedOptions(prevState => ({
            ...prevState,
            [index]: option,
        }));
    };

    const handleSubmit = () => {
        let correctAnswers = 0;
        const submittedOptions = {};
    
        questionSet?.Question?.forEach((question, index) => {
            const selectedOption = selectedOptions[index];
            submittedOptions[index] = selectedOption ? selectedOption : '';
            if (selectedOption === question.ans) {
                correctAnswers++;
            }
        });
        
        setScore(correctAnswers);
        UpdateUserScoreData(regno, correctAnswers, Subject);  
    };
    
    const UpdateUserScoreData = (regno, score, Subject) => {
        fetch(`http://localhost:7020/updateUserData?userId=${regno}&score=${score}&testName=${Subject}&prevScore=${prevScore}`)
            .then(res => res.json())
            .then(data => {
                setTimeout(() => {
                    window.location.href = '/profile';
                }, 5000);
            })
            .catch(error => console.log(error));
    };    

    return (
        <div style={{ margin: '20px auto', maxWidth: '800px', fontFamily: 'Arial, sans-serif', color: '#333', background: '#2E8B57', padding: '20px', borderRadius: '10px' }}>
            <h1 style={{ fontSize: '24px', textAlign: 'center', marginBottom: '20px', color: '#fff' }}>Time Remaining: {Math.floor(timer / 60)}:{timer % 60 < 10 ? '0' : ''}{timer % 60}</h1>
            <h2 style={{ fontSize: '20px', textAlign: 'center', marginBottom: '20px', color: '#fff' }}>{Subject}</h2>
            {questionSet && questionSet.Question && (
                <div>
                    <h3 style={{ fontSize: '18px', marginBottom: '10px', color: '#fff' }}>{questionSet.testName}</h3>
                    <p style={{ fontSize: '16px', marginBottom: '20px', color: '#fff' }}>{questionSet.testDescription}</p>
                    {questionSet.Question.map((question, index) => (
                        <div key={index} style={{ marginBottom: '20px', borderBottom: '1px solid #ccc', paddingBottom: '20px' }}>
                            <h3 style={{ fontSize: '16px', marginBottom: '10px', color: '#fff' }}>{question.Q}</h3>
                            <ul style={{ listStyleType: 'none', padding: 0 }}>
                                {['opt1', 'opt2', 'opt3', 'opt4'].map((optionKey, optionIndex) => (
                                    <li key={optionIndex} style={{ marginBottom: '10px' }}>
                                        <label style={{ display: 'flex', alignItems: 'center', fontSize: '14px', color: '#fff' }}>
                                            <input
                                                type="radio"
                                                name={`question-${index}`}
                                                value={question[optionKey]}
                                                checked={selectedOptions[index] === question[optionKey]}
                                                onChange={() => handleOptionSelect(index, question[optionKey])}
                                                style={{ marginRight: '10px', cursor: 'pointer' }}
                                            />
                                            {question[optionKey]}
                                        </label>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                    <button onClick={handleSubmit} style={{ backgroundColor: '#4CAF50', color: 'white', padding: '10px 20px', borderRadius: '5px', border: 'none', cursor: 'pointer', fontSize: '16px' }}>Submit</button>
                </div>
            )}
            {score !== null && (
                <div style={{ position: 'fixed', top: '0', left: '0', width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)', zIndex: '9999', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <div style={{ background: '#fff', padding: '20px', borderRadius: '10px', textAlign: 'center' }}>
                        <h2 style={{ color: '#333', marginBottom: '20px' }}>Your Score</h2>
                        <h1 style={{ color: '#007bff', fontSize: '48px', marginBottom: '20px' }}>{score}/{questionSet.Question.length}</h1>
                    </div>
                </div>
            )}
        </div>
    );
}

export default MainTestPage;
