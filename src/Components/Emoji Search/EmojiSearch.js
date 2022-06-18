import React, { useState } from "react";
import Search from "./Search";
import emojiList from "./emojiList.json";
import Line from "./Line";
import Footer from "./Footer";

function EmojiSearch() {
  const title = "Emoji Search";

  const [lineTab, setLineTab] = useState([]);
  const [startSearch, setStartSearch] = useState(false);

  return (
    <>
      <Search
        title={title}
        emojiList={emojiList}
        startSearch={startSearch}
        setStartSearch={setStartSearch}
        lineTab={lineTab}
        setLineTab={setLineTab}
      />
      {!startSearch &&
        emojiList.slice(0, 10).map((emoji, index) => {
          const { title, symbol, keywords } = emoji;
          return (
            <Line
              key={index}
              title={title}
              symbol={symbol}
              keywords={keywords}
            />
          );
        })}
      {startSearch &&
        lineTab.slice(0, 10).map((emo, ind) => {
          const { title, symbol, keywords } = emo;
          return (
            <Line key={ind} title={title} symbol={symbol} keywords={keywords} />
          );
        })}
      <Footer />
    </>
  );
}

export default EmojiSearch;
