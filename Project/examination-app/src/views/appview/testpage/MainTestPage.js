import { useState, useEffect } from 'react';
import CookieHelper from '../../utils/CookieHelper';

function MainTestPage(){
    const [userDetails, setUserDetails] = useState();
    const [questionSet, setQuestionSet] = useState(null);
    const Subject = new URLSearchParams(window.location.search).get('Subject');

    useEffect(() => {
        const userId = CookieHelper.getUserId(); 
        if (userId) {
            LoadUserData(userId);
            fetch(`http://localhost:7020/taketest?testName=${Subject}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setQuestionSet(data.questionSet);
                })
                .catch(error => console.log(error))
        }
        else{
          window.location.href = '/';
        }
      }, [Subject]);

    function LoadUserData(regNo){
        fetch(`http://localhost:7020/userDetails?userId=${regNo}`)
            .then(res => res.json())
            .then(data => {
                setUserDetails(data.username);
            })
            .catch(error => console.log(error))
    }

    return (
        <div style={{ margin: '20px auto', maxWidth: '800px' }}>
            <h1>Welcome, {userDetails}</h1>
            <h2>{Subject}</h2>
            {questionSet && (
                <div>
                    <h3>{questionSet.testName}</h3>
                    <p>{questionSet.testDescription}</p>
                    {questionSet.Question.map((question, index) => (
                        <div key={index} style={{ marginBottom: '20px' }}>
                            <h3>{question.Q}</h3>
                            <ul style={{ listStyleType: 'none', padding: 0 }}>
                                <li>{question.opt1}</li>
                                <li>{question.opt2}</li>
                                <li>{question.opt3}</li>
                                <li>{question.opt4}</li>
                            </ul>
                            <p>Correct Answer: {question.ans}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default MainTestPage;
