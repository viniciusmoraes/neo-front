import React from "react";

import { Img, Input, Text, Line, List, Button } from "components";
import { CloseSVG } from "../../assets/images";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const TemplatePage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray_100 flex flex-col font-rubik items-center justify-start mx-[auto] w-[100%]">
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
          <div className="flex flex-1 sm:flex-col flex-row gap-[32px] items-center justify-end max-w-[633px] w-[100%]">
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
              <div className="flex flex-row gap-[4px] h-[40px] md:h-[auto] items-center justify-start py-[8px] w-[auto]">
                <Img
                  src="images/img_user.svg"
                  className="h-[24px] w-[24px]"
                  alt="user"
                />
                <div className="flex items-center justify-center pl-[4px] w-[auto]">
                  <Text
                    className="font-medium text-indigo_900 text-left w-[auto]"
                    variant="body1"
                  >
                    Entrar
                  </Text>
                </div>
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
        <div className="flex flex-col gap-[16px] items-start justify-start max-w-[1126px] mt-[3px] mx-[auto] md:px-[20px] w-[100%]">
          <div className="flex items-start justify-start sm:pr-[20px] pr-[32px] py-[32px] md:w-[100%] w-[67%]">
            <div className="flex items-start justify-start w-[auto]">
              <div className="flex flex-col gap-[8px] items-start justify-start w-[auto]">
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
                      Dúvidas Frequentes
                    </Text>
                  </div>
                </div>
                <div className="flex items-start justify-start pb-[4px] w-[auto]">
                  <Text
                    className="not-italic text-bluegray_800 text-left w-[auto]"
                    as="h2"
                    variant="h2"
                  >
                    Dúvidas Frequentes
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div
            className="bg-cover bg-indigo_900 bg-no-repeat flex h-[410px] items-start justify-start p-[95px] sm:px-[20px] md:px-[40px] rounded-[16px] w-[100%]"
            style={{ backgroundImage: "url('images/img_banner.png')" }}
          >
            <div className="flex items-start justify-start my-[59px] py-[8px] w-[270px]">
              <Text
                className="leading-[120.00%] md:max-w-[100%] max-w-[270px] text-bluegray_800 text-left"
                as="h1"
                variant="h1"
              >
                Como podemos te ajudar?
              </Text>
            </div>
          </div>
          <div className="flex flex-col gap-[32px] items-center justify-center max-w-[1126px] py-[32px] w-[100%]">
            <div className="flex items-center justify-start md:w-[100%] w-[67%]">
              <div className="flex flex-col items-start justify-start w-[100%]">
                <div className="flex items-start justify-start pb-[16px] pt-[8px] w-[87px]">
                  <Text
                    className="text-bluegray_900 text-left w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    Dúvidas
                  </Text>
                </div>
                <div className="flex md:flex-col flex-row gap-[16px] items-center justify-between w-[100%]">
                  <div className="flex sm:flex-1 items-start justify-start sm:w-[100%] w-[554px]">
                    <Input
                      className="font-normal not-italic p-[0] text-[14px] placeholder:text-gray_500 text-gray_500 text-left w-[100%]"
                      wrapClassName="w-[100%]"
                      name="FormsFieldoutlinedefault One"
                      placeholder="Procure o que você quer saber"
                      shape="RoundedBorder8"
                      size="xl"
                      variant="OutlineGray300"
                    ></Input>
                  </div>
                  <div className="bg-indigo_900 flex h-[44px] md:h-[auto] items-center justify-center px-[16px] py-[14px] rounded-[22px] w-[174px]">
                    <div className="flex items-center justify-start w-[auto]">
                      <div className="flex items-center justify-center px-[4px] w-[auto]">
                        <Text
                          className="font-medium text-left text-light_green_A200 w-[auto]"
                          variant="body1"
                        >
                          Procurar
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-start justify-start md:w-[100%] w-[auto]">
              <div className="flex flex-col gap-[8px] items-start justify-start md:w-[100%] w-[auto]">
                <div className="bg-white_A700 flex flex-col gap-[16px] items-center justify-center max-w-[745px] rounded-[8px] shadow-bs w-[100%]">
                  <div className="bg-white_A700 flex items-start justify-center pt-[16px] px-[16px] w-[100%]">
                    <div className="h-[21px] relative w-[100%]">
                      <div className="absolute bottom-[0] flex flex-1 inset-x-[0] items-start justify-start mx-[auto] w-[100%]">
                        <div className="flex items-start justify-start w-[auto]">
                          <Text
                            className="text-bluegray_800 text-left w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            O que é a Pill?
                          </Text>
                        </div>
                      </div>
                      <Img
                        src="images/img_arrowdown.svg"
                        className="absolute h-[21px] inset-y-[0] max-h-[21px] my-[auto] right-[0] w-[auto]"
                        alt="arrowup"
                      />
                    </div>
                  </div>
                  <div className="bg-deep_purple_50 flex items-start justify-center p-[16px] w-[100%]">
                    <Text
                      className="font-normal leading-[150.00%] not-italic text-bluegray_800 text-left"
                      variant="body1"
                    >
                      A Pill é uma farmácia digital 100% comprometida em
                      simplificar a sua vida. Aqui você pode comprar os seus
                      medicamentos e produtos farmacêuticos sem precisar
                      enfrentar filas como nas farmácias tradicionais!
                      Entregamos o seu pedido rapidamente no endereço que você
                      preferir.
                      <br />
                      <br />
                      Ah, e o melhor! Aqui na Pill sempre tem preço justo e
                      atendimento rápido e fácil.
                    </Text>
                  </div>
                </div>
                <List
                  className="flex-col gap-[8px] grid items-center w-[100%]"
                  orientation="vertical"
                >
                  <div className="bg-white_A700 flex flex-1 items-center justify-center py-[16px] rounded-[8px] shadow-bs w-[100%]">
                    <div className="bg-white_A700 h-[24px] px-[16px] relative w-[100%]">
                      <div className="absolute bg-white_A700 flex-1 h-[19px] inset-x-[0] mx-[auto] px-[16px] top-[8%] w-[100%]"></div>
                      <div className="absolute h-[24px] inset-[0] m-[auto] w-[100%]">
                        <div className="absolute flex flex-1 inset-x-[0] items-start justify-start mx-[auto] top-[7%] w-[100%]">
                          <div className="flex items-start justify-start w-[auto]">
                            <Text
                              className="text-bluegray_800 text-left w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              Vocês são uma farmácia mesmo?
                            </Text>
                          </div>
                        </div>
                        <Img
                          src="images/img_arrowdown.svg"
                          className="absolute h-[24px] inset-y-[0] my-[auto] right-[0] w-[24px]"
                          alt="arrowdown"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="bg-white_A700 flex flex-1 items-center justify-center py-[16px] rounded-[8px] shadow-bs w-[100%]">
                    <div className="bg-white_A700 h-[24px] px-[16px] relative w-[100%]">
                      <div className="absolute bg-white_A700 flex-1 h-[19px] inset-x-[0] mx-[auto] px-[16px] top-[8%] w-[100%]"></div>
                      <div className="absolute h-[24px] inset-[0] m-[auto] w-[100%]">
                        <div className="absolute flex flex-1 inset-x-[0] items-start justify-start mx-[auto] top-[8%] w-[100%]">
                          <div className="flex items-start justify-start w-[auto]">
                            <Text
                              className="text-bluegray_800 text-left w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              Como posso realizar minhas compras?
                            </Text>
                          </div>
                        </div>
                        <Img
                          src="images/img_arrowdown.svg"
                          className="absolute h-[24px] inset-y-[0] my-[auto] right-[0] w-[24px]"
                          alt="arrowdown One"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="bg-white_A700 flex flex-1 items-center justify-center py-[16px] rounded-[8px] shadow-bs w-[100%]">
                    <div className="bg-white_A700 h-[24px] px-[16px] relative w-[100%]">
                      <div className="absolute bg-white_A700 flex-1 h-[19px] inset-x-[0] mx-[auto] px-[16px] top-[8%] w-[100%]"></div>
                      <div className="absolute h-[24px] inset-[0] m-[auto] w-[100%]">
                        <div className="absolute flex flex-1 inset-x-[0] items-start justify-start mx-[auto] top-[8%] w-[100%]">
                          <div className="flex items-start justify-start w-[auto]">
                            <Text
                              className="text-bluegray_800 text-left w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              Qual o horário de atendimento da Pill?
                            </Text>
                          </div>
                        </div>
                        <Img
                          src="images/img_arrowdown.svg"
                          className="absolute h-[24px] inset-y-[0] my-[auto] right-[0] w-[24px]"
                          alt="arrowdown Two"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="bg-white_A700 flex flex-1 items-center justify-center py-[16px] rounded-[8px] shadow-bs w-[100%]">
                    <div className="bg-white_A700 h-[24px] px-[16px] relative w-[100%]">
                      <div className="absolute bg-white_A700 flex-1 h-[19px] inset-x-[0] mx-[auto] px-[16px] top-[8%] w-[100%]"></div>
                      <div className="absolute h-[24px] inset-[0] m-[auto] w-[100%]">
                        <div className="absolute flex flex-1 inset-x-[0] items-start justify-start mx-[auto] top-[8%] w-[100%]">
                          <div className="flex items-start justify-start w-[auto]">
                            <Text
                              className="text-bluegray_800 text-left w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              Em quanto tempo receberei meu pedido?
                            </Text>
                          </div>
                        </div>
                        <Img
                          src="images/img_arrowdown.svg"
                          className="absolute h-[24px] inset-y-[0] my-[auto] right-[0] w-[24px]"
                          alt="arrowdown Three"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="bg-white_A700 flex flex-1 items-center justify-center py-[16px] rounded-[8px] shadow-bs w-[100%]">
                    <div className="bg-white_A700 h-[24px] px-[16px] relative w-[100%]">
                      <div className="absolute bg-white_A700 flex-1 h-[19px] inset-x-[0] mx-[auto] px-[16px] top-[8%] w-[100%]"></div>
                      <div className="absolute h-[24px] inset-[0] m-[auto] w-[100%]">
                        <div className="absolute flex flex-1 inset-x-[0] items-start justify-start mx-[auto] top-[8%] w-[100%]">
                          <div className="flex items-start justify-start w-[auto]">
                            <Text
                              className="text-bluegray_800 text-left w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              Quais as vantagens de usar a Pill?
                            </Text>
                          </div>
                        </div>
                        <Img
                          src="images/img_arrowdown.svg"
                          className="absolute h-[24px] inset-y-[0] my-[auto] right-[0] w-[24px]"
                          alt="arrowdown Four"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="bg-white_A700 flex flex-1 items-center justify-center py-[16px] rounded-[8px] shadow-bs w-[100%]">
                    <div className="bg-white_A700 h-[24px] px-[16px] relative w-[100%]">
                      <div className="absolute bg-white_A700 flex-1 h-[19px] inset-x-[0] mx-[auto] px-[16px] top-[8%] w-[100%]"></div>
                      <div className="absolute h-[24px] inset-[0] m-[auto] w-[100%]">
                        <div className="absolute flex flex-1 inset-x-[0] items-start justify-start mx-[auto] top-[8%] w-[100%]">
                          <div className="flex items-start justify-start sm:w-[100%] w-[auto]">
                            <Text
                              className="text-bluegray_800 text-left w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              Como posso realizar o pagamento dos meus produtos?
                            </Text>
                          </div>
                        </div>
                        <Img
                          src="images/img_arrowdown.svg"
                          className="absolute h-[24px] inset-y-[0] my-[auto] right-[0] w-[24px]"
                          alt="arrowdown Five"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="bg-white_A700 flex flex-1 items-center justify-center py-[16px] rounded-[8px] shadow-bs w-[100%]">
                    <div className="bg-white_A700 h-[24px] px-[16px] relative w-[100%]">
                      <div className="absolute bg-white_A700 flex-1 h-[19px] inset-x-[0] mx-[auto] px-[16px] top-[8%] w-[100%]"></div>
                      <div className="absolute h-[24px] inset-[0] m-[auto] w-[100%]">
                        <div className="absolute flex flex-1 inset-x-[0] items-start justify-start mx-[auto] top-[8%] w-[100%]">
                          <div className="flex items-start justify-start sm:w-[100%] w-[auto]">
                            <Text
                              className="text-bluegray_800 text-left w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              Posso usar o desconto do meu plano de saúde na
                              Pill?
                            </Text>
                          </div>
                        </div>
                        <Img
                          src="images/img_arrowdown.svg"
                          className="absolute h-[24px] inset-y-[0] my-[auto] right-[0] w-[24px]"
                          alt="arrowdown Six"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="bg-white_A700 flex flex-1 items-center justify-center py-[16px] rounded-[8px] shadow-bs w-[100%]">
                    <div className="bg-white_A700 h-[24px] px-[16px] relative w-[100%]">
                      <div className="absolute bg-white_A700 flex-1 h-[19px] inset-x-[0] mx-[auto] px-[16px] top-[8%] w-[100%]"></div>
                      <div className="absolute h-[24px] inset-[0] m-[auto] w-[100%]">
                        <div className="absolute flex flex-1 inset-x-[0] items-start justify-start mx-[auto] top-[8%] w-[100%]">
                          <div className="flex items-start justify-start w-[auto]">
                            <Text
                              className="text-bluegray_800 text-left w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              Qual o custo do frete?
                            </Text>
                          </div>
                        </div>
                        <Img
                          src="images/img_arrowdown.svg"
                          className="absolute h-[24px] inset-y-[0] my-[auto] right-[0] w-[24px]"
                          alt="arrowdown Seven"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="bg-white_A700 flex flex-1 items-center justify-center py-[16px] rounded-[8px] shadow-bs w-[100%]">
                    <div className="bg-white_A700 h-[24px] px-[16px] relative w-[100%]">
                      <div className="absolute bg-white_A700 flex-1 h-[19px] inset-x-[0] mx-[auto] px-[16px] top-[8%] w-[100%]"></div>
                      <div className="absolute h-[24px] inset-[0] m-[auto] w-[100%]">
                        <div className="absolute flex flex-1 inset-x-[0] items-start justify-start mx-[auto] top-[8%] w-[100%]">
                          <div className="flex items-start justify-start sm:w-[100%] w-[auto]">
                            <Text
                              className="text-bluegray_800 text-left w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              Posso realizar o pedido no nome de outra pessoa?
                            </Text>
                          </div>
                        </div>
                        <Img
                          src="images/img_arrowdown.svg"
                          className="absolute h-[24px] inset-y-[0] my-[auto] right-[0] w-[24px]"
                          alt="arrowdown Eight"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="bg-white_A700 flex flex-1 items-center justify-center py-[16px] rounded-[8px] shadow-bs w-[100%]">
                    <div className="bg-white_A700 h-[24px] px-[16px] relative w-[100%]">
                      <div className="absolute bg-white_A700 flex-1 h-[19px] inset-x-[0] mx-[auto] px-[16px] top-[8%] w-[100%]"></div>
                      <div className="absolute h-[24px] inset-[0] m-[auto] w-[100%]">
                        <div className="absolute flex flex-1 inset-x-[0] items-start justify-start mx-[auto] top-[8%] w-[100%]">
                          <div className="flex items-start justify-start w-[auto]">
                            <Text
                              className="text-bluegray_800 text-left w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              Posso falar com algum farmacêutico(a)?
                            </Text>
                          </div>
                        </div>
                        <Img
                          src="images/img_arrowdown.svg"
                          className="absolute h-[24px] inset-y-[0] my-[auto] right-[0] w-[24px]"
                          alt="arrowdown Nine"
                        />
                      </div>
                    </div>
                  </div>
                </List>
              </div>
            </div>
            <div className="flex items-center justify-start md:w-[100%] w-[67%]">
              <div className="bg-lime_400 flex sm:flex-col flex-row sm:gap-[40px] items-center justify-between p-[12px] rounded-[6px] w-[100%]">
                <div className="flex sm:flex-1 flex-col gap-[6.38px] items-start justify-center sm:ml-[0] ml-[3px] p-[16px] sm:w-[100%] w-[auto]">
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
                  className="h-[136px] mr-[12px] w-[auto]"
                  alt="Sticker"
                />
              </div>
            </div>
          </div>
        </div>
        <footer className="bg-bluegray_900 flex md:flex-col flex-row gap-[32px] items-center justify-center mt-[58px] px-[120px] md:px-[20px] py-[48px] w-[100%]">
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
          <div className="flex flex-col gap-[8px] items-start justify-start w-[298px]">
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
          <div className="flex flex-col gap-[4px] items-start justify-start w-[298px]">
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
          <div className="flex items-start justify-start w-[298px]">
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
    </>
  );
};

export default TemplatePage;
