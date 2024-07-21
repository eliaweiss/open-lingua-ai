import React, { useEffect } from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useAppContext } from "../../context/AppContext";

const ItemType = "ITEM";

const DraggableItem = ({ id, content, index, moveItem }) => {
  const [, ref] = useDrag({
    type: ItemType,
    item: { id, index },
  });

  const [, drop] = useDrop({
    accept: ItemType,
    hover: (draggedItem) => {
      if (draggedItem.index !== index) {
        moveItem(draggedItem.index, index);
        draggedItem.index = index;
      }
    },
  });

  return (
    <div
      ref={(node) => ref(drop(node))}
      className="user-select-none p-4 mb-2 bg-white rounded shadow"
    >
      {content}
    </div>
  );
};

const DndComponent = () => {
  const { readSettingsArray, setReadSettingsArray, getLanguageName } =
    useAppContext();

  const [items, setItems] = React.useState([]);

  useEffect(() => {
    if (!readSettingsArray) return;
    setItems(
      readSettingsArray.list.map((item, index) => ({
        id: "index",
        content: `Item ${index}`,
        item,
      }))
    );
  }, [readSettingsArray]);

  const moveItem = (fromIndex, toIndex) => {
    const updatedItems = [...items];
    const [movedItem] = updatedItems.splice(fromIndex, 1);
    updatedItems.splice(toIndex, 0, movedItem);
    setItems(updatedItems);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="p-4 w-64 bg-gray-100 rounded">
        {items.map((item, index) => (
          <DraggableItem
            key={item.id}
            id={item.id}
            content={item.content}
            index={index}
            moveItem={moveItem}
          />
        ))}
      </div>
    </DndProvider>
  );
};

export default DndComponent;
