import { useEffect, useState } from "react";

interface AccelerometerData {
    x: number;
    y: number;
    z: number;
}

const useAccelerometer = () => {
  //initialise
  const [acceleration, setAcceleration] = useState<AccelerometerData>({ x: 0, y: 0, z: 0 });
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {

    //cheks if accelerationIncludingGravity exists and updates state with new values
    const handleMotion = (event: DeviceMotionEvent) => {
      if (event.accelerationIncludingGravity) {
        setAcceleration({
          x: event.accelerationIncludingGravity.x ?? 0,
          y: event.accelerationIncludingGravity.y ?? 0,
          z: event.accelerationIncludingGravity.z ?? 0,
        });
      }
    };
    // adds event listener if DME is supported by browser
    if (window.DeviceMotionEvent) {
      window.addEventListener('devicemotion', handleMotion);
    } else {
      setError('This device does not support accelerometer data');
    }

    return () => {
      window.removeEventListener('devicemotion', handleMotion);
    };
  }, []);

  return { acceleration, error };
};

export default useAccelerometer;