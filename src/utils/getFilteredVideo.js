 const getFilteredVideo = (video,categoryFilter) => {
     if(categoryFilter === "All") {
         return video;
     } else {
        return video.filter((item)=>  item.category === categoryFilter)
     }
  
}

export {getFilteredVideo}