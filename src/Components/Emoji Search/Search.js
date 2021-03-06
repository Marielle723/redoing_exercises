import React, { useState } from "react";

function Search({ title, emojiList, setStartSearch, lineTab, setLineTab }) {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();

    const letters = e.target.value;
    setSearch(letters);
    const newLineTab = [...lineTab];
    if (letters.length > 2) {
      setStartSearch(true);
      for (let i = 0; i < emojiList.length; i++) {
        const keywordsTab = emojiList[i].keywords.split(" ");
        // const goodWord = keywordsTab.filter(
        //   (keyword) => keyword.indexOf(letters) !== -1
        // );

        const goodWord = keywordsTab.filter((keyword) => keyword === letters);

        if (goodWord.length > 0) {
          newLineTab.push(emojiList[i]);

          setLineTab(newLineTab);

          goodWord.length = 0;
        }
      }
    } else {
      const newLineTab = [...lineTab];
      newLineTab.length = 0;
      setLineTab(newLineTab);
      setStartSearch(false);
    }
  };

  return (
    <div>
      <h1>😎{title}😎</h1>
      <input
        type="text"
        id="search"
        name="search"
        placeholder="What emoji are you looking for ?"
        onChange={(e) => handleSearch(e)}
        value={search}
      />
    </div>
  );
}

export default Search;
