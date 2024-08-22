import SingleCarousel from "../carousels/SingleCarousel";


export default function Category() {
  return (
    <div className="w-full mx-auto sm:max-w-6xl py-12">
        <div className="flex justify-center sm:justify-between items-center mx-3">
            <div className="w-4/5 sm:w-2/5 space-y-4">
                <h1 className="text-black-1 font-bold text-5xl font-sans">
                    Category Style
                </h1>
                <p className="text-gray-40 text-base text-lg">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget gravida leo, nec iaculis diam. Nam bibendum mi sed sem finibus ullamcorper.
                </p>
            </div>
            <div className="hidden sm:block sm:w-1/3 mx-4">
                <SingleCarousel />
            </div>
        </div>
    </div>
  )
}
