import React, { ReactNode, useState } from "react";

const Context = React.createContext({
  isModalOpen: false,
  modalHandler: (): void => {},
});

type ContextProviderProps = {
  children: ReactNode;
};

const ContextProvider = (props: ContextProviderProps) => {
  const { children } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const modalHandler = () => {
    setIsModalOpen((state) => !state);
  };

  return (
    <Context.Provider value={{ isModalOpen, modalHandler }}>
      {children}
    </Context.Provider>
  );
};

export { Context, ContextProvider };
