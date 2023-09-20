import Card from "./components/Card";
import Header from "./components/Header";
import NAVBAR from "./components/NavBar";
import { PrismaClient,Location, Region, PRICE } from "@prisma/client";
// import { PrismaClient } from "@prisma/client";

// const prisma =new PrismaClient();

export interface RestrurantCardType{
  id: number,
  name : string,
  main_image : string,
  location: Location,
  region: Region,
  price: PRICE,
  slug: string
}

const prisma = new PrismaClient();

const fetchRestrurants = async ():Promise<RestrurantCardType[]>=> {
  let restrurants = await prisma.restaurant.findMany({
    select:{
      id:true,
      name:true,
      main_image:true,
      location:true,
      region:true,
      price:true,
      slug:true
    }
  });
  return restrurants;
};

export default async function Home() {
  let restrurants = await fetchRestrurants();
  console.log({ restrurants });
  return (
    <main className="bg-gray-100 min-h-screen w-screen">
      <main className="max-w-screen-2xl m-auto bg-white">
        {/* NAVBAR */}
        <NAVBAR />
        {/* NAVBAR */}
        <main>
          {/* HEADER */}
          <Header />
          {/* HEADER */}
          {/* CARDS */}

          <div className="py-3 px-36 mt-10 flex flex-wrap justify-center">
            {restrurants.map((restrurant) => (
              <Card restaurant={restrurant} />
            ))};
  
            {/* CARD */}
          </div>
          {/* CARDS */}
        </main>
      </main>
    </main>
  );
}
