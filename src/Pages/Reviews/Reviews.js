import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';
import ReviewRows from './ReviewRows';

const Reviews = () => {
    let [reviews, setReviews] = useState([]);
    let { user } = useContext(AuthContext);


    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [user?.email]);

    const handleDelete = (_id) =>{
        
        const proceed = window.confirm('Do you want to delete this Order?');
        if(proceed){
            fetch(`http://localhost:5000/reviews/${_id}`, {
                method: 'DELETE'
            }).then(res => res.json()).then(data => {
                console.log(data);
                if (data.deleteCount > 0) {
                    alert('Delete Succsesfuly')
                    const remaining = reviews.filter(rw => rw._id !== _id)
                    setReviews(remaining)
                }
            })
        }
    }



    return (
        <div className='grid grid-cols-2 gap-5 mx-5 my-10'>
                {
                reviews.map(review =>
                    <ReviewRows
                        key={review._id}
                        review={review}
                        handleDelete={handleDelete}
                    >
                    </ReviewRows>)
            }
            
            

        </div>
    );
};

export default Reviews;