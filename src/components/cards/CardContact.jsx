
export default function CardContact({src, alt, title, desc, contact}) {
  return (
    <div className="w-full sm:w-1/3 p-5 space-y-5 border shadow-xl bg-white dark:bg-dark-20">
        <div className="rounded-full border w-11 bg-blue-30">
            <img className="p-2 w-10 h-10 mx-auto" src={src} alt={alt} />
        </div>
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="text-base text-gray-30 dark:text-white">{desc}</p>
        <p className="text-base text-gray-30 dark:text-white">{contact}</p>
    </div>
  )
}
