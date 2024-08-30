import { Card } from "flowbite-react";

export default function LoadProductDetail() {
    const size = ["S", "M", "L", "XL"];
  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 mx-auto">
        <div className="space-y-10 mx-auto">
             <h2 className="animate-pulse h-6 w-64 bg-gray-200 rounded"></h2>
             
                     <Card
                         className="w-64 h-64 bg-gray-200 animate-pulse"
                         imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
                         imgSrc={""}
                         >
                         </Card>
             
         </div>
         <div className="mx-3 sm:mx-0 space-y-5 mt-10 sm:mt-16">
             <h3 className="animate-pulse h-10 w-1/2 bg-gray-200 rounded"></h3>
             <p className="animate-pulse h-3 w-6/7 bg-gray-200 rounded"></p>
             <p className="animate-pulse h-3 w-5/6 bg-gray-200 rounded"></p>
             <p className="animate-pulse h-3 w-4/5 bg-gray-200 rounded"></p>
             <div className="flex justify-between">
                 <div className="animate-pulse h-4 w-1/3 bg-gray-200 rounded"></div>
                 <div className="animate-pulse h-6 w-1/6 bg-gray-200 rounded"></div>
             </div>
                 <div className="space-y-3">
                     <h4 className="animate-pulse h-3 w-1/6 bg-gray-200 rounded"></h4>
                     <div className="flex">
                         {
                             size.map((item, i) => (
                                 <p key={i} className={`animate-pulse h-10 w-10 bg-gray-200 rounded mr-3`}>
                                 </p>
                             ))
                         }
                     </div>
                 </div>
                 <div className="flex justify-between mx-3 sm:mx-auto">
                    <div className="space-y-3">
                       <h3 className="animate-pulse h-5 w-20 bg-gray-200 rounded"></h3>
                       <div className="animate-pulse h-10 bg-gray-200 rounded"></div>
                    </div>
                   <p className="animate-pulse h-16 w-20 bg-gray-200 rounded w-16"></p>
               </div>
               <div className="flex justify-between space-x-3">
                   <button className="w-full animate-pulse h-10 bg-gray-200 rounded"></button>
                   <button className="w-20 animate-pulse h-10 bg-gray-200 rounded">
                   </button>
               </div>
           </div>
     </div>
  )
}
