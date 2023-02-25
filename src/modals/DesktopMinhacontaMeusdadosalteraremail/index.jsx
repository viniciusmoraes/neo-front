import React from "react";
import ModalProvider from "react-modal";

import { Text, Img } from "components";

const DesktopMinhacontaMeusdadosalteraremailModal = (props) => {
  return (
    <>
      <ModalProvider
        appElement={document.getElementById("root")}
        className="m-[auto] !w-[36%]"
        overlayClassName="bg-bluegray_900_33 fixed flex h-[100%] inset-y-[0] w-[100%]"
        {...props}
      >
        <div className="max-h-[97vh] overflow-y-auto sm:w-[100%] md:w-[100%]">
          <div className="bg-white_A700 flex flex-col items-start justify-start md:px-[20px] rounded-[8px] sm:w-[100%] w-[480px]">
            <div className="bg-white_A700 flex items-start justify-start p-[16px] w-[100%]">
              <div className="flex items-start justify-start w-[100%]">
                <div className="flex flex-row gap-[4px] items-start justify-start sm:pr-[20px] pr-[32px] w-[100%]">
                  <div className="flex items-start justify-start w-[auto]">
                    <Text
                      className="text-bluegray_900 text-left w-[auto]"
                      as="h3"
                      variant="h3"
                    >
                      Alterar e-mail
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
            <Img
              src="images/img_miscdivider.svg"
              className="h-[1px] w-[100%]"
              alt="Miscdivider"
            />
            <div className="flex items-start justify-end p-[16px] w-[100%]">
              <Text
                className="font-normal leading-[150.00%] md:max-w-[100%] max-w-[448px] not-italic text-bluegray_800 text-left"
                variant="body1"
              >
                Por favor, entre em contato conosco para alterar seu e-mail de
                cadastro.
              </Text>
            </div>
            <div className="flex items-end justify-start p-[16px] w-[100%]">
              <div className="flex items-center justify-end w-[auto]">
                <div className="bg-indigo_900 flex h-[36px] md:h-[auto] items-center justify-center px-[16px] py-[14px] rounded-[18px] w-[auto]">
                  <div className="flex items-center justify-center w-[auto]">
                    <div className="flex items-center justify-center w-[auto]">
                      <Text
                        className="font-medium text-left text-light_green_A200 w-[auto]"
                        variant="body2"
                      >
                        Falar com a Pill
                      </Text>
                    </div>
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

export default DesktopMinhacontaMeusdadosalteraremailModal;
