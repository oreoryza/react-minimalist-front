import React, {useState} from "react";

const BlogList = ({slice, button="hidden"}) => {
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      title: "Blog 1",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      img: "https://letsenhance.io/static/03620c83508fc72c6d2b218c7e304ba5/11499/UpscalerAfter.jpg",
      author: "John Doe",
      date: "2021-01-01",
    },
    {
      id: 2,
      title: "Blog 2",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      img: "https://letsenhance.io/static/03620c83508fc72c6d2b218c7e304ba5/11499/UpscalerAfter.jpg",
      author: "John Doe",
      date: "2021-01-01",
    },
    {
      id: 3,
      title: "Blog 3",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      img: "https://letsenhance.io/static/03620c83508fc72c6d2b218c7e304ba5/11499/UpscalerAfter.jpg",
      author: "John Doe",
      date: "2021-01-01",
    },
    {
      id: 4,
      title: "Blog 4",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Quisquam, voluptatum.",
      img: "https://letsenhance.io/static/03620c83508fc72c6d2b218c7e304ba5/11499/UpscalerAfter.jpg",
      author: "John Doe",
      date: "2021-01-01",
    },
    {
      id: 5,
      title: "Blog 5",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Quisquam, voluptatum.",
      img: "https://letsenhance.io/static/03620c83508fc72c6d2b218c7e304ba5/11499/UpscalerAfter.jpg",
      author: "John Doe",
      date: "2021-01-01",
    },
    {
      id: 6,
      title: "Blog 6",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Quisquam, voluptatum.",
      img: "https://letsenhance.io/static/03620c83508fc72c6d2b218c7e304ba5/11499/UpscalerAfter.jpg",
      author: "John Doe",
      date: "2021-01-01",
    },
  ]);

  const blogsSlice = blogs.slice(0, slice);

  return (
    <>
    <div className="grid grid-cols-3 gap-10">
        {blogsSlice.map((blog) => (
            <div key={blog.id} className="bg-white rounded-lg shadow-md p-4">
                <div className="h-72">
                    <img src={blog.img} alt={blog.title} className="w-full h-full object-cover" />
                </div>
                <div className="flex flex-col gap-3 py-4">
                    <h2 className="text-2xl font-bold">{blog.title}</h2>
                    <p className="text-black/[.5]">{blog.body}</p>
                    <a href="" className="font-bold">READ MORE <i class="bi bi-arrow-right ml-2"></i></a>
                </div>
            </div>
        ))}
    </div>
    <div className={`${button} justify-center w-full mt-16`}>
    <button className="py-4 px-12 bg-black text-white font-bold">Load More</button>
    </div>
    </>
  );
};

export default BlogList;
