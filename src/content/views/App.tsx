import { useEffect, useState } from "react";
import KodikPlayer from "@/components/KodikPlayer/KodikPlayer.tsx";
import { useKodik } from "@/hooks/UseKodik.ts";

export default function App() {
  const [url, setUrl] = useState("");
  const [shikimoriId, setShikimoriId] = useState<number | undefined>(undefined);
  const {kodikQuery} = useKodik(shikimoriId);

  useEffect(() => {
    chrome.runtime.sendMessage(
      {action: "getCurrentTabUrl"},
      (response) => setUrl(response)
    );
  }, []);

  useEffect(() => {
    const match = url.match(/\/(\d+)-/);
    const id = match ? parseInt(match[1], 10) : undefined;
    setShikimoriId(id);
  }, [url]);

  if (kodikQuery.isLoading) {
    return (
      <div className="b-db_entry">
        <div className="subheadline">
          Смотреть - Загрузка...
        </div>
      </div>
    );
  }
  if (kodikQuery.isError) {
    return (
      <div className="b-db_entry">
        <div className="subheadline">
          Смотреть - Ошибка загрузки данных
        </div>
      </div>
    );
  }

  return (
    <div className="b-db_entry">
      <div className="subheadline">Смотреть</div>
      {kodikQuery.data?.results?.[0]?.link && (
        <KodikPlayer kodikLink={kodikQuery.data.results[0].link}/>
      )}
    </div>
  );
}