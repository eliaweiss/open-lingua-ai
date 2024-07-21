import React, { useEffect } from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useAppContext } from "../../context/AppContext";
import { Input } from "../../components/Input";
import SelectComponent from "./SelectComponent";
import { PlusCircleIcon, TrashIcon } from "@heroicons/react/24/solid";
const ItemType = "ITEM";

const DraggableItemContent = ({ rSetting, index }) => {
  const { getLanguageName, readSettingsArray, setReadSettingsArray } =
    useAppContext();

  function trash(index) {
    if (readSettingsArray.list.length < 2) return;
    if (index > -1) {
      readSettingsArray.list.splice(index, 1);
    }
    setReadSettingsArray({ ...readSettingsArray });
  }
  function changeValue(name, value) {
    readSettingsArray.list[index][name] = value;
    setReadSettingsArray({ ...readSettingsArray });
  }

  const options = [
    { value: "target", label: getLanguageName("target") },
    { value: "src", label: getLanguageName("src") },
  ];
  return (
    <div className="">
      <div className="flex space-x-2 ">
        <div className="flex-1 ">
          <div className="text-xs">Lang</div>
          {/* <div className="font-bold">{getLanguageName(rSetting.lang)}</div> */}
          <div className="font-bold">
            <SelectComponent
              options={options}
              value={rSetting.lang}
              onChange={(value) => changeValue("lang", value)}
            />
          </div>
        </div>
        <div className="flex-1">
          <div className="text-xs">Accented</div>
          <div className="font-bold">
            <Input
              size="3"
              value={rSetting.isAccented}
              onChange={(e) => changeValue("isAccented", e.target.value)}
            />
          </div>
        </div>
        <div className="flex-1">
          <div className="text-xs">Speed</div>
          <div className="font-bold">
            <Input
              size="3"
              value={rSetting.rate}
              onChange={(e) => changeValue("rate", e.target.value)}
            />
          </div>
        </div>
        <div className="flex-1">
          <div className="text-xs">Wait After</div>

          <div className="font-bold">
            <Input
              size="1"
              value={rSetting.waitAfter}
              onChange={(e) => changeValue("waitAfter", e.target.value)}
            />
          </div>
        </div>
        <div className="">
          <TrashIcon className="w-5 pt-3" onClick={() => trash(index)} />
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

  function addReadSettings() {
    readSettingsArray.list.push({
      lang: "target",
      waitAfter: 1,
      rate: 1,
      isAccented: false,
    });
    setReadSettingsArray({ ...readSettingsArray });
  }

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
          <div className="flex justify-end w-full">
            <div
              className=" flex space-x-2 cursor-pointer"
              onClick={addReadSettings}
            >
              <div className="">Add</div>
              <PlusCircleIcon className="w-6 " />
            </div>
          </div>
        </div>
      </DndProvider>
    </>
  );
};

export default DndComponent;
