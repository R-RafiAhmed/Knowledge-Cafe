import PropTypes from 'prop-types';
import { FaBookBookmark } from "react-icons/fa6";

const Blog = ({blog, handleBookmarks,  handleReadingTime}) => {
    
    const {title, cover, author, author_img, posted_date, reading_time, hashtags} = blog;

    return (
        <div className='mb-10 pb-10 border-b-2'>
            <img className='w-full mb-8' src={cover} alt="" />
            <div className='flex justify-between items-center'>
                <div className='flex items-center gap-5'>
                    <img className='w-14' src={author_img} alt="" />
                    <div>
                        <h4 className='text-2xl font-bold'>{author}</h4>
                        <p className='font-semibold text-gray-500'>{posted_date}</p>
                    </div>
                </div>
                <div className='flex items-center gap-1'>
                    <span className='text-2xl font-medium text-gray-500'>{reading_time} min read</span>
                    <button onClick={() => handleBookmarks(blog)} className='text-2xl text-gray-500 hover:text-blue-600 ease-in-out duration-300'><FaBookBookmark></FaBookBookmark></button>
                </div>
            </div>
            <h3 className='text-5xl font-bold my-5'>{title}</h3>
            <p>
                {hashtags.map((hashtag, idx) => <span key={idx}><a className='mr-2 text-gray-500' href="">#{hashtag}</a></span>)}
            </p>
            <button className='text-blue-600 underline text-xl font-semibold' onClick={() => handleReadingTime(reading_time)}>Mark as read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleBookmarks: PropTypes.func,
    handleReadingTime: PropTypes.func
}

export default Blog;