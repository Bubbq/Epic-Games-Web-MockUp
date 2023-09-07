//cuts down background images to load faster for shittier devices

const getCroppedImgUrl = (url: string) => {
    const target = 'media/';
    const index = url.indexOf(target) + target.length;//heres where you can crop the images on the fly
    return url.slice(0, index) + 'crop/600/400/' + url.slice(index); //grabs all the characters from the beginning to the end of '/media/ <- there!, adds the crop, then inputs the rest of the string, then returns this new url
    

}

export default getCroppedImgUrl;