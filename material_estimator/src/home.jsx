// const heroImg = require("./assets/hero.png") 
import { useNavigate } from "react-router-dom"
import heroImg from "./assets/hero.png"

function Home(){
  const navigate = useNavigate();

  const sections = [
    {
      title: "Structural elements",
      items: [
        {
          label: "Beams and Columns",
          route: "/colandbeam",
          alt: "Beam and column",
        },
        {
          label: "Slabs",
          route: "/slab",
          alt: "Slab",
        },
      ],
    },
    {
      title: "Hydraulic structures",
      items: [
        {
          label: "Culverts",
          route: "/culvert",
          alt: "Culverts",
        },
        {
          label: "Line Drains",
          route: "/linedrain",
          alt: "Line Drains",
        },
      ],
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-extrabold mb-8 text-center text-gray-800">
        Concrete and Steel Reinforcement Calculation
      </h1>
      {sections.map((section) => (
        <div key={section.title} className="mb-10 bg-gray-100 rounded-xl shadow-sm py-6">
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">
            {section.title}
          </h2>
          <div className="flex flex-wrap justify-center gap-8">
            {section.items.map((item) => (
              <div
                key={item.label}
                className="w-64 bg-gray-200 rounded-2xl shadow hover:scale-101 hover:shadow-lg transition-transform cursor-pointer flex flex-col items-center p-4"
                onClick={() => navigate(item.route)}
              >
                <img
                  src={heroImg}
                  alt={item.alt}
                  className="w-32 h-32 object-contain mb-4"
                />
                <p className="text-lg font-medium text-center">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Home