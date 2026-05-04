import { useState } from "react"

function Col_BeamDetails(){
  const [length, setLength] = useState(0)
  const [breadth, setBreadth] = useState(0)
  const [depth, setDepth] = useState(0)
  const [mainBar, setMainBar] = useState(0)
  const [numberMain, setNumberMain] = useState(0)
  const [linkBar, setLinkBar] = useState(0)
  const [numberLink, setNumberLink] = useState(0)
  const [cement, setCement] = useState(0)
  const [sand, setSand] = useState(0)
  const [granite, setGranite] = useState(0)

  const handleCalculate = () => {}

  return(
    <div className="m-5 mt-10 mx-auto bg-gray-100 p-10 max-w-7xl">
      <h2 className="text-2xl font-bold pb-8 text-center">Columns and Beams</h2>
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
            <label for="depth">Depth: </label>
            <input id="depth" type="number" value={depth} onChange={(e) => setDepth(e.target.value)} min={0} max={999} className="border"/>
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

              <label for="32" className="pr-2">
              <input id="32" type="radio" name="main" value={32} checked={mainBar === 32} onChange={() => setMainBar(32)} />
              32mm </label>
            </div>
          </div>

          <div className="p-2">
            <label for='numberMain'>No of main bar: </label>
            <input id="numberMain" type="number" value={numberMain} onChange={(e) => setNumberMain(e.target.value)} min={0} max={30} className="border" />
          </div>


          <div className="p-2">
            <p className="inline">Link: </p>
            <div className="flex flex-wrap">
              <label for="6">
              <input id="6" type="radio" name="link" value={6} checked={linkBar === 6} onChange={() => setLinkBar(6)} />
              6mm </label>

              <label for="8">
              <input id="8" type="radio" name="link" value={8} checked={linkBar === 8} onChange={() => setLinkBar(8)} />
              8mm </label>
            </div>
          </div>

          <div className="p-2">
            <label for='numberLink'>No of Links:</label>
            <input id="numberLink" type="number" value={numberLink} onChange={(e) => setNumberLink(e.target.value)} min={0} max={30} className="border"/>
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

      <button onClick={handleCalculate} className="block m-15 p-4 bg-mist-400 rounded-lg mx-auto text-xl">Calculate</button>
    </div>
  )
}

export default Col_BeamDetails