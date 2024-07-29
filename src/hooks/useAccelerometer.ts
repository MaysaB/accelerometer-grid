import { useEffect, useState } from "react";

interface AccelerometerData {
    x: number;
    y: number;
    z: number;
}

export default function useAccelerometer() {
    const [accelerometerData, setAccelerometerData] = useState<AccelerometerData | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
      let mockInterval: ReturnType<typeof setInterval>;
  
      const updateData = (x: number, y: number, z: number) => {
        setAccelerometerData({ x, y, z });
      };
  
      const handleError = () => {
        setError('Accelerometer not available, using mock data instead.');
        mockInterval = setInterval(() => {
          updateData(
            Math.random() * 10 - 5,
            Math.random() * 10 - 5,
            Math.random() * 10 - 5
          );
        }, 1000);
      };
  
      if ('Accelerometer' in window) {
        try {
          const Accelerometer = (window as Window).Accelerometer;
          if (Accelerometer) {
            const sensor = new Accelerometer({ frequency: 60 });
            sensor.addEventListener('reading', () => {
              updateData(sensor.x, sensor.y, sensor.z);
            });
            sensor.addEventListener('error', handleError);
            sensor.start();
          } else {
            handleError();
          }
        } catch (err) {
          handleError();
        }
      } else {
        handleError();
      }
  
      return () => {
        if (mockInterval) clearInterval(mockInterval);
      };
    }, []);
  
    return { accelerometerData, error };
  }
    