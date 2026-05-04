import { useState } from "react"

function CulvertDetails(){

  const [length, setLength] = useState(0)
  const [breadth, setBreadth] = useState(0)
  const [height, setHeight] = useState(0)
  const [thickness, setThickness] = useState(0)
  const [mainBar, setMainBar] = useState(0)
  const [mainSpacing, setMainSpacing] = useState(0)
  const [distBar, setDistBar] = useState(0)
  const [distSpacing, setDistSpacing] = useState(0)
  const [cement, setCement] = useState(0)
  const [sand, setSand] = useState(0)
  const [granite, setGranite] = useState(0)

  const handleCalculate = () => {}

  return(
    <div className="m-5 mt-10 mx-auto bg-gray-100 p-10 max-w-7xl">
      <h2 className="text-2xl font-bold pb-8 text-center">Culverts</h2>
      <div className="flex flex-wrap justify-around gap-3">
        <div className=" bg-gray-200 w-90 p-5">
          <h2 className="text-xl font-bold">Dimensions</h2>

          <div className="p-2">
            <label for="length">Length: </label>
            <input id="length" type="number" value={length} onChange={(e) => setLength(e.target.value)} min={0} max={999} className="border" />
          </div>
          

          <div className="p-2">
            <label for="breadth">Breadth: </label>
            <input id="breadth" type="number" value={breadth} onChange={(e) => setBreadth(e.target.value)} min={0} max={999} className="border"/>
          </div>

          <div className="p-2">
            <label for="height">Height: </label>
            <input id="height" type="number" value={height} onChange={(e) => setHeight(e.target.value)} min={0} max={999} className="border"/>
          </div>

          <div className="p-2">
            <label for="thickness">Thickness: </label>
            <input id="thickness" type="number" value={thickness} onChange={(e) => setThickness(e.target.value)} min={0} max={999} className="border"/>
          </div>

          <p className="mt-5">ℹ️ Unit is in meters</p>

        </div>

        <div className="flex-col bg-gray-200 w-90 p-5">
          <h2 className="text-xl font-bold">Reinforcements</h2>
          <div className="p-2">
            <p className="text-left">Main Bar:</p>
            <div className="flex flex-wrap">
              <label for='10' className="pr-2">
                <input id='10' type="radio" name="main" value={10} checked={mainBar === 10} onChange={() => setMainBar(10)} />
              10mm </label>

              <label for='12' className="pr-2">
              <input id="12" type="radio" name="main" value={12} checked={mainBar === 12} onChange={() => setMainBar(12)} />
              12mm </label>

              <label for='16' className="pr-2">
              <input id="16" type="radio" name="main" value={16} checked={mainBar === 16} onChange={() => setMainBar(16)} />
              16mm </label>

              <label for='20' className="pr-2">
              <input id="20" type="radio" name="main" value={20} checked={mainBar === 20} onChange={() => setMainBar(20)} />
              20mm </label>

              <label for='25' className="pr-2">
              <input id="25" type="radio" name="main" value={25} checked={mainBar === 25} onChange={() => setMainBar(25)} />
              25mm </label>
            </div>
          </div>

          <div className="p-2">
            <label for="mainSpacing">Spacing(mm): </label>
            <input id="mainSpacing" type="number" value={mainSpacing} onChange={(e) => setMainSpacing(e.target.value)} min={0} max={999} className="border" />
          </div>

          <hr />

          <div className="p-2">
            <p className="text-left">Distribution Bar:</p>
            <div className="flex flex-wrap">
              <label for='10' className="pr-2">
              <input id='10' type="radio" name="dist" value={10} checked={distBar === 10} onChange={() => setDistBar(10)} />
              10mm </label>

              <label for='12' className="pr-2">
              <input id="12" type="radio" name="dist" value={12} checked={distBar === 12} onChange={() => setDistBar(12)} />
              12mm </label>

              <label for='16' className="pr-2">
              <input id="16" type="radio" name="dist" value={16} checked={distBar === 16} onChange={() => setDistBar(16)} />
              16mm </label>
            </div>
          </div>


          <div className="p-2">
            <label for="distSpacing">Spacing(mm): </label>
            <input id="distSpacing" type="number" value={distSpacing} onChange={(e) => setDistSpacing(e.target.value)} min={0} max={999} className="border" />
          </div>

        </div>

        <div className="flex-col bg-gray-200 w-90 p-5">
          <h2 className="text-xl font-bold">Materials</h2>
          <p className="text-left p-2">Mix ratio: </p>

          <div className="p-2">
          <label for='cement'>Cement: </label>
          <input id="cement" type="number" value={cement} onChange={(e) => setCement(e.target.value)} min={0} max={30} className="border" /> 
          </div>

          <div className="p-2">
          <label for='sand'>Sand: </label>
          <input id="sand" type="number" value={sand} onChange={(e) => setSand(e.target.value)} min={0} max={30} className="border" />
          </div>

          <div className="p-2">
          <label for="granite">Granite: </label>
          <input id="granite" type="number" value={granite} onChange={(e) => setGranite(e.target.value)} min={0} max={30} className="border" />
          </div>

        </div>
      </div>

      <button onClick={handleCalculate} className="block bg-mist-400 m-15 p-4 rounded-lg mx-auto text-xl">Calculate</button>
    </div>
  )
}

export default CulvertDetails