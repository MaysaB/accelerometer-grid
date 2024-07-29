const Grid = () => {
  const totalCells = 100 * 100; 

  return (
    // set length at totalCells and create new array using array.from
    <div className="grid grid-cols-cols-100 grid-rows-rows-100" style={{ width: '80vmin', height: '80vmin' }}>
    {Array.from({ length: totalCells }).map((_, index) => (
      <div
        key={index} //set key prop to current index (totalCells - 1)
        className="w-full bg-pink-400 border border-pink"
        style={{ aspectRatio: '1 / 1' }} // ensures each cell stays square
        role="gridcell"
      />
    ))}
  </div>
  );
};

export default Grid;


