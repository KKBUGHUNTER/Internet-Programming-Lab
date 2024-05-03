import React from 'react';

function Show({ filterCourseFunction, addCourseToCartFunction }) {
    // Split filtered courses into rows with three products each
    const rows = [];
    for (let i = 0; i < filterCourseFunction.length; i += 3) {
        const row = filterCourseFunction.slice(i, i + 3);
        rows.push(row);
    }

    return (
        <div className="product-list">
            {rows.map((row, rowIndex) => (
                <div className="row" key={rowIndex}>
                    {row.map(product => (
                        <div className="product" key={product.id}>
                            <img src={product.image} alt={product.name} />
                            <h2>{product.name}</h2>
                            <p>Price: ₹{product.price}</p>
                            <button
                                className="add-to-cart-button"
                                onClick={() => addCourseToCartFunction(product)}
                            >
                                Add to Shopping Cart
                            </button>
                        </div>
                    ))}
                    {/* Add empty divs to ensure each row contains three products */}
                    {[...Array(3 - row.length)].map((_, index) => (
                        <div className="empty-product" key={index}></div>
                    ))}
                </div>
            ))}
        </div>
    );
}

export default Show;
