import Grid from "./components/grid";

interface DeviceMotionEventWithPermission extends DeviceMotionEvent {
  requestPermission?: () => Promise<PermissionState>;
}


function App() {
  const requestMotionPermission = () => {
    console.log('clicked');

    const DeviceMotionEventWithPermission = DeviceMotionEvent as unknown as DeviceMotionEventWithPermission;

    if (typeof DeviceMotionEventWithPermission.requestPermission === 'function') {
      (DeviceMotionEventWithPermission).requestPermission()
        .then(response => {
          if (response === 'granted') {
            window.addEventListener('deviceorientation', () => {
              alert('Permissions granted');
            });
          }
        })
        .catch(console.error);
    } else {
      //browsers that don't support DeviceMotionEvent.requestPermission
      console.warn('DeviceMotionEvent.requestPermission is not supported in this browser.');
      alert('DeviceMotionEvent.requestPermission is not supported in this browser.');
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
