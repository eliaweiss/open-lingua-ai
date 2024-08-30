import React, { useEffect } from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { TouchBackend } from "react-dnd-touch-backend";
import { useAppContext } from "../../context/AppContext";
import { Input } from "../../components/Input";
import SelectComponent from "../../components/SelectComponent";
import CheckboxComponent from "../../components/CheckboxComponent";
import { PlusCircleIcon, TrashIcon } from "@heroicons/react/24/solid";
import { useTranslation } from "@/app/i18n/useTranslation";

const ItemType = "ITEM";

const DraggableItemContent = ({ rSetting, index }) => {
  const t = useTranslation(); // Use the translation hook

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
      <div
        className={`flex space-x-2 px-2 mb-2 ${
          rSetting.lang === "src" ? "bg-[#08679a2a]" : ""
        }`}
      >
        <div className="flex-1">
          <div className="text-xs">{t("lang")}</div>
          <div className="font-bold">
            <SelectComponent
              options={options}
              value={rSetting.lang}
              onChange={(value) => changeValue("lang", value)}
            />
          </div>
        </div>
        <div className="flex-1">
          <div className="text-xs">{t("accented")}</div>
          <div className="font-bold">
            <CheckboxComponent
              disabled={rSetting.lang === "src"}
              checked={rSetting.isAccented}
              onChange={() => changeValue("isAccented", !rSetting.isAccented)}
            />
          </div>
        </div>
        <div className="flex-1">
          <div className="text-xs">{t("speed")}</div>
          <div className="font-bold text-black">
            <Input
              value={rSetting.rate}
              onChange={(e) => changeValue("rate", e.target.value)}
              type="number"
              class="w-[3em]"
            />
          </div>
        </div>
        <div className="flex-1">
          <div className="text-xs">{t("wait_after")}</div>
          <div className="font-bold text-black">
            <Input
              value={rSetting.waitAfter}
              onChange={(e) => changeValue("waitAfter", e.target.value)}
              type="number"
              class="w-[2em]"
            />
          </div>
        </div>
        <div>
          <TrashIcon
            className="w-5 pt-3 cursor-pointer"
            onClick={() => trash(index)}
          />
        </div>
      </div>
    </div>
  );
};

const DraggableItem = ({
  id,
  content,
  index,
  moveItemCallback,
  hoverItemCallback,
  currentHoverItemIndex,
}) => {
  const [, ref] = useDrag({
    type: ItemType,
    item: { id, index },
    end: () => {
      hoverItemCallback(null);
    },
  });

  const [, drop] = useDrop({
    accept: ItemType,
    drop: (draggedItem) => {
      if (draggedItem.index !== index) {
        moveItemCallback(draggedItem.index, index);
        draggedItem.index = index;
      }
    },
    hover: (draggedItem) => {
      if (draggedItem.index === index) {
        hoverItemCallback(null);
      } else {
        hoverItemCallback(index);
      }
    },
  });

  return (
    <div
      ref={(node) => ref(drop(node))}
      className="user-select-none bg-primary-foreground shadow cursor-pointer rounded transform transition-transform duration-300 hover:scale-105"
    >
      <div className={`${currentHoverItemIndex == index && "opacity-10"}`}>
        {content}
      </div>
    </div>
  );
};

const ReadSettingDnd = () => {
  const t = useTranslation(); // Use the translation hook

  const { readSettingsArray, setReadSettingsArray } = useAppContext();
  const [items, setItems] = React.useState([]);
  const [currentHoverItemIndex, setHoverItemIndex] = React.useState(null);

  useEffect(() => {
    if (!readSettingsArray) return;
    setItems(
      readSettingsArray.list.map((rSetting, index) => ({
        id: index.toString(), // Ensure unique ids
        content: <DraggableItemContent rSetting={rSetting} index={index} />,
        item: rSetting,
      }))
    );
  }, [readSettingsArray]);

  const moveItemCallback = (fromIndex, toIndex) => {
    const updatedItems = [...items];
    const [movedItem] = updatedItems.splice(fromIndex, 1);
    updatedItems.splice(toIndex, 0, movedItem);
    setItems(updatedItems);

    readSettingsArray.list = updatedItems.map((rSetting) => rSetting.item);
    setReadSettingsArray({ ...readSettingsArray });
  };

  const hoverItemCallback = (index) => {
    setHoverItemIndex(index);
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

  const isTouchDevice = () => {
    return "ontouchstart" in window || navigator.maxTouchPoints > 0;
  };

  return (
    <>
      <DndProvider backend={isTouchDevice() ? TouchBackend : HTML5Backend}>
        <div className="p-1 max-w-[500px] bg-card rounded">
          {items.map((item, index) => (
            <DraggableItem
              key={item.id}
              id={item.id}
              content={item.content}
              index={index}
              currentHoverItemIndex={currentHoverItemIndex}
              moveItemCallback={moveItemCallback}
              hoverItemCallback={hoverItemCallback}
            />
          ))}
          <div className="flex justify-end w-full">
            <div
              className="flex space-x-2 cursor-pointer"
              onClick={addReadSettings}
            >
              <div>{t("advance")}</div>
              <PlusCircleIcon className="w-6" />
            </div>
          </div>
        </div>
      </DndProvider>
    </>
  );
};

export default ReadSettingDnd;
