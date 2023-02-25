import React from "react";

import { Img, Input, Text, Line, List, Button } from "components";
import { CloseSVG } from "../../assets/images";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const DesktopCheckoutPagamentoPIXTwoPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray_50 flex font-rubik items-center justify-start mx-[auto] w-[100%]">
        <div className="flex flex-col justify-start w-[100%]">
          <header className="bg-gray_50 flex md:flex-col flex-row gap-[32px] items-center justify-center px-[120px] md:px-[20px] py-[8px] shadow-bs w-[100%]">
            <div className="flex sm:flex-1 sm:flex-col flex-row gap-[36px] items-center justify-start sm:w-[100%] w-[auto]">
              <Img
                src="images/img_imagebrandlogo.svg"
                className="h-[60px] w-[60px]"
                alt="Imagebrandlogo"
              />
              <div className="flex items-start justify-start sm:w-[100%] w-[365px]">
                <Input
                  value={inputvalue}
                  onChange={(e) => setInputvalue(e?.target?.value)}
                  className="font-normal not-italic p-[0] text-[14px] placeholder:text-gray_500 text-gray_500 text-left w-[100%]"
                  wrapClassName="flex gap-[10px] w-[100%]"
                  name="FormsFieldoutlinedefault"
                  placeholder="Buscar produto"
                  prefix={
                    <Img
                      src="images/img_search.svg"
                      className="cursor-pointer ml-[12px] mr-[4px] my-[auto]"
                      alt="search"
                    />
                  }
                  suffix={
                    inputvalue?.length > 0 ? (
                      <CloseSVG
                        color="#a0a0a8"
                        className="cursor-pointer ml-[10px] mr-[22px] my-[auto]"
                        onClick={() => setInputvalue("")}
                      />
                    ) : (
                      ""
                    )
                  }
                  shape="srcRoundedBorder8"
                ></Input>
              </div>
            </div>
            <div className="flex flex-1 sm:flex-col flex-row gap-[32px] items-center justify-end w-[100%]">
              <div className="flex h-[40px] md:h-[auto] items-center justify-end rounded-[20px] w-[auto]">
                <div className="flex flex-row gap-[4px] h-[40px] md:h-[auto] items-center justify-start py-[8px] rounded-[20px] w-[auto]">
                  <Img
                    src="images/img_minimize.svg"
                    className="h-[24px] w-[24px]"
                    alt="minimize"
                  />
                  <div className="flex items-center justify-center pl-[4px] w-[auto]">
                    <Text
                      className="font-medium text-indigo_900 text-left w-[auto]"
                      variant="body1"
                    >
                      RePill
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex h-[40px] md:h-[auto] items-center justify-end rounded-[20px] w-[auto]">
                <div className="flex flex-row gap-[4px] h-[40px] md:h-[auto] items-center justify-start py-[8px] rounded-[20px] w-[auto]">
                  <div className="md:h-[19px] h-[24px] relative w-[24px]">
                    <div className="absolute flex items-center justify-start left-[0] top-[21%] w-[88%]">
                      <div className="flex flex-row gap-[13px] items-start justify-between w-[100%]">
                        <div className="bg-indigo_900 h-[5px] mt-[2px] rounded-[2px] w-[5px]"></div>
                        <div className="h-[3px] outline outline-[1px] outline-indigo_900 rounded-[1px] w-[3px]"></div>
                      </div>
                    </div>
                    <CircularProgressbar
                      className="absolute border-solid bottom-[0] h-[19px] inset-x-[0] mx-[auto] overflow-visible w-[19px]"
                      value={28}
                      counterClockwise
                      strokeWidth={11}
                      styles={{
                        trail: { strokeWidth: 11, stroke: "" },
                        path: {
                          strokeLinecap: "square",
                          height: "100%",
                          transformOrigin: "center",
                          transform: "rotate(55deg)",
                        },
                      }}
                    ></CircularProgressbar>
                  </div>
                  <div className="flex items-center justify-center pl-[4px] w-[auto]">
                    <Text
                      className="font-medium text-indigo_900 text-left w-[auto]"
                      variant="body1"
                    >
                      RePill
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex h-[40px] md:h-[auto] items-center justify-start px-[8px] rounded-[20px] w-[159px]">
                <ul className="flex flex-row gap-[4px] h-[40px] md:h-[auto] sm:hidden items-center justify-start py-[8px] w-[auto] common-row-list">
                  <li className="sm:w-[100%] sm:my-[10px] w-[24%]">
                    <Img
                      src="images/img_user.svg"
                      className="h-[24px] w-[24px]"
                      alt="user"
                    />
                  </li>
                  <li className="sm:w-[100%] sm:my-[10px] w-[46%] my-[1px]">
                    <div className="flex items-center justify-center pl-[4px]">
                      <a
                        className="cursor-pointer font-medium text-[14px] text-indigo_900 text-left w-[auto]"
                        href="javascript:"
                      >
                        Entrar
                      </a>
                    </div>
                  </li>
                  <li className="sm:w-[100%] sm:my-[10px] w-[24%]">
                    <Img
                      src="images/img_trailingicon.svg"
                      className="h-[24px] w-[24px]"
                      alt="trailingicon"
                    />
                  </li>
                </ul>
              </div>
              <Line className="bg-gray_300 sm:h-[1px] h-[24px] sm:w-[100%] w-[1px]" />
              <div className="flex h-[40px] md:h-[auto] items-center justify-end rounded-[20px] w-[auto]">
                <div className="flex flex-row gap-[4px] h-[40px] md:h-[auto] items-center justify-start py-[8px] rounded-[20px] w-[auto]">
                  <div className="md:h-[20px] h-[25px] px-[2px] relative w-[24px]">
                    <Img
                      src="images/img_cart.svg"
                      className="absolute bottom-[0] h-[20px] inset-x-[0] mx-[auto] w-[20px]"
                      alt="cart"
                    />
                    <Text
                      className="absolute font-normal inset-x-[0] mx-[auto] not-italic text-center text-indigo_900 top-[0] w-[max-content]"
                      variant="body2"
                    >
                      1
                    </Text>
                  </div>
                  <div className="flex items-center justify-center pl-[4px] w-[auto]">
                    <Text
                      className="font-medium text-indigo_900 text-left w-[auto]"
                      variant="body1"
                    >
                      Carrinho
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </header>
          <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-center max-w-[746px] md:ml-[0] ml-[310px] mt-[16px] md:px-[20px] w-[100%]">
            <List
              className="md:flex-1 sm:flex-col flex-row gap-[1px] grid grid-cols-2 md:w-[100%] w-[50%]"
              orientation="horizontal"
            >
              <div className="flex flex-col gap-[8px] items-center justify-center p-[8px] w-[100%]">
                <Text
                  className="font-normal not-italic text-center text-indigo_900 w-[auto]"
                  variant="body2"
                >
                  Receita
                </Text>
                <div className="h-[16px] relative w-[60%]">
                  <Line className="absolute bg-indigo_900 bottom-[31%] h-[2px] right-[0] w-[94%]" />
                  <Img
                    src="images/img_checkmark_indigo_900.svg"
                    className="absolute h-[16px] inset-y-[0] left-[0] my-[auto] w-[16px]"
                    alt="checkmark"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-[8px] items-center justify-center p-[8px] w-[100%]">
                <Text
                  className="font-normal not-italic text-center text-indigo_900 w-[auto]"
                  variant="body2"
                >
                  Entrega
                </Text>
                <div className="h-[16px] relative w-[100%]">
                  <Line className="absolute bg-indigo_900 bottom-[31%] h-[2px] inset-x-[0] mx-[auto] w-[100%]" />
                  <Img
                    src="images/img_checkmark_indigo_900.svg"
                    className="absolute h-[16px] inset-[0] justify-center m-[auto] w-[16px]"
                    alt="checkmark One"
                  />
                </div>
              </div>
            </List>
            <div className="flex flex-1 flex-col gap-[8px] items-center justify-center p-[8px] w-[100%]">
              <Text
                className="font-normal not-italic text-center text-indigo_900 w-[auto]"
                variant="body2"
              >
                Pagamento
              </Text>
              <div className="h-[16px] relative w-[100%]">
                <div className="absolute bottom-[31%] flex inset-x-[0] items-center justify-start mx-[auto] w-[100%]">
                  <div className="flex flex-row items-center justify-evenly w-[100%]">
                    <Line className="bg-indigo_900 h-[2px] w-[50%]" />
                    <Line className="bg-gray_500 h-[2px] w-[50%]" />
                  </div>
                </div>
                <div className="absolute bg-white_A700 border-[1px] border-indigo_900 border-solid flex h-[100%] inset-[0] items-center justify-center m-[auto] p-[5px] rounded-[50%] w-[16px]">
                  <div className="bg-indigo_900 h-[6px] rounded-[50%] w-[6px]"></div>
                </div>
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-[8px] items-center justify-center p-[8px] w-[100%]">
              <Text
                className="font-normal not-italic text-bluegray_800 text-center w-[auto]"
                variant="body2"
              >
                Conclusão
              </Text>
              <div className="h-[16px] relative w-[60%]">
                <Line className="absolute bg-gray_500 bottom-[31%] h-[2px] left-[0] w-[96%]" />
                <Img
                  src="images/img_save.svg"
                  className="absolute h-[16px] inset-y-[0] my-[auto] right-[0] w-[16px]"
                  alt="save"
                />
              </div>
            </div>
          </div>
          <div className="flex items-start justify-start md:ml-[0] ml-[215px] mt-[16px] pb-[4px] md:px-[20px] w-[221px]">
            <Text
              className="not-italic text-bluegray_800 text-left w-[auto]"
              as="h2"
              variant="h2"
            >
              Pagamento
            </Text>
          </div>
          <div className="flex items-center justify-center md:ml-[0] ml-[215px] mt-[14px] pt-[8px] md:px-[20px] w-[auto]">
            <Text
              className="font-normal not-italic text-bluegray_800 text-left w-[auto]"
              variant="body1"
            >
              Escolha uma opção de pagamento abaixo
            </Text>
          </div>
          <div className="flex md:flex-col flex-row gap-[16px] items-start justify-center max-w-[936px] mt-[16px] mx-[auto] md:px-[20px] w-[100%]">
            <Input
              className="flex-1 font-medium p-[0] text-[18px] placeholder:text-bluegray_800 text-bluegray_800 text-left w-[100%]"
              wrapClassName="flex md:h-[auto] md:w-[100%] sm:h-[auto] sm:w-[100%] w-[555px]"
              name="Cartodecrdito"
              placeholder="Cartão de crédito"
              prefix={
                <Img
                  src="images/img_refresh_bluegray_901.svg"
                  className="my-[auto] mx-[16px]"
                  alt="refresh"
                />
              }
              suffix={
                <Img
                  src="images/img_menu_indigo_900.svg"
                  className="ml-[35px] mr-[16px] my-[auto]"
                  alt="menu"
                />
              }
              shape="RoundedBorder8"
              size="8xl"
              variant="OutlineIndigo90019"
            ></Input>
            <div className="flex items-end justify-start rounded-[8px] shadow-bs w-[365px]">
              <div className="bg-indigo_900 flex flex-row gap-[8px] items-center justify-start p-[16px] rounded-[8px] w-[100%]">
                <div className="flex flex-1 items-start justify-start w-[100%]">
                  <Text
                    className="text-left text-light_green_A200 w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    Itens do pedido
                  </Text>
                </div>
                <Img
                  src="images/img_arrowup.svg"
                  className="h-[24px] w-[24px]"
                  alt="arrowdown"
                />
              </div>
            </div>
          </div>
          <div className="flex md:flex-col flex-row gap-[16px] items-start justify-start mt-[2px] md:px-[20px] md:w-[100%] w-[85%]">
            <div className="md:h-[290px] h-[394px] md:mt-[0] mt-[14px] relative md:w-[100%] w-[67%]">
              <Img
                src="images/img_image45.png"
                className="absolute bottom-[0] h-[290px] left-[0] object-cover w-[76%]"
                alt="imageFortyFive"
              />
              <div className="absolute bg-white_A700 flex flex-col items-center justify-start pb-[16px] px-[16px] right-[0] rounded-[8px] shadow-bs top-[0] sm:w-[100%] w-[555px]">
                <div className="flex h-[72px] md:h-[auto] items-start justify-center py-[12px] rounded-[8px] w-[100%]">
                  <div className="flex sm:flex-col flex-row gap-[16px] items-center justify-start w-[100%]">
                    <div className="bg-indigo_900 flex h-[24px] items-center justify-start p-[6px] rounded-[50%] w-[24px]">
                      <div className="bg-white_A700 h-[12px] rounded-[50%] w-[12px]"></div>
                    </div>
                    <div className="h-[24px] relative sm:w-[100%] w-[93%]">
                      <div className="absolute flex h-[max-content] inset-[0] items-start justify-start m-[auto] w-[100%]">
                        <div className="flex items-start justify-start w-[192px]">
                          <Text
                            className="font-medium text-bluegray_800 text-left w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            PIX
                          </Text>
                        </div>
                      </div>
                      <Img
                        src="images/img_mail_teal_300.svg"
                        className="absolute h-[24px] inset-y-[0] my-[auto] right-[0] w-[24px]"
                        alt="mail"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex items-start justify-end pb-[8px] w-[100%]">
                  <Text
                    className="font-normal not-italic text-bluegray_800 text-left w-[auto]"
                    variant="body1"
                  >
                    Siga as instruções e realize o pagamento na próxima etapa
                  </Text>
                </div>
                <List
                  className="flex-col gap-[1px] grid items-center w-[100%]"
                  orientation="vertical"
                >
                  <div className="bg-white_A700 flex flex-1 items-start justify-start py-[12px] w-[100%]">
                    <div className="flex sm:flex-col flex-row gap-[16px] items-center justify-start w-[100%]">
                      <Img
                        src="images/img_qrcode.svg"
                        className="h-[24px] w-[24px]"
                        alt="qrcode"
                      />
                      <div className="flex flex-1 items-start justify-start w-[100%]">
                        <div className="flex items-center justify-center w-[100%]">
                          <Text
                            className="font-normal leading-[150.00%] md:max-w-[100%] max-w-[483px] not-italic text-bluegray_500 text-left"
                            variant="body2"
                          >
                            <span className="text-bluegray_500 text-[12px] font-rubik">
                              Procure a opção PIX no aplicativo do seu banco e
                              aponte a câmera do seu celular para o QR Code.{" "}
                            </span>
                            <span className="text-bluegray_500 text-[12px] font-rubik">
                              Se preferir, copie o código gerado.
                            </span>
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white_A700 flex flex-1 items-start justify-start py-[12px] w-[100%]">
                    <div className="flex sm:flex-col flex-row gap-[16px] items-center justify-start w-[100%]">
                      <Img
                        src="images/img_warning.svg"
                        className="h-[24px] w-[24px]"
                        alt="warning"
                      />
                      <div className="flex flex-1 items-start justify-start w-[100%]">
                        <div className="flex items-center justify-center w-[100%]">
                          <Text
                            className="font-normal not-italic text-bluegray_500 text-left w-[auto]"
                            variant="body2"
                          >
                            Confira os dados e confirme o pagamento.
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white_A700 flex flex-1 items-start justify-start py-[12px] w-[100%]">
                    <div className="flex sm:flex-col flex-row gap-[16px] items-center justify-start w-[100%]">
                      <Img
                        src="images/img_clock.svg"
                        className="h-[24px] w-[24px]"
                        alt="clock"
                      />
                      <div className="flex flex-1 items-start justify-start w-[100%]">
                        <div className="flex items-center justify-center w-[100%]">
                          <Text
                            className="font-normal not-italic text-bluegray_500 text-left w-[auto]"
                            variant="body2"
                          >
                            O pagamento deverá ser efetuado em até 4 horas após
                            a finalização do pedido.
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </List>
                <Button
                  className="flex items-center justify-center text-center w-[100%]"
                  leftIcon={
                    <Img
                      src="images/img_mail_indigo_900_16x16.svg"
                      className="mr-[16px] text-center"
                      alt="mail"
                    />
                  }
                  size="5xl"
                  variant="FillWhiteA700"
                >
                  <div className="bg-transparent cursor-pointer font-normal not-italic text-[12px] text-bluegray_500 text-left">
                    Após o pagamento, você receberá um e-mail de confirmação do
                    pedido em até 1 hora.
                  </div>
                </Button>
              </div>
            </div>
            <div className="flex flex-col gap-[32px] items-center justify-start md:w-[100%] w-[32%]">
              <div className="bg-white_A700 flex flex-col items-start justify-start pt-[16px] rounded-[8px] shadow-bs w-[365px]">
                <div className="flex items-start justify-start pb-[16px] pt-[8px] px-[16px] w-[auto]">
                  <Text
                    className="text-bluegray_900 text-left w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    Resumo
                  </Text>
                </div>
                <Img
                  src="images/img_miscdivider.svg"
                  className="h-[1px] w-[100%]"
                  alt="Miscdivider"
                />
                <List
                  className="flex-col gap-[1px] grid items-center w-[100%]"
                  orientation="vertical"
                >
                  <div className="bg-white_A700 flex flex-1 items-start justify-center p-[16px] w-[100%]">
                    <div className="flex flex-row gap-[16px] items-center justify-start w-[100%]">
                      <div className="flex flex-1 items-start justify-start w-[100%]">
                        <div className="flex items-start justify-start w-[auto]">
                          <Text
                            className="font-normal not-italic text-bluegray_800 text-left w-[auto]"
                            variant="body1"
                          >
                            Total dos itens
                          </Text>
                        </div>
                      </div>
                      <div className="flex items-start justify-start w-[auto]">
                        <Text
                          className="font-semibold text-bluegray_800 text-left w-[auto]"
                          variant="body1"
                        >
                          R$ 223,99
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white_A700 flex flex-1 items-start justify-center p-[16px] w-[100%]">
                    <div className="flex flex-row gap-[16px] items-center justify-start w-[100%]">
                      <div className="flex flex-1 items-start justify-start w-[100%]">
                        <div className="flex items-start justify-start w-[auto]">
                          <Text
                            className="font-normal not-italic text-bluegray_800 text-left w-[auto]"
                            variant="body1"
                          >
                            Frete
                          </Text>
                        </div>
                      </div>
                      <div className="flex items-start justify-start w-[auto]">
                        <Text
                          className="font-semibold text-bluegray_800 text-left w-[auto]"
                          variant="body1"
                        >
                          R$ 7,00
                        </Text>
                      </div>
                    </div>
                  </div>
                </List>
                <div className="grid grid-cols-2 justify-center min-h-[auto] w-[100%]">
                  <div className="flex flex-1 items-start justify-start pt-[4px] w-[100%]">
                    <Text
                      className="font-normal not-italic text-bluegray_800 text-left w-[auto]"
                      variant="body1"
                    >
                      Descontos
                    </Text>
                  </div>
                  <div className="flex flex-1 items-start justify-end pt-[4px] w-[100%]">
                    <Text
                      className="font-semibold text-bluegray_800 text-left w-[auto]"
                      variant="body1"
                    >
                      R$ 0,00
                    </Text>
                  </div>
                  <div className="flex flex-1 items-start justify-start pt-[4px] w-[100%]">
                    <Text
                      className="font-normal not-italic text-bluegray_800 text-left w-[auto]"
                      variant="body1"
                    >
                      Total do pedido
                    </Text>
                  </div>
                  <div className="flex flex-1 items-start justify-end pt-[4px] w-[100%]">
                    <Text
                      className="font-semibold text-bluegray_800 text-left w-[auto]"
                      variant="body1"
                    >
                      R$ 230,99
                    </Text>
                  </div>
                </div>
              </div>
              <div className="bg-light_green_A200 flex h-[44px] md:h-[auto] items-center justify-center px-[16px] py-[14px] rounded-[22px] w-[365px]">
                <div className="flex items-center justify-start w-[auto]">
                  <div className="flex items-center justify-center px-[4px] w-[auto]">
                    <Text
                      className="font-medium text-indigo_900 text-left w-[auto]"
                      variant="body1"
                    >
                      Pagar R$ 230,99
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <footer className="bg-bluegray_900 flex md:flex-col flex-row gap-[32px] items-center justify-center px-[120px] md:px-[20px] py-[48px] w-[100%]">
            <div className="flex items-start justify-start py-[16px] w-[auto]">
              <div className="flex items-start justify-start px-[8px] w-[auto]">
                <Img
                  src="images/img_imagebrandlogo_white_a700.svg"
                  className="h-[44px] w-[44px]"
                  alt="Imagebrandlogo One"
                />
              </div>
            </div>
            <div className="flex flex-1 items-start justify-start w-[100%]">
              <div className="flex items-start justify-start w-[100%]">
                <div className="md:h-[56px] h-[78px] pb-[8px] pt-[16px] px-[8px] relative w-[100%]">
                  <Text
                    className="absolute bottom-[0] font-normal inset-x-[0] leading-[150.00%] mx-[auto] not-italic text-gray_500 text-left"
                    variant="body2"
                  >
                    Farmacêutica Responsável: Natália Rodrigues D&#39;Agostino
                    <br />
                    CRF/SP: 94516 • CMVS: 355030801-477-012535-1-4
                    <br />
                    AFE: 7.82.784-8
                  </Text>
                  <div className="absolute bg-teal_800 flex md:h-[auto] h-[max-content] inset-y-[0] items-center justify-center my-[auto] px-[16px] py-[14px] right-[0] rounded-[28px] shadow-bs2 w-[auto]">
                    <div className="flex flex-row gap-[4px] items-center justify-start w-[auto]">
                      <Img
                        src="images/img_call.svg"
                        className="h-[24px] w-[24px]"
                        alt="call"
                      />
                      <div className="flex items-center justify-center px-[4px] w-[auto]">
                        <Text
                          className="font-medium text-left text-white_A700 w-[auto]"
                          variant="body1"
                        >
                          Precisa de ajuda?
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default DesktopCheckoutPagamentoPIXTwoPage;
