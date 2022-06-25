import { useState } from "react";
import "./App.css";

function App() {
  const [character, setCharacter] = useState("");
  // console.log(character, "character");

  function countChar(char) {
    let result = "";
    for (let i = 0; i < char.length; i++) {
      result += char[i];
    }
    return result.length;
  }

  function countWord(char) {
    return char.split(" ").filter((n) => n !== "").length;
  }

  function countDensity(char) {
    let toLowerCase = char.toLowerCase();
    let replaceChar = toLowerCase.replace(/[.,?!|&;$%@"<>()+]/g, "");

    let kataSambung = [
      "ketika",
      "pada",
      "nah",
      "apa",
      "apakah",
      "ini",
      "di",
      "dalam",
      "dan",
      "yang",
      "dengan",
      "dari",
      "serta",
      "lagipula",
      "setelah",
      "sejak",
      "selanjutnya",
      "tetapi",
      "melainkan",
      "sedangkan",
      "atau",
      "ataupun",
      "maupun",
      "untuk",
      "agar",
      "supaya",
      "sebab",
      "karena",
      "sehingga",
      "sampai",
      "akibatnya",
      "lalu",
      "kemudian",
      "jika",
      "maka",
      "jikalau",
      "apabila",
      "kalau",
      "walaupun",
      "meskipun",
      "biarpun",
      "seperti",
      "sebagai",
      "bagaikan",
      "biar",
      "biarpun",
      "tidak hanya",
      "bukannya",
      "bahkan",
      "yaitu",
      "yakni",
      "kecuali",
      "selain",
      "itu",
      "bahwa",
      "daripada",
    ];

    let filterChar = replaceChar.split(" ").filter((c) => c !== "");

    let arrBaruLagi = [];

    for (let i = 0; i < filterChar.length; i++) {
      let flag = true;
      for (let j = 0; j < kataSambung.length; j++) {
        if (filterChar[i] === kataSambung[j]) {
          flag = false;
        }
      }

      if (flag) {
        arrBaruLagi.push(filterChar[i]);
      }
    }

    const obj = {};

    for (let i = 0; i < arrBaruLagi.length; i++) {
      obj[arrBaruLagi[i]] = (obj[arrBaruLagi[i]] || 0) + 1;
    }

    return obj;
  }

  // console.log(countDensity(character));

  return (
    <div className="App">
      <header className="App-header">
        <p>Word Counter</p>
      </header>
      <div className="wordWrapper">
        <div className="inputText">
          <textarea
            type="text"
            placeholder="Insert text"
            onChange={(e) => setCharacter(e.target.value)}
          />
        </div>
        <div className="hasilText">
          <div className="statics">
            <div className="title">Statistics</div>
            <div className="groupStatistic">
              <div className="countWords">
                <div className="word">Words</div>
                <div className="count">{countWord(character)}</div>
              </div>
              <div className="countWords">
                <div className="word">Characters</div>
                <div className="count">{countChar(character)}</div>
              </div>
            </div>
          </div>
          <div className="statics">
            <div className="title">Keyword Density</div>
            {Object.entries(countDensity(character)).map((char, index) => (
              <div className="wordsDensity" key={index}>
                <div className="listWord">{char[0]}</div>
                <div className="jmlWord">{char[1]}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
