import Grid from "./components/grid";

interface DeviceMotionEventWithPermission extends DeviceMotionEvent {
  requestPermission?: () => Promise<PermissionState>;
}


function App() {
  const requestMotionPermission = () => {
    console.log('clicked');

    const DeviceMotionEventWithPermission = DeviceMotionEvent as unknown as DeviceMotionEventWithPermission;

    if (typeof DeviceMotionEventWithPermission !== 'undefined' &&
        typeof DeviceMotionEventWithPermission.requestPermission === 'function') {
        
        DeviceMotionEventWithPermission.requestPermission()
            .then((permissionState: PermissionState) => {
                if (permissionState === 'granted') {
                    window.addEventListener('devicemotion', (event: DeviceMotionEvent) => {
                        console.log(`Acceleration X: ${event.acceleration?.x}, Y: ${event.acceleration?.y}, Z: ${event.acceleration?.z}`);
                    });
                } else {
                    console.log('Permission to access device motion was denied.');
                }
            })
            .catch((error: any) => {
                console.error('Error requesting device motion permission:', error);
            });

    } else {
        console.log('Request permission property is not supported.');
        alert('Your browser does not support device motion events.');
    }
}

   return (
    <>
    <main className="py-10 px-8 bg-blue-50 h-screen space-y-5 overflow-y-auto">
      <button 
        onClick={requestMotionPermission} 
        className='font-bold text-center text-4xl text-orange-500'
      >
        Request Motion Permission
      </button>
      <div className="min-h-screen flex items-center justify-center bg-blue-50">
      <Grid />
    </div>
    </main>
   </>
  );
}

export default App
