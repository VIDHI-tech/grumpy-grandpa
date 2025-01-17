const Cranky = () => {
  const contributions = [
    {
      id: 1,
      title: "Transaction Contributions:",
      description:
        "1% of all buys and 1% of all sells automatically contribute to the savings jar. These contributions apply to all transactions, regardless of whether the tokens are staked.",
    },
    {
      id: 2,
      title: "Staking Requirement:",
      description:
        "Minimum stake: $1,200 worth of Grumpy Grandpa Tokens. Rewards are time-weighted, factoring in both the amount staked and the length of time staked.",
    },
    {
      id: 3,
      title: "Early Unstaking Fee:",
      description:
        "5% fee applies to users who withdraw their staked tokens before the 1-year staking period ends. Fee revenue is added directly to the savings jar, increasing the rewards pool for other stakers.",
    },
    {
      id: 4,
      title: "Reward Distribution:",
      description:
        "Rewards are calculated at the end of the staking period and distributed proportionally based on the time-weighted staking formula.",
    },
  ];
  return (
    <>
      <section
        className="bg-cover bg-center h-screen relative text-white"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-fill"
        >
          <source src="/assets/cranky.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="uppercase absolute w-full text-white">
          <h1 className="text-lg md:text-2xl xl:text-4xl comical lg:text-start pt-20 lg:p-20 text-center">
            Cranky Credits
          </h1>
        </div>
        <div className="hidden lg:flex absolute inset-0 items-end justify-end">
          <div className="p-6 max-w-4xl jumbojim text-center lg:text-right items-end flex flex-col">
            {contributions.map((item) => (
              <div className="pb-6 xl:pb-10 text-base lg:text-xl">
                <p className="mb-2">
                  {item.id} . {item.title}
                </p>
                <p className="">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="lg:hidden bg-[#14093E] text-white p-6 text-center">
        <div className="max-w-4xl jumbojim space-y-6">
          {contributions.map((item) => (
            <div key={item.id} className="pb-6">
              <p className="mb-2">
                {item.id} . {item.title}
              </p>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Cranky;
