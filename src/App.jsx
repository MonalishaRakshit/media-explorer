// import React from "react";
// import { fetchGIF, fetchPhotos, fetchVideos } from "./api/MediaApi";

// const App = () => {
//   const getPhotoes = async () => {
//     const data = await fetchPhotos("cat");
//     console.log(data.results);
//   };

//   return (
//     <div className="h-screen text-white w-full bg-gray-950">
//       <button className="bg-green-700 px-4 py-2 m-5" onClick={getPhotoes}>
//         Get Photos
//       </button>

//       <button
//         className="bg-green-700 px-4 py-2 m-5"
//         onClick={async () => {
//           const data = await fetchVideos("cat");
//           console.log(data.videos);
//         }}
//       >
//         Get Videos
//       </button>

//       <button
//         className="bg-green-700 px-4 py-2 m-5"
//         onClick={async () => {
//           const data = await fetchGIF("cat");
//           console.log(data.data);
//         }}
//       >
//         Get GIF
//       </button>
//     </div>
//   );
// };

// export default App;

//import React from "react";
import ResultGraid from "./components/ResultGraid";
import SearchBar from "./components/SearchBar";
import Tabs from "./components/Tabs";

const App = () => {
  return (
    <div className="min-h-screen text-white w-full bg-gray-950">
      <SearchBar />
      <Tabs />
      <ResultGraid />
    </div>
  );
};

export default App;
