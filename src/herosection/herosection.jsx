import Search from "./search";
import Sortmenu from "./sortmenu";

export default function Herosection() {
    return (
      <div>
        <herosection className="mb-8 lg:m-10 mx-auto max-w-7xl">
          <div className="ml-20 mr-20 mx-auto flex items-end justify-between max-md:max-w-[95%] max-md:flex-col max-md:items-start max-md:space-y-4">
            {/* info , title , search */}
            <div>
              <h6 className="mb-2 text-base lg:text-3xl">Trending on 2021</h6>
              <h2 className="mb-6 font-['Playfair_Display'] text-3xl font-bold lg:text-4xl">
                Trending Books of the Year
              </h2>
                  <Search />
            </div>
            {/* sort - filter */}
            <div className="flex items-stretch space-x-3">
              {/* Sort */}
              <Sortmenu />
            </div>
          </div>
        </herosection>
      </div>
    );
  }
  