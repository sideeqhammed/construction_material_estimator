import { useMemo, useState } from "react";
import DimensionsInput from "./dimensionsInput";
import BarSizeInput from "./barSizeInput";
import MaterialsInput from "./materialsInput";

function CulvertDetails() {
  const [length, setLength] = useState("");
  const [breadth, setBreadth] = useState("");
  const [height, setHeight] = useState("");
  const [thickness, setThickness] = useState("");
  const [mainBar, setMainBar] = useState(0);
  const [mainSpacing, setMainSpacing] = useState("");
  const [distBar, setDistBar] = useState(0);
  const [distSpacing, setDistSpacing] = useState("");
  const [cement, setCement] = useState("");
  const [sand, setSand] = useState("");
  const [granite, setGranite] = useState("");
  const [sandDensity, setSandDensity] = useState(1600);
  const [graniteDensity, setGraniteDensity] = useState(1800);
  const [calculate, setCalculate] = useState(false);

  const results = useMemo(() => {
    if (
      !length ||
      !breadth ||
      !height ||
      !thickness ||
      !cement ||
      !sand ||
      !granite
    ) {
      return null;
    }

    const baseAndTopLength = 2 * (breadth + thickness + thickness);
    const basendTopAArea = baseAndTopLength * thickness;
    const wallArea = 2 * (height * thickness);
    const voulume = length * (basendTopAArea + wallArea);
    const totalRatio = cement + sand + granite;

    return {
      cementAmount: (cement / totalRatio) * 28.8 * voulume,
      sandAmount: (((sand / totalRatio) * sandDensity) / 1000) * voulume,
      graniteAmount:
        (((granite / totalRatio) * graniteDensity) / 1000) * voulume,
    };
  }, [length, breadth, height, thickness, cement, sand, granite]);

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
      label: "Height",
      value: height,
      onChange: setHeight,
    },
    {
      label: "Thickness",
      value: thickness,
      onChange: setThickness,
    },
  ];

  const reinforcementInput = [
    {
      mainbar: [
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
      ],
      distBar: [
        {
          label: "dist10",
          value: 10,
          existingValue: distBar,
        },
        {
          label: "dist12",
          value: 12,
          existingValue: distBar,
        },
        {
          label: "dist16",
          value: 16,
          existingValue: distBar,
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
      <h2 className="text-2xl font-bold pb-8 text-center">Culverts</h2>
      <div className="flex flex-wrap justify-around gap-3">
        {/* Input section for dimensions */}
        <div className=" bg-gray-200 w-90 p-5 rounded-md">
          <h2 className="text-xl font-bold text-center pb-5">Dimensions</h2>

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

        {/* Input section for reinforcements */}
        <div className="flex-col bg-gray-200 w-90 p-5 rounded-md">
          <h2 className="text-xl font-bold text-center pb-5">Reinforcements</h2>
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

          <div className="p-2">
            <label for="mainSpacing">Spacing: </label>
            <input
              id="mainSpacing"
              type="number"
              step="any"
              value={mainSpacing}
              onChange={(e) =>
                setMainSpacing(
                  e.target.value === "" ? "" : parseFloat(e.target.value)
                )
              }
              className="border w-24"
            />
          </div>

          <hr />

          <div className="p-2">
            <p className="text-left">Distribution Bar:</p>
            <div className="flex flex-wrap">
              {reinforcementInput[0].distBar.map((input) => (
                <BarSizeInput
                  key={input.label}
                  label={input.label}
                  name="dist"
                  value={input.value}
                  checked={distBar === input.value}
                  onChange={setDistBar}
                />
              ))}
            </div>
          </div>

          <div className="p-2">
            <label for="distSpacing">Spacing: </label>
            <input
              id="distSpacing"
              type="number"
              step="any"
              value={distSpacing}
              onChange={(e) =>
                setDistSpacing(
                  parseFloat(
                    e.target.value === "" ? "" : parseFloat(e.target.value)
                  )
                )
              }
              className="border w-24"
            />
          </div>

          <p className="pt-5">ℹ️ Spacing is in Millimeters</p>
        </div>

        {/* Input section for materials */}
        <div className="flex-col bg-gray-200 w-90 p-5 rounded-md">
          <h2 className="text-xl font-bold text-center pb-5">Materials</h2>
          <p className="text-left p-2">Mix ratio: </p>

          {materialsInput.map((input) => (
            <MaterialsInput
              key={input.label}
              label={input.label}
              value={input.value}
              onChange={input.onChange}
              calculate={input.calculate}
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
        onClick={() => {
          setCalculate(true);
        }}
        className="block m-15 p-4 bg-mist-400 rounded-lg mx-auto text-xl hover:shadow-lg"
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

export default CulvertDetails;
