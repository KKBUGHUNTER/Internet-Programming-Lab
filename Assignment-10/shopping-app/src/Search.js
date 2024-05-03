import React from 'react';
 
function Search({ searchCourse, courseSearchUserFunction }) {
    return (
        <header className="App-header">
            <h1> KkBugHunter Shopping App</h1>
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Search for New Language..."
                    value={searchCourse}
                    onChange={courseSearchUserFunction}
                />
            </div>
        </header>
    );
}
 
export default Search;