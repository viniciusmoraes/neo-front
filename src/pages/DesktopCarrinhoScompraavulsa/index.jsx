import React from "react";

import { Img, Input, Text, Line, List, Button, SelectBox } from "components";
import { CloseSVG } from "../../assets/images";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const DesktopCarrinhoScompraavulsaPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray_50 flex flex-col font-rubik items-center justify-start mx-[auto] w-[100%]">
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
        <div className="h-[1674px] md:px-[20px] relative w-[100%]">
          <div className="flex flex-col gap-[16px] items-center justify-start mb-[undefinedpx] ml-[auto] mr-[120px] mt-[86px] w-[auto] z-[1]">
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
                  name="FormsFieldoutlinedefault One"
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
              <div className="bg-indigo_900 flex h-[36px] md:h-[auto] items-center justify-center px-[16px] py-[14px] rounded-[18px] w-[100%]">
                <div className="flex items-center justify-center w-[auto]">
                  <div className="flex items-center justify-center w-[auto]">
                    <Text
                      className="font-medium text-left text-light_green_A200 w-[auto]"
                      variant="body2"
                    >
                      Calcular
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
              <div className="flex items-start justify-start pb-[16px] w-[100%]">
                <Input
                  className="font-normal not-italic p-[0] text-[14px] placeholder:text-gray_500 text-gray_500 text-left w-[100%]"
                  wrapClassName="md:h-[auto] sm:h-[auto] w-[100%]"
                  name="FormsFieldoutlinedefault Two"
                  placeholder="Insira aqui o seu cupom"
                  shape="RoundedBorder8"
                  size="xl"
                  variant="OutlineGray300"
                ></Input>
              </div>
              <div className="border-[1px] border-indigo_900 border-solid flex h-[36px] md:h-[auto] items-center justify-center px-[16px] py-[14px] rounded-[18px] w-[100%]">
                <div className="flex items-center justify-center w-[100%]">
                  <div className="flex items-center justify-center w-[auto]">
                    <Text
                      className="font-medium text-indigo_900 text-left w-[auto]"
                      variant="body2"
                    >
                      Adicionar cupom
                    </Text>
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
          <div className="flex flex-col gap-[16px] items-center justify-start mb-[-155px] ml-[120px] py-[32px] w-[auto] z-[1]">
            <div className="flex items-start justify-start pb-[4px] w-[100%]">
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
              <div className="bg-white_A700 flex items-center justify-center rounded-bl-[8px] rounded-br-[8px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
                <div className="flex flex-col gap-[16px] h-[348px] md:h-[auto] items-center justify-center p-[24px] sm:px-[20px] rounded-bl-[8px] rounded-br-[8px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
                  <div className="h-[174px] relative w-[174px]">
                    <Img
                      src="images/img_imagepicture.svg"
                      className="h-[48px] m-[auto] w-[48px]"
                      alt="bookmark"
                    />
                    <Img
                      src="images/img_imagem_24.png"
                      className="absolute h-[174px] inset-[0] justify-center m-[auto] object-cover w-[174px]"
                      alt="Imagem"
                    />
                  </div>
                  <div className="flex items-start justify-start w-[auto]">
                    <Text
                      className="font-medium text-bluegray_800 text-left w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Não há nada aqui ainda
                    </Text>
                  </div>
                  <Text
                    className="font-normal not-italic text-bluegray_500 text-center w-[auto]"
                    variant="body2"
                  >
                    <span className="text-bluegray_500 text-[12px] font-rubik">
                      Você precisará ter ao menos um item recorrente para
                      finalizar suas compras.{" "}
                    </span>
                    <span className="text-indigo_900 text-[12px] font-rubik font-medium">
                      Saiba mais.
                    </span>
                  </Text>
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
                <List
                  className="flex-col gap-[1px] grid items-center w-[100%]"
                  orientation="vertical"
                >
                  <div className="flex flex-1 flex-col gap-[16px] items-end justify-start p-[16px] w-[100%]">
                    <div className="flex md:flex-col flex-row gap-[16px] items-start justify-end md:w-[100%] w-[auto]">
                      <div className="flex flex-col gap-[8px] items-start justify-start w-[294px]">
                        <div className="border-b-[1px] border-gray_300 border-solid h-[41px] relative w-[100%]">
                          <div className="absolute border-b-[1px] border-gray_300 border-solid flex-1 h-[41px] inset-[0] m-[auto] w-[100%]"></div>
                          <div className="absolute flex flex-row gap-[16px] h-[100%] inset-y-[0] items-center justify-between left-[0] my-[auto] w-[auto]">
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
                            alt="plus One"
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
                        name="FormsFieldoutlinedefault Three"
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
                  <div className="flex flex-1 flex-col gap-[16px] items-end justify-start p-[16px] w-[100%]">
                    <div className="flex md:flex-col flex-row gap-[16px] items-start justify-end md:w-[100%] w-[auto]">
                      <div className="flex items-start justify-start w-[294px]">
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
                                  Tylenol
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
                            alt="plus Two"
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
                              alt="info One"
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
                        name="FormsFieldoutlinedefault Four"
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
                </List>
                <Img
                  src="images/img_miscdivider.svg"
                  className="h-[1px] rounded-bl-[8px] rounded-br-[8px] w-[100%]"
                  alt="Miscdivider One"
                />
              </div>
            </div>
            <div className="bg-deep_purple_300 flex md:flex-col flex-row md:gap-[20px] items-center justify-start max-w-[745px] py-[24px] rounded-[8px] w-[100%]">
              <div className="flex sm:flex-1 flex-col gap-[16px] items-start justify-start sm:w-[100%] w-[auto]">
                <div className="flex flex-col items-start justify-start sm:px-[20px] px-[32px] sm:w-[100%] w-[auto]">
                  <div className="flex items-start justify-start pt-[8px] w-[auto]">
                    <Text
                      className="text-bluegray_900 text-left w-[auto]"
                      as="h1"
                      variant="h1"
                    >
                      Você economiza até
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[8px] items-start justify-start w-[auto]">
                    <div className="flex items-start justify-start pt-[8px] w-[auto]">
                      <Text
                        className="text-bluegray_900 text-left w-[auto]"
                        as="h1"
                        variant="h1"
                      >
                        R$12,26
                      </Text>
                    </div>
                    <div className="flex items-start justify-start pt-[8px] w-[auto]">
                      <Text
                        className="text-bluegray_900 text-left w-[auto]"
                        as="h1"
                        variant="h1"
                      >
                        comprando
                      </Text>
                    </div>
                  </div>
                  <div className="flex items-start justify-start pt-[8px] w-[auto]">
                    <Text
                      className="text-bluegray_900 text-left w-[auto]"
                      as="h1"
                      variant="h1"
                    >
                      com a gente
                    </Text>
                  </div>
                </div>
                <div className="flex items-center justify-start sm:px-[20px] px-[32px] w-[auto]">
                  <Text
                    className="font-normal not-italic text-indigo_900 text-left w-[auto]"
                    variant="body2"
                  >
                    No custo final já estão inclusos frete e todas as taxas.
                  </Text>
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-[8px] h-[183px] md:h-[auto] items-start justify-center p-[16px] w-[100%]">
                <div className="bg-light_green_A200 flex px-[16px] py-[8px] relative rounded-[4px] w-[100%]">
                  <Img
                    src="images/img_imagebrandlogo.svg"
                    className="h-[32px] my-[auto] w-[32px]"
                    alt="Imagebrandlogo Two"
                  />
                  <div className="flex items-center justify-end ml-[-4px] my-[auto] w-[110px] z-[1]">
                    <Text
                      className="font-medium text-gray_900 text-left w-[auto]"
                      variant="body1"
                    >
                      R$ 58,99
                    </Text>
                  </div>
                </div>
                <List
                  className="flex-col gap-[8px] grid items-center w-[100%]"
                  orientation="vertical"
                >
                  <div className="h-[100%] md:h-[21px] py-[8px] relative w-[100%]">
                    <div className="absolute flex h-[max-content] inset-y-[0] items-center justify-start left-[0] my-[auto] w-[48%]">
                      <Img
                        src="images/img_imagem_16x80.png"
                        className="h-[16px] md:h-[auto] object-cover w-[100%]"
                        alt="Imagem Three"
                      />
                    </div>
                    <div className="absolute flex h-[max-content] inset-y-[0] items-center justify-end my-[auto] pr-[16px] right-[0] w-[110px]">
                      <Text
                        className="font-medium text-gray_900 text-left w-[auto]"
                        variant="body1"
                      >
                        R$ 65,70
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-row gap-[16px] h-[100%] items-center justify-center py-[8px] w-[100%]">
                    <div className="flex items-center justify-start w-[48%]">
                      <Img
                        src="images/img_imagem_25.png"
                        className="h-[16px] md:h-[auto] object-cover w-[100%]"
                        alt="Imagem Four"
                      />
                    </div>
                    <div className="flex flex-1 items-center justify-end pr-[16px] w-[100%]">
                      <Text
                        className="font-medium text-gray_900 text-left w-[auto]"
                        variant="body1"
                      >
                        R$ 71,25
                      </Text>
                    </div>
                  </div>
                </List>
              </div>
              <Img
                src="images/img_ilustraomenor.svg"
                className="h-[118px] w-[132px]"
                alt="Ilustraomenor"
              />
            </div>
          </div>
          <footer className="flex items-center justify-center mt-[auto] mx-[auto] w-[100%]">
            <div className="sm:h-[307px] h-[550px] md:h-[878px] relative w-[100%]">
              <Img
                src="images/img_vector3_indigo_900.png"
                className="absolute h-[280px] left-[0] object-cover top-[0] w-[auto]"
                alt="VectorThree"
              />
              <div className="absolute bg-bluegray_900 bottom-[0] flex md:flex-col flex-row gap-[32px] inset-x-[0] items-start justify-start max-w-[1366px] mx-[auto] px-[120px] sm:px-[20px] md:px-[40px] py-[48px] w-[100%]">
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
                        alt="call"
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
                          Farmacêutica Responsável: Natália Rodrigues
                          D&#39;Agostino
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
              </div>
              <div className="absolute bg-teal_800 flex h-[56px] md:h-[auto] items-center justify-center px-[16px] py-[14px] right-[9%] rounded-[28px] shadow-bs2 top-[28%] w-[auto]">
                <div className="flex flex-row gap-[4px] items-center justify-start w-[auto]">
                  <Img
                    src="images/img_call.svg"
                    className="h-[24px] w-[24px]"
                    alt="call One"
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
          </footer>
        </div>
      </div>
    </>
  );
};

export default DesktopCarrinhoScompraavulsaPage;
