/*<CareScale careType='water' scaleValue={plant.water} />
<CareScale careType='light' scaleValue={plant.light} />*/


// On évite de multiplier les déclarations qui sans cette syntaxe auraient été :
// const scaleValue = props.scaleValue et
// const careType = props.careType

function CareScale({ scaleValue, careType }) {
  const scaleType = careType === 'light' ? '☀️' : '💧'
  const range=[1, 2, 3]

  return (
    <div>
      {range.map((rangeElem)=>
        scaleValue >= rangeElem ? <span key={rangeElem.toString()}>{scaleType}</span> : null 
        )}
    </div>
)}

export default CareScale