

export default function LoadProducts() {
  return (
    
            <div 
               className="border shadow rounded-md px-2 py-4 max-w-sm w-full"
               >
               <img className="w-52 sm:w-64 h-56 bg-gray-100 shadow border-none rounded-md animate-pulse my-3" />
               <div className="flex justify-between space-x-2 mb-2">
                  <h5 className="animate-pulse h-6 w-full bg-gray-200 rounded"></h5>
                  <h5 className="animate-pulse h-6 w-1/4 bg-gray-200 rounded"></h5>
               </div>
               <div className="space-y-1">
                  <p className="animate-pulse h-3 w-full bg-gray-200 rounded"></p>
                  <p className="animate-pulse h-3 w-full bg-gray-200 rounded"></p>
                  <p className="animate-pulse h-3 w-full bg-gray-200 rounded"></p>
                  <p className="animate-pulse h-3 w-full bg-gray-200 rounded"></p>
                  <p className="animate-pulse h-3 w-4/5 bg-gray-200 rounded"></p>
                  <p className="animate-pulse h-4 w-1/3 bg-gray-200 rounded"></p>
               </div>
            </div>
  )
}
