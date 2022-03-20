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
        <div className="max-w-xl lg:max-w-screen-xl px-28 mx-auto ">
          <div className="dark-text pb-12 ">
            <p className=" text-5xl font-bold">NFT minter</p>
          </div>
          <img
            src={abstract}
            alt="abstract"
            width="500"
            className="absolute right-0 -top-32 mr-20"
          />
          {/* <div className=" border h-16 bg-white rounded-t-2xl flex flex-col justify-center px-4">
            <label className="text-2xl font-bold">Mint your NFT</label>
          </div> */}
        </div>
      </div>
      <div className="absolute w-full">
        <Form />
        <div className="my-12">
          <p className="text-center dark-text text-xl font-bold">
            Built with{" "}
            <a
              href="https://dashboard.onec.in/"
              target="_blank"
              className="underline"
            >
              Onecdot
            </a>{" "}
            Dev Tools Build Yours{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
