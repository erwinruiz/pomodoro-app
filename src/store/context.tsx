import React, { ReactNode, useState } from "react";

const Context = React.createContext({
  isModalOpen: false,
  modalHandler: (): void => {},
  colorHandler: (color: string): void => {},
  color: "primary",
  timeType: "pomodoro",
  timeTypeHandler: (type: string) => {},
  timeTypeSetting: { pomodoro: 25, shortBreak: 5, longBreak: 15 },
  timeTypeSettingHandler: (timeTypeSetting: {
    pomodoro: number;
    shortBreak: number;
    longBreak: number;
  }) => {},
  fontFamily: "Kumbh Sans",
  fontFamilyHandler: (font: string) => {},
});

type ContextProviderProps = {
  children: ReactNode;
};

const ContextProvider = (props: ContextProviderProps) => {
  const { children } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [color, setColor] = useState("primary");
  const [timeType, setTimeType] = useState("pomodoro");
  const [timeTypeSetting, setTimeTypeSetting] = useState({
    pomodoro: 25,
    shortBreak: 5,
    longBreak: 15,
  });
  const [fontFamily, setFontFamily] = useState("Kumbh Sans");

  const modalHandler = () => {
    setIsModalOpen((state) => !state);
  };

  const colorHandler = (color: string) => {
    setColor(color);
  };

  const timeTypeHandler = (type: string) => {
    setTimeType(type);
  };

  const timeTypeSettingHandler = (timeTypeSetting: {
    pomodoro: number;
    shortBreak: number;
    longBreak: number;
  }) => {
    setTimeTypeSetting(timeTypeSetting);
  };

  const fontFamilyHandler = (font: string) => {
    setFontFamily(font);
    document.documentElement.style.setProperty(
      "--font-family",
      `${font}, sans-serif`
    );
  };

  return (
    <Context.Provider
      value={{
        isModalOpen,
        modalHandler,
        colorHandler,
        color,
        timeTypeHandler,
        timeType,
        timeTypeSetting,
        timeTypeSettingHandler,
        fontFamily,
        fontFamilyHandler,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { Context, ContextProvider };
