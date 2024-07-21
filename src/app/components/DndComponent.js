import React from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

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
  const [items, setItems] = React.useState([
    { id: "1", content: "Item 1" },
    { id: "2", content: "Item 2" },
    { id: "3", content: "Item 3" },
    { id: "4", content: "Item 4" },
  ]);

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
