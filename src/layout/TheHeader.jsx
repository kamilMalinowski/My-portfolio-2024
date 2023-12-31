import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
function TheHeader() {
  return (
    <header className="bg-gray-900/50 shadow-lg relative z-10">
      <nav className="max-w-6xl mx-auto p-5">
        <ul className="flex justify-between items-center">
          <li>
            <a
              className="flex items-center saturate-100 gap-2 hover:saturate-50"
              href="https://my-portfolio-2024.netlify.app/"
            >
              <svg
                className="w-8 h-8 "
                width="37"
                height="35"
                viewBox="0 0 37 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M36 1.50301C36 1.05755 35.4614 0.834473 35.1465 1.14945L19.5607 16.7352C18.9749 17.321 18.0251 17.321 17.4393 16.7352L1.85355 1.14946C1.53857 0.834473 1 1.05756 1 1.50301V27.5888C1 30.6264 3.46243 32.5889 6.5 32.5889H30.5C33.5376 32.5889 36 30.6264 36 27.5888V1.50301ZM34.4393 0.442347C35.3843 -0.502603 37 0.166655 37 1.50301V27.5888C37 31.1786 34.0899 34.0888 30.5 34.0888H6.5C2.91015 34.0888 0 31.1786 0 27.5888V1.50301C0 0.166653 1.61571 -0.502599 2.56066 0.442349L18.1464 16.0281C18.3417 16.2234 18.6583 16.2234 18.8536 16.0281L34.4393 0.442347Z"
                  fill="#A47DE4"
                />
              </svg>

              <h1 className="text-primary font-medium md:block hidden">
                Kamil Malinowski
              </h1>
            </a>
          </li>
          <li>
            <div className="flex gap-2">
              <a
                className="bg-gradient-to-br from-primary to-purple-900 rounded-lg w-8 h-8 grid place-content-center hover:bg-gradient-to-br hover:from-purple-900 hover:to-primary"
                href="https://github.com/kamilMalinowski"
              >
                <AiFillGithub className="w-6 h-6 fill-slate-200" />
              </a>
              <a
                className="bg-gradient-to-br from-primary to-purple-900 rounded-lg w-8 h-8 grid place-content-center hover:bg-gradient-to-br hover:from-purple-900 hover:to-primary"
                href="https://www.linkedin.com/in/kamil-malinowski-4034601b5/"
              >
                <AiFillLinkedin className="w-6 h-6 fill-slate-200 " />
              </a>
              <a
                href="../assets/kamil-malinowski__cv--05.01.2023.pdf"
                className="h-8 bg-gradient-to-br from-primary to-purple-900 text-slate-200  rounded-lg grid place-content-center px-4 hover:bg-gradient-to-br hover:from-purple-900 hover:to-primary hover:text-slate-100"
              >
                Resume
              </a>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default TheHeader;
