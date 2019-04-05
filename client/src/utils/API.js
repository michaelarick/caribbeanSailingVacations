import axios from "axios";
import filterParams from "./filterParams";

export default {
  // Gets boats from the NYT API
  getBoats: function(params) {
    return axios.get("/api/boats", { params: filterParams(params) });
  },
  // Deletes the saved article with the given id
  deleteBoat: function(id) {
    return axios.delete("/api/boats/" + id);
  },
  // Saves an article to the database
  saveBoat: function(boatData) {
    return axios.post("/api/boats", boatData);
  }
};
