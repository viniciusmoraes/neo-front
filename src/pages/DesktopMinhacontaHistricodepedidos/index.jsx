import React from "react";

import { Img, Input, Text, Line, List, Button } from "components";
import { CloseSVG } from "../../assets/images";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const DesktopMinhacontaHistricodepedidosPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray_100 flex flex-col font-rubik items-center justify-start mx-[auto] w-[100%]">
        <header className="bg-gray_50 flex md:flex-col flex-row gap-[32px] items-center justify-center px-[120px] md:px-[20px] py-[8px] w-[100%]">
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
        </header>
        <div className="h-[1334px] md:h-[979px] md:px-[20px] relative w-[100%]">
          <div className="absolute bg-white_A700 flex flex-col h-[1217px] md:h-[auto] items-start justify-start left-[0] pl-[120px] sm:pl-[20px] md:pl-[40px] pt-[24px] top-[0] sm:w-[100%] w-[390px]">
            <div className="flex h-[64px] md:h-[auto] items-start justify-center px-[16px] py-[12px] w-[100%]">
              <div className="flex items-center justify-start w-[100%]">
                <div className="flex items-start justify-start w-[100%]">
                  <div className="flex items-start justify-start w-[auto]">
                    <Text
                      className="font-medium text-bluegray_800 text-left w-[auto]"
                      as="h5"
                      variant="h5"
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
                      className="text-bluegray_800 text-left w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Meus dados
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <Input
              className="font-medium p-[0] text-[16px] placeholder:text-bluegray_800 text-bluegray_800 text-left w-[100%]"
              wrapClassName="w-[100%]"
              name="Itemlist"
              placeholder="Histórico de pedidos"
              size="md"
              variant="OutlineIndigo900"
            ></Input>
            <div className="flex items-start justify-center sm:px-[20px] px-[32px] py-[12px] w-[100%]">
              <div className="flex items-center justify-start w-[100%]">
                <div className="flex items-start justify-start w-[100%]">
                  <div className="flex items-start justify-start w-[auto]">
                    <Text
                      className="text-bluegray_800 text-left w-[auto]"
                      as="h6"
                      variant="h6"
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
                      className="text-bluegray_800 text-left w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Cartões
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute flex flex-col gap-[33px] justify-start right-[0] top-[1%] w-[71%]">
            <div className="flex flex-col items-start justify-start w-[100%]">
              <div className="flex flex-col gap-[8px] items-start justify-start px-[16px] w-[auto]">
                <div className="flex flex-row items-start justify-start w-[auto]">
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
                  <div className="flex items-center justify-center pt-[8px] w-[auto]">
                    <Text
                      className="font-normal not-italic text-bluegray_800 text-left w-[auto]"
                      variant="body1"
                    >
                      Histórico de pedidos
                    </Text>
                  </div>
                </div>
                <div className="flex items-start justify-start pb-[4px] w-[auto]">
                  <Text
                    className="not-italic text-bluegray_800 text-left w-[auto]"
                    as="h2"
                    variant="h2"
                  >
                    Histórico de pedidos
                  </Text>
                </div>
              </div>
              <div className="flex h-[378px] md:h-[auto] items-start justify-start max-w-[840px] p-[16px] w-[100%]">
                <div className="bg-white_A700 flex flex-col gap-[16px] h-[100%] items-center justify-center px-[16px] py-[24px] rounded-[8px] shadow-bs w-[100%]">
                  <div className="h-[174px] relative w-[174px]">
                    <Img
                      src="images/img_imagepicture.svg"
                      className="h-[48px] m-[auto] w-[48px]"
                      alt="bookmark"
                    />
                    <Img
                      src="images/img_imagem_20.png"
                      className="absolute h-[174px] inset-[0] justify-center m-[auto] object-cover w-[174px]"
                      alt="Imagem One"
                    />
                  </div>
                  <div className="flex items-start justify-start w-[auto]">
                    <Text
                      className="font-medium text-bluegray_800 text-left w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Você ainda não tem um pedido
                    </Text>
                  </div>
                  <Text
                    className="font-normal not-italic text-bluegray_500 text-center w-[auto]"
                    variant="body2"
                  >
                    Faça uma compra e veja o status do seu pedido aqui!
                  </Text>
                  <div className="bg-light_green_A200 flex h-[36px] md:h-[auto] items-center justify-center px-[16px] py-[14px] rounded-[18px] w-[150px]">
                    <div className="flex items-center justify-start w-[auto]">
                      <div className="flex items-center justify-center w-[auto]">
                        <Text
                          className="font-medium text-indigo_900 text-left w-[auto]"
                          variant="body2"
                        >
                          Iniciar pedido
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-start justify-start max-w-[960px] mt-[32px] w-[100%]">
                <div className="flex items-start justify-start max-w-[960px] overflow-auto w-[100%]">
                  <div className="flex flex-col gap-[8px] items-start justify-start md:w-[100%] w-[auto]">
                    <div className="flex items-start justify-start pb-[16px] pt-[8px] w-[auto]">
                      <Text
                        className="text-bluegray_900 text-left w-[auto]"
                        as="h3"
                        variant="h3"
                      >
                        Tratamentos
                      </Text>
                    </div>
                    <List
                      className="sm:flex-col flex-row gap-[8px] grid sm:grid-cols-1 grid-cols-11 md:grid-cols-6 justify-start md:w-[100%] w-[auto]"
                      orientation="horizontal"
                    >
                      <div className="bg-white_A700 flex flex-col h-[118px] md:h-[auto] items-center justify-start p-[12px] rounded-[8px] shadow-bs w-[100%]">
                        <div className="flex h-[48px] items-center justify-start w-[48px]">
                          <Img
                            src="images/img_imagem_48x48.png"
                            className="h-[48px] md:h-[auto] object-cover w-[48px]"
                            alt="Imagem Two"
                          />
                        </div>
                        <div className="flex items-center justify-center pt-[4px] w-[100%]">
                          <Text
                            className="font-medium leading-[150.00%] md:max-w-[100%] max-w-[94px] text-bluegray_800 text-center"
                            variant="body1"
                          >
                            Doenças crônicas
                          </Text>
                        </div>
                      </div>
                      <div className="bg-white_A700 flex flex-col h-[118px] md:h-[auto] items-center justify-start p-[12px] rounded-[8px] shadow-bs w-[100%]">
                        <div className="flex h-[48px] items-center justify-start w-[48px]">
                          <Img
                            src="images/img_imagem_1.png"
                            className="h-[48px] md:h-[auto] object-cover w-[48px]"
                            alt="Imagem Three"
                          />
                        </div>
                        <div className="flex items-center justify-center pt-[4px] w-[100%]">
                          <Text
                            className="font-medium leading-[150.00%] md:max-w-[100%] max-w-[94px] text-bluegray_800 text-center"
                            variant="body1"
                          >
                            Mamãe  & bebê
                          </Text>
                        </div>
                      </div>
                      <div className="bg-white_A700 flex flex-col h-[118px] md:h-[auto] items-center justify-start p-[12px] rounded-[8px] shadow-bs w-[100%]">
                        <div
                          className="bg-cover bg-no-repeat flex h-[48px] items-center justify-start w-[48px]"
                          style={{
                            backgroundImage:
                              "url('images/img_imagepicture.svg')",
                          }}
                        >
                          <Img
                            src="images/img_imagem_2.png"
                            className="h-[48px] md:h-[auto] object-cover w-[48px]"
                            alt="Imagem Four"
                          />
                        </div>
                        <div className="flex items-center justify-center pt-[4px] w-[100%]">
                          <Text
                            className="font-medium leading-[150.00%] md:max-w-[100%] max-w-[94px] text-bluegray_800 text-center"
                            variant="body1"
                          >
                            Saúde mental & bem-estar
                          </Text>
                        </div>
                      </div>
                      <div className="bg-white_A700 flex flex-col h-[118px] md:h-[auto] items-center justify-start p-[12px] rounded-[8px] shadow-bs w-[100%]">
                        <div
                          className="bg-cover bg-no-repeat flex h-[48px] items-center justify-start w-[48px]"
                          style={{
                            backgroundImage:
                              "url('images/img_imagepicture.svg')",
                          }}
                        >
                          <Img
                            src="images/img_imagem_3.png"
                            className="h-[48px] md:h-[auto] object-cover w-[48px]"
                            alt="Imagem Five"
                          />
                        </div>
                        <div className="flex items-center justify-center pt-[4px] w-[100%]">
                          <Text
                            className="font-medium leading-[150.00%] md:max-w-[100%] max-w-[94px] text-bluegray_800 text-center"
                            variant="body1"
                          >
                            Higiene & beleza
                          </Text>
                        </div>
                      </div>
                      <div className="bg-white_A700 flex flex-col h-[118px] md:h-[auto] items-center justify-start p-[12px] rounded-[8px] shadow-bs w-[100%]">
                        <div
                          className="bg-cover bg-no-repeat flex h-[48px] items-center justify-start w-[48px]"
                          style={{
                            backgroundImage:
                              "url('images/img_imagepicture.svg')",
                          }}
                        >
                          <Img
                            src="images/img_imagem_4.png"
                            className="h-[48px] md:h-[auto] object-cover w-[48px]"
                            alt="Imagem Six"
                          />
                        </div>
                        <div className="flex items-center justify-center pt-[4px] w-[100%]">
                          <Text
                            className="font-medium leading-[150.00%] md:max-w-[100%] max-w-[94px] text-bluegray_800 text-center"
                            variant="body1"
                          >
                            Vitaminas & suplementos
                          </Text>
                        </div>
                      </div>
                      <div className="bg-white_A700 flex flex-col h-[118px] md:h-[auto] items-center justify-start p-[12px] rounded-[8px] shadow-bs w-[100%]">
                        <div
                          className="bg-cover bg-no-repeat flex h-[48px] items-center justify-start w-[48px]"
                          style={{
                            backgroundImage:
                              "url('images/img_imagepicture.svg')",
                          }}
                        >
                          <Img
                            src="images/img_imagem_5.png"
                            className="h-[48px] md:h-[auto] object-cover w-[48px]"
                            alt="Imagem Seven"
                          />
                        </div>
                        <div className="flex items-center justify-center pt-[4px] w-[100%]">
                          <Text
                            className="font-medium leading-[150.00%] md:max-w-[100%] max-w-[94px] text-bluegray_800 text-center"
                            variant="body1"
                          >
                            Queda  de cabelo
                          </Text>
                        </div>
                      </div>
                      <div className="bg-white_A700 flex flex-col h-[118px] md:h-[auto] items-center justify-start p-[12px] rounded-[8px] shadow-bs w-[100%]">
                        <div
                          className="bg-cover bg-no-repeat flex h-[48px] items-center justify-start w-[48px]"
                          style={{
                            backgroundImage:
                              "url('images/img_imagepicture.svg')",
                          }}
                        >
                          <Img
                            src="images/img_imagem_6.png"
                            className="h-[48px] md:h-[auto] object-cover w-[48px]"
                            alt="Imagem Eight"
                          />
                        </div>
                        <div className="flex items-center justify-center pt-[4px] w-[100%]">
                          <Text
                            className="font-medium leading-[150.00%] md:max-w-[100%] max-w-[94px] text-bluegray_800 text-center"
                            variant="body1"
                          >
                            Disfunção erétil
                          </Text>
                        </div>
                      </div>
                      <div className="bg-white_A700 flex flex-col h-[118px] md:h-[auto] items-center justify-start p-[12px] rounded-[8px] shadow-bs w-[100%]">
                        <div
                          className="bg-cover bg-no-repeat flex h-[48px] items-center justify-start w-[48px]"
                          style={{
                            backgroundImage:
                              "url('images/img_imagepicture.svg')",
                          }}
                        >
                          <Img
                            src="images/img_imagem_7.png"
                            className="h-[48px] md:h-[auto] object-cover w-[48px]"
                            alt="Imagem Nine"
                          />
                        </div>
                        <div className="flex items-center justify-center pt-[4px] w-[100%]">
                          <Text
                            className="font-medium leading-[150.00%] md:max-w-[100%] max-w-[94px] text-bluegray_800 text-center"
                            variant="body1"
                          >
                            Gripes & resfriados
                          </Text>
                        </div>
                      </div>
                      <div className="bg-white_A700 flex flex-col h-[118px] md:h-[auto] items-center justify-start p-[12px] rounded-[8px] shadow-bs w-[100%]">
                        <div
                          className="bg-cover bg-no-repeat flex h-[48px] items-center justify-start w-[48px]"
                          style={{
                            backgroundImage:
                              "url('images/img_imagepicture.svg')",
                          }}
                        >
                          <Img
                            src="images/img_imagem_8.png"
                            className="h-[48px] md:h-[auto] object-cover w-[48px]"
                            alt="Imagem Ten"
                          />
                        </div>
                        <div className="flex items-center justify-center pt-[4px] w-[100%]">
                          <Text
                            className="font-medium leading-[150.00%] md:max-w-[100%] max-w-[94px] text-bluegray_800 text-center"
                            variant="body1"
                          >
                            Dor  & febre
                          </Text>
                        </div>
                      </div>
                      <div className="bg-white_A700 flex flex-col h-[118px] md:h-[auto] items-center justify-start p-[12px] rounded-[8px] shadow-bs w-[100%]">
                        <div
                          className="bg-cover bg-no-repeat flex h-[48px] items-center justify-start w-[48px]"
                          style={{
                            backgroundImage:
                              "url('images/img_imagepicture.svg')",
                          }}
                        >
                          <Img
                            src="images/img_imagem_13.png"
                            className="h-[48px] md:h-[auto] object-cover w-[48px]"
                            alt="Imagem Eleven"
                          />
                        </div>
                        <div className="flex items-center justify-center pt-[4px] w-[100%]">
                          <Text
                            className="font-medium leading-[150.00%] text-bluegray_800 text-center"
                            variant="body1"
                          >
                            Aparelhos
                            <br />& testes
                          </Text>
                        </div>
                      </div>
                      <div className="bg-white_A700 flex flex-col h-[118px] md:h-[auto] items-center justify-start p-[12px] rounded-[8px] shadow-bs w-[100%]">
                        <div className="flex h-[48px] items-center justify-start w-[48px]">
                          <Img
                            src="images/img_arrowright_indigo_900.svg"
                            className="h-[48px] w-[48px]"
                            alt="arrowright"
                          />
                        </div>
                        <div className="flex items-center justify-center pt-[4px] w-[100%]">
                          <Text
                            className="font-medium leading-[150.00%] md:max-w-[100%] max-w-[94px] text-bluegray_800 text-center"
                            variant="body1"
                          >
                            Todos os tratamentos
                          </Text>
                        </div>
                      </div>
                    </List>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-start md:ml-[0] ml-[95px] mt-[32px] md:w-[100%] w-[78%]">
                <div className="bg-lime_400 flex items-center justify-start rounded-[6px] w-[100%]">
                  <div className="h-[186px] md:h-[336px] relative rounded-[6px] w-[100%]">
                    <Img
                      src="images/img_imagem_186x746.png"
                      className="h-[186px] m-[auto] object-cover rounded-[6px] w-[100%]"
                      alt="Imagem Twelve"
                    />
                    <div className="absolute flex md:flex-col flex-row md:gap-[40px] h-[max-content] inset-[0] items-center justify-center m-[auto] w-[95%]">
                      <div className="flex flex-col gap-[6.38px] items-start justify-center p-[16px] sm:w-[100%] w-[auto]">
                        <div className="flex items-start justify-start w-[auto]">
                          <Text
                            className="text-bluegray_900 text-left w-[auto]"
                            as="h1"
                            variant="h1"
                          >
                            Alguma dúvida?
                          </Text>
                        </div>
                        <div className="flex items-center justify-center w-[auto]">
                          <Text
                            className="font-normal not-italic text-bluegray_800 text-left w-[auto]"
                            variant="body1"
                          >
                            Fale com a gente!
                          </Text>
                        </div>
                        <div className="flex flex-row gap-[16px] items-start justify-start pt-[16px] w-[auto]">
                          <Button
                            className="flex items-center justify-center min-w-[123px] text-center w-[auto]"
                            leftIcon={
                              <Img
                                src="images/img_call_light_green_a200.svg"
                                className="mr-[4px] text-center"
                                alt="call"
                              />
                            }
                            shape="CircleBorder18"
                            variant="FillIndigo900"
                          >
                            <div className="bg-transparent cursor-pointer font-medium text-[12px] text-left text-light_green_A200">
                              Button label
                            </div>
                          </Button>
                          <Button
                            className="flex items-center justify-center text-center w-[210px]"
                            leftIcon={
                              <Img
                                src="images/img_mail_indigo_900.svg"
                                className="mr-[4px] text-center"
                                alt="mail"
                              />
                            }
                            shape="CircleBorder18"
                          >
                            <div className="bg-transparent cursor-pointer font-medium text-[12px] text-indigo_900 text-left">
                              Button label
                            </div>
                          </Button>
                        </div>
                      </div>
                      <Img
                        src="images/img_sticker.svg"
                        className="h-[136px] w-[auto]"
                        alt="Sticker"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-teal_800 flex h-[56px] md:h-[auto] items-center justify-center md:ml-[0] ml-[653px] mr-[120px] px-[16px] py-[14px] rounded-[28px] shadow-bs2 w-[auto]">
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
          <footer className="absolute bg-bluegray_900 bottom-[0] flex md:flex-col flex-row gap-[32px] inset-x-[0] items-center justify-center mx-[auto] px-[120px] sm:px-[20px] md:px-[40px] py-[48px] w-[100%]">
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

export default DesktopMinhacontaHistricodepedidosPage;
