import axios from "axios";
const url = "https://api.onec.in/api/v1/naas";

const contract_address = process.env.REACT_APP_NAAS_CONTRACT_ADDRESS; //your contract address
const contract_type = "721"; //your contract type

const getApikeyurl = "http://localhost:6969/uploadimage";
const apiKey = "ff189e70-b00a-4f33-9f29-81f48931f6a4";

export const uploadImageToIpfs = async (file) => {
  // try {
  //   // let apiKey = await axios.get(getApikeyurl);
  //   // apiKey = apiKey.data;
  //   // console.log("apiKey", apiKey);
  //   const res = await axios.post(`${url}/ipfsFile/`, file, {
  //     headers: {
  //       "NAAS-APIKEY": apiKey,
  //     },
  //   });
  //   return res.data;
  // } catch (e) {
  //   console.log(e);
  // }
  console.log("file", file);
  const res = await axios.post(getApikeyurl, file);
  // console.log("res", res);
};

export const NftMint = async (nftmetadata, address) => {
  var data = {
    metadata_list: [
      {
        public_address: address,
        metadata: nftmetadata,
      },
    ],
    contract_address: contract_address,
    contract_type: contract_type,
  };
  console.log(data);

  if (data.metadata_list[0].public_address == undefined) {
    return "Ethereum Address is required";
  } else {
    try {
      let apiKey = await axios.get(getApikeyurl);
      apiKey = apiKey.data;
      const res = await axios.post(`${url}/mintNFT/`, data, {
        headers: {
          "Content-Type": "application/json",
          "NAAS-APIKEY": apiKey,
        },
      });
      return res.data;
    } catch (error) {
      console.log("error", error);
    }
  }
};

export const NftStatus = async (nft_id) => {
  try {
    if (nft_id == undefined) {
      return "NFT ID is required";
    } else {
      let apiKey = await axios.get(getApikeyurl);
      apiKey = apiKey.data;
      const res = await axios.get(`${url}/checkMintStatus/${nft_id}`, {
        headers: {
          "Content-Type": "application/json",
          "NAAS-APIKEY": apiKey,
        },
      });

      return res.data;
    }
  } catch (e) {
    console.log(e);
  }
};
