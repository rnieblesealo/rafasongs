import { Song, type SongData } from "../src/components/Song"

let songs: SongData[] = [
  {
    coverPath: "/ill.jpg",
    title: "ill",
    date: new Date("08/28/2003"),
    teaser: "I need you",
    tags: [
      "Post-Punk",
      "Indie",
      "Upbeat",
      "FL"
    ]
  }
]

function App() {
  return (
    <div className="bg-black w-screen h-min">

      {/* Main heading */}
      <h1 className="text-white text-center w-screen h-min p-6 text-2xl italic">rafas songs</h1>

      {/* Songs container */}
      <div className="w-screen h-min flex flex-col items-center">
        {songs.map((song) => <Song {...song} />)}
      </div>

    </div>
  )
}

export default App