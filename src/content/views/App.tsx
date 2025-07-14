import './App.css'
import KodikPlayer from "@/components/KodikPlayer/KodikPlayer.tsx";

function App() {
  return (
    <div className="b-db_entry">
      <div className="subheadline">
        Смотреть
      </div>
      <KodikPlayer videoId={123456} hash="abcd"/>
    </div>
  )
}

export default App
