import Grid from "./components/grid";

function App() {
 

   return (
    <main className="py-10 px-8 bg-blue-50 h-screen space-y-5 overflow-y-auto">
      <h1 className='font-bold text-center text-4xl text-orange-500'> Accelerometer Project </h1>
      <div className="min-h-screen flex items-center justify-center bg-blue-50">
      <Grid />
    </div>
    </main>
   
  );
}

export default App
