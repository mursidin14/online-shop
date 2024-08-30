import { Card } from "flowbite-react";

export default function LoadProducts() {
  return (
   <div className="grid gap-4 grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
     {
         Array.from({length: 8}).map((_, i) => (
            <Card
               key={i}    
               className="w-48 h-48 bg-gray-200 animate-pulse"
               imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
               imgSrc={""}
               >
               <div className="flex justify-between">
                  <h5 className="animate-pulse h-6 w-full bg-gray-200 rounded"></h5>
                  <h5 className="animate-pulse h-6 w-1/4 bg-gray-200 rounded"></h5>
               </div>
               <p className="animate-pulse h-3 w-full bg-gray-200 rounded"></p>
               <p className="animate-pulse h-3 w-full bg-gray-200 rounded"></p>
               <p className="animate-pulse h-3 w-4/5 bg-gray-200 rounded"></p>
               <div className="animate-pulse h-4 w-1/3 bg-gray-200 rounded"></div>
            </Card>
         ))
     }
    </div>
  )
}
