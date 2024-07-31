import useAccelerometer from "../hooks/useAccelerometer";


const Grid = () => {
  const totalCells = 100 * 100; 
  const { acceleration, error } = useAccelerometer();
//passes in error from
  if (error) {
    return <div className="flex justify-center items-center h-screen text-3xl text-red-500">{error}</div>;
  }

  return (
    <div className="grid grid-cols-cols-100 grid-rows-rows-100" style={{ width: '80vmin', height: '80vmin' }}>
      {Array.from({ length: totalCells }).map((_, index) => (
        <div
          key={index}
          className="w-full border border-pink"
          style={{
            aspectRatio: '1 / 1',
            backgroundColor: `rgb(${Math.min(255, Math.abs(acceleration.x) * 100)}, ${Math.min(255, Math.abs(acceleration.y) * 100)}, ${Math.min(255, Math.abs(acceleration.z) * 100)})`,
            transform: `scale(${1 + Math.min(0.5, Math.abs(acceleration.x) / 10)}, ${1 + Math.min(0.5, Math.abs(acceleration.y) / 10)}, ${1 + Math.min(0.5, Math.abs(acceleration.z) / 10)})`,
          }}
          role="gridcell"
        />
      ))}
    </div>
  );
};

export default Grid;


