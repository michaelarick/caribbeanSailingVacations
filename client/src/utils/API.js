import axios from "axios";

export default {
  // Gets boats from the Node server API
  getBoats: function() {
    return axios.get("/api/boats");
  },
  // Deletes the saved boat with the given id
  deleteBoat: function(id) {
    return axios.delete("/api/boats/" + id);
  },
  // Saves an boat to the database
  saveBoat: function(boatData) {
    return axios.post("/api/boats", boatData);
  },
  // finds an existing user and logs them in
  userSignin: function(userData) {
    return axios.post("/api/signin", userData);
  },
  // creates a new user
  userCreate: function(userData) {
    return axios.post("/api/signup", userData);
  }
};
