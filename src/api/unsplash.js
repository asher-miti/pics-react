import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID eBu_MyCcoWp_zzr5KOTo9hycChelyjf__91fDh4UuWA",
  },
});
