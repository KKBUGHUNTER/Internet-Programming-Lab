import React, { useState } from 'react';
import './App.css';
import Search from './Search';
import Show from './Show';
import Cart from './Cart';

function App() {
    const [courses, setCourses] = useState([
        {
            id: 1,
            name: 'C Programmming',
            price: 1999,
            image: 'https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png'
        },
        {
            id: 2,
            name: 'Python Programming',
            price: 2999,
            image: 'https://w7.pngwing.com/pngs/234/329/png-transparent-python-logo-thumbnail.png'
        },
        {
            id: 3,
            name: 'C++ Programming',
            price: 3623,
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1822px-ISO_C%2B%2B_Logo.svg.png'
        },
        {
            id: 4,
            name: 'C# Programming',
            price: 4872,
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Logo_C_sharp.svg/1200px-Logo_C_sharp.svg.png'
        },
        {
            id: 5,
            name: 'JAVA Programming',
            price: 10000,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyDaCftzpsaW2UTyXfRpo-Gxrsg8gmgR5MlseIzwnSm9qj5SFDHThBLV1gTRh4MFL4M8Q&usqp=CAU'
        },
    ]);

    const [cartCourses, setCartCourses] = useState([]);
    const [searchCourse, setSearchCourse] = useState('');

    const addCourseToCartFunction = (SamsungProduct) => {
        const alreadyCourses = cartCourses.find(item => item.product.id === SamsungProduct.id);
        if (alreadyCourses) {
            const latestCartUpdate = cartCourses.map(item =>
                item.product.id === SamsungProduct.id ? { ...item, quantity: item.quantity + 1 } : item
            );
            setCartCourses(latestCartUpdate);
        } else {
            setCartCourses([...cartCourses, { product: SamsungProduct, quantity: 1 }]);
        }
    };

    const deleteCourseFromCartFunction = (SamsungProduct) => {
        const updatedCart = cartCourses.filter(item => item.product.id !== SamsungProduct.id);
        setCartCourses(updatedCart);
    };

    const totalAmountCalculationFunction = () => {
        return cartCourses.reduce((total, item) => total + item.product.price * item.quantity, 0);
    };

    const courseSearchUserFunction = (event) => {
        setSearchCourse(event.target.value);
    };

    const filterCourseFunction = courses.filter((course) => {
        const searchQuery = searchCourse.toLowerCase();
        const courseName = course.name.toLowerCase();
        const isMatch = courseName.includes(searchQuery);
        console.log(`Search query: ${searchQuery}, Course name: ${courseName}, Match: ${isMatch}`);
        return isMatch;
    });
    

    return (
        <div className="App">
            <Search searchCourse={searchCourse} courseSearchUserFunction={courseSearchUserFunction} />
            <main className="App-main">
                <Show
                    courses={courses}
                    filterCourseFunction={filterCourseFunction}
                    addCourseToCartFunction={addCourseToCartFunction}
                />

                <Cart
                    cartCourses={cartCourses}
                    deleteCourseFromCartFunction={deleteCourseFromCartFunction}
                    totalAmountCalculationFunction={totalAmountCalculationFunction}
                    setCartCourses={setCartCourses}
                />
            </main>
        </div>
    );
}

export default App;
