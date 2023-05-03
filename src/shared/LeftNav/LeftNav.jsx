import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNav = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(error => console.error(error))
    }, [])
    return (
        <div>
            <h4>All category</h4>
            <h4 className='bg-light text-secondary ps-4 py-2'>National news</h4>
            <div className='ps-4 pt-2'>

                {
                    categories.map(category => <p key={category.id}>

                        <Link to={`/category/${category.id}`} className='text-decoration-none text-secondary'>{category.name}</Link></p>)
                }
            </div>
        </div>
    );
};

export default LeftNav;