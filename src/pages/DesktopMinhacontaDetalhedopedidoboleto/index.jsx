import React from "react";

import { Img, Input, Text, Line, List } from "components";
import { CloseSVG } from "../../assets/images";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const DesktopMinhacontaDetalhedopedidoboletoPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray_100 flex flex-col font-rubik items-center justify-end mx-[auto] w-[100%]">
        <div className="bg-gray_50 flex md:flex-col flex-row gap-[32px] items-center justify-start max-w-[1366px] px-[120px] sm:px-[20px] md:px-[40px] py-[8px] w-[100%]">
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
                    Tratamentos
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
              <div className="flex flex-row gap-[4px] h-[40px] md:h-[auto] items-center justify-start py-[8px] w-[100%]">
                <div className="bg-gray_100 h-[24px] relative rounded-[50%] w-[24px]">
                  <Img
                    src="images/img_user_gray_500.svg"
                    className="h-[14px] m-[auto] w-[14px]"
                    alt="user"
                  />
                  <Img
                    src="images/img_imagem_24x24.png"
                    className="absolute h-[24px] inset-[0] justify-center m-[auto] rounded-[50%] w-[24px]"
                    alt="Imagem"
                  />
                </div>
                <div className="flex flex-1 items-center justify-center pl-[4px] w-[100%]">
                  <Text
                    className="font-medium text-indigo_900 text-left w-[auto]"
                    variant="body1"
                  >
                    Olá, Igor
                  </Text>
                </div>
                <Img
                  src="images/img_trailingicon.svg"
                  className="h-[24px] w-[24px]"
                  alt="trailingicon"
                />
              </div>
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
        </div>
        <div className="h-[1553px] md:px-[20px] relative w-[100%]">
          <div className="absolute flex h-[100%] inset-y-[0] items-center justify-start left-[0] my-[auto] w-[92%]">
            <div className="flex md:flex-col flex-row gap-[16px] items-start justify-between w-[100%]">
              <aside className="flex flex-col md:hidden justify-start w-[390px]">
                <div className="flex items-center justify-start w-[100%]">
                  <div className="bg-white_A700 flex flex-col h-[1553px] md:h-[auto] items-start justify-start pl-[120px] sm:pl-[20px] md:pl-[40px] pt-[24px] sm:w-[100%] w-[390px]">
                    <div className="flex h-[64px] md:h-[auto] items-start justify-center px-[16px] py-[12px] w-[100%]">
                      <div className="flex items-center justify-start w-[100%]">
                        <div className="flex items-start justify-start w-[100%]">
                          <div className="flex items-start justify-start w-[auto]">
                            <Text
                              className="text-bluegray_800 text-left w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              Minha conta
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start justify-center sm:px-[20px] px-[32px] py-[12px] w-[100%]">
                      <div className="flex items-center justify-start w-[100%]">
                        <div className="flex items-start justify-start w-[100%]">
                          <div className="flex items-start justify-start w-[auto]">
                            <Text
                              className="font-medium text-bluegray_800 text-left w-[auto]"
                              variant="body1"
                            >
                              Meus dados
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-deep_purple_50 border-indigo_900 border-r-[4px] border-solid flex items-start justify-center sm:px-[20px] px-[32px] py-[12px] w-[100%]">
                      <div className="flex items-center justify-start w-[100%]">
                        <div className="flex items-start justify-start w-[100%]">
                          <div className="flex items-start justify-start w-[auto]">
                            <Text
                              className="font-medium text-bluegray_800 text-left w-[auto]"
                              variant="body1"
                            >
                              Histórico de pedidos
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start justify-center sm:px-[20px] px-[32px] py-[12px] w-[100%]">
                      <div className="flex items-center justify-start w-[100%]">
                        <div className="flex items-start justify-start w-[100%]">
                          <div className="flex items-start justify-start w-[auto]">
                            <Text
                              className="font-medium text-bluegray_800 text-left w-[auto]"
                              variant="body1"
                            >
                              Endereços
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start justify-center sm:px-[20px] px-[32px] py-[12px] w-[100%]">
                      <div className="flex items-center justify-start w-[100%]">
                        <div className="flex items-start justify-start w-[100%]">
                          <div className="flex items-start justify-start w-[auto]">
                            <Text
                              className="font-medium text-bluegray_800 text-left w-[auto]"
                              variant="body1"
                            >
                              Cartões
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </aside>
              <div className="flex flex-1 flex-col md:gap-[40px] gap-[80px] items-start justify-start md:mt-[0] mt-[16px] w-[100%]">
                <div className="flex flex-col gap-[8px] items-start justify-start px-[16px] w-[auto]">
                  <div className="flex flex-row items-start justify-start w-[auto]">
                    <List
                      className="sm:flex-col flex-row gap-[1px] grid grid-cols-2 w-[73%]"
                      orientation="horizontal"
                    >
                      <div className="flex h-[40px] md:h-[auto] items-center justify-center rounded-[20px] w-[auto]">
                        <div className="flex flex-row gap-[4px] h-[40px] md:h-[auto] items-center justify-start py-[8px] rounded-[20px] w-[auto]">
                          <div className="flex items-center justify-center w-[auto]">
                            <Text
                              className="font-medium text-indigo_900 text-left w-[auto]"
                              variant="body1"
                            >
                              Início
                            </Text>
                          </div>
                          <Img
                            src="images/img_star.svg"
                            className="h-[24px] w-[24px]"
                            alt="star"
                          />
                        </div>
                      </div>
                      <div className="flex h-[40px] md:h-[auto] items-center justify-center rounded-[20px] w-[auto]">
                        <div className="flex flex-row gap-[4px] h-[40px] md:h-[auto] items-center justify-start py-[8px] rounded-[20px] w-[auto]">
                          <div className="flex items-center justify-center w-[auto]">
                            <Text
                              className="font-medium text-indigo_900 text-left w-[auto]"
                              variant="body1"
                            >
                              Histórico de pedidos
                            </Text>
                          </div>
                          <Img
                            src="images/img_star.svg"
                            className="h-[24px] w-[24px]"
                            alt="star One"
                          />
                        </div>
                      </div>
                    </List>
                    <div className="flex items-center justify-center pt-[8px] w-[auto]">
                      <Text
                        className="font-normal not-italic text-bluegray_800 text-left w-[auto]"
                        variant="body1"
                      >
                        Pedido 10023
                      </Text>
                    </div>
                  </div>
                  <div className="flex items-start justify-start pb-[4px] w-[auto]">
                    <Text
                      className="not-italic text-bluegray_800 text-left w-[auto]"
                      as="h2"
                      variant="h2"
                    >
                      Pedido 100023
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col gap-[16px] items-start justify-start max-w-[840px] pb-[32px] pt-[16px] px-[16px] w-[100%]">
                  <div className="flex flex-col items-end justify-start shadow-bs w-[100%]">
                    <div className="bg-indigo_900 flex md:flex-col flex-row gap-[8px] items-center justify-start p-[16px] rounded-bl-[0] rounded-br-[0] rounded-tl-[8px] rounded-tr-[8px] w-[100%]">
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
                        alt="arrowup"
                      />
                    </div>
                    <div className="bg-white_A700 flex flex-col gap-[16px] items-center justify-center rounded-bl-[8px] rounded-br-[8px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
                      <div className="flex items-start justify-start p-[16px] w-[100%]">
                        <div className="flex md:flex-col flex-row gap-[16px] items-start justify-end w-[100%]">
                          <div className="flex flex-1 flex-col gap-[8px] items-start justify-start w-[100%]">
                            <div className="border-b-[1px] border-gray_300 border-solid h-[63px] relative w-[100%]">
                              <div className="border-b-[1px] border-gray_300 border-solid flex-1 h-[63px] m-[auto] w-[100%]"></div>
                              <div className="absolute flex flex-1 flex-row gap-[16px] h-[100%] inset-[0] items-center justify-start m-[auto] w-[100%]">
                                <div className="flex h-[40px] items-center justify-start rounded-[8px] w-[40px]">
                                  <Img
                                    src="images/img_imagem_17.png"
                                    className="h-[40px] md:h-[auto] object-cover rounded-[8px] w-[40px]"
                                    alt="Imagem One"
                                  />
                                </div>
                                <div className="flex flex-col items-start justify-start w-[auto]">
                                  <div className="flex items-start justify-start pb-[4px] w-[100%]">
                                    <Text
                                      className="text-bluegray_800 text-left w-[auto]"
                                      as="h6"
                                      variant="h6"
                                    >
                                      Levotiroxina Sódica
                                    </Text>
                                  </div>
                                  <div className="flex flex-row gap-[4px] items-start justify-start w-[auto]">
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
                                    <div className="flex items-center justify-start w-[auto]">
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
                                </div>
                              </div>
                            </div>
                            <div className="bg-deep_purple_50 flex flex-row gap-[4px] h-[32px] md:h-[auto] items-center justify-center p-[8px] rounded-[4px] w-[auto]">
                              <div className="flex h-[24px] md:h-[auto] items-center justify-center w-[16px]">
                                <div className="flex flex-row h-[16px] items-start justify-start w-[16px]">
                                  <div className="bg-indigo_900 h-[3px] my-[5px] rounded-[1px] w-[3px]"></div>
                                  <CircularProgressbar
                                    className="border-solid h-[12px] overflow-visible w-[12px]"
                                    value={28}
                                    counterClockwise
                                    strokeWidth={17}
                                    styles={{
                                      trail: { strokeWidth: 17, stroke: "" },
                                      path: {
                                        strokeLinecap: "square",
                                        height: "100%",
                                        transformOrigin: "center",
                                        transform: "rotate(55deg)",
                                      },
                                    }}
                                  ></CircularProgressbar>
                                  <div className="h-[2px] mt-[3px] outline outline-[0.5px] outline-indigo_900 rounded-[50%] w-[2px]"></div>
                                </div>
                              </div>
                              <div className="flex h-[21px] md:h-[auto] items-center justify-center w-[auto]">
                                <Text
                                  className="font-medium text-center text-indigo_900 w-[auto]"
                                  variant="body2"
                                >
                                  RePill: receber a cada 1 mês
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-1 flex-row gap-[72px] items-center justify-end w-[100%]">
                            <div className="flex flex-col gap-[8px] items-start justify-start w-[auto]">
                              <div className="flex items-start justify-start w-[auto]">
                                <Text
                                  className="text-bluegray_900 text-left w-[auto]"
                                  as="h4"
                                  variant="h4"
                                >
                                  R$ 198,99
                                </Text>
                              </div>
                              <div className="flex flex-row gap-[4px] items-center justify-start w-[auto]">
                                <div className="flex items-center justify-start w-[auto]">
                                  <Text
                                    className="font-normal not-italic text-bluegray_500 text-left w-[auto]"
                                    variant="body2"
                                  >
                                    R$ 1,25/dose
                                  </Text>
                                </div>
                                <Img
                                  src="images/img_info.svg"
                                  className="h-[16px] w-[16px]"
                                  alt="info"
                                />
                              </div>
                            </div>
                            <div className="flex h-[40px] md:h-[auto] items-center justify-center rounded-[20px] w-[100px]">
                              <div className="flex h-[40px] md:h-[auto] items-center justify-start py-[8px] rounded-[20px] w-[auto]">
                                <div className="flex items-center justify-center w-[auto]">
                                  <Text
                                    className="font-medium text-indigo_900 text-left w-[auto]"
                                    variant="body1"
                                  >
                                    Gerenciar item
                                  </Text>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <Img
                        src="images/img_miscdivider.svg"
                        className="h-[1px] w-[100%]"
                        alt="Miscdivider"
                      />
                      <div className="flex items-start justify-start p-[16px] w-[100%]">
                        <div className="flex md:flex-col flex-row gap-[16px] items-start justify-end w-[100%]">
                          <div className="flex flex-1 items-start justify-start w-[100%]">
                            <div className="border-b-[1px] border-gray_300 border-solid flex items-start justify-center w-[100%]">
                              <div className="flex flex-row gap-[16px] items-center justify-start w-[auto]">
                                <div className="flex h-[40px] items-center justify-start rounded-[8px] w-[40px]">
                                  <Img
                                    src="images/img_imagem_21.png"
                                    className="h-[40px] md:h-[auto] object-cover rounded-[8px] w-[40px]"
                                    alt="Imagem Two"
                                  />
                                </div>
                                <div className="flex flex-col items-start justify-start w-[auto]">
                                  <div className="flex items-start justify-start pb-[4px] w-[100%]">
                                    <Text
                                      className="text-bluegray_800 text-left w-[auto]"
                                      as="h6"
                                      variant="h6"
                                    >
                                      Tylenol®
                                    </Text>
                                  </div>
                                  <div className="flex flex-row gap-[4px] items-start justify-start w-[auto]">
                                    <div className="flex items-center justify-start w-[auto]">
                                      <Text
                                        className="font-normal not-italic text-bluegray_500 text-left w-[auto]"
                                        variant="body2"
                                      >
                                        759 mg, 10 comprimidos
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
                                    <div className="flex items-center justify-start w-[auto]">
                                      <Text
                                        className="font-normal not-italic text-indigo_900 text-left w-[auto]"
                                        variant="body2"
                                      >
                                        Jansen
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
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-row gap-[16px] items-center justify-end pl-[8px] w-[auto]">
                            <div className="flex flex-col gap-[8px] items-start justify-start w-[100px]">
                              <div className="flex items-start justify-start w-[auto]">
                                <Text
                                  className="text-bluegray_900 text-left w-[auto]"
                                  as="h4"
                                  variant="h4"
                                >
                                  R$ 198,99
                                </Text>
                              </div>
                              <div className="flex flex-row gap-[4px] items-center justify-start w-[auto]">
                                <div className="flex items-center justify-start w-[auto]">
                                  <Text
                                    className="font-normal not-italic text-bluegray_500 text-left w-[auto]"
                                    variant="body2"
                                  >
                                    R$ 1,25/dose
                                  </Text>
                                </div>
                                <Img
                                  src="images/img_info.svg"
                                  className="h-[16px] w-[16px]"
                                  alt="info One"
                                />
                              </div>
                            </div>
                            <div className="bg-indigo_900 flex h-[36px] md:h-[auto] items-center justify-center px-[16px] py-[14px] rounded-[18px] w-[auto]">
                              <div className="flex items-center justify-center w-[auto]">
                                <div className="flex items-center justify-center w-[auto]">
                                  <Text
                                    className="font-medium text-left text-light_green_A200 w-[auto]"
                                    variant="body2"
                                  >
                                    Comprar novamente
                                  </Text>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex md:flex-col flex-row gap-[16px] items-start justify-start w-[100%]">
                    <div className="bg-white_A700 flex flex-1 flex-col gap-[16px] h-[100%] items-start justify-start p-[16px] rounded-[8px] shadow-bs w-[100%]">
                      <div className="flex flex-col h-[100%] items-start justify-start w-[100%]">
                        <div className="flex items-start justify-start pt-[8px] w-[296px]">
                          <Text
                            className="text-bluegray_900 text-left w-[auto]"
                            as="h3"
                            variant="h3"
                          >
                            Receita
                          </Text>
                        </div>
                        <div className="flex items-center justify-center pt-[8px] w-[100%]">
                          <Text
                            className="font-normal leading-[150.00%] md:max-w-[100%] max-w-[364px] not-italic text-bluegray_800 text-left"
                            variant="body1"
                          >
                            Algum item com receita inválida? Atualize clicando
                            no botão abaixo para não ter nenhum problema com o
                            seu pedido.
                          </Text>
                        </div>
                      </div>
                      <div className="flex items-start justify-end w-[100%]">
                        <div className="border-[1px] border-indigo_900 border-solid flex h-[36px] md:h-[auto] items-center justify-center px-[16px] py-[14px] rounded-[18px] w-[auto]">
                          <div className="flex items-center justify-start w-[auto]">
                            <div className="flex items-center justify-center w-[auto]">
                              <Text
                                className="font-medium text-indigo_900 text-left w-[auto]"
                                variant="body2"
                              >
                                Atualizar receita
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white_A700 flex flex-1 flex-col gap-[16px] h-[100%] items-start justify-start p-[16px] rounded-[8px] shadow-bs w-[100%]">
                      <div className="flex items-start justify-start pt-[8px] w-[100%]">
                        <Text
                          className="text-bluegray_900 text-left w-[auto]"
                          as="h3"
                          variant="h3"
                        >
                          Endereço de entrega
                        </Text>
                      </div>
                      <div className="flex items-end justify-start w-[100%]">
                        <div className="flex flex-col items-start justify-start w-[100%]">
                          <div className="flex items-start justify-start w-[100%]">
                            <div className="flex items-start justify-start pb-[8px] w-[100%]">
                              <Text
                                className="text-bluegray_800 text-left w-[auto]"
                                as="h6"
                                variant="h6"
                              >
                                Avenida Dr. Arnaldo, 2194
                              </Text>
                            </div>
                          </div>
                          <div className="flex items-center justify-center w-[100%]">
                            <Text
                              className="font-normal not-italic text-bluegray_500 text-left w-[auto]"
                              variant="body2"
                            >
                              CEP 01255-000, Casa, Perdizes, São Paulo/SP
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="bg-deep_purple_50 flex flex-row gap-[12px] items-center justify-start px-[16px] py-[12px] rounded-[8px] w-[100%]">
                        <Img
                          src="images/img_clock.svg"
                          className="h-[16px] w-[16px]"
                          alt="clock"
                        />
                        <div className="flex flex-1 items-start justify-start w-[100%]">
                          <div className="flex items-center justify-center w-[100%]">
                            <Text
                              className="font-normal leading-[150.00%] md:max-w-[100%] max-w-[304px] not-italic text-bluegray_800 text-left"
                              variant="body1"
                            >
                              Entrega agendada: 10/11/22, entre 13:00 e 18:00
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex md:flex-col flex-row gap-[16px] items-start justify-start w-[100%]">
                    <div className="bg-white_A700 flex flex-1 flex-col h-[100%] items-end justify-end p-[16px] rounded-[8px] shadow-bs w-[100%]">
                      <div className="flex items-start justify-start pb-[16px] pt-[8px] w-[100%]">
                        <Text
                          className="text-bluegray_900 text-left w-[auto]"
                          as="h3"
                          variant="h3"
                        >
                          Pagamento
                        </Text>
                      </div>
                      <div className="flex flex-col h-[100%] items-start justify-start py-[16px] w-[100%]">
                        <div className="flex flex-row gap-[16px] items-center justify-start w-[100%]">
                          <Img
                            src="images/img_trash.svg"
                            className="h-[24px] w-[24px]"
                            alt="trash"
                          />
                          <div className="flex flex-1 items-center justify-start w-[100%]">
                            <Text
                              className="text-bluegray_800 text-left w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              Boleto bancário
                            </Text>
                          </div>
                        </div>
                        <List
                          className="sm:flex-col flex-row gap-[16px] grid grid-cols-2 justify-start pb-[16px] pt-[8px] w-[100%]"
                          orientation="horizontal"
                        >
                          <div className="flex flex-1 flex-col items-start justify-start w-[100%]">
                            <div className="flex items-start justify-start py-[8px] w-[auto]">
                              <div className="flex items-center justify-start w-[100%]">
                                <div className="flex items-start justify-start w-[auto]">
                                  <Text
                                    className="font-medium text-bluegray_800 text-left w-[auto]"
                                    variant="body2"
                                  >
                                    Valor
                                  </Text>
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center justify-center w-[100%]">
                              <Text
                                className="font-normal not-italic text-bluegray_800 text-left w-[auto]"
                                variant="body1"
                              >
                                R$ 230,99
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-1 flex-col items-start justify-start w-[100%]">
                            <div className="flex items-start justify-start py-[8px] w-[auto]">
                              <div className="flex items-center justify-start w-[100%]">
                                <div className="flex items-start justify-start w-[auto]">
                                  <Text
                                    className="font-medium text-bluegray_800 text-left w-[auto]"
                                    variant="body2"
                                  >
                                    Vencimento
                                  </Text>
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center justify-center w-[auto]">
                              <Text
                                className="font-normal not-italic text-bluegray_800 text-left w-[auto]"
                                variant="body1"
                              >
                                09/01/2023
                              </Text>
                            </div>
                          </div>
                        </List>
                      </div>
                      <List
                        className="sm:flex-col flex-row grid grid-cols-2 justify-start w-[auto]"
                        orientation="horizontal"
                      >
                        <div className="flex h-[40px] md:h-[auto] items-center justify-center rounded-[20px] w-[auto]">
                          <div className="flex flex-row gap-[4px] h-[40px] md:h-[auto] items-center justify-start p-[8px] rounded-[20px] w-[auto]">
                            <Img
                              src="images/img_download.svg"
                              className="h-[16px] w-[16px]"
                              alt="download"
                            />
                            <div className="flex items-center justify-center w-[auto]">
                              <Text
                                className="font-medium text-indigo_900 text-left w-[auto]"
                                variant="body2"
                              >
                                Baixar 2ª via
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="flex h-[40px] md:h-[auto] items-center justify-center rounded-[20px] w-[auto]">
                          <div className="flex flex-row gap-[4px] h-[40px] md:h-[auto] items-center justify-start p-[8px] rounded-[20px] w-[auto]">
                            <Img
                              src="images/img_download.svg"
                              className="h-[16px] w-[16px]"
                              alt="download One"
                            />
                            <div className="flex items-center justify-center w-[auto]">
                              <Text
                                className="font-medium text-indigo_900 text-left w-[auto]"
                                variant="body2"
                              >
                                Baixar nota fiscal
                              </Text>
                            </div>
                          </div>
                        </div>
                      </List>
                    </div>
                    <div className="bg-white_A700 flex flex-1 flex-col items-start justify-start pt-[16px] rounded-[8px] shadow-bs w-[100%]">
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
                        alt="Miscdivider One"
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
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute flex sm:flex-col flex-row sm:gap-[40px] items-center justify-between max-w-[840px] p-[16px] right-[9%] top-[7%] w-[100%]">
            <div className="flex flex-col items-start justify-start w-[216px]">
              <div className="flex items-start justify-start py-[8px] w-[auto]">
                <div className="flex items-center justify-start w-[100%]">
                  <div className="flex items-start justify-start w-[auto]">
                    <Text
                      className="font-medium text-bluegray_800 text-left w-[auto]"
                      variant="body2"
                    >
                      Data do pedido
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center w-[100%]">
                <Text
                  className="font-normal not-italic text-bluegray_800 text-left w-[auto]"
                  variant="body1"
                >
                  00/00/0000
                </Text>
              </div>
            </div>
            <div className="bg-gray_300 flex items-center justify-center px-[8px] py-[4px] rounded-[4px] w-[auto]">
              <div className="flex h-[21px] md:h-[auto] items-center justify-center w-[auto]">
                <Text
                  className="font-medium text-bluegray_800 text-center w-[auto]"
                  variant="body2"
                >
                  Processando pagamento
                </Text>
              </div>
            </div>
          </div>
          <div className="absolute bg-teal_800 bottom-[27%] flex h-[56px] md:h-[auto] items-center justify-center px-[16px] py-[14px] right-[9%] rounded-[28px] shadow-bs2 w-[auto]">
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
          <footer className="absolute bg-bluegray_900 bottom-[5%] flex md:flex-col flex-row gap-[32px] inset-x-[0] items-center justify-center mx-[auto] px-[120px] sm:px-[20px] md:px-[40px] py-[48px] w-[100%]">
            <div className="flex flex-col gap-[24px] items-start justify-start py-[16px] w-[auto]">
              <div className="flex items-start justify-start px-[8px] w-[auto]">
                <Img
                  src="images/img_imagebrandlogo_white_a700.svg"
                  className="h-[44px] w-[44px]"
                  alt="Imagebrandlogo One"
                />
              </div>
              <div className="flex flex-row gap-[8px] items-center justify-start px-[8px] w-[auto]">
                <Img
                  src="images/img_linkedin.svg"
                  className="h-[24px] w-[24px]"
                  alt="linkedin"
                />
                <Img
                  src="images/img_menu.svg"
                  className="h-[24px] w-[24px]"
                  alt="menu"
                />
                <Img
                  src="images/img_plus.svg"
                  className="h-[24px] w-[24px]"
                  alt="plus"
                />
                <Img
                  src="images/img_instagram.svg"
                  className="h-[24px] w-[24px]"
                  alt="instagram"
                />
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-[8px] items-start justify-start w-[100%]">
              <ul className="flex flex-col gap-[4px] items-start justify-start p-[8px] w-[100%] common-column-list">
                <li className="ml-[1px] w-[31%]">
                  <div className="cursor-pointer flex items-start justify-start pb-[4px]">
                    <Text
                      className="text-left text-white_A700 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Sobre a Pill
                    </Text>
                  </div>
                </li>
                <li className="ml-[1px] w-[31%]">
                  <div className="cursor-pointer flex items-center justify-center">
                    <Text
                      className="font-normal not-italic text-left text-white_A700 w-[auto]"
                      variant="body1"
                    >
                      Quem somos
                    </Text>
                  </div>
                </li>
                <li className="ml-[1px] w-[26%]">
                  <div className="cursor-pointer flex items-center justify-center">
                    <Text
                      className="font-normal not-italic text-left text-white_A700 w-[auto]"
                      variant="body1"
                    >
                      Blog da Pill
                    </Text>
                  </div>
                </li>
                <li className="ml-[1px] w-[41%]">
                  <div className="cursor-pointer flex items-center justify-center">
                    <Text
                      className="font-normal not-italic text-left text-white_A700 w-[auto]"
                      variant="body1"
                    >
                      Trabalhe conosco
                    </Text>
                  </div>
                </li>
              </ul>
              <div className="flex flex-col gap-[4px] items-start justify-start p-[8px] w-[100%]">
                <div className="flex items-start justify-start pb-[4px] w-[auto]">
                  <Text
                    className="text-left text-white_A700 w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Fale conosco
                  </Text>
                </div>
                <div className="flex flex-row gap-[8px] items-center justify-start w-[auto]">
                  <Img
                    src="images/img_call.svg"
                    className="h-[16px] w-[16px]"
                    alt="call One"
                  />
                  <div className="flex items-center justify-center w-[auto]">
                    <Text
                      className="font-normal not-italic text-left text-white_A700 w-[auto]"
                      variant="body1"
                    >
                      (11) 3864-0655
                    </Text>
                  </div>
                </div>
                <div className="flex flex-row gap-[8px] items-center justify-start w-[auto]">
                  <Img
                    src="images/img_mail.svg"
                    className="h-[16px] w-[16px]"
                    alt="mail"
                  />
                  <div className="flex items-center justify-center w-[auto]">
                    <Text
                      className="font-normal not-italic text-left text-white_A700 w-[auto]"
                      variant="body1"
                    >
                      oi@pill.com.br
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-[4px] items-start justify-start w-[100%]">
              <ul className="flex flex-col gap-[4px] items-start justify-start p-[8px] md:w-[100%] w-[auto] common-column-list">
                <li className="w-[100%]">
                  <div className="cursor-pointer flex items-start justify-start pb-[4px]">
                    <Text
                      className="text-left text-white_A700 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Informações técnicas
                    </Text>
                  </div>
                </li>
                <li className="w-[71%]">
                  <div className="cursor-pointer flex items-center justify-center">
                    <Text
                      className="font-normal not-italic text-left text-white_A700 w-[auto]"
                      variant="body1"
                    >
                      Termos e Políticas
                    </Text>
                  </div>
                </li>
                <li className="w-[77%]">
                  <div className="cursor-pointer flex items-center justify-center">
                    <Text
                      className="font-normal not-italic text-left text-white_A700 w-[auto]"
                      variant="body1"
                    >
                      Dúvidas frequentes
                    </Text>
                  </div>
                </li>
              </ul>
              <div className="flex flex-row gap-[8px] items-center justify-start p-[8px] w-[100%]">
                <Img
                  src="images/img_image30.png"
                  className="h-[56px] md:h-[auto] object-cover w-[65px]"
                  alt="imageThirty"
                />
                <Img
                  src="images/img_image28.png"
                  className="h-[32px] md:h-[auto] object-cover rounded-[4px] w-[96px]"
                  alt="imageTwentyEight"
                />
                <Img
                  src="images/img_image29.png"
                  className="h-[32px] md:h-[auto] object-cover rounded-[4px] w-[96px]"
                  alt="imageTwentyNine"
                />
              </div>
            </div>
            <div className="flex flex-1 items-start justify-start w-[100%]">
              <div className="flex items-start justify-start w-[100%]">
                <div className="flex items-center justify-center pb-[8px] pt-[16px] px-[8px] w-[100%]">
                  <Text
                    className="font-normal leading-[150.00%] not-italic text-gray_500 text-left"
                    variant="body2"
                  >
                    <span className="text-gray_500 text-[12px] font-rubik">
                      Farmacêutica Responsável: Natália Rodrigues D&#39;Agostino
                      <br />
                      CRF/SP: 94516 • CMVS: 355030801-477-012535-1-4
                      <br />
                      AFE: 7.82.784-8
                      <br />
                      <br />
                    </span>
                    <span className="text-gray_500 text-[12px] font-rubik">
                      Av. Dr. Arnaldo, 1.888 - São Paulo (SP) - Sumaré
                      <br />
                      CEP: 01255-000 • Telefone: (11) 97072-4934 <br />
                      Segunda a Sexta-feira: 08h - 20h
                    </span>
                  </Text>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default DesktopMinhacontaDetalhedopedidoboletoPage;
