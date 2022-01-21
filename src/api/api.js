import * as axios from "axios";

let baseURL = "";
if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
    // baseURL = 'http://localhost:5000/api/v1/'
    baseURL = "http://localhost:9000/api/v1/";
} else {
    // baseURL = 'http://localhost:5000/api/v1/'
    baseURL = "http://localhost:9000/api/v1/";
}


const instance = axios.create({
    baseURL: baseURL,
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json"
    }
});


export const SongAPI = {

    getSongsList(getOnlyFavor) {
        console.log("getSongsList");
        return instance.get("/cards?limit=999" + (getOnlyFavor ? "&favor=true" : ""));
        // return instance.get('/cards', {favor: false, name: ''})
    },

    getSong(songId) {
        debugger
        console.log("getSong+");
        let song = instance.get("/card?id=" + songId);
        console.log(song);
        console.log("getSong-");
        return song;
    },

    getSongRandom() {
        return instance.get("/cards?random=true&limit=1");
    },

    setFavor(songId, favor) {
        const result = instance.post("/cards", { _id: songId, favor: favor });
        return result;
    },

    setHide(songId, hide) {
        const result = instance.post("/cards", { _id: songId, hide: hide });
        return result;
    },

    setContent(songId, content) {
        return instance.post("/cards", { _id: songId, content: content });
    },

    addSong(name, content, favor) {
        return instance.post("/cards/add", { name: name, content: content, favor: favor });
    },

    deleteSong(songId) {
        return instance.delete("/cards", { data: { _id: songId } });
    }

};

