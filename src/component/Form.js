import React, { useState } from "react";
import { useSnackbar } from "notistack";
import { uploadImageToIpfs, NftMint, NftStatus } from "../action/nft";
const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    external_url: "",
  });
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [txn_id, setTxnId] = useState("");
  const { enqueueSnackbar } = useSnackbar();

  const handleSubmit = async (e) => {
    e.preventDefault();
    let address = localStorage.getItem("onec-address");
    if (!address) {
      enqueueSnackbar("Please connect your wallet", {
        variant: "error",
        autoHideDuration: 2000,
      });
      return;
    }

    // check image size if less than 3mb
    if (image.size > 3000000) {
      enqueueSnackbar("Image size should be less than 3mb", {
        variant: "error",
        autoHideDuration: 2000,
      });
      return;
    }

    // setLoading(true);
    const fdata = new FormData();
    // console.log("image", image);
    fdata.append("FILE", image);
    const ipfsHash = await uploadImageToIpfs(fdata);
    console.log("ipfsHash", ipfsHash);
    // enqueueSnackbar("Image uploaded to IPFS", {
    //   variant: "success",
    //   autoHideDuration: 2000,
    // });
    // const res = await NftMint(
    //   {
    //     name: formData.name,
    //     description: formData.description,
    //     image: ipfsHash.file_hashes[0].Hash,
    //     external_url: formData.external_url,
    //   },
    //   address
    // );
    // enqueueSnackbar("Metadata uploaded to ipfs", {
    //   variant: "success",
    //   autoHideDuration: 2000,
    // });
    // const myinterval = setInterval(async () => {
    //   const stat = await NftStatus(res.nft_ids[0]);
    //   if (stat.display == "Creation success") {
    //     setLoading(false);
    //     clearInterval(myinterval);
    //     setTxnId(stat.txn_id);
    //     enqueueSnackbar("NFT Minted Successfully!!", {
    //       variant: "success",
    //       autoHideDuration: 3000,
    //     });
    //     setFormData({
    //       name: "",
    //       description: "",
    //       external_url: "",
    //     });
    //     setImage("");
    //   }
    // }, 2000);
  };

  return (
    <div className="max-w-xl lg:max-w-screen-xl mx-auto lg:px-32">
      <div className="shadow-2xl rounded-2xl  bg-white ">
        <p className="text-2xl font-semibold px-6 pt-4 pb-4 border-b">
          Mint your NFTs on{" "}
          <span className="purple-text font-bold">Polygon</span>
        </p>
        <form onSubmit={handleSubmit} className="p-5 py-16">
          <div className="flex flex-wrap">
            <div className="md:w-2/5 w-full">
              <div className="mb-1 z-20 relative overflow-hidden ">
                <div className=" rounded-lg mx-4 flex flex-col justify-center items-center h-60 border-dashed border-2 border-black">
                  {image ? (
                    <img
                      src={URL.createObjectURL(image)}
                      alt="image"
                      style={{ height: "inherit", width: "inherit" }}
                      className="p-2"
                    />
                  ) : (
                    <>
                      {/* <span className="text-2xl">+</span> */}
                      <span>Browse Files</span>
                      <span className="text-xs text-gray-400">
                        Supports JPG, PNG and MP4 videos. Max file size : 3MB.
                      </span>
                    </>
                  )}
                </div>
                <input
                  type="file"
                  required
                  accept="image/*"
                  name="image"
                  className="absolute inset-0 opacity-0 text-transparent bg-transparent border-0"
                  multiple={false}
                  onChange={(e) => setImage(e.target.files[0])}
                />{" "}
                <br />
              </div>
            </div>
            <div className="md:w-3/5 w-full">
              <div className="mb-6">
                <label className="dark-text text-lg pb-2 font-semibold">
                  Title <span className="text-red-700">*</span>
                </label>
                <br />
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="Project Title"
                  className="border text-gray-600  px-2 w-full py-2  focus:outline-none rounded-lg transition duration-500 ease-in-out focus:ring-1 ring-black"
                />
              </div>
              <div className="mb-3">
                <label className="text-lg dark-text pb-2 font-semibold">
                  Description <span className="text-red-700">*</span>
                </label>
                <br />
                <textarea
                  type="text"
                  rows="3"
                  required
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                  placeholder="Short Description(max 300 characters)"
                  maxLength="300"
                  className="border text-gray-600 mb-2 px-2 w-full py-1 focus:outline-none rounded-lg transition duration-500 ease-in-out focus:ring-1 ring-black"
                />
              </div>

              <div className="mb-6">
                <label className="text-lg dark-text pb-2 font-semibold">
                  Social URL (optional)
                </label>
                <br />
                <input
                  type="text"
                  value={formData.external_url}
                  onChange={(e) =>
                    setFormData({ ...formData, external_url: e.target.value })
                  }
                  placeholder="Project URL"
                  className="border text-gray-600  px-2 w-full py-2 focus:outline-none rounded-lg transition duration-500 ease-in-out focus:ring-1 ring-black"
                />
              </div>

              <div className="mt-3">
                <button
                  type="submit"
                  disabled={loading}
                  className="dark-bg light-text font-semibold text-lg py-2 w-40 rounded-2xl focus:outline-none focus:shadow-outline"
                >
                  {loading ? "minting..." : "Mint your NFT"}
                </button>
                {txn_id && (
                  <a
                    href={`https://mumbai.polygonscan.com/tx/${txn_id}`}
                    target="_blank"
                    className="text-sm underline block mt-4 dark-text"
                  >
                    Click here to check Transaction
                  </a>
                )}
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
