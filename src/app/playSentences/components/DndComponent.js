import React, { useEffect } from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useAppContext } from "../../context/AppContext";
import { Input } from "../../components/Input";

const ItemType = "ITEM";

const DraggableItemContent = ({ rSetting, index }) => {
  const { getLanguageName, readSettingsArray, setReadSettingsArray } =
    useAppContext();
  function changeRate(value) {
    readSettingsArray.list[index].rate = value;
    setReadSettingsArray({ ...readSettingsArray });
  }
  return (
    <div className="">
      <div className="flex space-x-2  ">
        <div className="flex-1 ">
          <div className="text-xs">Lang</div>
          <div className="font-bold">{getLanguageName(rSetting.lang)}</div>
        </div>
        <div className="flex-1">
          <div className="text-xs">Speed</div>
          <div className="font-bold">
            <Input
              value={rSetting.rate}
              onChange={(e) => changeRate(e.target.value)}
            />
          </div>
        </div>
        <div className="flex-1">
          <div className="text-xs">Wait After</div>

          <div className="font-bold">{rSetting.waitAfter}</div>
        </div>
      </div>
    </div>
  );
};
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
      className="user-select-none p-4 mb-2 bg-primary-foreground shadow cursor-pointer rounded mt-2 px-2 transform transition-transform duration-300 hover:scale-105"
    >
      {content}
    </div>
  );
};

const DndComponent = () => {
  const { readSettingsArray, setReadSettingsArray } = useAppContext();

  const [items, setItems] = React.useState([]);

  useEffect(() => {
    if (!readSettingsArray) return;
    setItems(
      readSettingsArray.list.map((rSetting, index) => ({
        id: "index",
        content: <DraggableItemContent rSetting={rSetting} index={index} />,
        item: rSetting,
      }))
    );
  }, [readSettingsArray]);

  const moveItem = (fromIndex, toIndex) => {
    const updatedItems = [...items];
    const [movedItem] = updatedItems.splice(fromIndex, 1);
    updatedItems.splice(toIndex, 0, movedItem);
    setItems(updatedItems);

    readSettingsArray.list = updatedItems.map(
      (rSetting, index) => rSetting.item
    );
    setReadSettingsArray({ ...readSettingsArray });
  };

  return (
    <>
      <DndProvider backend={HTML5Backend}>
        <div className="p-4 max-w-[500px] bg-card rounded">
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
    </>
  );
};

export default DndComponent;
