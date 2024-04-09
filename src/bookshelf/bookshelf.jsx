import { useState } from "react";
import { FaStar } from "react-icons/fa";
import bookPhoto from "../assets/book.png";
import Star from "../assets/star.svg";
import Search from "./search";
import Sortmenu from "./sortmenu";

const bookList = [
  {
    id: crypto.randomUUID(),
    bookName: "JavaScript and Jquery",
    writer: "Jon Duckett",
    price: "$65",
    star: "4 star",
    isFavourite: false,
  },
  {
    id: crypto.randomUUID(),
    bookName: "React Native Cookbook",
    writer: "Daniele De Nobili",
    price: "$50",
    star: "5 star",
    isFavourite: true,
  },
  {
    id: crypto.randomUUID(),
    bookName: "Software Craftsmanship",
    writer: "Robert C. Martin",
    price: "$40",
    star: "5 star",
    isFavourite: true,
  },
  {
    id: crypto.randomUUID(),
    bookName: "Object-Oriented Software",
    writer: "Erich Gamma",
    price: "$55",
    star: "4.5 star",
    isFavourite: false,
  },
  {
    id: crypto.randomUUID(),
    bookName: "JavaScript and Jquery",
    writer: "Jon Duckett",
    price: "$65",
    star: "4 star",
    isFavourite: false,
  },
  {
    id: crypto.randomUUID(),
    bookName: "React Native Cookbook",
    writer: "Daniele De Nobili",
    price: "$50",
    star: "5 star",
    isFavourite: true,
  },
  {
    id: crypto.randomUUID(),
    bookName: "Software Craftsmanship",
    writer: "Robert C. Martin",
    price: "$40",
    star: "5 star",
    isFavourite: true,
  },
  {
    id: crypto.randomUUID(),
    bookName: "Object-Oriented Software",
    writer: "Erich Gamma",
    price: "$55",
    star: "4.5 star",
    isFavourite: false,
  },
  {
    id: crypto.randomUUID(),
    bookName: "L React Native Cookbook",
    writer: "Daniele De Nobili",
    price: "$50",
    star: "5 star",
    isFavourite: true,
  },
  {
    id: crypto.randomUUID(),
    bookName: "C Software Craftsmanship",
    writer: "Robert C. Martin",
    price: "$40",
    star: "5 star",
    isFavourite: true,
  },
  {
    id: crypto.randomUUID(),
    bookName: "D Object-Oriented Software",
    writer: "Erich Gamma",
    price: "$55",
    star: "4.5 star",
    isFavourite: false,
  },
];

export default function Bookshelf() {
  const [bookLists, setBookList] = useState(bookList);

  ////Favourite button toggle.......
  function handleIsFavouraite(bookID) {
    const index = bookLists.findIndex((book) => book.id === bookID);

    const newArray = [...bookLists];

    newArray[index].isFavourite = !newArray[index].isFavourite;

    setBookList(newArray);
  }

  ///searching feature.............
  function handleSearch(searchText) {
    const searchBookName = bookLists.filter((book) => {
      return book.bookName.toLowerCase().includes(searchText.toLowerCase());
    });
    setBookList(searchBookName);
  }

  function handleSorting(text) {
    if (text === "name_asc") {
      const sortingArray = [...bookLists].sort((a, b) => {
        const A = a.bookName.toLowerCase();
        const B = b.bookName.toLowerCase();

        if (A < B) {
          return -1;
        } else if (A > B) {
          return 1;
        } else {
          return 0;
        }
      });
      setBookList(sortingArray);
    } else if (text === "name_desc") {
      const sortingArray = [...bookLists].sort((a, b) => {
        const A = a.bookName.toLowerCase();
        const B = b.bookName.toLowerCase();

        if (A < B) {
          return 1;
        } else if (A > B) {
          return -1;
        } else {
          return 0;
        }
      });
      setBookList(sortingArray);
    } else {
      setBookList(bookLists);
    }
    console.log(text);
  }

  return (
    <div>
      <div className="mb-6 ml-20 mr-20 mx-auto flex items-end justify-between max-md:max-w-[95%] max-md:flex-col max-md:items-start max-md:space-y-4">
        {/* info , title , search */}
        <div>
          <h6 className="mb-2 text-base lg:text-3xl">Trending on 2021</h6>
          <h2 className="mb-6 font-['Playfair_Display'] text-3xl font-bold lg:text-4xl">
            Trending Books of the Year
          </h2>
          <Search onSearch={handleSearch} />
        </div>
        {/* sort - filter */}
        <div className="flex items-stretch space-x-3">
          {/* Sort */}
          <Sortmenu onSorting={handleSorting} />
        </div>
      </div>
      <div className="ml-20 mr-20 flex flex-wrap items-end justify-around max-w-10xl">
        {bookLists.map((book) => (
          <div className="mb-10 space-y-3" key={book.id}>
            <div className="flex items-center justify-center rounded-md border border-[#324251]/30 bg-white p-4">
              <img className="max-w-[144px]" src={bookPhoto} alt="book name" />
            </div>
            <div className="space-y-3">
              <div>
                <h4 className="text-lg font-bold lg:text-xl">
                  {book.bookName}
                </h4>
              </div>
              <p className="text-xs lg:text-sm">
                By : <span>{book.writer}</span>
              </p>
              <div className="flex items-center justify-between">
                <h4 className="text-lg font-bold lg:text-xl">{book.price}</h4>
                <div className="flex items-center space-x-1">
                  {[...Array(parseInt(book.star))].map((_, index) => (
                    <img key={index} src={Star} alt="star" />
                  ))}

                  <span className="text-xs lg:text-sm">{book.star}</span>
                </div>
              </div>
              <div className="flex items-center gap-3 text-xs lg:text-sm">
                <button className="flex min-w-[132px] items-center justify-center gap-1 rounded-md bg-[#1C4336] py-1.5 text-white transition-all hover:opacity-80 lg:py-1.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                    />
                  </svg>
                  Add to Cart
                </button>
                {book.isFavourite ? (
                  <button
                    className="flex min-w-[132px] items-center justify-center gap-1 rounded-md bg-red-200 py-1.5 text-[#1C4336] transition-all hover:bg-[#1C4336]/[24%] lg:py-1.5"
                    onClick={() => handleIsFavouraite(book.id)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="red"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="red"
                      className="h-5 w-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                      />
                    </svg>
                    Favourite
                  </button>
                ) : (
                  <button
                    className="flex min-w-[132px] items-center justify-center gap-1 rounded-md bg-[#1C4336]/[14%] py-1.5 text-[#1C4336] transition-all hover:bg-[#1C4336]/[24%] lg:py-1.5"
                    onClick={() => handleIsFavouraite(book.id)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                      />
                    </svg>
                    Favourite
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
