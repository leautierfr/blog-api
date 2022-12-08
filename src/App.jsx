function Header() {
  return (
    <div>
      <header>
        <a href="#">Home</a> | <a href="#posts-index">All posts</a> | <a href="#posts-new">New post</a> |
      </header>
    </div>
  );
}

function Footer() {
  return (
    <div>
      <h4>Copyright 2022</h4>
    </div>
  );
}

function PostsIndex() {
  return (
    <div id="posts-index">
      <h1>All posts</h1>
      <div className="posts">
        <h2>Hello world</h2>
        <h3>Life is unfair</h3>
        <img src="https://www.hotbeautyhealth.com/wp-content/uploads/2016/03/blog-post-ideas.jpg" alt="" />
        <h2>He's gone off the rails...</h2>
        <h3>You're the only man for this job</h3>
        <h4>"Leave him to me"</h4>
        <img src="http://rawartistsagency.com/wp-content/uploads/2018/02/Lil-wayne.jpg" alt="" />
      </div>
    </div>
  );
}

function PostsNew() {
  return (
    <div id="posts-new">
      <h1>New post</h1>
      <form>
        <div>
          title: <input type="text" />
        </div>
        <div>
          body: <input type="text" />
        </div>
        <div>
          image: <input type="text" />
        </div>
      </form>
    </div>
  );
}

function Home() {
  return (
    <div>
      <PostsNew />
      <PostsIndex />
    </div>
  );
}
function App() {
  return (
    <div>
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
