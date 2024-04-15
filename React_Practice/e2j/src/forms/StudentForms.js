import './StudentForms.css';

function StudentForms() {

    return (
        <div className="master">
            <div className='main'>
                <div className='field-heading' style={{"margin-top": "0px"}}>
                    <h1>SSN - RESEARCH INTERNSHIP FOR STUDENTS OF OTHER INSTITUTIONS .🌼🌱</h1>
                    <p>Students pursuing UG/PG degree in any academic institution, willing to carry out Summer Internship at SSN College of Engineering, Chennai in the fields of Bio medical Engineering, Civil Engineering, Chemical Engineering, Computer Science and Engineering, Electrical and Electronics Engineering, Electronics and Communication Engineering, Mechanical Engineering, Information Technology, Mathematics, Physics, Chemistry, English and Management may apply for the Internship Program.</p>
                    
                </div>

                <div className='field'>
                    <p><label>Name</label> </p>
                    <div class="input-wrapper">
                       <input type="text" placeholder="Enter your name." id="name"/>
                    </div>
                </div>

                <div className='field'>
                    <p><label>Year & Section</label><span> eg:3rd, A</span></p>
                    <div class="input-wrapper">
                       <input type="text" placeholder="Enter your Year & Section." id="year_and_section"/>
                    </div>
                </div>

                <div className='field'>
                    <p><label>CGPA</label></p>
                    <div class="input-wrapper">
                       <input type="text" placeholder="Enter your CGPA." id="cgpa"/>
                    </div>
                </div>

                <div className='field'>
                    <p><label>Program</label></p>
                    <div class="input-wrapper">
                       <input type="radio" name="prog" value="UG" /><adress>UG</adress>
                       <input type="radio" name="prog" value="PG" /><adress>PG</adress>
                    </div>
                </div>

                <div className='field'>
                    <p><label>Company Name</label></p>
                    <div class="input-wrapper">
                       <input type="text" placeholder="Enter your Company name." id="company name"/>
                    </div>
                </div>

                <div className='footer-field'><button type="submit">Submit</button></div>
            </div>
        </div>
    );
}

export default StudentForms;