import { Label, Pie, PieChart } from "recharts";

export default function Tokenomics() {
  const chartData = [
    { allocation: "Public Sale", percentage: 30, fill: "rgba(169, 169, 169, 0.9)" },
    { allocation: "Marketing", percentage: 10, fill: "rgba(169, 169, 169, 0.9)" },
    { allocation: "Liquidity Pool", percentage: 25, fill: "rgba(169, 169, 169, 0.9)" },
    { allocation: "CEX Listing", percentage: 15, fill: "rgba(169, 169, 169, 0.9)" },
    { allocation: "Airdrop Funds", percentage: 5, fill: "rgba(169, 169, 169, 0.9)" },
    { allocation: "Team & Advisors", percentage: 15, fill: "rgba(169, 169, 169, 0.9)" },
  ];

  return (
    <section className="relative h-screen bg-cover bg-center items-center">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/assets/tokenomics.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <h1
        className="text-lg md:text-2xl xl:text-4xl font-bold text-[#FF1D0F] comical text-center w-full z-10 absolute py-10 xl:py-20"
        style={{ textShadow: "7px 7px 3px rgba(0, 0, 0, 0.9)" }}
      >
        TOKENOMICS
      </h1>
      <div className="flex flex-col lg:flex-row absolute items-center justify-around lg:justify-between w-full h-full px-10 lg:px-0 xl:px-10">
        <span className="flex items-center justify-center w-full lg:w-1/2 h-72">
          <PieChart width={600} height={400}>
            <Pie
              data={chartData}
              dataKey="percentage"
              nameKey="allocation"
              cx="50%"
              cy="50%"
              innerRadius={100}
              outerRadius={150}
              strokeWidth={0}
              fill="#8884d8"
              label={({
                cx = 0,
                cy = 0,
                midAngle,
                outerRadius,
                allocation,
                percentage,
              }) => {
                const RADIAN = Math.PI / 180;
                const radius = outerRadius * 1.2;
                const x = cx + radius * Math.cos(-midAngle * RADIAN);
                const y = cy + radius * Math.sin(-midAngle * RADIAN);

                return (
                  <g>
                    {/* Connector dot */}
                    <circle
                      cx={cx + (outerRadius + 15) * Math.cos(-midAngle * RADIAN)}
                      cy={cy + (outerRadius + 15) * Math.sin(-midAngle * RADIAN)}
                      r={2}
                      fill="#666"
                    />
                    {/* Label text */}
                    <text
                      x={x}
                      y={y}
                      fill="white"
                      textAnchor={x > cx ? "start" : "end"}
                      dominantBaseline="middle"
                      className="text-sm"
                    >
                      {allocation}
                    </text>
                    <text
                      x={x}
                      y={y + 20}
                      fill="white"
                      textAnchor={x > cx ? "start" : "end"}
                      dominantBaseline="middle"
                      className="text-sm font-bold"
                    >
                      {percentage}%
                    </text>
                  </g>
                );
              }}
            >
<Label
  content={({ viewBox }) => {
    const { cx = 0, cy = 0 } = viewBox as { cx: number; cy: number };
    return (
      <text
        x={cx}
        y={cy}
        textAnchor="middle"
        dominantBaseline="middle"
        className="fill-white"
      >
        <tspan
          x={cx}
          y={cy - 10}
          className="text-4xl font-bold"
        >
          500 M
        </tspan>
        <tspan
          x={cx}
          y={cy + 20}
          className="text-xl"
        >
          Total Supply
        </tspan>
      </text>
    );
  }}
/>

            </Pie>
          </PieChart>
        </span>
        <p className="text-white text-center lg:text-end z-10 jumbojim text-sm lg:text-lg xl:text-2xl pr-5 max-w-2xl">
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
  );
}
