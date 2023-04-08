// TODO: Some games have no image url. They are currently bypassed with a if statement.

const getCroppedImageUrl = (url: string) => {
	if (!url) return "";

	const target = "media/";
	const index = url.indexOf(target) + target.length;
	return url.slice(0, index) + "crop/600/400/" + url.slice(index);
};

export default getCroppedImageUrl;
