import React from "react";
import Search from "./Search";
import emojiList from "./emojiList.json";
import Line from "./Line";
import Footer from "./Footer";

function EmojiSearch() {
  const title = "Emoji Search";

  return (
    <>
      <Search title={title} emojiList={emojiList} />
      {emojiList.slice(0, 10).map((emoji, index) => {
        const { title, symbol, keywords } = emoji;
        return (
          <Line key={index} title={title} symbol={symbol} keywords={keywords} />
        );
      })}
      <Footer />
    </>
  );
}

export default EmojiSearch;
