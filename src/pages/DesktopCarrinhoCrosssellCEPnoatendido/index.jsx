import React from "react";

import { Img, Input, Text, Line, Button, SelectBox, List } from "components";
import { CloseSVG } from "../../assets/images";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const DesktopCarrinhoCrosssellCEPnoatendidoPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray_50 flex font-rubik items-center justify-end mx-[auto] w-[100%]">
        <div className="flex flex-col items-start justify-end w-[100%]">
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
          <div className="bg-yellow_200 flex flex-col gap-[8px] items-center justify-start max-w-[1366px] px-[120px] sm:px-[20px] md:px-[40px] py-[12px] w-[100%]">
            <div className="bg-white_A700 flex items-start justify-start max-w-[1126px] mx-[auto] md:px-[20px] w-[100%]">
              <Line className="bg-lime_800 h-[2px] w-[50%]" />
            </div>
            <div className="flex flex-row gap-[4px] items-start justify-center max-w-[1126px] mx-[auto] w-[100%]">
              <Img
                src="images/img_car.svg"
                className="h-[16px] w-[16px]"
                alt="car"
              />
              <div className="flex items-center justify-center w-[auto]">
                <Text
                  className="font-normal not-italic text-gray_900 text-left w-[auto]"
                  variant="body2"
                >
                  <span className="text-gray_900 text-[12px] font-rubik">
                    Faltam{" "}
                  </span>
                  <span className="text-gray_900 text-[12px] font-rubik font-bold">
                    R$ 25
                  </span>
                  <span className="text-gray_900 text-[12px] font-rubik">
                    {" "}
                    para você ter frete grátis
                  </span>
                </Text>
              </div>
            </div>
          </div>
          <div className="flex md:flex-col flex-row gap-[16px] items-start justify-start mr-[auto] md:px-[20px] md:w-[100%] w-[92%]">
            <div className="h-[1004px] md:h-[1488px] sm:h-[877px] relative md:w-[100%] w-[70%]">
              <Img
                src="images/img_image44.png"
                className="absolute bottom-[0] h-[289px] left-[0] object-cover w-[68%]"
                alt="imageFortyFour"
              />
              <div className="absolute flex flex-col gap-[16px] items-start justify-start py-[32px] right-[0] top-[0] w-[auto]">
                <div className="flex items-start justify-start pb-[4px] w-[221px]">
                  <Text
                    className="not-italic text-bluegray_800 text-left w-[auto]"
                    as="h2"
                    variant="h2"
                  >
                    Carrinho
                  </Text>
                </div>
                <div className="flex flex-col items-end justify-start max-w-[745px] shadow-bs w-[100%]">
                  <div className="bg-light_green_A200 flex md:flex-col flex-row gap-[8px] items-center justify-start p-[16px] rounded-bl-[0] rounded-br-[0] rounded-tl-[8px] rounded-tr-[8px] w-[100%]">
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
                    <div className="flex flex-1 md:flex-col flex-row md:gap-[20px] items-center justify-start w-[100%]">
                      <div className="flex flex-1 items-start justify-start w-[100%]">
                        <Text
                          className="font-semibold text-indigo_900 text-left w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          RePill (0)
                        </Text>
                      </div>
                      <div className="flex h-[40px] md:h-[auto] items-center justify-center rounded-[20px] w-[auto]">
                        <div className="flex h-[40px] md:h-[auto] items-center justify-start py-[8px] rounded-[20px] w-[auto]">
                          <div className="flex items-center justify-center w-[auto]">
                            <Text
                              className="font-medium text-indigo_900 text-left w-[auto]"
                              variant="body1"
                            >
                              Esvaziar
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white_A700 flex flex-col items-center justify-center rounded-bl-[8px] rounded-br-[8px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
                    <div className="flex md:flex-col flex-row gap-[16px] items-start justify-start pt-[16px] px-[16px] w-[100%]">
                      <div className="flex items-start justify-start py-[8px] w-[294px]">
                        <div className="flex items-center justify-start w-[100%]">
                          <div className="flex items-start justify-start w-[auto]">
                            <Text
                              className="font-medium text-bluegray_800 text-left w-[auto]"
                              variant="body2"
                            >
                              Produto
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-start justify-start py-[8px] w-[169px]">
                        <div className="flex items-center justify-start w-[100%]">
                          <div className="flex items-start justify-start w-[auto]">
                            <Text
                              className="font-medium text-bluegray_800 text-left w-[auto]"
                              variant="body2"
                            >
                              Quantidade
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-1 items-start justify-start py-[8px] w-[100%]">
                        <div className="flex items-center justify-start w-[100%]">
                          <div className="flex items-start justify-start w-[auto]">
                            <Text
                              className="font-medium text-bluegray_800 text-left w-[auto]"
                              variant="body2"
                            >
                              Preço
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-[16px] items-end justify-start p-[16px] w-[100%]">
                      <div className="flex md:flex-col flex-row gap-[16px] items-start justify-end md:w-[100%] w-[auto]">
                        <div className="flex flex-col gap-[8px] items-start justify-start w-[294px]">
                          <div className="border-b-[1px] border-gray_300 border-solid h-[41px] relative w-[100%]">
                            <div className="absolute border-b-[1px] border-gray_300 border-solid flex-1 h-[41px] inset-[0] m-[auto] w-[100%]"></div>
                            <div className="absolute flex flex-row gap-[16px] h-[100%] inset-y-[0] items-center justify-between left-[0] my-[auto] w-[auto]">
                              <div className="flex h-[40px] items-center justify-start rounded-[8px] w-[40px]">
                                <Img
                                  src="images/img_imagem_17.png"
                                  className="h-[40px] md:h-[auto] object-cover rounded-[8px] w-[40px]"
                                  alt="Imagem"
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
                              </div>
                            </div>
                          </div>
                          <Button
                            className="flex items-center justify-center min-w-[147px] text-center w-[auto]"
                            leftIcon={
                              <Img
                                src="images/img_icon_lime_800.svg"
                                className="mr-[4px] text-center"
                                alt="icon"
                              />
                            }
                            shape="RoundedBorder4"
                            variant="FillYellow200"
                          >
                            <div className="bg-transparent cursor-pointer font-medium text-[12px] text-center text-light_green_900">
                              Receita obrigatória
                            </div>
                          </Button>
                        </div>
                        <div className="flex flex-row font-acuminpro gap-[12px] items-center justify-center w-[163px]">
                          <div className="flex h-[44px] items-center justify-start w-[44px]">
                            <div className="flex h-[44px] items-center justify-start w-[44px]">
                              <Button
                                className="flex h-[44px] items-center justify-center rounded-[50%] w-[44px]"
                                size="smIcn"
                                variant="icbFillIndigo900"
                              >
                                <Img
                                  src="images/img_controlsmenos.svg"
                                  className=""
                                  alt="Controlsmenos"
                                />
                              </Button>
                            </div>
                          </div>
                          <div className="bg-white_A700 border-[1px] border-gray_500 border-solid flex h-[48px] md:h-[auto] items-center justify-center p-[12px] rounded-[8px] w-[100%]">
                            <div className="flex items-center justify-center pt-[2px] w-[auto]">
                              <div className="flex items-center justify-center px-[4px] w-[auto]">
                                <Text
                                  className="text-bluegray_910 text-left tracking-[-0.72px] w-[auto]"
                                  as="h6"
                                  variant="h6"
                                >
                                  1
                                </Text>
                              </div>
                            </div>
                          </div>
                          <Button
                            className="flex h-[44px] items-center justify-center rounded-[50%] w-[44px]"
                            size="smIcn"
                            variant="icbFillIndigo900"
                          >
                            <Img
                              src="images/img_plus_light_green_a200.svg"
                              className="h-[16px]"
                              alt="plus"
                            />
                          </Button>
                        </div>
                        <div className="flex flex-row font-rubik gap-[16px] items-center justify-end pl-[8px] w-[224px]">
                          <div className="flex flex-col gap-[8px] items-start justify-start w-[100%]">
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
                          <div className="border-[1px] border-indigo_900 border-solid flex h-[36px] md:h-[auto] items-center justify-center px-[16px] py-[14px] rounded-[18px] w-[100%]">
                            <div className="flex items-center justify-start w-[auto]">
                              <div className="flex items-center justify-center w-[auto]">
                                <Text
                                  className="font-medium text-indigo_900 text-left w-[auto]"
                                  variant="body2"
                                >
                                  Remover
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col gap-[8px] items-start justify-start max-w-[714px] py-[8px] w-[100%]">
                        <div className="flex items-center justify-start w-[100%]">
                          <div className="flex items-start justify-start w-[auto]">
                            <Text
                              className="font-medium text-bluegray_800 text-left w-[auto]"
                              variant="body2"
                            >
                              Frequência de entrega
                            </Text>
                          </div>
                        </div>
                        <SelectBox
                          className="font-normal h-[48px] not-italic pr-[12px] text-[14px] text-bluegray_800 text-left w-[100%]"
                          placeholderClassName="text-bluegray_800"
                          name="FormsFieldoutlinedefault One"
                          placeholder="Receber a cada 1 mês"
                          isSearchable={false}
                          isMulti={false}
                          indicator={
                            <Img
                              src="images/img_arrowdown.svg"
                              className="h-[24px] w-[24px]"
                              alt="arrow_down"
                            />
                          }
                        ></SelectBox>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start max-w-[745px] shadow-bs w-[100%]">
                  <div className="bg-indigo_900 flex md:flex-col flex-row gap-[8px] items-center justify-start p-[16px] rounded-bl-[0] rounded-br-[0] rounded-tl-[8px] rounded-tr-[8px] w-[100%]">
                    <Img
                      src="images/img_cart_light_green_a200.svg"
                      className="h-[24px] w-[24px]"
                      alt="cart One"
                    />
                    <div className="flex flex-1 md:flex-col flex-row md:gap-[20px] items-center justify-start w-[100%]">
                      <div className="flex flex-1 items-start justify-start w-[100%]">
                        <Text
                          className="font-semibold text-left text-light_green_A200 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Compra única (2)
                        </Text>
                      </div>
                      <div className="flex h-[40px] md:h-[auto] items-center justify-center rounded-[20px] w-[auto]">
                        <div className="flex h-[40px] md:h-[auto] items-center justify-start py-[8px] rounded-[20px] w-[auto]">
                          <div className="flex items-center justify-center w-[auto]">
                            <Text
                              className="font-medium text-left text-white_A700 w-[auto]"
                              variant="body1"
                            >
                              Esvaziar
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white_A700 flex flex-col items-center justify-center rounded-bl-[8px] rounded-br-[8px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
                    <div className="flex md:flex-col flex-row gap-[24px] items-start justify-start pt-[16px] px-[16px] w-[100%]">
                      <div className="flex items-start justify-start py-[8px] w-[294px]">
                        <div className="flex items-center justify-start w-[100%]">
                          <div className="flex items-start justify-start w-[auto]">
                            <Text
                              className="font-medium text-bluegray_800 text-left w-[auto]"
                              variant="body2"
                            >
                              Produto
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-start justify-start py-[8px] w-[169px]">
                        <div className="flex items-center justify-start w-[100%]">
                          <div className="flex items-start justify-start w-[auto]">
                            <Text
                              className="font-medium text-bluegray_800 text-left w-[auto]"
                              variant="body2"
                            >
                              Quantidade
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-1 items-start justify-start py-[8px] w-[100%]">
                        <div className="flex items-center justify-start w-[100%]">
                          <div className="flex items-start justify-start w-[auto]">
                            <Text
                              className="font-medium text-bluegray_800 text-left w-[auto]"
                              variant="body2"
                            >
                              Preço
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-[16px] items-end justify-start pt-[16px] px-[16px] w-[100%]">
                      <div className="flex md:flex-col flex-row gap-[16px] items-start justify-end md:w-[100%] w-[auto]">
                        <div className="flex items-start justify-start w-[294px]">
                          <div className="border-b-[1px] border-gray_300 border-solid flex items-start justify-center w-[100%]">
                            <div className="flex flex-row gap-[16px] items-center justify-start w-[100%]">
                              <div className="flex h-[40px] items-center justify-start rounded-[8px] w-[40px]">
                                <Img
                                  src="images/img_imagem_27.png"
                                  className="h-[40px] md:h-[auto] object-cover rounded-[8px] w-[40px]"
                                  alt="Imagem One"
                                />
                              </div>
                              <div className="flex flex-1 flex-col items-start justify-start w-[100%]">
                                <div className="flex items-start justify-start pb-[4px] w-[100%]">
                                  <Text
                                    className="leading-[120.00%] md:max-w-[100%] max-w-[238px] text-bluegray_800 text-left"
                                    as="h6"
                                    variant="h6"
                                  >
                                    Agulha para Caneta aplicadora de Insulina BD
                                    Ultra-Fine Na...
                                  </Text>
                                </div>
                                <div className="flex flex-row gap-[4px] items-start justify-start w-[auto]">
                                  <div className="flex items-center justify-start w-[auto]">
                                    <Text
                                      className="font-normal not-italic text-bluegray_500 text-left w-[auto]"
                                      variant="body2"
                                    >
                                      100 unidades
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
                                  <div className="flex items-center justify-start w-[17px]">
                                    <Text
                                      className="font-normal not-italic text-indigo_900 text-left w-[auto]"
                                      variant="body2"
                                    >
                                      BD
                                    </Text>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-row font-acuminpro gap-[12px] items-center justify-center w-[163px]">
                          <div className="flex h-[44px] items-center justify-start w-[44px]">
                            <div className="flex h-[44px] items-center justify-start w-[44px]">
                              <Button
                                className="flex h-[44px] items-center justify-center rounded-[50%] w-[44px]"
                                size="smIcn"
                                variant="icbFillIndigo900"
                              >
                                <Img
                                  src="images/img_controlsmenos.svg"
                                  className=""
                                  alt="Controlsmenos One"
                                />
                              </Button>
                            </div>
                          </div>
                          <div className="bg-white_A700 border-[1px] border-gray_500 border-solid flex h-[48px] md:h-[auto] items-center justify-center p-[12px] rounded-[8px] w-[100%]">
                            <div className="flex items-center justify-center pt-[2px] w-[auto]">
                              <div className="flex items-center justify-center px-[4px] w-[auto]">
                                <Text
                                  className="text-bluegray_910 text-left tracking-[-0.72px] w-[auto]"
                                  as="h6"
                                  variant="h6"
                                >
                                  1
                                </Text>
                              </div>
                            </div>
                          </div>
                          <Button
                            className="flex h-[44px] items-center justify-center rounded-[50%] w-[44px]"
                            size="smIcn"
                            variant="icbFillIndigo900"
                          >
                            <Img
                              src="images/img_plus_light_green_a200.svg"
                              className="h-[16px]"
                              alt="plus One"
                            />
                          </Button>
                        </div>
                        <div className="flex flex-row font-rubik gap-[16px] items-center justify-end pl-[8px] w-[224px]">
                          <div className="flex items-start justify-start w-[100%]">
                            <div className="flex items-start justify-start w-[auto]">
                              <Text
                                className="text-bluegray_900 text-left w-[auto]"
                                as="h4"
                                variant="h4"
                              >
                                R$ 88,49
                              </Text>
                            </div>
                          </div>
                          <div className="border-[1px] border-indigo_900 border-solid flex h-[36px] md:h-[auto] items-center justify-center px-[16px] py-[14px] rounded-[18px] w-[100%]">
                            <div className="flex items-center justify-start w-[auto]">
                              <div className="flex items-center justify-center w-[auto]">
                                <Text
                                  className="font-medium text-indigo_900 text-left w-[auto]"
                                  variant="body2"
                                >
                                  Remover
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col gap-[8px] items-start justify-start max-w-[714px] py-[8px] w-[100%]">
                        <div className="flex items-center justify-start w-[100%]">
                          <div className="flex items-start justify-start w-[auto]">
                            <Text
                              className="font-medium text-bluegray_800 text-left w-[auto]"
                              variant="body2"
                            >
                              Frequência de entrega
                            </Text>
                          </div>
                        </div>
                        <SelectBox
                          className="font-normal h-[48px] not-italic pr-[12px] text-[14px] text-bluegray_800 text-left w-[100%]"
                          placeholderClassName="text-bluegray_800"
                          name="FormsFieldoutlinedefault Two"
                          placeholder="Compra única"
                          isSearchable={false}
                          isMulti={false}
                          indicator={
                            <Img
                              src="images/img_arrowdown.svg"
                              className="h-[24px] w-[24px]"
                              alt="arrow_down"
                            />
                          }
                        ></SelectBox>
                      </div>
                    </div>
                    <div className="flex items-start justify-start pb-[16px] px-[16px] w-[100%]">
                      <div className="flex flex-col items-start justify-start w-[100%]">
                        <Img
                          src="images/img_arrow.svg"
                          className="h-[9px] w-[100%]"
                          alt="FrameNinetyFive"
                        />
                        <Input
                          className="font-normal not-italic p-[0] text-[14px] text-left placeholder:text-white_A700 text-white_A700 w-[100%]"
                          wrapClassName="w-[100%]"
                          name="Seo"
                          placeholder="Pode ser útil:"
                          shape="CustomBorderTL8"
                          size="sm"
                          variant="FillGray900"
                        ></Input>
                        <div className="bg-white_A700 border-b-[1px] border-gray_300 border-solid border-x-[1px] flex items-start justify-center rounded-bl-[8px] rounded-br-[8px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
                          <div className="border-b-[1px] border-gray_300 border-solid flex md:flex-col flex-row gap-[16px] items-start justify-end sm:px-[20px] px-[24px] py-[16px] rounded-bl-[8px] rounded-br-[8px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
                            <div className="flex flex-1 items-start justify-start w-[100%]">
                              <div className="border-b-[1px] border-gray_300 border-solid flex items-start justify-center w-[100%]">
                                <div className="flex sm:flex-col flex-row gap-[16px] items-center justify-start w-[100%]">
                                  <div className="flex h-[40px] items-center justify-start rounded-[8px] w-[40px]">
                                    <Img
                                      src="images/img_imagem_28.png"
                                      className="h-[40px] md:h-[auto] object-cover rounded-[8px] w-[40px]"
                                      alt="Imagem Two"
                                    />
                                  </div>
                                  <div className="flex flex-1 flex-col items-start justify-start w-[100%]">
                                    <div className="flex items-start justify-start pb-[4px] w-[100%]">
                                      <Text
                                        className="leading-[120.00%] md:max-w-[100%] max-w-[369px] text-bluegray_800 text-left"
                                        as="h6"
                                        variant="h6"
                                      >
                                        Caneta aplicadora de Insulina HumaPen
                                        Ergo II com 1 unid.
                                      </Text>
                                    </div>
                                    <div className="flex flex-row gap-[4px] items-start justify-start w-[auto]">
                                      <div className="flex items-center justify-start w-[auto]">
                                        <Text
                                          className="font-normal not-italic text-bluegray_500 text-left w-[auto]"
                                          variant="body2"
                                        >
                                          1 unidade
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
                                          HumaPen
                                        </Text>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-row gap-[16px] items-center justify-end pl-[8px] w-[224px]">
                              <div className="flex items-start justify-start w-[100%]">
                                <div className="flex items-start justify-start w-[auto]">
                                  <Text
                                    className="text-bluegray_900 text-left w-[auto]"
                                    as="h4"
                                    variant="h4"
                                  >
                                    R$ 73,49
                                  </Text>
                                </div>
                              </div>
                              <div className="bg-indigo_900 flex h-[36px] md:h-[auto] items-center justify-center px-[16px] py-[14px] rounded-[18px] w-[100%]">
                                <div className="flex items-center justify-center w-[auto]">
                                  <div className="flex items-center justify-center w-[auto]">
                                    <Text
                                      className="font-medium text-left text-light_green_A200 w-[auto]"
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
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:mt-[0] mt-[86px] relative md:w-[100%] w-[30%]">
              <div className="flex flex-col gap-[16px] items-center justify-start m-[auto] w-[auto]">
                <div className="bg-white_A700 flex flex-col items-start justify-start p-[16px] rounded-[8px] shadow-bs w-[365px]">
                  <div className="flex items-start justify-start pb-[16px] pt-[8px] w-[auto]">
                    <Text
                      className="text-bluegray_900 text-left w-[auto]"
                      as="h3"
                      variant="h3"
                    >
                      Calcule o frete
                    </Text>
                  </div>
                  <div className="flex flex-col gap-[8px] items-start justify-start pb-[16px] w-[100%]">
                    <Input
                      className="font-normal not-italic p-[0] text-[14px] placeholder:text-gray_500 text-gray_500 text-left w-[100%]"
                      wrapClassName="md:h-[auto] sm:h-[auto] w-[100%]"
                      name="FormsFieldoutlinedefault Three"
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
                          Não sei meu CEP
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray_100 flex items-center justify-start px-[16px] py-[12px] rounded-[8px] w-[100%]">
                    <div className="flex items-start justify-start w-[100%]">
                      <div className="flex items-center justify-center w-[100%]">
                        <Text
                          className="font-normal leading-[150.00%] md:max-w-[100%] max-w-[301px] not-italic text-bluegray_800 text-left"
                          variant="body1"
                        >
                          Poxa, ainda não entregamos nessa região. Tente outro
                          CEP.
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white_A700 flex flex-col items-start justify-start p-[16px] rounded-[8px] shadow-bs w-[365px]">
                  <div className="flex items-start justify-start pb-[16px] pt-[8px] w-[auto]">
                    <Text
                      className="text-bluegray_900 text-left w-[auto]"
                      as="h3"
                      variant="h3"
                    >
                      Cupom de desconto
                    </Text>
                  </div>
                  <div className="bg-white_A700 border-[1px] border-gray_300 border-solid flex h-[72px] md:h-[auto] items-start justify-center px-[16px] py-[12px] rounded-[8px] w-[100%]">
                    <div className="flex flex-row gap-[16px] items-center justify-start w-[100%]">
                      <Img
                        src="images/img_ticket.svg"
                        className="h-[24px] w-[24px]"
                        alt="ticket"
                      />
                      <div className="flex flex-1 items-start justify-start w-[100%]">
                        <div className="flex flex-row items-center justify-between w-[100%]">
                          <div className="flex flex-col items-start justify-start w-[64%]">
                            <div className="flex items-start justify-start pb-[8px] w-[auto]">
                              <Text
                                className="text-bluegray_800 text-left w-[auto]"
                                as="h6"
                                variant="h6"
                              >
                                BEMVINDO10
                              </Text>
                            </div>
                            <div className="flex items-center justify-center w-[auto]">
                              <Text
                                className="font-normal not-italic text-bluegray_500 text-left w-[auto]"
                                variant="body2"
                              >
                                10% de desconto no 1º pedido
                              </Text>
                            </div>
                          </div>
                          <div className="flex h-[24px] items-center justify-start w-[24px]">
                            <Img
                              src="images/img_trash_indigo_900.svg"
                              className="h-[24px] w-[24px]"
                              alt="trash"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white_A700 flex flex-col items-start justify-start pt-[16px] rounded-[8px] shadow-bs w-[100%]">
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
                <div className="flex flex-col gap-[8px] items-start justify-start py-[16px] w-[auto]">
                  <div className="bg-light_green_A200 flex h-[44px] md:h-[auto] items-center justify-center px-[16px] py-[14px] rounded-[22px] w-[365px]">
                    <div className="flex items-center justify-start w-[auto]">
                      <div className="flex items-center justify-center px-[4px] w-[auto]">
                        <Text
                          className="font-medium text-indigo_900 text-left w-[auto]"
                          variant="body1"
                        >
                          Finalizar pedido
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex h-[44px] md:h-[auto] items-center justify-center rounded-[22px] w-[365px]">
                    <div className="flex h-[40px] md:h-[auto] items-center justify-start p-[8px] w-[auto]">
                      <div className="flex items-center justify-center px-[4px] w-[auto]">
                        <Text
                          className="font-medium text-indigo_900 text-left w-[auto]"
                          variant="body1"
                        >
                          Continuar comprando
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-teal_800 flex h-[56px] md:h-[auto] items-center justify-center ml-[auto] mt-[-25px] px-[16px] py-[14px] rounded-[28px] shadow-bs2 w-[auto] z-[1]">
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
          <footer className="bg-bluegray_900 flex md:flex-col flex-row gap-[32px] items-center justify-center px-[120px] md:px-[20px] py-[48px] w-[100%]">
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
                  alt="plus Two"
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

export default DesktopCarrinhoCrosssellCEPnoatendidoPage;
