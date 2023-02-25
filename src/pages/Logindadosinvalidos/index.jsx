import React from "react";

import { Img, Input, Text, Line, Button } from "components";
import { CloseSVG } from "../../assets/images";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const LogindadosinvalidosPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray_100 flex flex-col font-rubik justify-end mx-[auto] w-[100%]">
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
        <div className="flex items-start justify-start md:ml-[0] ml-[406px] mr-[623px] mt-[32px] pb-[8px] md:px-[20px] w-[337px]">
          <Text
            className="not-italic text-bluegray_800 text-left w-[auto]"
            as="h2"
            variant="h2"
          >
            Login
          </Text>
        </div>
        <div className="flex items-center sm:px-[20px] px-[405px] md:px-[40px] w-[100%]">
          <div className="flex items-center justify-center pb-[4px] sm:w-[100%] w-[555px]">
            <Text
              className="font-normal not-italic text-bluegray_800 text-left w-[auto]"
              variant="body1"
            >
              Olá! Digite seu e-mail e senha para entrar na sua conta Pill
            </Text>
          </div>
        </div>
        <div className="flex items-end mt-[16px] sm:px-[20px] md:px-[40px] px-[61px] w-[100%]">
          <div className="md:h-[595px] h-[699px] relative md:w-[100%] w-[73%]">
            <div className="absolute bottom-[0] flex items-center justify-start right-[0] w-[51%]">
              <div className="h-[334px] relative w-[100%]">
                <div className="h-[334px] m-[auto] w-[100%]">
                  <div className="absolute bg-deep_purple_300 bottom-[0] h-[299px] right-[0] rounded-[149px] w-[299px]"></div>
                  <Img
                    src="images/img_vector3.svg"
                    className="absolute bottom-[8%] h-[174px] left-[0] w-[174px]"
                    alt="VectorThree"
                  />
                  <div className="absolute h-[334px] inset-y-[0] left-[0] my-[auto] sm:w-[100%] w-[86%]">
                    <Img
                      src="images/img_unsplashcf1cn3ofkum_334x389.png"
                      className="h-[334px] m-[auto] object-cover w-[100%]"
                      alt="unsplashcf1cN3ofKUM"
                    />
                    <Img
                      src="images/img_carinha_red_300.svg"
                      className="absolute h-[136px] right-[4%] top-[0] w-[auto]"
                      alt="Carinha"
                    />
                  </div>
                </div>
                <div className="absolute bg-teal_800 bottom-[10%] flex h-[56px] md:h-[auto] items-center justify-center px-[16px] py-[14px] right-[13%] rounded-[28px] shadow-bs2 w-[auto]">
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
            <div className="absolute bg-white_A700 flex flex-col gap-[8px] items-center justify-start left-[0] p-[24px] sm:px-[20px] rounded-[8px] shadow-bs top-[0] sm:w-[100%] w-[555px]">
              <div className="flex flex-col gap-[8px] items-start justify-start w-[100%]">
                <div className="flex flex-col gap-[8px] items-start justify-start py-[8px] w-[100%]">
                  <div className="flex items-center justify-start w-[100%]">
                    <div className="flex items-start justify-start w-[auto]">
                      <Text
                        className="font-medium text-left text-red_900 w-[auto]"
                        variant="body2"
                      >
                        E-mail
                      </Text>
                    </div>
                  </div>
                  <Input
                    className="font-normal not-italic p-[0] text-[14px] placeholder:text-bluegray_800 text-bluegray_800 text-left w-[100%]"
                    wrapClassName="md:h-[auto] sm:h-[auto] w-[100%]"
                    name="FormsFieldoutlinedefault One"
                    placeholder="tayna@mailcom"
                    shape="RoundedBorder8"
                    size="xl"
                    variant="OutlineRed600"
                  ></Input>
                  <div className="flex flex-row gap-[4px] items-center justify-start w-[100%]">
                    <Img
                      src="images/img_icon_red_600_16x16.svg"
                      className="h-[16px] w-[16px]"
                      alt="icon"
                    />
                    <div className="flex items-start justify-start w-[auto]">
                      <Text
                        className="font-normal not-italic text-left text-red_900 w-[auto]"
                        variant="body2"
                      >
                        Formato de e-mail inválido
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start w-[100%]">
                  <div className="flex flex-col gap-[8px] items-start justify-start pt-[8px] w-[100%]">
                    <div className="flex items-center justify-start w-[100%]">
                      <div className="flex items-start justify-start w-[auto]">
                        <Text
                          className="font-medium text-left text-red_900 w-[auto]"
                          variant="body2"
                        >
                          Senha
                        </Text>
                      </div>
                    </div>
                    <Input
                      className="font-normal md:h-[auto] not-italic p-[0] text-[14px] placeholder:text-bluegray_800 text-bluegray_800 text-left w-[100%]"
                      wrapClassName="flex w-[100%]"
                      type="password"
                      name="password"
                      placeholder="*****"
                      suffix={
                        <Img
                          src="images/img_eye_indigo_900.svg"
                          className="ml-[35px] mr-[12px] my-[auto]"
                          alt="eye"
                        />
                      }
                      shape="RoundedBorder8"
                      size="lg"
                      variant="OutlineRed600"
                    ></Input>
                    <div className="flex flex-row gap-[4px] items-center justify-start w-[100%]">
                      <Img
                        src="images/img_icon_red_600_16x16.svg"
                        className="h-[16px] w-[16px]"
                        alt="icon One"
                      />
                      <div className="flex items-start justify-start w-[auto]">
                        <Text
                          className="font-normal not-italic text-left text-red_900 w-[auto]"
                          variant="body2"
                        >
                          Campo obrigatório
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-end rounded-[22px] w-[100%]">
                    <div className="flex items-center justify-end py-[16px] rounded-[22px] w-[100%]">
                      <div className="flex items-center justify-center w-[auto]">
                        <Text
                          className="font-medium text-indigo_900 text-left w-[auto]"
                          variant="body2"
                        >
                          Esqueceu a senha?
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray_51 border-[1px] border-bluegray_100 border-solid flex flex-row items-center justify-between p-[7px] rounded-[3px] shadow-bs3 w-[100%]">
                <div
                  className="bg-cover bg-no-repeat flex h-[28px] items-start justify-start ml-[6px] p-[2px] w-[auto]"
                  style={{ backgroundImage: "url('images/img_group64.svg')" }}
                >
                  <Img
                    src="images/img_checkmark_teal_600.svg"
                    className="h-[20px] mb-[3px] md:ml-[0] ml-[3px] w-[auto]"
                    alt="checkmark"
                  />
                </div>
                <Img
                  src="images/img_reply.svg"
                  className="h-[62px] w-[auto]"
                  alt="reply"
                />
              </div>
              <div className="flex flex-col gap-[8px] items-center justify-start pt-[16px] w-[100%]">
                <div className="flex flex-col gap-[8px] items-center justify-center w-[100%]">
                  <div className="bg-indigo_900 flex h-[44px] md:h-[auto] items-center justify-center px-[16px] py-[14px] rounded-[22px] w-[150px]">
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
                  <div className="flex flex-row gap-[4px] items-start justify-center w-[auto]">
                    <div className="flex items-center justify-center pt-[8px] w-[auto]">
                      <Text
                        className="font-normal not-italic text-bluegray_800 text-left w-[auto]"
                        variant="body1"
                      >
                        Não tem conta?
                      </Text>
                    </div>
                    <div className="flex h-[29px] md:h-[auto] items-center justify-center w-[auto]">
                      <div className="flex h-[16px] md:h-[auto] items-center justify-center w-[auto]">
                        <Text
                          className="font-medium text-indigo_900 text-left w-[auto]"
                          variant="body1"
                        >
                          Cadastre-se aqui
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center py-[8px] w-[100%]">
                  <Text
                    className="font-normal not-italic text-bluegray_500 text-left w-[auto]"
                    variant="body2"
                  >
                    ou entre com
                  </Text>
                </div>
                <div className="flex items-center justify-start w-[100%]">
                  <div className="flex flex-row gap-[16px] items-start justify-center w-[100%]">
                    <Button
                      className="flex items-center justify-center min-w-[136px] text-center w-[auto]"
                      leftIcon={
                        <Img
                          src="images/img_google_red_500.svg"
                          className="mr-[8px] text-center"
                          alt="google"
                        />
                      }
                      shape="RoundedBorder4"
                      variant="OutlineGray301"
                    >
                      <div className="bg-transparent cursor-pointer font-medium font-roboto text-[14px] text-gray_800 text-left tracking-[0.04px]">
                        Button label
                      </div>
                    </Button>
                    <Button
                      className="flex items-center justify-center min-w-[151px] text-center w-[auto]"
                      leftIcon={
                        <Img
                          src="images/img_plus.svg"
                          className="mr-[8px] text-center"
                          alt="plus"
                        />
                      }
                      shape="RoundedBorder4"
                      variant="FillIndigo500"
                    >
                      <div className="bg-transparent cursor-pointer font-medium font-rubik text-[14px] text-left text-white_A700">
                        Button label
                      </div>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center w-[100%]">
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

export default LogindadosinvalidosPage;
