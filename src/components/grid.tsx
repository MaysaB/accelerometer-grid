const Grid = () => {
  const numCells = 100 * 100; // 100x100 grid

  return (
    <div className="grid grid-cols-cols-100 grid-rows-rows-100" style={{ width: '80vmin', height: '80vmin' }}>
    {Array.from({ length: numCells }).map((_, index) => (
      <div
        key={index}
        className="w-full bg-pink-400 border border-white"
        style={{ aspectRatio: '1 / 1' }}
        role="gridcell"
      />
    ))}
  </div>
  );
};

export default Grid;
