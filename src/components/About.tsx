const About = () => {
  return (
    <>
      <section
        style={{ backgroundImage: "url('/assets/aboutbg.png')" }}
        className="bg-cover bg-center h-screen overflow-hidden -my-4 relative"
      >
        <span className="absolute w-full h-full bg-center bg-cover">
          <img
            src="/assets/computer.gif"
            alt="Grumpy Grandpa Coin"
            className="w-full h-full "
          />
        </span>
        <div className="uppercase absolute w-full md:w-2/3 lg:w-1/2  xs:p-10 md:pr-20 flex flex-col items-center md:items-start md:top-1/2 xl:top-1/3 md:right-0">
          <h1 className="text-lg md:text-5xl lg:text-6xl text-[#FF1D0F] comical">About the coin</h1>
          <p className="text-white text-sm md:text-lg lg:text-3xl jumbojim">
            Grumpy Old Man Coin (GOMC) isn’t just another meme coin—it’s a
            rebellion, a complaint, and a force of sheer stubbornness. GOMC is
            built to shake up the meme coin world, mixing dry humor with sharp
            cryptocurrency innovation. With the grouchy determination of the
            Grumpy Old Man leading the charge, GOMC is set to outsmart the
            competition and claim its rightful spot at the top—grumbling all the
            way there!
          </p>
        </div>
      </section>
    </>
  );
};

export default About;
