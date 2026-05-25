import axios from "axios";
import { useEffect, useState } from "react";

const Colors = ({ onColorSelect, currentSelection }) => {
  const [colors, setColors] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const API_KEY = import.meta.env.VITE_API_KEY;
  const url = import.meta.env.VITE_API_WORKINTECH_URL;

  const getData = async () => {
    try {
      const response = await axios.get(url, {
        headers: {
          "x-api-key": API_KEY,
        },
      });
      setColors(response.data.data);
      setError(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError(true);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  if (loading) return <p>Yükleniyor...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="w-full max-w-117 px-2 mt-4">
      <div className="flex flex-wrap justify-center gap-3">
        {colors.map((item) => {
          const isSelected = currentSelection === item.color;

          return (
            <button
              key={item.id}
              title={`${item.name} (${item.pantone_value})`}
              onClick={() => {
                if (isSelected) {
                  onColorSelect("transparent");
                } else {
                  onColorSelect(item.color);
                }
              }}
              className={`w-8 h-8 md:w-7 md:h-7 rounded-full transition-all hover:scale-125 active:scale-95 relative group shadow-sm ${
                isSelected
                  ? "ring-2 ring-offset-2 dark:ring-offset-slate-950 scale-110"
                  : ""
              }`}
              style={{
                backgroundColor: item.color,
                borderColor: isSelected ? "#fff" : "transparent",
                boxShadow: isSelected ? `0 0 0 2px ${item.color}` : "",
              }}
            >
              <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden md:group-hover:block bg-slate-800 text-white text-[10px] py-1 px-2 rounded whitespace-nowrap z-10 pointer-events-none">
                {item.name}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Colors;
