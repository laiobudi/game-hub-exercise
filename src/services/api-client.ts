import axios from "axios";

export default axios.create({
	baseURL: "https://api.rawg.io/api",
	params: {
		key: "29ce8a21f2614c64bb33d0637af112c5",
	},
});
