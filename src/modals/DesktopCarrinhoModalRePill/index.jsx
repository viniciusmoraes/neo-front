import React from "react";
import ModalProvider from "react-modal";

import { Text, Img, Input } from "components";

const DesktopCarrinhoModalRePillModal = (props) => {
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
                      RePill
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
            <div className="flex items-start justify-end pb-[8px] pt-[16px] px-[16px] w-[100%]">
              <Text
                className="font-normal leading-[150.00%] md:max-w-[100%] max-w-[523px] not-italic text-bluegray_800 text-left"
                variant="body1"
              >
                Para comprar produtos avulsos, você precisa ser um assinante
                RePill. Mas não se preocupe, o processo é muito simples! Confira
                o passo a passo:
              </Text>
            </div>
            <div className="bg-white_A700 flex items-start justify-center px-[16px] py-[12px] w-[100%]">
              <div className="flex sm:flex-col flex-row gap-[16px] items-center justify-start w-[100%]">
                <Img
                  src="images/img_lefticon.svg"
                  className="h-[24px] w-[24px]"
                  alt="lefticon"
                />
                <div className="flex flex-1 items-start justify-start w-[100%]">
                  <div className="flex items-center justify-center w-[100%]">
                    <Text
                      className="font-normal leading-[150.00%] md:max-w-[100%] max-w-[483px] not-italic text-bluegray_500 text-left"
                      variant="body2"
                    >
                      Na página do produto, selecione a frequência de entrega
                      desejada e clique em ”Criar compra recorrente”
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-start justify-center px-[16px] py-[12px] w-[100%]">
              <div className="flex sm:flex-col flex-row gap-[16px] items-center justify-start w-[100%]">
                <Img
                  src="images/img_cart_indigo_900_24x24.svg"
                  className="h-[24px] w-[24px]"
                  alt="cart"
                />
                <div className="flex flex-1 items-start justify-start w-[100%]">
                  <div className="flex items-center justify-center w-[100%]">
                    <Text
                      className="font-normal leading-[150.00%] md:max-w-[100%] max-w-[483px] not-italic text-bluegray_500 text-left"
                      variant="body2"
                    >
                      Se já tiver itens no carrinho, altere a frequência de
                      entrega ”Compra avulsa” para a frequência desejada
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <Input
              className="font-normal not-italic p-[0] text-[12px] placeholder:text-bluegray_500 text-bluegray_500 text-left w-[100%]"
              wrapClassName="flex w-[100%]"
              name="Itemlist"
              placeholder='Clique em "Finalizar pedido” e revise as informações para criar sua compra RePill'
              prefix={
                <Img
                  src="images/img_clock.svg"
                  className="my-[auto] mx-[16px]"
                  alt="clock"
                />
              }
              size="4xl"
              variant="OutlineGray300_1"
            ></Input>
            <div className="flex items-start justify-start px-[16px] py-[8px] w-[100%]">
              <div className="flex h-[36px] md:h-[auto] items-center justify-center rounded-[18px] w-[100%]">
                <div className="flex items-center justify-start px-[8px] w-[auto]">
                  <div className="flex items-center justify-center px-[4px] w-[auto]">
                    <Text
                      className="font-medium text-indigo_900 text-left w-[auto]"
                      variant="body1"
                    >
                      Voltar para o Carrinho
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

export default DesktopCarrinhoModalRePillModal;
