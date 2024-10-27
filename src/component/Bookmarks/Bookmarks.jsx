import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({bookMarks, readingTime}) => {
    
    return (
        <div className="md:w-1/3">
            <div className="text-center bg-blue-100 p-5 rounded-xl mb-6">
                <h2 className="text-2xl font-bold text-blue-600">Spent time on read : {readingTime} min</h2>
            </div>
            <div className=" bg-slate-200 text-center space-y-4 p-7 rounded-xl">
                <h2 className="text-2xl font-bold">Bookmarked Blogs : {bookMarks.length}</h2>
                {
                    bookMarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
                }
            </div>
        </div>
    );
};

Bookmarks.propTypes = {
    bookMarks: PropTypes.array,
    readingTime: PropTypes.number
}
export default Bookmarks;