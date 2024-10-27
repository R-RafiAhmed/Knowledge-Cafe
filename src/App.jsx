import './App.css'
import Header from './component/Header/Header'
import Blogs from './component/Blogs/Blogs'
import Bookmarks from './component/Bookmarks/Bookmarks'
import { useState } from 'react'

function App() {
  
  const [bookMarks, setBookMarks] = useState([]);
  const handleBookmarks = blog => {
    const newBookmarks = [...bookMarks, blog];
    setBookMarks(newBookmarks);
  }

  return (
    <>
      <Header></Header>
      <main className='md:flex container m-auto gap-5'>
        <Blogs handleBookmarks={handleBookmarks}></Blogs>
        <Bookmarks bookMarks={bookMarks}></Bookmarks>
      </main>
    </>
  )
}

export default App
