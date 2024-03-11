// import React, { useRef } from "react";
// import { useSpring, animated } from "react-spring";
// import "./styles.css"; // Import Tailwind CSS styles

// import birthdaySong from "./audio/happy-birthday-155461.mp3";
// import cakeImage from "./images/cakegif.gif";
// import img1 from "./images/img1.jpg";
// import img2 from "./images/img2.jpg";
// import img3 from "./images/img3.jpg";
// import img4 from "./images/img4.jpg";

// const BirthdayCard = () => {
//   const audioRef = useRef();
//   const props = useSpring({ opacity: 1, from: { opacity: 0 } });

//   const playAudio = () => {
//     if (audioRef.current) {
//       audioRef.current.currentTime = 0;
//       audioRef.current.play().catch((error) => {
//         console.error("Failed to play audio:", error);
//       });
//     }
//   };

//   return (
//     <animated.div
//       style={props}
//       className="body text-white h-screen relative overflow-hidden"
//     >
//       <div className="header-container">
//         <h1 className="header">Happy Birthday, Renu!</h1>
//       </div>
//       <div className="container">
//         <div className="card">
//           <div className="inside bg-yellow-300 shadow-inner transform rotate-y-180 p-4 rounded">
//             <img src={cakeImage} alt="Cake" />
//             <h3 className="text-lg font-bold mt-4">
//               Sending you an infinite amount of love, joy, and happiness on your
//               birthday!
//             </h3>
//           </div>
//         </div>
//       </div>

//       <div className="frames-container">
//         <div className="frames frame1 bg-coral">
//           <img
//             src={img1}
//             alt="Image 1"
//             className="w-125 h-125 rounded-full shadow"
//           />
//           <p className="text-xl font-bold transform rotate-y-180">
//             Keep smiling, Keep shining
//           </p>
//         </div>
//         <div className="frames frame2 bg-goldenrod">
//           <img
//             src={img2}
//             alt="Image 2"
//             className="w-125 h-125 rounded-full shadow"
//           />
//           <p className="text-xl font-bold transform rotate-y-180">
//             On this occasion, I bring you a lot of happiness and success
//           </p>
//         </div>
//         <div className="frames frame3 bg-burlywood">
//           <img
//             src={img3}
//             alt="Image 3"
//             className="w-125 h-125 rounded-full shadow"
//           />
//           <p className="text-xl font-bold transform rotate-y-180">
//             May God bless you on your birthday, and always
//           </p>
//         </div>
//         <div className="frames frame4 bg-green-500">
//           <img
//             src={img4}
//             alt="Image 4"
//             className="w-125 h-125 rounded-full shadow"
//           />
//           <p className="text-xl font-bold transform rotate-y-180">
//             Your special day is filled with joy and laughter!
//           </p>
//         </div>
//       </div>

//       <button onClick={playAudio} className="m-2 p-2 bg-green-500 text-white">
//         Play Birthday Song
//       </button>

//       <audio ref={audioRef} src={birthdaySong} />
//     </animated.div>
//   );
// };

// export default BirthdayCard;

import React, { useRef } from "react";
import { useSpring, animated } from "react-spring";
import { Guitar } from "lucide-react"; // Import the Guitar icon
import "./styles.css"; // Import Tailwind CSS styles

import birthdaySong from "./audio/happy-birthday-155461.mp3";
// import cakeImage from "./images/cakegif.gif";
import img5 from "./images/img5.png";
import img1 from "./images/img1.jpg";
import img2 from "./images/img2.jpg";
import img3 from "./images/img3.jpg";
import img4 from "./images/img4.jpg";

const BirthdayCard = () => {
  const audioRef = useRef();
  const props = useSpring({ opacity: 1, from: { opacity: 0 } });

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch((error) => {
        console.error("Failed to play audio:", error);
      });
    }
  };

  return (
    <animated.div
      style={props}
      className="body text-white h-screen relative overflow-hidden"
    >
      <div className="header-container">
        <h1 className="header">
          Happy Birthday{" "}
          <span>
            <i>Renu</i>
          </span>
        </h1>
      </div>
      <div className="container">
        <div className="card">
          {/* <div className="outside bg-blanchedalmond shadow-inner p-4 rounded">
            <h1 className="text-3xl font-bold text-salmon mb-6">
              Happy Birthday, Renu!
            </h1>
            <h3>
              My dear best friend, may God bless you with abundant joy on your
              birthday and always! Thank you for always being by my side and
              having my back.
            </h3>
          </div> */}
          <div className="inside bg-yellow-300 shadow-inner transform rotate-y-180 p-4 rounded">
            <img src={img5} alt="Cake" />
            <h3 className="text-lg font-bold mt-4">
              Happy Birthday to the queen of sparkle! Let's make this year as
              fabulous as you are!
            </h3>
          </div>
        </div>
      </div>

      <div className="frames-container">
        <div className="frames frame1 bg-coral">
          <img
            src={img1}
            alt="Image 1"
            className="w-125 h-125 rounded-full shadow"
          />
          <p className="text-xl font-bold transform rotate-y-180">
            Keep slaying, keep smiling, and let the good times roll!
          </p>
        </div>
        <div className="frames frame2 bg-goldenrod">
          <img
            src={img2}
            alt="Image 2"
            className="w-125 h-125 rounded-full shadow"
          />
          <p className="text-xl font-bold transform rotate-y-180">
            May your special day be as epic as you are!
          </p>
        </div>
        <div className="frames frame3 bg-burlywood">
          <img
            src={img3}
            alt="Image 3"
            className="w-125 h-125 rounded-full shadow"
          />
          <p className="text-xl font-bold transform rotate-y-180">
            May God's love light up your world.
          </p>
        </div>
        <div className="frames frame4 bg-green-500">
          <img
            src={img4}
            alt="Image 4"
            className="w-125 h-125 rounded-full shadow"
          />
          <p className="text-xl font-bold transform rotate-y-180">
            Keep shining bright with love and happiness!
          </p>
        </div>
      </div>

      <button
        onClick={playAudio}
        className="absolute top-0 left-0 m-2 p-2 bg-green-500 text-white"
      >
        <Guitar />
      </button>

      <audio ref={audioRef} src={birthdaySong} />
    </animated.div>
  );
};

export default BirthdayCard;
