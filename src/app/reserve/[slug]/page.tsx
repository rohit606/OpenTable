import NAVBAR from "@/app/components/NavBar";
import Header from "./components/Header";
import Form from "./components/form";

export default function Reservation(){
    return (
        <main className="bg-gray-100 min-h-screen w-screen">
  <main className="max-w-screen-2xl m-auto bg-white">
    {/* NAVBAR */}
   <NAVBAR/>
    {/* NAVBAR END */}
    <div className="border-t h-screen">
      <div className="py-9 w-3/5 m-auto">
        {/* HEADER */}
      <Header/>
        {/* HEADER */} {/* FORM */}
       <Form/>
      </div>
    </div>
  </main>
</main>

    )
}