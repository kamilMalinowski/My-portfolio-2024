import { DiHtml5, DiCss3, DiJavascript } from "react-icons/di";
import { FaVuejs, FaReact } from "react-icons/fa";
import {
  SiTailwindcss,
  // SiBootstrap,
  // SiMysql,
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiFigma,
  SiAdobexd,
  // SiVisualstudiocode,
} from "react-icons/si";

function MySkills() {
  return (
    <div className="bg-fixed  bg-cover relative z-10 ">
      <section className="max-w-6xl mx-auto p-5  min-h-screen grid place-content-center ">
        <h3 className="text-lg text-secondary text-center md:text-2xl">
          My skills & tools
        </h3>
        <ul className="grid justify-center items-center mt-4 mb-8 gap-12 grid-cols-3 md:grid-cols-5">
          <li>
            <DiHtml5 className="w-12 h-12 md:w-16 md:h-16 fill-secondary mx-auto lg:w-20 lg:h-20" />
          </li>
          <li>
            <DiCss3 className="w-12 h-12 md:w-16 md:h-16 fill-secondary mx-auto lg:w-20 lg:h-20" />
          </li>
          <li>
            <DiJavascript className="w-12 h-12 md:w-16 md:h-16 fill-secondary mx-auto lg:w-20 lg:h-20" />
          </li>
          <li>
            <FaVuejs className="w-12 h-12 md:w-16 md:h-16 fill-secondary mx-auto lg:w-20 lg:h-20" />
          </li>
          <li>
            <FaReact className="w-12 h-12 md:w-16 md:h-16 fill-secondary mx-auto lg:w-20 lg:h-20" />
          </li>
      
          <li>
            <SiTailwindcss className="w-12 h-12 md:w-16 md:h-16 fill-secondary mx-auto lg:w-20 lg:h-20" />
          </li>       
   
       

          <li className="max-w-max">
            <SiAdobeillustrator className="w-12 h-12 md:w-16 md:h-16 fill-secondary mx-auto lg:w-20 lg:h-20" />
          </li>
          <li className="max-w-max">
            <SiAdobephotoshop className="w-12 h-12 md:w-16 md:h-16 fill-secondary mx-auto lg:w-20 lg:h-20" />
          </li>
          <li className="max-w-max">
            <SiFigma className="w-12 h-12 md:w-16 md:h-16 fill-secondary mx-auto lg:w-20 lg:h-20" />
          </li>
          <li className="max-w-max">
            <SiAdobexd className="w-12 h-12 md:w-16 md:h-16 fill-secondary mx-auto lg:w-20 lg:h-20" />
          </li>
        </ul>
      </section>
    </div>
  );
}

export default MySkills;
