import { useState, useMemo } from "react";
import DimensionsInput from "./dimensionsInput";
import BarSizeInput from "./barSizeInput";
import MaterialsInput from "./materialsInput";

function Col_BeamDetails() {
  const [length, setLength] = useState("");
  const [breadth, setBreadth] = useState("");
  const [depth, setDepth] = useState("");
  const [mainBar, setMainBar] = useState(0);
  const [mainBarNo, setMainBarNo] = useState("");
  const [link, setLink] = useState(0);
  const [linkNo, setLinkNo] = useState("");
  const [cement, setCement] = useState("");
  const [sand, setSand] = useState("");
  const [granite, setGranite] = useState("");
  const [sandDensity, setSandDensity] = useState(1600);
  const [graniteDensity, setGraniteDensity] = useState(1800);
  const [calculate, setCalculate] = useState(false);

  const results = useMemo(() => {
    if (!length || !breadth || !depth || !cement || !sand || !granite) {
      return null;
    }

    const voulume = length * breadth * depth;
    const totalRatio = cement + sand + granite;

    return {
      cementAmount: (cement / totalRatio) * 28.8 * voulume,
      sandAmount: (((sand / totalRatio) * sandDensity) / 1000) * voulume,
      graniteAmount:
        (((granite / totalRatio) * graniteDensity) / 1000) * voulume,
    };
  }, [length, breadth, , depth, cement, sand, granite]);

  const dimensionsInput = [
    {
      label: "Length",
      value: length,
      onChange: setLength,
    },
    {
      label: "Breadth",
      value: breadth,
      onChange: setBreadth,
    },
    {
      label: "Depth",
      value: depth,
      onChange: setDepth,
    },
  ];

  const reinforcementInput = [
    {
      mainbar: [
        {
          label: "main10",
          value: 10,
          existingValue: mainBar,
        },
        {
          label: "main12",
          value: 12,
          existingValue: mainBar,
        },
        {
          label: "main16",
          value: 16,
          existingValue: mainBar,
        },
        {
          label: "main20",
          value: 20,
          existingValue: mainBar,
        },
        {
          label: "main25",
          value: 25,
          existingValue: mainBar,
        },
        {
          label: "main32",
          value: 32,
          existingValue: mainBar,
        },
      ],
      link: [
        {
          label: "link6",
          value: 6,
          existingValue: link,
        },
        {
          label: "link8",
          value: 8,
          existingValue: link,
        },
      ],
    },
  ];

  const materialsInput = [
    {
      label: "Cement",
      value: cement,
      onChange: setCement,
    },
    {
      label: "Sand",
      value: sand,
      onChange: setSand,
    },
    {
      label: "Granite",
      value: granite,
      onChange: setGranite,
    },
  ];

  return (
    <div className="m-5 mt-10 mx-auto bg-gray-100 p-10 max-w-7xl">
      <h2 className="text-2xl font-bold pb-8 text-center">Columns and Beams</h2>
      <div className="flex flex-wrap justify-around gap-3">
        {/* Input section for dimensions */}

        <div className=" bg-gray-200 w-90 p-5">
          <h2 className="text-xl font-bold">Dimensions</h2>

          {dimensionsInput.map((input) => (
            <DimensionsInput
              key={input.label}
              label={input.label}
              value={input.value}
              onChange={input.onChange}
            />
          ))}

          <p className="mt-5">ℹ️ Unit is in meters</p>
        </div>

        <div className="flex-col bg-gray-200 w-90 p-5">
          <h2 className="text-xl font-bold">Reinforcements</h2>
          <div className="p-2">
            <p className="text-left">Main Bar:</p>
            <div className="flex flex-wrap">
              {reinforcementInput[0].mainbar.map((input) => (
                <BarSizeInput
                  key={input.label}
                  label={input.label}
                  name="main"
                  value={input.value}
                  checked={mainBar === input.value}
                  onChange={setMainBar}
                />
              ))}
            </div>
          </div>

          {/* Input section for reinforcements */}

          <div className="p-2">
            <label for="numberMain">No of main bar: </label>
            <input
              id="numberMain"
              type="number"
              value={mainBarNo}
              onChange={(e) =>
                setMainBarNo(
                  e.target.value === "" ? "" : parseInt(e.target.value)
                )
              }
              min={0}
              max={30}
              className="border w-24"
            />
          </div>

          <hr />

          <div className="p-2">
            <p className="inline">Link: </p>
            <div className="flex flex-wrap"></div>

            {reinforcementInput[0].link.map((input) => (
              <BarSizeInput
                key={input.label}
                label={input.label}
                name="dist"
                value={input.value}
                checked={link === input.value}
                onChange={setLink}
              />
            ))}
          </div>

          <div className="p-2">
            <label for="numberLink">No of Links:</label>
            <input
              id="numberLink"
              type="number"
              value={linkNo}
              onChange={(e) =>
                setLinkNo(e.target.value === "" ? "" : parseInt(e.target.value))
              }
              min={0}
              max={30}
              className="border w-24"
            />
          </div>
          <p className="pt-5">ℹ️ Spacing is in Millimeters</p>
        </div>

        {/* Input section for materials */}

        <div className="flex-col bg-gray-200 w-90 p-5">
          <h2 className="text-xl font-bold">Materials</h2>
          <p className="text-left p-2">Mix ratio: </p>

          {materialsInput.map((input) => (
            <MaterialsInput
              key={input.label}
              label={input.label}
              value={input.value}
              onChange={input.onChange}
            />
          ))}

          <hr />

          <div className="py-2">
            <label for="sandDensity" className="text-left p-2">
              Sand Density(kg/m³):{" "}
            </label>
            <input
              id="sandDensity"
              type="number"
              step="any"
              value={sandDensity}
              onChange={(e) => {
                setSandDensity(
                  e.target.value === "" ? "" : parseFloat(e.target.value)
                );
              }}
              min={0}
              max={9999}
              className="border w-24"
            />
          </div>

          <div className="py-2">
            <label for="graniteDensity" className="text-left p-2">
              Granite Density(kg/m³):{" "}
            </label>
            <input
              id="graniteDensity"
              type="number"
              step="any"
              value={graniteDensity}
              onChange={(e) => {
                setGraniteDensity(
                  e.target.value === "" ? "" : parseFloat(e.target.value)
                );
              }}
              min={0}
              max={9999}
              className="border w-24"
            />
          </div>

          <p className="mt-5">ℹ️ Ratio is in volume and not weight</p>
        </div>
      </div>

      <button
        onClick={() => setCalculate(true)}
        className="block m-15 p-4 bg-mist-400 rounded-lg mx-auto text-xl"
      >
        Calculate
      </button>

      <div>
        {calculate ? (
          results ? (
            <div className="mt-5 p-5 bg-gray-200 w-90 mx-auto">
              <h2 className="text-xl font-bold text-center pb-3">Results</h2>
              <p className="">Cement: {results.cementAmount.toFixed(2)} bags</p>
              <p>Sand: {results.sandAmount.toFixed(2)} tons</p>
              <p>Granite: {results.graniteAmount.toFixed(2)} tons</p>
            </div>
          ) : (
            <div className="mt-5 p-5 bg-red-400 w-90 mx-auto rounded-md">
              <h2 className="text-xl font-bold text-center pb-3">Results</h2>
              <p className="">
                Please fill in all the fields to get the results.
              </p>
            </div>
          )
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}

export default Col_BeamDetails;
