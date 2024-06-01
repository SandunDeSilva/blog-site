import Post from "../post/Post";
import "./posts.css";

export default function Posts() {
  return (
    <div className="posts">
      <Post
        img={`${process.env.PUBLIC_URL}/assets/springboot.png`}
        title="Spring Boot"
        url="/post/springboot"
        description="Spring Boot is a framework that makes it easier to create standalone,
          production-ready applications with the Spring framework. It simplifies
          developing Spring applications with default settings and automatic
          configurations."
      />
      <Post
        img={`${process.env.PUBLIC_URL}/assets/django.jpg`}
        title="Django"
        url="/post/django"
        description="Django is a high-level web framework for building web applications using Python. It promotes rapid development and clean, pragmatic design, offering developers a robust toolkit to create web applications efficiently."
      />

      {/* <Post
        img="https://images.pexels.com/photos/6711867/pexels-photo-6711867.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        title="Post 3"
        url=""
        description=""
      />
      <Post
        img="https://images.pexels.com/photos/5490778/pexels-photo-5490778.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        title="Post 4"
        url=""
        description=""
      />
      <Post
        img="https://images.pexels.com/photos/4916559/pexels-photo-4916559.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        title="Post 5"
        url=""
        description=""
      /> */}
    </div>
  );
}
