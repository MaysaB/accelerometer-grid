import Grid from "./components/grid";

function App() {
  const requestMotionPermission = () => {
    console.log('clicked')
    DeviceMotionEvent.requestPermission()
    .then(response => {
        if (response == 'granted') {
            window.addEventListener('deviceorientation', (e) => {
                // do something with e
            })
        }
    })
    .catch(console.error)
}

   return (
    <><button 
        onClick={requestMotionPermission} 
        className='font-bold text-center text-4xl text-orange-500'
      >
        Request Motion Permission
      </button>
    <main className="py-10 px-8 bg-blue-50 h-screen space-y-5 overflow-y-auto">
      
      <div className="min-h-screen flex items-center justify-center bg-blue-50">
      <Grid />
    </div>
    </main>
   </>
  );
}

export default App
