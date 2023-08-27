export const Legend = ({ color, value }) => {
  return (
    <>
      <div style={{ width: '10px', height: '10px', background: color }}></div>
      <div style={{ fontFamily: 'Courier New', margin: '0 20px' }}>{value}</div>
    </>
  )
}
