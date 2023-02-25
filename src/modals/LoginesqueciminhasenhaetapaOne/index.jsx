import React from "react";
import ModalProvider from "react-modal";

import { Text, Img, Input } from "components";

const LoginesqueciminhasenhaetapaOneModal = (props) => {
  return (
    <>
      <ModalProvider
        appElement={document.getElementById("root")}
        className="m-[auto] !w-[41%]"
        overlayClassName="bg-bluegray_900_33 fixed flex h-[100%] inset-y-[0] w-[100%]"
        {...props}
      >
        <div className="max-h-[97vh] overflow-y-auto sm:w-[100%] md:w-[100%]">
          <div className="bg-white_A700 flex flex-col items-start justify-start mb-[58px] md:px-[20px] rounded-[8px] sm:w-[100%] w-[555px]">
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
            <div className="flex items-center justify-start pt-[8px] px-[16px] w-[100%]">
              <Text
                className="font-normal leading-[150.00%] md:max-w-[100%] max-w-[523px] not-italic text-bluegray_800 text-left"
                variant="body1"
              >
                Insira o e-mail ou telefone cadastrados para receber as
                instruções de criação de uma nova senha
              </Text>
            </div>
            <div className="flex flex-col gap-[8px] items-start justify-start px-[16px] py-[12px] w-[100%]">
              <div className="flex items-center justify-start w-[320px]">
                <div className="flex items-start justify-start w-[auto]">
                  <Text
                    className="font-medium text-bluegray_800 text-left w-[auto]"
                    variant="body2"
                  >
                    <span className="text-bluegray_800 text-[12px] font-rubik">
                      E-mail ou telefone{" "}
                    </span>
                    <span className="text-red_600 text-[12px] font-rubik">
                      *
                    </span>
                  </Text>
                </div>
              </div>
              <Input
                className="font-normal not-italic p-[0] text-[14px] placeholder:text-gray_500 text-gray_500 text-left w-[100%]"
                wrapClassName="md:h-[auto] sm:h-[auto] w-[100%]"
                type="email"
                name="FormsFieldoutlinedefault"
                placeholder="Informe o e-mail ou telefone"
                shape="RoundedBorder8"
                size="xl"
                variant="OutlineGray300"
              ></Input>
            </div>
            <div className="flex flex-row gap-[16px] items-start justify-end px-[16px] py-[12px] w-[100%]">
              <div className="flex h-[40px] md:h-[auto] items-center justify-center rounded-[20px] w-[auto]">
                <div className="flex h-[40px] md:h-[auto] items-center justify-start p-[8px] rounded-[20px] w-[auto]">
                  <div className="flex items-center justify-center w-[auto]">
                    <Text
                      className="font-medium text-indigo_900 text-left w-[auto]"
                      variant="body2"
                    >
                      Cancelar
                    </Text>
                  </div>
                </div>
              </div>
              <Input
                className="flex-1 font-medium p-[0] text-[12px] text-left placeholder:text-light_green_A200 text-light_green_A200 w-[100%]"
                wrapClassName="md:h-[auto] sm:h-[auto] w-[auto]"
                name="Buttonbuttons"
                placeholder="Enviar link de recuperação"
                shape="CircleBorder18"
                size="sm"
                variant="FillIndigo900"
              ></Input>
            </div>
          </div>
        </div>
      </ModalProvider>
    </>
  );
};

export default LoginesqueciminhasenhaetapaOneModal;
