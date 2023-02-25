import React from "react";
import ModalProvider from "react-modal";

import { Text, Img } from "components";

const LoginesqueciminhasenhaetapaTwoModal = (props) => {
  return (
    <>
      <ModalProvider
        appElement={document.getElementById("root")}
        className="m-[auto] !w-[41%]"
        overlayClassName="bg-bluegray_900_33 fixed flex h-[100%] inset-y-[0] w-[100%]"
        {...props}
      >
        <div className="max-h-[97vh] overflow-y-auto sm:w-[100%] md:w-[100%]">
          <div className="bg-white_A700 flex flex-col items-start justify-start md:px-[20px] rounded-[8px] sm:w-[100%] w-[555px]">
            <div className="bg-white_A700 border-b-[1px] border-gray_300 border-solid flex items-start justify-center p-[16px] w-[100%]">
              <div className="flex items-center justify-start w-[100%]">
                <div className="flex flex-row gap-[4px] items-start justify-start sm:pr-[20px] pr-[32px] w-[100%]">
                  <div className="flex items-start justify-start w-[auto]">
                    <Text
                      className="text-bluegray_900 text-left w-[auto]"
                      as="h3"
                      variant="h3"
                    >
                      Esqueci minha senha
                    </Text>
                  </div>
                  <Img
                    src="images/img_close.svg"
                    className="common-pointer h-[24px] w-[24px]"
                    onClick={props.onRequestClose}
                    alt="close"
                  />
                </div>
              </div>
            </div>
            <div className="bg-white_A700 flex flex-col gap-[16px] items-center justify-center pb-[32px] pt-[16px] px-[16px] w-[100%]">
              <div className="flex h-[80px] items-center justify-start w-[80px]">
                <Img
                  src="images/img_imagem_35.png"
                  className="h-[80px] md:h-[auto] object-cover w-[80px]"
                  alt="Imagem"
                />
              </div>
              <div className="flex items-start justify-start w-[auto]">
                <Text
                  className="text-bluegray_800 text-left w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  Instruções enviadas!
                </Text>
              </div>
              <Text
                className="font-normal not-italic text-bluegray_500 text-center w-[auto]"
                variant="body2"
              >
                Por favor, verifique seu e-mail ou aplicativo de mensagens.
              </Text>
            </div>
          </div>
        </div>
      </ModalProvider>
    </>
  );
};

export default LoginesqueciminhasenhaetapaTwoModal;
