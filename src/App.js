import "./App.css";
import Navbar from "./component/Navbar";
import Form from "./component/Form";
import "@fontsource/plus-jakarta-sans";
import "@fontsource/plus-jakarta-sans/800.css";
import "@fontsource/plus-jakarta-sans/600.css";

import abstract from "./assets/abstract.png";

function App() {
  return (
    <div className="">
      <Navbar />

      <div className="w-full mt-28 relative">
        <div className="max-w-xl lg:max-w-screen-xl lg:px-28 px-4 mx-auto ">
          <div className="dark-text pb-12 ">
            <p className="text-3xl md:text-5xl font-bold">NFT minter</p>
            <p className="text-lg md:text-xl pt-2 font-semibold">
              Free NFT minter on Polygon
            </p>
          </div>
          <img
            src={abstract}
            alt="abstract"
            className="absolute sm:flex hidden right-0 sm:-top-8 md:-top-20 lg:-top-32 sm:mr-8 md:mr-20 w-2/5"
          />
          {/* <div className=" border h-16 bg-white rounded-t-2xl flex flex-col justify-center px-4">
            <label className="text-2xl font-bold">Mint your NFT</label>
          </div> */}
        </div>
      </div>
      <div className="absolute w-full p-2">
        <Form />
        <div className="my-12">
          <p className="text-center dark-text md:text-xl text-base font-bold">
            Built with Onecdot Dev Tools{" "}
            <a
              href="https://dashboard.onec.in/"
              target="_blank"
              className="underline"
            >
              Build Yours
            </a>{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
