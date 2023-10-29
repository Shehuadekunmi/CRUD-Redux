
import './App.css'
import PostsList from "./features/POSTS/PosttList";
import AddPostForm from "./features/POSTS/PostForm";
import SinglePostPage from "./features/POSTS/SinglePost";
import EditPostForm from "./features/POSTS/EditPost";
import Layout from "./components/Layout";
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
      <Routes>
      <Route path="/" element={<Layout />}>

        <Route index element={<PostsList />} />

        <Route path="post">
          <Route index element={<AddPostForm />} />
          <Route path=":postId" element={<SinglePostPage />} />
          <Route path="edit/:postId" element={<EditPostForm />} />
        </Route>

      </Route>
    </Routes>
    </>
  )
}

export default App
