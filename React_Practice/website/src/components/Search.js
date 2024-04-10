import React from "react";

function Search({ getName }) {
    return (
        <div>
            <input type="text" placeholder="Enter the product Name.." onInput={getName} />
        </div>
    );
}

export default Search;
