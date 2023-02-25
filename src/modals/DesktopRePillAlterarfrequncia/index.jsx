import React from "react";
import ModalProvider from "react-modal";

import { Text, Img, Button } from "components";

const DesktopRePillAlterarfrequnciaModal = (props) => {
  return (
    <>
      <ModalProvider
        appElement={document.getElementById("root")}
        className="m-[auto] !w-[36%]"
        overlayClassName="bg-bluegray_900_33 fixed flex h-[100%] inset-y-[0] w-[100%]"
        {...props}
      >
        <div className="max-h-[97vh] overflow-y-auto sm:w-[100%] md:w-[100%]">
          <div className="bg-white_A700 flex flex-col items-center justify-start md:px-[20px] rounded-[8px] sm:w-[100%] w-[480px]">
            <div className="bg-white_A700 border-b-[1px] border-gray_300 border-solid flex items-start justify-center p-[16px] w-[100%]">
              <div className="flex items-center justify-start w-[100%]">
                <div className="flex flex-row gap-[4px] items-start justify-start sm:pr-[20px] pr-[32px] w-[100%]">
                  <div className="flex items-start justify-start w-[auto]">
                    <Text
                      className="text-bluegray_900 text-left w-[auto]"
                      as="h3"
                      variant="h3"
                    >
                      Alterar frequência
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
            <div className="border-b-[1px] border-gray_300 border-solid flex flex-col gap-[16px] items-start justify-start p-[16px] w-[100%]">
              <div className="flex items-start justify-start w-[100%]">
                <div className="border-b-[1px] border-gray_300 border-solid sm:h-[179px] h-[79px] relative w-[100%]">
                  <div className="border-b-[1px] border-gray_300 border-solid flex-1 h-[79px] m-[auto] w-[100%]"></div>
                  <div className="absolute flex flex-1 sm:flex-col flex-row gap-[16px] h-[100%] inset-[0] items-center justify-between m-[auto] w-[100%]">
                    <div className="flex h-[40px] items-center justify-start rounded-[8px] w-[40px]">
                      <Img
                        src="images/img_imagem_40x40.png"
                        className="h-[40px] md:h-[auto] object-cover rounded-[8px] w-[40px]"
                        alt="Imagem"
                      />
                    </div>
                    <div className="flex flex-1 flex-col items-start justify-start w-[100%]">
                      <div className="flex items-start justify-start pb-[4px] w-[100%]">
                        <Text
                          className="text-bluegray_800 text-left w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Levotiroxina sódica
                        </Text>
                      </div>
                      <div className="flex sm:flex-col flex-row gap-[4px] items-start justify-start w-[100%]">
                        <div className="flex items-center justify-start w-[auto]">
                          <Text
                            className="font-normal not-italic text-bluegray_500 text-left w-[auto]"
                            variant="body2"
                          >
                            25 mcg, 30 comprimidos
                          </Text>
                        </div>
                        <div className="flex items-center justify-center w-[auto]">
                          <Text
                            className="font-normal not-italic text-bluegray_500 text-left w-[auto]"
                            variant="body2"
                          >
                            •
                          </Text>
                        </div>
                        <div className="flex flex-1 items-center justify-start w-[100%]">
                          <Text
                            className="font-normal not-italic text-indigo_900 text-left w-[auto]"
                            variant="body2"
                          >
                            Bayer
                          </Text>
                        </div>
                      </div>
                      <div className="flex items-center justify-start pb-[4px] w-[100%]">
                        <Text
                          className="font-normal not-italic text-bluegray_500 text-left w-[auto]"
                          variant="body2"
                        >
                          Quantidade: 1
                        </Text>
                      </div>
                      <div className="flex items-center justify-start pt-[4px] w-[94px]">
                        <Text
                          className="font-medium text-bluegray_800 text-left w-[auto]"
                          variant="body2"
                        >
                          R$ 198,99
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-[12px] items-start justify-start w-[100%]">
                <div className="flex items-start justify-start w-[auto]">
                  <div className="flex items-center justify-start w-[auto]">
                    <div className="flex items-start justify-start w-[auto]">
                      <Text
                        className="font-medium text-bluegray_800 text-left w-[auto]"
                        variant="body2"
                      >
                        Selecione a frequência de entrega:
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex sm:flex-col flex-row gap-[8px] items-start justify-start sm:w-[100%] w-[auto]">
                  <div className="border-[1px] border-indigo_900 border-solid flex h-[37px] md:h-[auto] items-center justify-center p-[8px] rounded-[18px] w-[auto]">
                    <div className="flex h-[21px] md:h-[auto] items-center justify-center px-[4px] w-[auto]">
                      <Text
                        className="font-medium text-center text-indigo_900 w-[auto]"
                        variant="body2"
                      >
                        Compra única
                      </Text>
                    </div>
                  </div>
                  <div className="border-[1px] border-indigo_900 border-solid flex h-[37px] md:h-[auto] items-center justify-center p-[8px] rounded-[18px] w-[auto]">
                    <div className="flex h-[21px] md:h-[auto] items-center justify-center px-[4px] w-[auto]">
                      <Text
                        className="font-medium text-center text-indigo_900 w-[auto]"
                        variant="body2"
                      >
                        4 semanas
                      </Text>
                    </div>
                  </div>
                  <Button
                    className="flex items-center justify-center text-center"
                    rightIcon={
                      <Img
                        src="images/img_checkmark_light_green_a200.svg"
                        className="ml-[8px] text-center"
                        alt="checkmark"
                      />
                    }
                    shape="CircleBorder18"
                    size="3xl"
                    variant="FillIndigo900"
                  >
                    <div className="bg-transparent cursor-pointer font-medium text-[12px] text-center text-light_green_A200">
                      8 semanas
                    </div>
                  </Button>
                  <div className="border-[1px] border-indigo_900 border-solid flex h-[37px] md:h-[auto] items-center justify-center p-[8px] rounded-[18px] w-[auto]">
                    <div className="flex h-[21px] md:h-[auto] items-center justify-center px-[4px] w-[auto]">
                      <Text
                        className="font-medium text-center text-indigo_900 w-[auto]"
                        variant="body2"
                      >
                        12 semanas
                      </Text>
                    </div>
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
                      Alterar
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

export default DesktopRePillAlterarfrequnciaModal;
