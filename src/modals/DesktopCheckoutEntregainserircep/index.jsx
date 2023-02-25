import React from "react";
import ModalProvider from "react-modal";

import { Text, Img, Input } from "components";

const DesktopCheckoutEntregainserircepModal = (props) => {
  return (
    <>
      <ModalProvider
        appElement={document.getElementById("root")}
        className="m-[auto] !w-[41%]"
        overlayClassName="bg-bluegray_900_33 fixed flex h-[100%] inset-y-[0] w-[100%]"
        {...props}
      >
        <div className="max-h-[97vh] overflow-y-auto sm:w-[100%] md:w-[100%]">
          <div className="bg-white_A700 flex flex-col items-start justify-start mb-[161px] md:px-[20px] rounded-[8px] sm:w-[100%] w-[555px]">
            <div className="bg-white_A700 border-b-[1px] border-gray_300 border-solid flex items-start justify-center p-[16px] w-[100%]">
              <div className="flex items-center justify-start w-[100%]">
                <div className="flex flex-row gap-[4px] items-start justify-start sm:pr-[20px] pr-[32px] w-[100%]">
                  <div className="flex items-start justify-start w-[auto]">
                    <Text
                      className="text-bluegray_900 text-left w-[auto]"
                      as="h3"
                      variant="h3"
                    >
                      Novo endereço
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
            <div className="flex relative w-[369px]">
              <div className="flex flex-col gap-[8px] items-start justify-start my-[auto] px-[16px] py-[12px] w-[320px]">
                <div className="flex items-center justify-start w-[304px]">
                  <div className="flex items-start justify-start w-[auto]">
                    <Text
                      className="font-medium text-bluegray_800 text-left w-[auto]"
                      variant="body2"
                    >
                      CEP
                    </Text>
                  </div>
                </div>
                <Input
                  className="font-normal not-italic p-[0] text-[14px] placeholder:text-gray_500 text-gray_500 text-left w-[100%]"
                  wrapClassName="md:h-[auto] sm:h-[auto] w-[100%]"
                  name="FormsFieldoutlinedefault"
                  placeholder="Informe o CEP"
                  shape="RoundedBorder8"
                  size="xl"
                  variant="OutlineGray300"
                ></Input>
                <div className="flex items-center justify-start w-[100%]">
                  <div className="flex items-start justify-start w-[auto]">
                    <Text
                      className="font-medium text-indigo_900 text-left tracking-[-0.54px] w-[auto]"
                      variant="body2"
                    >
                      Não sei o CEP
                    </Text>
                  </div>
                </div>
              </div>
              <div className="border-[1px] border-indigo_900 border-solid flex h-[36px] md:h-[auto] items-center justify-center ml-[-35px] my-[auto] px-[16px] py-[14px] rounded-[18px] w-[auto] z-[1]">
                <div className="flex items-center justify-start w-[auto]">
                  <div className="flex items-center justify-center w-[auto]">
                    <Text
                      className="font-medium text-indigo_900 text-left w-[auto]"
                      variant="body2"
                    >
                      Procurar
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-start justify-end px-[16px] py-[12px] w-[100%]">
              <div className="bg-gray_500 flex h-[36px] md:h-[auto] items-center justify-center px-[16px] py-[14px] rounded-[18px] w-[auto]">
                <div className="flex items-center justify-start w-[auto]">
                  <div className="flex items-center justify-center w-[auto]">
                    <Text
                      className="font-medium text-gray_100 text-left w-[auto]"
                      variant="body2"
                    >
                      Adicionar
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ModalProvider>
    </>
  );
};

export default DesktopCheckoutEntregainserircepModal;
