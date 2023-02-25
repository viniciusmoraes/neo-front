import React from "react";

import { Img, Input, Text, Line, Button, List } from "components";
import { CloseSVG } from "../../assets/images";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const QuemsomosPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray_100 flex flex-col font-rubik items-start justify-start mx-[auto] w-[100%]">
        <div className="flex items-center w-[100%]">
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
        </div>
        <div className="h-[2541px] sm:h-[2679px] md:h-[2957px] md:ml-[0] ml-[36px] mt-[16px] md:px-[20px] relative md:w-[100%] w-[90%]">
          <div className="h-[2541px] sm:h-[2663px] md:h-[2941px] m-[auto] w-[100%]">
            <div className="absolute flex flex-col gap-[32px] h-[100%] md:h-[auto] inset-y-[0] items-center justify-start my-[auto] pb-[32px] right-[1%] w-[auto]">
              <div className="flex flex-col gap-[8px] items-start justify-start w-[100%]">
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
                      className="font-normal not-italic text-indigo_900 text-left w-[auto]"
                      variant="body1"
                    >
                      Quem Somos
                    </Text>
                  </div>
                </div>
                <div className="flex items-start justify-start pb-[4px] w-[auto]">
                  <Text
                    className="not-italic text-indigo_900 text-left w-[auto]"
                    as="h2"
                    variant="h2"
                  >
                    Quem Somos
                  </Text>
                </div>
              </div>
              <div className="bg-light_green_A200 h-[410px] relative rounded-[16px] w-[100%]">
                <Img
                  src="images/img_filter.svg"
                  className="absolute bottom-[2%] h-[80px] right-[34%] w-[80px]"
                  alt="filter"
                />
                <div className="bg-indigo_900 h-[410px] my-[auto] rounded-[277px] w-[50%]"></div>
                <div className="absolute h-[410px] inset-[0] justify-center m-[auto] rounded-[16px] w-[100%]">
                  <Img
                    src="images/img_imagem_410x1126.png"
                    className="h-[410px] m-[auto] object-cover rounded-[16px] w-[100%]"
                    alt="Imagem"
                  />
                  <div className="absolute flex h-[max-content] inset-y-[0] items-end justify-center left-[0] my-[auto] sm:pl-[20px] md:pl-[40px] pl-[95px] sm:w-[100%] w-[460px]">
                    <div className="flex items-start justify-center pb-[16px] w-[100%]">
                      <div className="flex items-start justify-start w-[100%]">
                        <Text
                          className="leading-[120.00%] md:max-w-[100%] max-w-[365px] text-left text-white_A700"
                          as="h1"
                          variant="h1"
                        >
                          <span className="md:text-[34px] sm:text-[32px] text-white_A700 text-[36px] font-rubik font-medium">
                            Nós somos{" "}
                          </span>
                          <span className="md:text-[34px] sm:text-[32px] text-lime_400 text-[36px] font-rubik font-medium">
                            muito mais
                          </span>
                          <span className="md:text-[34px] sm:text-[32px] text-white_A700 text-[36px] font-rubik font-medium">
                            {" "}
                            que uma farmácia tradicional!
                          </span>
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex md:flex-col flex-row gap-[1px] items-start justify-start max-w-[1130px] w-[100%]">
                <div className="flex sm:flex-1 flex-col gap-[32px] items-start justify-start sm:w-[100%] w-[555px]">
                  <div className="flex flex-col items-start justify-start w-[100%]">
                    <div className="flex items-start justify-start pb-[16px] pt-[8px] w-[100%]">
                      <Text
                        className="leading-[120.00%] md:max-w-[100%] max-w-[539px] text-bluegray_900 text-left"
                        as="h3"
                        variant="h3"
                      >
                        Oferecemos uma experiência diferenciada e tecnológica
                      </Text>
                    </div>
                    <div className="flex items-center justify-center pt-[8px] w-[100%]">
                      <Text
                        className="font-normal leading-[150.00%] md:max-w-[100%] max-w-[539px] not-italic text-indigo_900 text-left"
                        variant="body1"
                      >
                        Acreditamos na farmácia que cuida das pessoas, não
                        apenas como um lugar em que se compra o medicamento que
                        você precisa para se manter saudável, mas também como um
                        lugar que tem uma comunicação amigável, acompanhamento e
                        atendimento personalizado, sem filas e sem
                        &quot;empurroterapia&quot;.
                      </Text>
                    </div>
                  </div>
                  <div className="flex items-start justify-start sm:pr-[20px] pr-[23px] py-[23px] md:w-[100%] w-[98%]">
                    <div className="flex flex-col gap-[16px] items-start justify-start md:w-[100%] w-[71%]">
                      <div className="flex flex-col gap-[8px] items-start justify-center w-[364px]">
                        <div className="flex items-start justify-start w-[100%]">
                          <Text
                            className="text-bluegray_900 text-left w-[auto]"
                            as="h3"
                            variant="h3"
                          >
                            Benefícios
                          </Text>
                        </div>
                        <div className="flex items-center justify-center w-[100%]">
                          <Text
                            className="font-normal not-italic text-indigo_900 text-left w-[auto]"
                            variant="body1"
                          >
                            Alguns motivos para você estar com a gente
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col gap-[8px] items-start justify-start w-[auto]">
                        <div className="flex flex-row gap-[8px] items-start justify-start w-[auto]">
                          <Button
                            className="flex items-center justify-center min-w-[104px] text-center w-[auto]"
                            leftIcon={
                              <Img
                                src="images/img_checkmark.svg"
                                className="mr-[4px] text-center"
                                alt="checkmark"
                              />
                            }
                            shape="RoundedBorder4"
                            variant="OutlineGray300"
                          >
                            <div className="bg-transparent cursor-pointer font-medium text-[12px] text-center text-indigo_900">
                              Frete grátis
                            </div>
                          </Button>
                          <Button
                            className="flex items-center justify-center min-w-[187px] text-center w-[auto]"
                            leftIcon={
                              <Img
                                src="images/img_checkmark.svg"
                                className="mr-[4px] text-center"
                                alt="checkmark"
                              />
                            }
                            shape="RoundedBorder4"
                            variant="OutlineGray300"
                          >
                            <div className="bg-transparent cursor-pointer font-medium text-[12px] text-center text-indigo_900">
                              Farmacêuticos 24h online
                            </div>
                          </Button>
                        </div>
                        <div className="flex flex-row gap-[8px] items-start justify-start w-[auto]">
                          <Button
                            className="flex items-center justify-center min-w-[88px] text-center w-[auto]"
                            leftIcon={
                              <Img
                                src="images/img_checkmark.svg"
                                className="mr-[4px] text-center"
                                alt="checkmark"
                              />
                            }
                            shape="RoundedBorder4"
                            variant="OutlineGray300"
                          >
                            <div className="bg-transparent cursor-pointer font-medium text-[12px] text-center text-indigo_900">
                              Sem filas
                            </div>
                          </Button>
                          <Button
                            className="flex items-center justify-center min-w-[155px] text-center w-[auto]"
                            leftIcon={
                              <Img
                                src="images/img_checkmark.svg"
                                className="mr-[4px] text-center"
                                alt="checkmark"
                              />
                            }
                            shape="RoundedBorder4"
                            variant="OutlineGray300"
                          >
                            <div className="bg-transparent cursor-pointer font-medium text-[12px] text-center text-indigo_900">
                              Farmácia recorrente
                            </div>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex sm:flex-1 flex-col h-[390px] md:h-[auto] items-start justify-start p-[16px] sm:w-[100%] w-[555px]">
                  <Img
                    src="images/img_music.svg"
                    className="h-[24px] w-[24px]"
                    alt="music"
                  />
                  <div className="flex items-start justify-start py-[8px] w-[100%]">
                    <Text
                      className="leading-[120.00%] md:max-w-[100%] max-w-[523px] text-bluegray_900 text-left"
                      as="h1"
                      variant="h1"
                    >
                      Queremos que as pessoas comprem na Pill porque encontram
                      os melhores preços, têm um excelente atendimento e recebem
                      seus produtos com rapidez
                    </Text>
                  </div>
                  <div className="flex items-center justify-center py-[8px] w-[100%]">
                    <Text
                      className="font-normal not-italic text-indigo_900 text-left w-[auto]"
                      variant="body1"
                    >
                      Bruno Ramos, cofundador da Pill
                    </Text>
                  </div>
                </div>
              </div>
              <div className="bg-deep_purple_50 flex flex-col gap-[16px] items-center justify-start pb-[16px] w-[100%]">
                <div className="flex flex-col gap-[16px] items-center justify-center max-w-[1126px] pt-[16px] px-[16px] w-[100%]">
                  <div className="flex items-start justify-start pt-[16px] w-[auto]">
                    <Text
                      className="text-bluegray_900 text-left w-[auto]"
                      as="h3"
                      variant="h3"
                    >
                      Pill{" "}
                    </Text>
                  </div>
                  <div className="bg-white_A700 flex sm:flex-col flex-row gap-[16px] items-center justify-center p-[8px] rounded-[16px] shadow-bs sm:w-[100%] w-[auto]">
                    <div className="bg-indigo_900 flex items-center justify-center px-[8px] py-[4px] rounded-[14px] w-[auto]">
                      <div className="flex h-[21px] md:h-[auto] items-center justify-center w-[auto]">
                        <Text
                          className="font-medium text-center text-light_green_A200 w-[auto]"
                          variant="body1"
                        >
                          para Indústrias
                        </Text>
                      </div>
                    </div>
                    <div className="flex items-center justify-center px-[8px] py-[4px] rounded-[4px] w-[auto]">
                      <div className="flex h-[21px] md:h-[auto] items-center justify-center w-[auto]">
                        <Text
                          className="font-medium text-center text-indigo_900 w-[auto]"
                          variant="body1"
                        >
                          Empresas
                        </Text>
                      </div>
                    </div>
                    <div className="flex items-center justify-center px-[8px] py-[4px] rounded-[4px] w-[auto]">
                      <div className="flex h-[21px] md:h-[auto] items-center justify-center w-[auto]">
                        <Text
                          className="font-medium text-center text-indigo_900 w-[auto]"
                          variant="body1"
                        >
                          para o Consumidor
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="h-[365px] relative md:w-[100%] w-[80%]">
                    <div className="bg-deep_purple_100 flex h-[100%] items-center justify-start m-[auto] rounded-[8px] w-[100%]">
                      <div className="flex items-center justify-start rounded-[8px] w-[100%]">
                        <Img
                          src="images/img_imagem_365x871.png"
                          className="h-[365px] md:h-[auto] object-cover rounded-[8px] w-[100%]"
                          alt="Imagem One"
                        />
                      </div>
                    </div>
                    <div className="absolute bottom-[0] flex flex-col gap-[16px] items-end justify-start right-[21%] w-[auto]">
                      <Button
                        className="flex items-center justify-center min-w-[65px] text-center w-[auto]"
                        leftIcon={
                          <Img
                            src="images/img_checkmark.svg"
                            className="mr-[4px] text-center"
                            alt="checkmark"
                          />
                        }
                        shape="RoundedBorder4"
                        size="lg"
                        variant="OutlineGray300"
                      >
                        <div className="bg-transparent cursor-pointer font-medium text-[14px] text-center text-indigo_900">
                          D2C
                        </div>
                      </Button>
                      <div className="flex flex-col gap-[16px] items-center justify-start w-[100%]">
                        <div className="flex items-start justify-start w-[auto]">
                          <Button
                            className="flex items-center justify-center min-w-[137px] text-center w-[auto]"
                            leftIcon={
                              <Img
                                src="images/img_checkmark.svg"
                                className="mr-[4px] text-center"
                                alt="checkmark"
                              />
                            }
                            shape="RoundedBorder4"
                            size="lg"
                            variant="OutlineGray300"
                          >
                            <div className="bg-transparent cursor-pointer font-medium text-[14px] text-center text-indigo_900">
                              Full Commerce
                            </div>
                          </Button>
                        </div>
                        <div className="flex items-start justify-start w-[auto]">
                          <Button
                            className="flex items-center justify-center min-w-[141px] text-center w-[auto]"
                            leftIcon={
                              <Img
                                src="images/img_checkmark.svg"
                                className="mr-[4px] text-center"
                                alt="checkmark"
                              />
                            }
                            shape="RoundedBorder4"
                            size="sm"
                            variant="OutlineGray300"
                          >
                            <div className="bg-transparent cursor-pointer font-medium text-[14px] text-center text-indigo_900">
                              Market Insights
                            </div>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center max-w-[888px] w-[100%]">
                  <div className="flex flex-col gap-[16px] items-start justify-start py-[16px] md:w-[100%] w-[auto]">
                    <div className="flex items-center justify-center pb-[16px] pt-[8px] w-[100%]">
                      <Text
                        className="text-bluegray_900 text-left w-[auto]"
                        as="h3"
                        variant="h3"
                      >
                        Nossos Parceiros
                      </Text>
                    </div>
                    <div className="md:h-[200px] sm:h-[680px] h-[80px] relative w-[100%]">
                      <List
                        className="sm:flex-col flex-row gap-[120px] md:gap-[40px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-start m-[auto] max-w-[680px] w-[100%]"
                        orientation="horizontal"
                      >
                        <div className="flex flex-1 h-[80px] items-center justify-start w-[100%]">
                          <Img
                            src="images/img_imagem_9.png"
                            className="h-[80px] md:h-[auto] object-cover w-[80px]"
                            alt="Imagem Two"
                          />
                        </div>
                        <div className="flex flex-1 h-[80px] items-center justify-start w-[100%]">
                          <Img
                            src="images/img_imagem_10.png"
                            className="h-[80px] md:h-[auto] object-cover w-[80px]"
                            alt="Imagem Three"
                          />
                        </div>
                        <div className="flex flex-1 h-[80px] items-center justify-start w-[100%]">
                          <Img
                            src="images/img_imagem_11.png"
                            className="h-[80px] md:h-[auto] object-cover w-[80px]"
                            alt="Imagem Four"
                          />
                        </div>
                        <div className="flex flex-1 h-[80px] items-center justify-start w-[100%]">
                          <Img
                            src="images/img_imagem_12.png"
                            className="h-[80px] md:h-[auto] object-cover w-[80px]"
                            alt="Imagem Five"
                          />
                        </div>
                      </List>
                      <div className="absolute bg-indigo_900 h-[80px] inset-[0] justify-center m-[auto] w-[100%]"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-indigo_902 flex items-center justify-start rounded-[16px] md:w-[100%] w-[67%]">
                <div className="h-[186px] md:h-[187px] relative rounded-[16px] w-[100%]">
                  <Img
                    src="images/img_imagepicture.svg"
                    className="h-[48px] m-[auto] w-[48px]"
                    alt="bookmark"
                  />
                  <div className="absolute h-[186px] md:h-[187px] inset-[0] justify-center m-[auto] rounded-[16px] w-[100%]">
                    <Img
                      src="images/img_imagem_187x746.png"
                      className="h-[187px] m-[auto] object-cover w-[100%]"
                      alt="Imagem Six"
                    />
                    <div className="absolute flex h-[max-content] inset-[0] items-center justify-center m-[auto] w-[100%]">
                      <div className="flex items-center justify-start w-[100%]">
                        <div className="flex items-start justify-center max-w-[746px] pl-[32px] pr-[256px] md:pr-[40px] sm:px-[20px] w-[100%]">
                          <div className="flex items-center justify-start w-[100%]">
                            <Text
                              className="leading-[120.00%] md:max-w-[100%] max-w-[458px] text-left text-white_A700"
                              as="h1"
                              variant="h1"
                            >
                              <span className="md:text-[34px] sm:text-[32px] text-white_A700 text-[36px] font-rubik font-medium">
                                Pronto para{" "}
                              </span>
                              <span className="md:text-[34px] sm:text-[32px] text-light_green_A200 text-[36px] font-rubik font-medium">
                                revolucionar a indústria farmacêutica{" "}
                              </span>
                              <span className="md:text-[34px] sm:text-[32px] text-white_A700 text-[36px] font-rubik font-medium">
                                com a Pill?
                              </span>
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-[16px] items-start justify-start sm:w-[100%] w-[auto]">
                <div className="flex flex-col items-start justify-start px-[16px] w-[100%]">
                  <div className="flex items-start justify-start pb-[16px] pt-[8px] w-[328px]">
                    <Text
                      className="text-bluegray_900 text-left w-[auto]"
                      as="h3"
                      variant="h3"
                    >
                      Seja nosso parceiro!
                    </Text>
                  </div>
                  <div className="flex items-center justify-center pt-[8px] w-[auto]">
                    <Text
                      className="font-normal not-italic text-indigo_900 text-left w-[auto]"
                      variant="body1"
                    >
                      Insira seus dados e nós entramos em contato
                    </Text>
                  </div>
                </div>
                <div className="bg-white_A700 flex flex-col items-end justify-end pb-[16px] px-[16px] rounded-[8px] shadow-bs sm:w-[100%] w-[555px]">
                  <div className="bg-white_A700 border-b-[1px] border-gray_300 border-solid flex h-[72px] md:h-[auto] items-start justify-center py-[12px] w-[100%]">
                    <div className="flex sm:flex-col flex-row gap-[16px] items-center justify-start w-[100%]">
                      <div className="bg-indigo_900 flex h-[24px] items-center justify-start p-[6px] rounded-[50%] w-[24px]">
                        <div className="bg-white_A700 h-[12px] rounded-[50%] w-[12px]"></div>
                      </div>
                      <div className="flex flex-1 items-start justify-center w-[100%]">
                        <div className="flex items-center justify-start w-[100%]">
                          <div className="flex items-start justify-start pb-[8px] w-[100%]">
                            <Text
                              className="text-indigo_900 text-left w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              Sou Médico (a)
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white_A700 border-b-[1px] border-gray_300 border-solid flex h-[72px] md:h-[auto] items-start justify-center py-[12px] w-[100%]">
                    <div className="flex sm:flex-col flex-row gap-[16px] items-center justify-start w-[100%]">
                      <Img
                        src="images/img_settings.svg"
                        className="h-[24px] w-[24px]"
                        alt="settings"
                      />
                      <div className="flex flex-1 items-start justify-center w-[100%]">
                        <div className="flex items-center justify-start w-[100%]">
                          <div className="flex items-start justify-start pb-[8px] w-[100%]">
                            <Text
                              className="text-indigo_900 text-left w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              Sou Representante de Laboratório
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start justify-start w-[100%]">
                    <div className="flex flex-col gap-[8px] items-start justify-start py-[12px] w-[100%]">
                      <div className="flex items-center justify-start w-[320px]">
                        <div className="flex items-start justify-start w-[auto]">
                          <Text
                            className="font-medium text-indigo_900 text-left w-[auto]"
                            variant="body2"
                          >
                            Nome completo
                          </Text>
                        </div>
                      </div>
                      <Input
                        className="font-normal not-italic p-[0] text-[14px] placeholder:text-indigo_900 text-indigo_900 text-left w-[100%]"
                        wrapClassName="md:h-[auto] sm:h-[auto] w-[100%]"
                        name="FormsFieldoutlinedefault One"
                        placeholder="Fulano de Tal"
                        shape="RoundedBorder8"
                        size="xl"
                        variant="OutlineGray300"
                      ></Input>
                    </div>
                  </div>
                  <div className="flex relative w-[100%]">
                    <div className="flex flex-1 flex-col gap-[8px] items-start justify-start my-[auto] py-[12px] w-[100%]">
                      <div className="flex items-center justify-start w-[100%]">
                        <div className="flex items-start justify-start w-[auto]">
                          <Text
                            className="font-medium text-indigo_900 text-left w-[auto]"
                            variant="body2"
                          >
                            E-mail
                          </Text>
                        </div>
                      </div>
                      <div className="bg-white_A700 border-[1px] border-gray_300 border-solid h-[48px] p-[12px] rounded-[8px] w-[80%]"></div>
                    </div>
                    <div className="flex flex-1 flex-col gap-[8px] items-start justify-start ml-[-50.5px] my-[auto] py-[12px] w-[100%] z-[1]">
                      <div className="flex items-center justify-start w-[100%]">
                        <div className="flex items-start justify-start w-[auto]">
                          <Text
                            className="font-medium text-indigo_900 text-left w-[auto]"
                            variant="body2"
                          >
                            Celular (WhatsApp)
                          </Text>
                        </div>
                      </div>
                      <Input
                        className="font-normal not-italic p-[0] text-[14px] placeholder:text-indigo_900 text-indigo_900 text-left w-[100%]"
                        wrapClassName="md:h-[auto] sm:h-[auto] w-[100%]"
                        name="FormsFieldoutlinedefault Three"
                        placeholder="(11) 99999-9999"
                        shape="RoundedBorder8"
                        size="xl"
                        variant="OutlineGray300"
                      ></Input>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[8px] items-start justify-start sm:w-[100%] w-[523px]">
                    <div className="flex items-center justify-start w-[320px]">
                      <div className="flex items-start justify-start w-[auto]">
                        <Text
                          className="font-medium text-indigo_900 text-left w-[auto]"
                          variant="body2"
                        >
                          Mensagem (opcional)
                        </Text>
                      </div>
                    </div>
                    <Input
                      className="font-normal not-italic p-[0] text-[14px] placeholder:text-gray_500 text-gray_500 text-left w-[100%]"
                      wrapClassName="w-[100%]"
                      name="FormsFieldoutlinedefault Four"
                      placeholder="Escrever mensagem"
                      shape="RoundedBorder8"
                      size="2xl"
                      variant="OutlineGray300"
                    ></Input>
                  </div>
                  <div className="flex items-start justify-start pt-[16px] w-[auto]">
                    <div className="bg-indigo_900 flex h-[36px] md:h-[auto] items-center justify-center px-[16px] py-[14px] rounded-[18px] w-[auto]">
                      <div className="flex items-center justify-start w-[auto]">
                        <div className="flex items-center justify-center px-[4px] w-[auto]">
                          <Text
                            className="font-medium text-left text-light_green_A200 w-[auto]"
                            variant="body1"
                          >
                            Button label
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Img
              src="images/img_carinha.svg"
              className="absolute bottom-[15%] h-[207px] left-[0] w-[auto]"
              alt="Carinha"
            />
            <Img
              src="images/img_grupo23_green_300.svg"
              className="absolute bottom-[35%] h-[135px] right-[0] w-[auto]"
              alt="GrupoTwentyThree"
            />
          </div>
          <Img
            src="images/img_group150_green_300.svg"
            className="absolute bottom-[38%] h-[169px] right-[4%] w-[auto]"
            alt="Group150"
          />
        </div>
        <div className="flex items-center mt-[73px] w-[100%]">
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

export default QuemsomosPage;
