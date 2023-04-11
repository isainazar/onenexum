import React, { useState, useEffect } from "react";

function TextSelector() {
  const [selectedText, setSelectedText] = useState("");
  const [highlightedText, setHighlightedText] = useState("");

  const handleTextSelect = () => {
    const selection = window.getSelection();
    const selectedString = selection.toString();

    if (selectedString !== "") {
      const anchorNode = selection.anchorNode.parentNode;
      const focusNode = selection.focusNode.parentNode;
      const startIndex = Array.from(anchorNode.childNodes).indexOf(anchorNode);
      const endIndex = Array.from(focusNode.childNodes).indexOf(focusNode);

      const selectedNodes = Array.from(anchorNode.parentNode.childNodes).slice(
        startIndex,
        endIndex + 1
      );

      selectedNodes.forEach((node) => {
        const text = node.textContent;
        const highlighted = text.replace(
          new RegExp(selectedString, "g"),
          `<mark>${selectedString}</mark>`
        );
        node.innerHTML = highlighted;
      });

      setSelectedText(selectedString);
      setHighlightedText(selectedNodes.map((node) => node.innerHTML).join(""));
    } else {
      setHighlightedText("");
    }
  };

  const handleSelectionChange = () => {
    setHighlightedText("");
  };

  useEffect(() => {
    document.addEventListener("selectionchange", handleSelectionChange);
    return () => {
      document.removeEventListener("selectionchange", handleSelectionChange);
    };
  }, []);

  return (
    <div
      onTouchStart={handleTextSelect}
      onMouseDown={handleTextSelect} // Para soportar dispositivos con ratón
    >
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac urna
        turpis. Proin vestibulum quam vel nibh iaculis, eu malesuada diam
        tristique.
      </p>
      <p>Selected Text: {selectedText}</p>
      <div dangerouslySetInnerHTML={{ __html: highlightedText }}></div>
    </div>
  );
}

export default TextSelector;
