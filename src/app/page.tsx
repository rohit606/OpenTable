import Card from "./components/Card"
import Header from "./components/Header"
import NAVBAR from "./components/NavBar"


export default  function Home() { 
  // const res=await fetch("https://dummyjson.com/products/1");
  // const json= await res.json();
  // console.log(json)
  return (
    <main className="bg-gray-100 min-h-screen w-screen">
  <main className="max-w-screen-2xl m-auto bg-white">
    {/* NAVBAR */}
    <NAVBAR/>
    {/* NAVBAR */}
    <main>
      {/* HEADER */}
      <Header/>
      {/* HEADER */} 
      {/* CARDS */}  
      <div className="py-3 px-36 mt-10 flex flex-wrap justify-center">
        {/* CARD */}
        {/* <p>{json.id}</p>
        <h1>{json.title}</h1>
        <h1>{json.description}</h1> */}
        <Card/>

        {/* CARD */}
      </div>
      {/* CARDS */}
    </main>
  </main>
</main>

  )
}
