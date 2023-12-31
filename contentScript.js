// (() => {
//   chrome.runtime.onMessage.addListener((obj, sender, response) => {
//     const { type, value, videoId } = obj;
//     console.log("object got");

//     if (type === "NEW") {
//       currentVideo = videoId;
//       newVideoLoaded();
//     } else if (type === "PLAY") {
//       youtubePlayer.currentTime = value;
//     } else if (type === "DELETE") {
//       currentVideoBookmarks = currentVideoBookmarks.filter(
//         (b) => b.time != value
//       );
//       chrome.storage.sync.set({
//         [currentVideo]: JSON.stringify(currentVideoBookmarks),
//       });

//       response(currentVideoBookmarks);
//     }
//   });
// })();
