import { v4 as uuidv4 } from "uuid";

import React from 'react'

const chillHop = () => {
  return [
      {
          name: "Riverside",
          artist: "SwuM, G Mills",
          cover: "https://chillhop.com/wp-content/uploads/2022/02/3f38419a1c54c6c8bdb2a2d5785a1b518f0e5ab6-1024x1024.jpg",
          id: uuidv4(),
          active: true,
          color: ["#5D6A7C", "#B4BFAE"],
          audio: "https://mp3.chillhop.com/serve.php/?mp3=31516"
      },
      {
          name: "Tidings",
          artist: "anbuu",
          cover: "https://chillhop.com/wp-content/uploads/2022/01/5753da482a6839b31e4905b22a2f8d65913e7eb4-1024x1024.jpg",
          id: uuidv4(),
          active: false,
          color: ["#FFEAD3", "#71A8C6"],
          audio: "https://mp3.chillhop.com/serve.php/?mp3=28973"
      },
      {
          name: "foliage bokeh",
          artist: "santpoort",
          cover: "https://chillhop.com/wp-content/uploads/2022/01/d7c0bd347f56540babd9dd85454b93a89df84a15-1024x1024.jpg",
          id: uuidv4(),
          active: false,
          color: ["#FC906B", "#71D6B9"],
          audio: "https://mp3.chillhop.com/serve.php/?mp3=30127"
      },
      {
          name: "Ending",
          artist: "sadtoi, Relyae",
          cover: "https://chillhop.com/wp-content/uploads/2022/01/5753da482a6839b31e4905b22a2f8d65913e7eb4-1024x1024.jpg",
          id: uuidv4(),
          active: false,
          color: ["#FDD9CB", "#749198"],
          audio: "https://mp3.chillhop.com/serve.php/?mp3=28969"
      },
      {
          name: "Tournament Arc",
          artist: "Sleepy Fish",
          cover: "https://chillhop.com/wp-content/uploads/2021/09/2ce75252f5419a45d76bb93424ac1eae3e688b17-1024x1024.jpg",
          id: uuidv4(),
          active: false,
          color: ["#108BE8", "#FEEBDD"],
          audio: "https://mp3.chillhop.com/serve.php/?mp3=24824"
      },
      {
          name: "Aftersome",
          artist: "Toonorth",
          cover: "https://chillhop.com/wp-content/uploads/2021/05/732128e1da8fd5f6292ffc1926a2ea840a54f4d0-1024x1024.jpg",
          id: uuidv4(),
          active: false,
          color: ["#374C6A", "#F9F9F9"],
          audio: "https://mp3.chillhop.com/serve.php/?mp3=17944"
      },
      {
          name: "There and Back",
          artist: "Delayde, anybodyy",
          cover: "https://chillhop.com/wp-content/uploads/2021/09/6a9ef8ac00e168d3308fdf9e336874c03fab829d-1024x1024.jpg",
          id: uuidv4(),
          active: false,
          color: ["#652AC0", "#ABF8A2"],
          audio: "https://mp3.chillhop.com/serve.php/?mp3=23192"
      }
  ]
}

export default chillHop;