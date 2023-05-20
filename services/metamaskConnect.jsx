import Swal from "sweetalert2";
import Web3 from "web3";

const connectMetamask = async () => {
  try {
    if (window.ethereum) {
      await window.ethereum.request({ method: "eth_requestAccounts" });
      const web3 = new Web3(window.ethereum);
      const message =
        "Your wallet address will be used for membership purposes.";
      const address = await web3.eth.getCoinbase();
      await web3.eth.personal.sign(message, address);
      return address;
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Metamask is not installed",
      });
    }
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: error.message,
    });
  }
};

export { connectMetamask };
