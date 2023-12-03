import { AiFillGithub } from "react-icons/ai";
import { useEffect, useState } from "react";

function MyProjects() {
  const [projects, seProjects] = useState([]);

  const fetchUserData = () => {
    fetch("https://api.github.com/users/kamilMalinowski/repos?direction=desc")
      .then((res) => res.json())
      .then((data) => {
        seProjects(data);
      });
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <div className="relative z-10">
      <section className="max-w-6xl mx-auto p-5 min-h-screen flex flex-col justify-center ">
        <h3 className="text-lg text-secondary  md:text-2xl text-center">
          Projects
        </h3>
        <ul className="fetch-list mt-5 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
          {projects &&
            projects.map(({ id, name, description, homepage }) => (
              <li
                key={id}
                id={id}
                className="flex flex-col gap-4 relative overflow-hidden w-full  z-10 max-w-64  bg-cover p-4 rounded-3xl mx-auto border-2 border-pink-500 bg-gray-900/50"
              >
                <h4 className="text-left text-pink-500 font-semibold">
                  {name}
                </h4>
                <AiFillGithub className="w-20 h-20 fill-pink-500 absolute -bottom-4 -right-4" />
                <p className="text-pink-300 ">
                  {!description ? true : description}
                </p>
                <div className="flex items-end h-full">
                  <a
                    className="border-2 text-white bg-pink-500 px-6 py-2 rounded-xl  hover:bg-gray-950"
                    href={homepage}
                    target="_blank"
                    rel="noreferrer nofollow"
                  >
                    View page
                  </a>
                </div>
              </li>
            ))}
        </ul>
      </section>
    </div>
  );
}

export default MyProjects;
