import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({bookMarks}) => {
    
    return (
        <div className="md:w-1/3 bg-slate-200 text-center space-y-4 p-7 rounded-xl">
            <h2 className="text-2xl font-bold">Bookmarked Blogs : {bookMarks.length}</h2>
            {
                bookMarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

Bookmarks.propTypes = {
    bookMarks: PropTypes.array
}
export default Bookmarks;