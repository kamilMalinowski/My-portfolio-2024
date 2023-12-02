import { AiFillGithub } from "react-icons/ai";
function MyProjects() {
  return (
    <div className="relative z-10">
      <section className="max-w-6xl mx-auto p-5 min-h-screen flex flex-col justify-center ">
        <h3 className="text-lg text-secondary  md:text-2xl text-center">
          Projects
        </h3>
        <ul className="fetch-list mt-5 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
          {/* music */}
          <li className="hover:saturate-50 overflow-hidden w-full h-40 z-10 max-w-64  bg-cover p-4 rounded-xl mx-auto border-2 border-pink-500">
            <a
              className="flex flex-col gap-2 h-full mx-auto justify-between items-left relative"
              href="https://www.kamil--m.com/music"
            >
              <h4 className="text-left text-pink-500 font-semibold">
                vue-kamil--m-music
              </h4>
              <AiFillGithub className="w-20 h-20 fill-pink-500 absolute -bottom-8 -right-8" />
              <p className="text-pink-300 text-xs h-16">
                Official website of PL progressive metal band MLU
              </p>
              <p className="text-pink-500 text-xs ">status: work in progress</p>
            </a>
          </li>

          {/* shop */}
          <li className="hover:saturate-50 w-full h-40 z-10 max-w-64  bg-cover p-4 rounded-xl mx-auto overflow-hidden border-2 border-secondary">
            <a
              className="flex flex-col gap-2 h-full mx-auto justify-between items-left relative"
              href="https://www.kamil--m.com/shops"
            >
              <h4 className="text-left text-secondary">
                vanillajs-tongue-drums-shop
              </h4>
              <AiFillGithub className="w-20 h-20 fill-secondary absolute -bottom-8 -right-8" />
              <p className="text-green-100 text-xs h-16">
                My own concept of one page shop, created with vanilla
                JavaScript.
              </p>
              <p className="text-secondary text-xs">status: finished</p>
            </a>
          </li>

          {/* shop */}
          <li className="pointer-events-none opacity-50 hover:saturate-50 w-full h-40 z-10 max-w-64  bg-cover p-4 rounded-xl mx-auto overflow-hidden border-2 border-gray-400">
            <a
              className=" flex flex-col gap-2 h-full mx-auto justify-between items-left relative"
              href="https://www.kamil--m.com/shops"
            >
              <h4 className="text-left text-gray-400">
                react-tongue-drums-shop
              </h4>
              <AiFillGithub className="w-20 h-20 fill-gray-400 absolute -bottom-8 -right-8" />
              <p className="text-white text-xs h-16">
                My own concept of a one page store, created using vanilla
                JavaScript and rewritten as a React application.
              </p>
              <p className="text-gray-400 text-xs">status: import files</p>
            </a>
          </li>

          {/* movies */}
          <li className="hover:saturate-50 w-full h-40 z-10 max-w-64  bg-cover p-4 rounded-xl mx-auto border-2 border-blue-500 overflow-hidden">
            <a
              className="flex flex-col gap-2 h-full mx-auto justify-between items-left relative"
              href="https://www.kamil--m.com/movies/wwm"
            >
              <h4 className="text-left text-blue-500">vue-wwm</h4>
              <AiFillGithub className="w-20 h-20 fill-blue-500 absolute -bottom-8 -right-8" />
              <p className="text-blue-300 text-xs h-16 left">
                Ranking and Creator of world&apos;s worst movies of all time, using
                Vue.js framework.
              </p>
              <p className="text-blue-500 text-xs">status: testing</p>
            </a>
          </li>

          {/* notes */}
          <li className="hover:saturate-50 w-full h-40 z-10 max-w-64  bg-cover p-4 rounded-xl mx-auto overflow-hidden border-2 border-pink-500">
            <a
              className="flex flex-col gap-2 h-full mx-auto justify-between items-left relative "
              href="https://www.kamil--m.com/education/bootstrap-notes/"
            >
              <h4 className="text-left text-pink-500 font-semibold">
                bootstrap-notes
              </h4>
              <AiFillGithub className="w-20 h-20 fill-pink-500 absolute -bottom-8 -right-8" />
              <p className="text-pink-300 text-xs h-16 left">
                Notes created using Bootstrap 5. Topics to learn: Bootstrap 5,
                Jest, TypeScript, Node.js and others.
              </p>
              <p className="text-pink-500 text-xs">status: work in progress</p>
            </a>
          </li>

          {/* shop */}
          <li className="hover:saturate-50 w-full h-40 z-10 max-w-64  bg-cover p-4 rounded-xl mx-auto overflow-hidden border-2 border-secondary">
            <a
              className="flex flex-col gap-2 h-full mx-auto justify-between items-left relative"
              href="https://www.z-promo.com/pl/v4/powerhold/"
            >
              <h4 className="text-left text-secondary">vanillajs-v4-shop</h4>
              <AiFillGithub className="w-20 h-20 fill-secondary absolute -bottom-8 -right-8" />
              <p className="text-green-100 text-xs h-16 left">
                A one-page store created for the employer. Working with html,
                scss, javascript, splide js, php.
              </p>
              <p className="text-secondary text-xs">status: finished</p>
            </a>
          </li>

          {/* challenge */}
          <li className="hover:saturate-50 w-full h-40 z-10 max-w-64  p-2 rounded-xl mx-auto border-2 border-yellow-400 overflow-hidden">
            <a
              className=" bg-cover rounded-md p-2 flex flex-col gap-2 h-full mx-auto justify-between items-left relative"
              href="https://www.kamil--m.com/education/30js-challenge/"
            >
              <h4 className="text-left text-yellow-400">
                {" "}
                30-day-js-coding-challenge
              </h4>
              <AiFillGithub className="w-20 h-20 fill-yellow-400 absolute -bottom-6 -right-6" />
              <p className="text-yellow-200 text-xs h-16 left">
                I found a very cool Javascript challenge and decided to
                participate.
              </p>
              <p className="text-yellow-400 text-xs">start: 12.01.23</p>
            </a>
          </li>

          {/* portfolio */}
          <li className="hover:saturate-50 w-full h-40 z-10 max-w-64  bg-cover p-4 rounded-xl mx-auto border-2 border-secondary">
            <a
              className="flex flex-col gap-2 h-full mx-auto justify-between items-left relative"
              href="https://github.com/kamilMalinowski/react-portfolio-2023"
            >
              <h4 className="text-left text-pink-500 font-semibold">
                react-portfolio-2023
              </h4>
              <AiFillGithub className="w-6 h-6 fill-pink-500 absolute -top-2 -right-2" />
              <p className="text-secondary text-xs  left">
                Portfolio cointaining my most important projects. Based on React
                and Next.js.
              </p>
              <p className="text-secondary text-xs font-bold">
                <span className="text-pink-500 ">🔥update:</span> 12.01.2023
              </p>
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default MyProjects;
