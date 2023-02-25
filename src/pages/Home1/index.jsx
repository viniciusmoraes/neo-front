import React from "react";

import { Img, Text, Line, List, Input, Button } from "components";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Home1Page = () => {
  return (
    <>
      <div className="flex font-rubik items-center justify-start mx-[auto] w-[100%]">
        <div className="bg-gray_50 flex flex-col gap-[32px] items-center justify-start w-[100%]">
          <header className="bg-gray_50 flex md:flex-col flex-row gap-[32px] items-center justify-center px-[120px] md:px-[20px] py-[8px] w-[100%]">
            <div className="flex sm:flex-1 items-center justify-start sm:w-[100%] w-[auto]">
              <Img
                src="images/img_imagebrandlogo.svg"
                className="h-[60px] w-[60px]"
                alt="Imagebrandlogo"
              />
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
          <div className="bg-white_A700 h-[410px] max-w-[1126px] mx-[auto] md:px-[20px] relative rounded-[16px] w-[100%]">
            <div className="absolute flex h-[100%] inset-[0] items-center justify-center m-[auto] w-[100%]">
              <div className="flex md:flex-col flex-row md:gap-[40px] items-end justify-between w-[100%]">
                <div className="flex md:flex-1 items-center justify-start md:w-[100%] w-[67%]">
                  <div className="flex md:flex-col flex-row md:gap-[40px] items-start justify-between w-[100%]">
                    <div className="h-[410px] relative md:w-[100%] w-[75%]">
                      <Img
                        src="images/img_ellipse11_410x554.png"
                        className="h-[410px] m-[auto] object-cover w-[100%]"
                        alt="EllipseEleven"
                      />
                      <div className="absolute flex flex-col gap-[8px] h-[max-content] inset-y-[0] items-start justify-center left-[0] my-[auto] sm:pl-[20px] md:pl-[40px] pl-[95px] sm:w-[100%] w-[460px]">
                        <div className="flex flex-col gap-[8px] items-start justify-center pb-[16px] w-[100%]">
                          <div className="flex items-start justify-start w-[100%]">
                            <Text
                              className="leading-[120.00%] md:max-w-[100%] max-w-[365px] text-left text-white_A700"
                              as="h1"
                              variant="h1"
                            >
                              Programe seu tratamento de saúde
                            </Text>
                          </div>
                          <div className="flex items-center justify-center w-[auto]">
                            <Text
                              className="font-normal not-italic text-left text-white_A700 w-[auto]"
                              variant="body1"
                            >
                              Sem filas. Sem falhas
                            </Text>
                          </div>
                        </div>
                        <div className="flex items-start justify-start rounded-[8px] shadow-bs w-[100%]">
                          <div className="bg-white_A700 border-[1px] border-gray_300 border-solid flex h-[48px] md:h-[auto] items-start justify-center p-[12px] rounded-[8px] w-[100%]">
                            <div className="flex flex-row items-center justify-start w-[100%]">
                              <Img
                                src="images/img_search.svg"
                                className="h-[24px] w-[24px]"
                                alt="search"
                              />
                              <div className="flex flex-1 items-center justify-start px-[4px] w-[100%]">
                                <Text
                                  className="font-normal not-italic text-gray_500 text-left w-[auto]"
                                  variant="body1"
                                >
                                  Buscar produto
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Img
                      src="images/img_filter.svg"
                      className="h-[80px] md:mt-[0] mt-[323px] w-[80px]"
                      alt="filter"
                    />
                  </div>
                </div>
                <div className="h-[372px] md:mt-[0] mt-[38px] relative md:w-[100%] w-[19%]">
                  <Img
                    src="images/img_ellipse12_372x204.png"
                    className="h-[372px] m-[auto] object-cover w-[100%]"
                    alt="EllipseTwelve"
                  />
                  <Img
                    src="images/img_vector2.svg"
                    className="absolute bottom-[0] h-[175px] right-[0] w-[175px]"
                    alt="VectorTwo"
                  />
                </div>
              </div>
            </div>
            <Img
              src="images/img_vector3.svg"
              className="absolute bottom-[0] h-[238px] right-[16%] w-[238px]"
              alt="VectorThree"
            />
            <div className="absolute flex h-[100%] inset-y-[0] items-center justify-start my-[auto] right-[0] w-[61%]">
              <div className="h-[410px] relative w-[100%]">
                <Img
                  src="images/img_imagem_410x686.png"
                  className="h-[410px] m-[auto] object-cover w-[100%]"
                  alt="Imagem"
                />
                <div className="absolute bg-indigo_900 h-[410px] inset-y-[0] my-[auto] right-[0] w-[65%]"></div>
                <Img
                  src="images/img_carinha_red_300.svg"
                  className="absolute h-[136px] left-[9%] top-[13%] w-[auto]"
                  alt="Carinha"
                />
              </div>
            </div>
          </div>
          <div className="h-[2969px] md:h-[3141px] sm:h-[4489px] md:px-[20px] relative w-[100%]">
            <div className="absolute bottom-[4%] flex flex-col gap-[1376px] md:gap-[40px] inset-x-[0] justify-start mx-[auto] w-[98%]">
              <Img
                src="images/img_pattern3.svg"
                className="h-[168px] md:ml-[0] ml-[1159px] w-[auto]"
                alt="PatternThree"
              />
              <Img
                src="images/img_pattern2.png"
                className="h-[529px] sm:h-[auto] mr-[875px] object-cover md:w-[100%] w-[auto]"
                alt="PatternTwo"
              />
            </div>
            <Img
              src="images/img_vector2.svg"
              className="absolute bottom-[22%] h-[238px] left-[16%] w-[238px]"
              alt="PatternOne"
            />
            <div className="absolute flex flex-col gap-[32px] inset-x-[0] items-center justify-start mx-[auto] overflow-auto top-[0] md:w-[100%] w-[auto]">
              <div className="flex flex-col gap-[8px] items-start justify-start max-w-[1378px] w-[100%]">
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
                        alt="Imagem One"
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
                        alt="Imagem Two"
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
                        backgroundImage: "url('images/img_imagepicture.svg')",
                      }}
                    >
                      <Img
                        src="images/img_imagem_2.png"
                        className="h-[48px] md:h-[auto] object-cover w-[48px]"
                        alt="Imagem Three"
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
                        backgroundImage: "url('images/img_imagepicture.svg')",
                      }}
                    >
                      <Img
                        src="images/img_imagem_3.png"
                        className="h-[48px] md:h-[auto] object-cover w-[48px]"
                        alt="Imagem Four"
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
                        backgroundImage: "url('images/img_imagepicture.svg')",
                      }}
                    >
                      <Img
                        src="images/img_imagem_4.png"
                        className="h-[48px] md:h-[auto] object-cover w-[48px]"
                        alt="Imagem Five"
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
                        backgroundImage: "url('images/img_imagepicture.svg')",
                      }}
                    >
                      <Img
                        src="images/img_imagem_5.png"
                        className="h-[48px] md:h-[auto] object-cover w-[48px]"
                        alt="Imagem Six"
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
                        backgroundImage: "url('images/img_imagepicture.svg')",
                      }}
                    >
                      <Img
                        src="images/img_imagem_6.png"
                        className="h-[48px] md:h-[auto] object-cover w-[48px]"
                        alt="Imagem Seven"
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
                        backgroundImage: "url('images/img_imagepicture.svg')",
                      }}
                    >
                      <Img
                        src="images/img_imagem_7.png"
                        className="h-[48px] md:h-[auto] object-cover w-[48px]"
                        alt="Imagem Eight"
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
                        backgroundImage: "url('images/img_imagepicture.svg')",
                      }}
                    >
                      <Img
                        src="images/img_imagem_8.png"
                        className="h-[48px] md:h-[auto] object-cover w-[48px]"
                        alt="Imagem Nine"
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
                        backgroundImage: "url('images/img_imagepicture.svg')",
                      }}
                    >
                      <Img
                        src="images/img_imagem_13.png"
                        className="h-[48px] md:h-[auto] object-cover w-[48px]"
                        alt="Imagem Ten"
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
              <div className="flex flex-col justify-start md:w-[100%] w-[85%]">
                <div className="flex items-start justify-start md:ml-[0] ml-[32px] pb-[16px] pt-[32px] w-[auto]">
                  <Text
                    className="text-bluegray_900 text-left w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    Conheça a Pill
                  </Text>
                </div>
                <div className="flex relative w-[100%]">
                  <div className="h-[365px] my-[auto] md:w-[100%] w-[62%]">
                    <div className="absolute bg-bluegray_800 flex h-[100%] inset-[0] items-center justify-center m-[auto] rounded-[16px] w-[92%]">
                      <div className="h-[365px] relative rounded-[16px] w-[100%]">
                        <Img
                          src="images/img_icon_white_a700.svg"
                          className="h-[48px] m-[auto] w-[48px]"
                          alt="icon"
                        />
                        <Img
                          src="images/img_imagem_365x650.png"
                          className="absolute h-[365px] inset-[0] justify-center m-[auto] object-cover rounded-[16px] w-[100%]"
                          alt="Imagem Eleven"
                        />
                      </div>
                    </div>
                    <Img
                      src="images/img_filter.svg"
                      className="absolute h-[64px] left-[0] top-[9%] w-[64px]"
                      alt="filter One"
                    />
                    <Img
                      src="images/img_filter.svg"
                      className="absolute bottom-[4%] h-[64px] right-[0] w-[64px]"
                      alt="filter Two"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-start ml-[-16px] my-[auto] p-[16px] sm:w-[100%] w-[460px] z-[1]">
                    <Img
                      src="images/img_music.svg"
                      className="h-[24px] w-[24px]"
                      alt="music"
                    />
                    <div className="flex items-start justify-start py-[8px] w-[100%]">
                      <Text
                        className="leading-[120.00%] md:max-w-[100%] max-w-[428px] text-bluegray_900 text-left"
                        as="h1"
                        variant="h1"
                      >
                        Nós não somos uma farmácia comum. Somos 100% digital!
                      </Text>
                    </div>
                    <div className="flex items-center justify-center py-[8px] w-[100%]">
                      <Text
                        className="font-normal not-italic text-bluegray_800 text-left w-[auto]"
                        variant="body1"
                      >
                        Esquecer os remédios? Ficar em filas? Você não precisa
                        disso.
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-[32px] items-center justify-start md:w-[100%] w-[83%]">
                <div className="flex md:flex-col flex-row md:gap-[40px] items-center justify-between w-[100%]">
                  <div className="flex md:flex-1 flex-col items-center justify-start md:w-[100%] w-[41%]">
                    <div className="flex items-start justify-start py-[16px] w-[auto]">
                      <Text
                        className="text-bluegray_900 text-left w-[auto]"
                        as="h3"
                        variant="h3"
                      >
                        Como funciona?
                      </Text>
                    </div>
                    <div className="h-[108px] relative sm:w-[100%] w-[460px]">
                      <div className="flex h-[100%] items-center justify-start m-[auto] w-[100%]">
                        <List
                          className="sm:flex-col flex-row gap-[8px] grid sm:grid-cols-1 grid-cols-3 justify-center w-[100%]"
                          orientation="horizontal"
                        >
                          <div className="flex flex-1 flex-col gap-[16px] items-center justify-start sm:ml-[0] w-[100%]">
                            <Img
                              src="images/img_search_indigo_900.svg"
                              className="h-[56px] w-[56px]"
                              alt="search One"
                            />
                            <div className="flex items-center justify-center w-[100%]">
                              <Text
                                className="font-normal leading-[150.00%] md:max-w-[100%] max-w-[148px] not-italic text-bluegray_500 text-center"
                                variant="body2"
                              >
                                Busque pelo seu medicamento
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-1 flex-col gap-[16px] items-center justify-start sm:ml-[0] w-[100%]">
                            <Img
                              src="images/img_bag.svg"
                              className="h-[56px] w-[56px]"
                              alt="bag"
                            />
                            <div className="flex items-center justify-center w-[100%]">
                              <Text
                                className="font-normal leading-[150.00%] md:max-w-[100%] max-w-[148px] not-italic text-bluegray_500 text-center"
                                variant="body2"
                              >
                                Selecione o período em que precisa recebê-lo
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-1 flex-col gap-[16px] items-center justify-start sm:ml-[0] w-[100%]">
                            <Img
                              src="images/img_cart_indigo_900.svg"
                              className="h-[56px] w-[56px]"
                              alt="cart One"
                            />
                            <div className="flex items-center justify-center w-[100%]">
                              <Text
                                className="font-normal leading-[150.00%] md:max-w-[100%] max-w-[148px] not-italic text-bluegray_500 text-center"
                                variant="body2"
                              >
                                Adicione ao carrinho e finalize sua compra!
                              </Text>
                            </div>
                          </div>
                        </List>
                      </div>
                      <div className="absolute flex flex-row inset-x-[0] items-center justify-between mx-[auto] top-[0] w-[40%]">
                        <Img
                          src="images/img_arrowright_green_300.svg"
                          className="h-[24px] w-[24px]"
                          alt="arrowright One"
                        />
                        <Img
                          src="images/img_arrowright_green_300.svg"
                          className="h-[24px] w-[24px]"
                          alt="arrowright Two"
                        />
                      </div>
                    </div>
                    <Input
                      className="font-medium p-[0] text-[14px] text-left placeholder:text-light_green_A200 text-light_green_A200 w-[100%]"
                      wrapClassName="md:h-[auto] mt-[16px] sm:h-[auto] w-[269px]"
                      name="Buttonbuttons"
                      placeholder="Monte sua compra recorrente!"
                      shape="CircleBorder22"
                      size="md"
                      variant="FillIndigo900"
                    ></Input>
                  </div>
                  <div className="bg-gray_100 h-[191px] md:h-[208px] md:mt-[0] my-[17px] relative rounded-[16px] md:w-[100%] w-[50%]">
                    <div className="absolute h-[191px] inset-y-[0] my-[auto] right-[0] sm:w-[100%] w-[75%]">
                      <Img
                        src="images/img_imagepicture.svg"
                        className="h-[48px] m-[auto] w-[48px]"
                        alt="bookmark"
                      />
                      <Img
                        src="images/img_imagem_191x411.png"
                        className="absolute h-[191px] inset-[0] justify-center m-[auto] object-cover w-[100%]"
                        alt="Imagem Twelve"
                      />
                    </div>
                    <div className="absolute flex flex-col gap-[16px] h-[max-content] inset-y-[0] items-center justify-start left-[0] my-[auto] w-[66%]">
                      <div className="flex flex-col gap-[8px] items-start justify-center sm:px-[20px] px-[32px] w-[364px]">
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
                            className="font-normal not-italic text-bluegray_800 text-left w-[auto]"
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
                <div className="flex flex-col items-start justify-start md:w-[100%] w-[auto]">
                  <div className="flex items-start justify-start pb-[16px] pt-[32px] w-[auto]">
                    <Text
                      className="text-bluegray_900 text-left w-[auto]"
                      as="h3"
                      variant="h3"
                    >
                      Pill na mídia
                    </Text>
                  </div>
                  <List
                    className="sm:flex-col flex-row gap-[16px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center max-w-[1126px] py-[8px] w-[100%]"
                    orientation="horizontal"
                  >
                    <div className="bg-white_A700 hover:cursor-pointer flex flex-1 flex-col gap-[16px] items-center justify-center hover:mx-[0] py-[24px] rounded-[8px] hover:shadow-bs2 shadow-bs2 hover:w-[100%] w-[100%]">
                      <div className="flex items-center justify-start w-[100%]">
                        <Img
                          src="images/img_imagem_24x269.png"
                          className="h-[24px] md:h-[auto] object-cover w-[100%]"
                          alt="Imagem Thirteen"
                        />
                      </div>
                      <div className="flex items-center justify-center px-[16px] w-[100%]">
                        <Text
                          className="font-normal leading-[150.00%] md:max-w-[100%] max-w-[237px] not-italic text-bluegray_800 text-center"
                          variant="body1"
                        >
                          ”A ideia é transformar a forma como as pessoas
                          consomem saúde e tratamentos no Brasil”
                        </Text>
                      </div>
                      <div className="flex items-center justify-end w-[100%]">
                        <div className="flex h-[40px] md:h-[auto] items-center justify-center rounded-[20px] w-[100%]">
                          <div className="flex h-[40px] md:h-[auto] items-center justify-start px-[8px] w-[auto]">
                            <div className="flex items-center justify-center px-[4px] w-[auto]">
                              <Text
                                className="font-medium text-indigo_900 text-left w-[auto]"
                                variant="body1"
                              >
                                Confira a notícia completa
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white_A700 hover:cursor-pointer flex flex-1 flex-col gap-[16px] items-center justify-center hover:mx-[0] py-[16px] rounded-[8px] hover:shadow-bs2 shadow-bs2 hover:w-[100%] w-[100%]">
                      <div className="flex items-center justify-start w-[100%]">
                        <Img
                          src="images/img_imagem_14.png"
                          className="h-[24px] md:h-[auto] object-cover w-[100%]"
                          alt="Imagem Fourteen"
                        />
                      </div>
                      <div className="flex items-center justify-center px-[16px] w-[100%]">
                        <Text
                          className="font-normal leading-[150.00%] md:max-w-[100%] max-w-[237px] not-italic text-bluegray_800 text-center"
                          variant="body1"
                        >
                          ”Na PILL, a digitalização visa gerar mais valor para o
                          consumidor”
                        </Text>
                      </div>
                      <div className="flex items-center justify-end w-[100%]">
                        <div className="flex h-[40px] md:h-[auto] items-center justify-center rounded-[20px] w-[100%]">
                          <div className="flex h-[40px] md:h-[auto] items-center justify-start px-[8px] w-[auto]">
                            <div className="flex items-center justify-center px-[4px] w-[auto]">
                              <Text
                                className="font-medium text-indigo_900 text-left w-[auto]"
                                variant="body1"
                              >
                                Confira a notícia completa
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white_A700 hover:cursor-pointer flex flex-1 flex-col gap-[16px] items-center justify-center hover:mx-[0] py-[16px] rounded-[8px] hover:shadow-bs2 shadow-bs2 hover:w-[100%] w-[100%]">
                      <div className="flex items-center justify-start w-[100%]">
                        <Img
                          src="images/img_imagem_14.png"
                          className="h-[24px] md:h-[auto] object-cover w-[100%]"
                          alt="Imagem Fifteen"
                        />
                      </div>
                      <div className="flex items-center justify-center px-[16px] w-[100%]">
                        <Text
                          className="font-normal leading-[150.00%] md:max-w-[100%] max-w-[237px] not-italic text-bluegray_800 text-center"
                          variant="body1"
                        >
                          ”Na PILL, a digitalização visa gerar mais valor para o
                          consumidor”
                        </Text>
                      </div>
                      <div className="flex items-center justify-end w-[100%]">
                        <div className="flex h-[40px] md:h-[auto] items-center justify-center rounded-[20px] w-[100%]">
                          <div className="flex h-[40px] md:h-[auto] items-center justify-start px-[8px] w-[auto]">
                            <div className="flex items-center justify-center px-[4px] w-[auto]">
                              <Text
                                className="font-medium text-indigo_900 text-left w-[auto]"
                                variant="body1"
                              >
                                Confira a notícia completa
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white_A700 hover:cursor-pointer flex flex-1 flex-col gap-[16px] items-center justify-center hover:mx-[0] py-[16px] rounded-[8px] hover:shadow-bs2 shadow-bs2 hover:w-[100%] w-[100%]">
                      <div className="flex items-center justify-start w-[100%]">
                        <Img
                          src="images/img_imagem_14.png"
                          className="h-[24px] md:h-[auto] object-cover w-[100%]"
                          alt="Imagem Sixteen"
                        />
                      </div>
                      <div className="flex items-center justify-center px-[16px] w-[100%]">
                        <Text
                          className="font-normal leading-[150.00%] md:max-w-[100%] max-w-[237px] not-italic text-bluegray_800 text-center"
                          variant="body1"
                        >
                          ”Na PILL, a digitalização visa gerar mais valor para o
                          consumidor”
                        </Text>
                      </div>
                      <div className="flex items-center justify-end w-[100%]">
                        <div className="flex h-[40px] md:h-[auto] items-center justify-center rounded-[20px] w-[100%]">
                          <div className="flex h-[40px] md:h-[auto] items-center justify-start px-[8px] w-[auto]">
                            <div className="flex items-center justify-center px-[4px] w-[auto]">
                              <Text
                                className="font-medium text-indigo_900 text-left w-[auto]"
                                variant="body1"
                              >
                                Confira a notícia completa
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </List>
                </div>
              </div>
              <div className="h-[1294px] relative w-[100%]">
                <div className="flex h-[100%] items-center justify-start m-[auto] w-[100%]">
                  <div className="flex flex-col gap-[32px] items-center justify-start w-[100%]">
                    <div className="flex flex-col gap-[32px] items-center justify-start w-[100%]">
                      <div className="bg-deep_purple_50 flex flex-col items-start justify-start pb-[24px] px-[120px] sm:px-[20px] md:px-[40px] md:w-[100%] w-[auto]">
                        <div className="flex items-start justify-start pb-[16px] pt-[32px] w-[auto]">
                          <Text
                            className="text-bluegray_900 text-left w-[auto]"
                            as="h3"
                            variant="h3"
                          >
                            Clientes que confiam na Pill
                          </Text>
                        </div>
                        <div className="flex md:flex-col flex-row gap-[16px] items-center justify-start pb-[32px] md:w-[100%] w-[auto]">
                          <div className="bg-bluegray_800 flex items-center justify-start rounded-[16px] md:w-[100%] w-[58%]">
                            <div className="h-[365px] relative rounded-[16px] w-[100%]">
                              <Img
                                src="images/img_icon_white_a700.svg"
                                className="h-[48px] m-[auto] w-[48px]"
                                alt="icon One"
                              />
                              <Img
                                src="images/img_imagem_15.png"
                                className="absolute h-[365px] inset-[0] justify-center m-[auto] object-cover rounded-[16px] w-[100%]"
                                alt="Imagem Seventeen"
                              />
                            </div>
                          </div>
                          <div className="flex flex-col items-start justify-start p-[16px] sm:w-[100%] w-[460px]">
                            <Img
                              src="images/img_music.svg"
                              className="h-[24px] w-[24px]"
                              alt="music One"
                            />
                            <div className="flex items-start justify-start py-[8px] w-[100%]">
                              <Text
                                className="leading-[120.00%] md:max-w-[100%] max-w-[428px] text-bluegray_900 text-left"
                                as="h1"
                                variant="h1"
                              >
                                A Pill facilita os cuidados com a minha saúde e
                                com a saúde dos meus pais.
                              </Text>
                            </div>
                            <div className="flex items-center justify-center py-[8px] w-[100%]">
                              <Text
                                className="font-normal not-italic text-bluegray_800 text-left w-[auto]"
                                variant="body1"
                              >
                                Mariana, 36 anos
                              </Text>
                            </div>
                          </div>
                        </div>
                        <List
                          className="sm:flex-col flex-row gap-[16px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center max-w-[1126px] py-[8px] w-[100%]"
                          orientation="horizontal"
                        >
                          <div className="bg-white_A700 hover:cursor-pointer flex flex-1 flex-col gap-[16px] items-center justify-center hover:mx-[0] py-[24px] rounded-[8px] hover:shadow-bs2 shadow-bs2 hover:w-[100%] w-[100%]">
                            <div className="flex items-center justify-center sm:px-[20px] px-[32px] w-[100%]">
                              <Text
                                className="font-normal leading-[150.00%] md:max-w-[100%] max-w-[205px] not-italic text-bluegray_800 text-center"
                                variant="body1"
                              >
                                ”Não esqueço meus remédios. Recebo em casa com
                                preços baixos e frete grátis.”
                              </Text>
                            </div>
                            <div className="flex items-center justify-end w-[100%]">
                              <div className="flex items-center justify-center w-[100%]">
                                <Text
                                  className="font-normal not-italic text-bluegray_500 text-left w-[auto]"
                                  variant="body2"
                                >
                                  Camila Cecília, 38 anos
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="bg-white_A700 hover:cursor-pointer flex flex-1 flex-col gap-[16px] items-center justify-center hover:mx-[0] py-[16px] rounded-[8px] hover:shadow-bs2 shadow-bs2 hover:w-[100%] w-[100%]">
                            <div className="flex items-center justify-center px-[16px] w-[100%]">
                              <Text
                                className="font-normal leading-[150.00%] md:max-w-[100%] max-w-[237px] not-italic text-bluegray_800 text-center"
                                variant="body1"
                              >
                                ”Não esqueço meus remédios. Recebo em casa com
                                preços baixos e frete grátis.”
                              </Text>
                            </div>
                            <div className="flex items-center justify-end w-[100%]">
                              <div className="flex items-center justify-center w-[100%]">
                                <Text
                                  className="font-normal not-italic text-bluegray_500 text-left w-[auto]"
                                  variant="body2"
                                >
                                  Camila Cecília, 38 anos
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="bg-white_A700 hover:cursor-pointer flex flex-1 flex-col gap-[16px] items-center justify-center hover:mx-[0] py-[16px] rounded-[8px] hover:shadow-bs2 shadow-bs2 hover:w-[100%] w-[100%]">
                            <div className="flex items-center justify-center px-[16px] w-[100%]">
                              <Text
                                className="font-normal leading-[150.00%] md:max-w-[100%] max-w-[237px] not-italic text-bluegray_800 text-center"
                                variant="body1"
                              >
                                ”Não esqueço meus remédios. Recebo em casa com
                                preços baixos e frete grátis.”
                              </Text>
                            </div>
                            <div className="flex items-center justify-end w-[100%]">
                              <div className="flex items-center justify-center w-[100%]">
                                <Text
                                  className="font-normal not-italic text-bluegray_500 text-left w-[auto]"
                                  variant="body2"
                                >
                                  Camila Cecília, 38 anos
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="bg-white_A700 hover:cursor-pointer flex flex-1 flex-col gap-[16px] items-center justify-center hover:mx-[0] py-[16px] rounded-[8px] hover:shadow-bs2 shadow-bs2 hover:w-[100%] w-[100%]">
                            <div className="flex items-center justify-center px-[16px] w-[100%]">
                              <Text
                                className="font-normal leading-[150.00%] md:max-w-[100%] max-w-[237px] not-italic text-bluegray_800 text-center"
                                variant="body1"
                              >
                                ”Não esqueço meus remédios. Recebo em casa com
                                preços baixos e frete grátis.”
                              </Text>
                            </div>
                            <div className="flex items-center justify-end w-[100%]">
                              <div className="flex items-center justify-center w-[100%]">
                                <Text
                                  className="font-normal not-italic text-bluegray_500 text-left w-[auto]"
                                  variant="body2"
                                >
                                  Camila Cecília, 38 anos
                                </Text>
                              </div>
                            </div>
                          </div>
                        </List>
                      </div>
                      <div className="bg-indigo_902 flex items-center justify-start rounded-[16px] md:w-[100%] w-[55%]">
                        <div className="h-[186px] md:h-[187px] relative rounded-[16px] w-[100%]">
                          <Img
                            src="images/img_imagepicture.svg"
                            className="h-[48px] m-[auto] w-[48px]"
                            alt="bookmark One"
                          />
                          <div className="absolute h-[186px] md:h-[187px] inset-[0] justify-center m-[auto] rounded-[16px] w-[100%]">
                            <Img
                              src="images/img_imagem_187x746.png"
                              className="h-[187px] m-[auto] object-cover w-[100%]"
                              alt="Imagem Eighteen"
                            />
                            <div className="absolute flex flex-col gap-[16px] h-[max-content] inset-[0] justify-center m-[auto] w-[100%]">
                              <div className="flex items-center justify-start w-[100%]">
                                <div className="flex flex-col gap-[8px] items-start justify-center max-w-[746px] sm:px-[20px] px-[32px] w-[100%]">
                                  <div className="flex items-start justify-start w-[100%]">
                                    <Text
                                      className="text-left text-white_A700 w-[auto]"
                                      as="h1"
                                      variant="h1"
                                    >
                                      Tem alguma dúvida?
                                    </Text>
                                  </div>
                                  <div className="flex items-center justify-center w-[100%]">
                                    <Text
                                      className="font-normal not-italic text-left text-white_A700 w-[auto]"
                                      variant="body1"
                                    >
                                      Conte com o nosso time de especialistas!
                                    </Text>
                                  </div>
                                </div>
                              </div>
                              <div className="border-[1px] border-solid border-white_A700 flex h-[44px] md:h-[auto] items-center justify-center md:ml-[0] ml-[32px] px-[16px] py-[14px] rounded-[22px] w-[auto]">
                                <div className="flex items-center justify-start w-[auto]">
                                  <div className="flex items-center justify-center px-[4px] w-[auto]">
                                    <Text
                                      className="font-medium text-left text-white_A700 w-[auto]"
                                      variant="body1"
                                    >
                                      Falar com farmacêutica
                                    </Text>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-[8px] items-center justify-start md:w-[100%] w-[auto]">
                      <div className="flex items-start justify-start pb-[16px] pt-[32px] w-[auto]">
                        <Text
                          className="text-bluegray_900 text-left w-[auto]"
                          as="h3"
                          variant="h3"
                        >
                          Perguntas frequentes
                        </Text>
                      </div>
                      <div className="flex flex-col gap-[8px] items-start justify-start max-w-[746px] w-[100%]">
                        <div className="bg-white_A700 flex flex-col gap-[16px] items-center justify-center rounded-[8px] shadow-bs w-[100%]">
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
                              simplificar a sua vida. Aqui você pode comprar os
                              seus medicamentos e produtos farmacêuticos sem
                              precisar enfrentar filas como nas farmácias
                              tradicionais! Entregamos o seu pedido rapidamente
                              no endereço que você preferir.
                              <br />
                              <br />
                              Ah, e o melhor! Aqui na Pill sempre tem preço
                              justo e atendimento rápido e fácil.
                            </Text>
                          </div>
                        </div>
                        <List
                          className="flex-col gap-[8px] grid items-center w-[100%]"
                          orientation="vertical"
                        >
                          <div className="bg-white_A700 flex flex-1 items-center justify-center rounded-[8px] shadow-bs w-[100%]">
                            <div className="bg-white_A700 flex items-start justify-center p-[16px] rounded-[8px] w-[100%]">
                              <div className="h-[24px] relative w-[100%]">
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
                          <div className="bg-white_A700 flex flex-1 items-center justify-center rounded-[8px] shadow-bs w-[100%]">
                            <div className="bg-white_A700 flex items-start justify-center p-[16px] rounded-[8px] w-[100%]">
                              <div className="h-[24px] relative w-[100%]">
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
                        </List>
                      </div>
                    </div>
                  </div>
                </div>
                <Img
                  src="images/img_carinha_light_green_a200.png"
                  className="absolute bottom-[23%] h-[416px] left-[0] object-cover w-[390px]"
                  alt="carinha One"
                />
              </div>
            </div>
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
                <div className="flex flex-col gap-[4px] items-start justify-start p-[8px] w-[100%]">
                  <div className="flex items-start justify-start pb-[4px] w-[auto]">
                    <Text
                      className="text-left text-white_A700 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Sobre a Pill
                    </Text>
                  </div>
                  <div className="flex items-center justify-center w-[auto]">
                    <Text
                      className="font-normal not-italic text-left text-white_A700 w-[auto]"
                      variant="body1"
                    >
                      Quem somos
                    </Text>
                  </div>
                  <div className="flex items-center justify-center w-[auto]">
                    <Text
                      className="font-normal not-italic text-left text-white_A700 w-[auto]"
                      variant="body1"
                    >
                      Blog da Pill
                    </Text>
                  </div>
                  <div className="flex items-center justify-center w-[auto]">
                    <Text
                      className="font-normal not-italic text-left text-white_A700 w-[auto]"
                      variant="body1"
                    >
                      Trabalhe conosco
                    </Text>
                  </div>
                </div>
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
                <div className="flex flex-col gap-[4px] items-start justify-start p-[8px] w-[auto]">
                  <div className="flex items-start justify-start pb-[4px] w-[auto]">
                    <Text
                      className="text-left text-white_A700 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Informações técnicas
                    </Text>
                  </div>
                  <div className="flex items-center justify-center w-[auto]">
                    <Text
                      className="font-normal not-italic text-left text-white_A700 w-[auto]"
                      variant="body1"
                    >
                      Termos e Políticas
                    </Text>
                  </div>
                  <div className="flex items-center justify-center w-[auto]">
                    <Text
                      className="font-normal not-italic text-left text-white_A700 w-[auto]"
                      variant="body1"
                    >
                      Dúvidas frequentes
                    </Text>
                  </div>
                </div>
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Home1Page;
