import portrait from "../assets/me.png";

function AboutMe() {
  return (
    <div className=" bg-cover relative z-10 bg-fixed">
      <section className="max-w-6xl mx-auto p-5 min-h-screen grid place-content-center md:flex md:flex-row md:items-center">
        <div className="basis-full text-center md:text-left">
          <h2 className="font-bold  text-4xl py-3 md:text-6xl tracking-widest">
            Kamil Malinowski
          </h2>
          <h3 className="text-lg text-secondary md:text-2xl">
            Frontend Developer
          </h3>
          <p className="py-4  opacity-80 leading-6">
            I have almost <span className="text-secondary">3 years</span> of
            experience in frontend, which I gained in the e-commerce industry
            while developing online shops. I am constantly expanding my
            knowledge and skills, improving my technology stack. In addition to
            frontend, I also feel good at{" "}
            <span className="text-secondary">computer graphics and UX/UI</span>
            {" "}design (good knowledge of the Adobe suite - PS, AI, XD and{" "}
            <span className="text-secondary">Figma</span>), which allow me to
            understand better the aesthetic and usability aspects of websites
            and applications.
          </p>
        </div>

        <div className="flex items-center justify-center gap-2 md:gap-4 md:flex-col md:basis-full">
          <img
            width={80}
            height={110}
            className="w-20 border-secondary border rounded-2xl shadow-lg h-auto "
            src={portrait}
            alt="Kamil Malinowski portrait"
          />
          <img
            width={144}
            height={200}
            className="w-36 md:w-80 rounded-3xl h-auto shadow-lg border  border-secondary"
            src={portrait}
            alt="Kamil Malinowski portrait"
          />
          <img
            width={80}
            height={110}
            className="w-20 border-secondary border rounded-2xl h-auto shadow-lg "
            src={portrait}
            alt="Kamil Malinowski portrait"
          />
        </div>
      </section>
    </div>
  );
}

export default AboutMe;
