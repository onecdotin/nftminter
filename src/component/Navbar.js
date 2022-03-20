import React, { useState } from "react";
import Onec from "onec-sdk";
import logo from "../assets/Group 512643.svg";
const Navbar = () => {
  const url = "https://avatars.dicebear.com/api/identicon/2.svg";

  const [address, setAddress] = useState(localStorage.getItem("onec-address"));
  const [showDropDown, setShowDropDown] = useState(false);

  const WalletAuthenticate = async () => {
    const res = await Onec.auth.withMetamask();
    setAddress(res.user.address);
    localStorage.setItem("onec-address", res.user.address);
  };

  const Logout = async () => {
    setAddress("");
    setShowDropDown(false);
    localStorage.removeItem("onec-address");
  };

  return (
    <div className="h-20 max-w-xl lg:max-w-screen-xl px-28 mx-auto z-20">
      <div className="flex justify-between items-center py-3">
        <img src={logo} alt="logo" className="h-10" />
        {address ? (
          <div>
            <button
              onClick={() => setShowDropDown(!showDropDown)}
              className="bg-gray-200 w-48 py-2 px-3 rounded-3xl dark-bg light-text font-semibold flex items-center"
            >
              <img src={url} className="w-6 h-6 rounded-full" />{" "}
              <p className="pl-2 text-sm truncate">{address}</p>
            </button>
            {showDropDown && (
              <div className="absolute bg-white rounded-3xl mt-1 shadow-lg z-10 w-48">
                <div className="flex flex-col py-2">
                  <button onClick={Logout} className="dark-text font-semibold">
                    logout
                  </button>
                </div>
              </div>
            )}
          </div>
        ) : (
          <button
            onClick={() => WalletAuthenticate()}
            className="bg-gray-200 w-48 py-2 px-3 rounded-3xl dark-bg light-text font-semibold flex items-center"
          >
            <img src={url} className="w-6 h-6 rounded-full" />{" "}
            <span className="text-sm pl-2">Connect your wallet</span>
          </button>
        )}
      </div>
      {/* {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold"></h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                <div className="relative p-6 flex-auto">
                  <div className="flex w-full ">
                    <div className="w-1/2 flex flex-col items-center p-2">
                      <img src={metamask} className="h-40" />
                      <p className="font-bold dark-text">MetaMask</p>
                      <p className="dark-text text-sm">
                        Connect your metamask wallet
                      </p>
                    </div>
                    <div className="w-1/2 flex flex-col items-center  p-2">
                      <img src={walletconnectimage} className="h-40 " />
                      <p className="font-bold dark-text">Walletconnect</p>
                      <p>Connect your metamask wallet</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null} */}
    </div>
  );
};

export default Navbar;
