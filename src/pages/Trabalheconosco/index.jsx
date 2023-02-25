import React from "react";

import { Img, Input, Text, Line, SelectBox } from "components";
import { CloseSVG } from "../../assets/images";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const TrabalheconoscoPage = () => {
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
        <div className="flex flex-col gap-[8px] items-start justify-start md:ml-[0] ml-[120px] mt-[16px] md:px-[20px] w-[auto]">
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
                Trabalhe Conosco
              </Text>
            </div>
          </div>
          <div className="flex items-start justify-start pb-[4px] w-[auto]">
            <Text
              className="not-italic text-bluegray_800 text-left w-[auto]"
              as="h2"
              variant="h2"
            >
              Trabalhe Conosco
            </Text>
          </div>
        </div>
        <div className="flex items-center mt-[32px] px-[120px] sm:px-[20px] md:px-[40px] w-[100%]">
          <div className="bg-light_green_A200 h-[410px] max-w-[1126px] mx-[auto] md:px-[20px] relative rounded-[16px] w-[100%]">
            <div className="absolute flex h-[100%] inset-y-[0] items-center justify-start my-[auto] right-[0] w-[80%]">
              <div className="flex items-center justify-start w-[100%]">
                <Img
                  src="images/img_imagem_410x896.png"
                  className="h-[410px] md:h-[auto] object-cover w-[100%]"
                  alt="Imagem"
                />
              </div>
            </div>
            <div className="absolute h-[410px] inset-y-[0] left-[0] my-[auto] sm:w-[100%] w-[42%]">
              <Img
                src="images/img_ellipse12.png"
                className="h-[410px] m-[auto] object-cover w-[100%]"
                alt="EllipseTwelve"
              />
              <div className="absolute flex h-[max-content] inset-[0] items-end justify-center m-[auto] sm:pl-[20px] md:pl-[40px] pl-[95px] sm:w-[100%] w-[460px]">
                <div className="flex flex-col gap-[8px] items-start justify-center py-[8px] w-[100%]">
                  <div className="flex items-start justify-start w-[307px]">
                    <Text
                      className="leading-[120.00%] md:max-w-[100%] max-w-[307px] text-indigo_900 text-left"
                      as="h1"
                      variant="h1"
                    >
                      Quer trabalhar com a Pill?
                    </Text>
                  </div>
                  <div className="flex items-center justify-center w-[100%]">
                    <Text
                      className="font-normal not-italic text-bluegray_800 text-left w-[auto]"
                      variant="body1"
                    >
                      Conheça nossas oportunidades!
                    </Text>
                  </div>
                </div>
              </div>
              <Img
                src="images/img_imagepattern.svg"
                className="absolute bottom-[0] h-[117px] left-[0] w-[auto]"
                alt="Imagepattern"
              />
            </div>
          </div>
        </div>
        <div className="md:h-[893px] h-[927px] mt-[29px] md:px-[20px] relative md:w-[100%] w-[92%]">
          <div
            className="absolute bg-cover bg-no-repeat flex h-[864px] items-start justify-start left-[0] p-[3px] top-[0] w-[37%]"
            style={{ backgroundImage: "url('images/img_group41.png')" }}
          >
            <div className="flex items-start justify-start mb-[808px] md:ml-[0] ml-[117px] pb-[16px] pt-[8px] w-[auto]">
              <Text
                className="text-bluegray_900 text-left w-[auto]"
                as="h3"
                variant="h3"
              >
                Vagas em aberto
              </Text>
            </div>
          </div>
          <div className="absolute bg-white_A700 border-[1px] border-solid border-white_A700 md:h-[221px] h-[311px] right-[0] rounded-[8px] shadow-bs top-[6%] md:w-[100%] w-[91%]">
            <div className="h-[311px] m-[auto] w-[100%]">
              <Img
                src="images/img_image54.png"
                className="h-[260px] mb-[-106px] ml-[auto] object-cover w-[16%] z-[1]"
                alt="imageFiftyFour"
              />
              <Img
                src="images/img_image51.png"
                className="h-[253px] mb-[-99px] object-cover w-[36%] z-[1]"
                alt="imageFiftyOne"
              />
              <Img
                src="images/img_image52.png"
                className="h-[221px] mb-[-99px] ml-[auto] mr-[177px] mt-[32px] object-cover w-[50%] z-[1]"
                alt="imageFiftyTwo"
              />
              <div className="h-[157px] mt-[auto] mx-[auto] w-[100%]">
                <Img
                  src="images/img_image56.png"
                  className="h-[157px] m-[auto] object-cover w-[100%]"
                  alt="imageFiftySix"
                />
                <Img
                  src="images/img_image55.png"
                  className="absolute h-[157px] inset-[0] justify-center m-[auto] object-cover w-[52%]"
                  alt="imageFiftyFive"
                />
              </div>
            </div>
            <Img
              src="images/img_image53.png"
              className="absolute h-[221px] object-cover right-[0] top-[10%] w-[33%]"
              alt="imageFiftyThree"
            />
          </div>
          <div className="absolute bg-white_A700 bottom-[0] flex flex-col items-end justify-end pb-[16px] px-[16px] right-[23%] rounded-[8px] shadow-bs sm:w-[100%] w-[555px]">
            <div className="flex h-[72px] md:h-[auto] items-start justify-center py-[12px] rounded-[8px] w-[100%]">
              <div className="flex items-center justify-start w-[100%]">
                <div className="flex items-start justify-start w-[100%]">
                  <div className="flex items-start justify-start w-[100%]">
                    <Text
                      className="font-medium text-bluegray_800 text-left w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Envie seu currículo pra gente!
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex relative w-[100%]">
              <div className="flex flex-1 flex-col gap-[8px] items-start justify-start my-[auto] py-[12px] w-[100%]">
                <div className="flex items-center justify-start w-[100%]">
                  <div className="flex items-start justify-start w-[auto]">
                    <Text
                      className="font-medium text-bluegray_800 text-left w-[auto]"
                      variant="body2"
                    >
                      Nome completo
                    </Text>
                  </div>
                </div>
                <Input
                  className="font-normal not-italic p-[0] text-[14px] placeholder:text-bluegray_800 text-bluegray_800 text-left w-[100%]"
                  wrapClassName="md:h-[auto] sm:h-[auto] w-[100%]"
                  name="FormsFieldoutlinedefault One"
                  placeholder="Fulano de Tal"
                  shape="RoundedBorder8"
                  size="xl"
                  variant="OutlineGray300"
                ></Input>
              </div>
              <div className="flex flex-1 flex-col gap-[8px] items-start justify-start ml-[-50.5px] my-[auto] py-[12px] w-[100%] z-[1]">
                <div className="flex items-center justify-start w-[100%]">
                  <div className="flex items-start justify-start w-[auto]">
                    <Text
                      className="font-medium text-bluegray_800 text-left w-[auto]"
                      variant="body2"
                    >
                      E-mail
                    </Text>
                  </div>
                </div>
                <div className="bg-white_A700 border-[1px] border-gray_300 border-solid h-[48px] p-[12px] rounded-[8px] w-[95%]"></div>
              </div>
            </div>
            <div className="flex relative w-[100%]">
              <div className="flex flex-1 flex-col gap-[8px] items-start justify-start my-[auto] py-[12px] w-[100%]">
                <div className="flex items-center justify-start w-[100%]">
                  <div className="flex items-start justify-start w-[auto]">
                    <Text
                      className="font-medium text-bluegray_800 text-left w-[auto]"
                      variant="body2"
                    >
                      Celular (WhatsApp)
                    </Text>
                  </div>
                </div>
                <Input
                  className="font-normal not-italic p-[0] text-[14px] placeholder:text-bluegray_800 text-bluegray_800 text-left w-[100%]"
                  wrapClassName="md:h-[auto] sm:h-[auto] w-[100%]"
                  name="FormsFieldoutlinedefault Three"
                  placeholder="(11) 99999-9999"
                  shape="RoundedBorder8"
                  size="xl"
                  variant="OutlineGray300"
                ></Input>
              </div>
              <div className="flex flex-col gap-[8px] items-center justify-start ml-[-50.5px] my-[auto] py-[12px] w-[253px] z-[1]">
                <div className="flex items-center justify-start w-[100%]">
                  <div className="flex items-start justify-start w-[auto]">
                    <Text
                      className="font-medium text-bluegray_800 text-left w-[auto]"
                      variant="body2"
                    >
                      Selecione a sua área
                    </Text>
                  </div>
                </div>
                <SelectBox
                  className="font-normal h-[48px] not-italic pr-[12px] text-[14px] text-bluegray_800 text-left w-[100%]"
                  placeholderClassName="text-bluegray_800"
                  name="FormsFieldoutlinedefault Four"
                  placeholder="Administração"
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
            <div className="flex items-start justify-start pb-[4px] pt-[16px] w-[100%]">
              <Text
                className="font-medium text-bluegray_800 text-left w-[auto]"
                variant="body2"
              >
                Currículo
              </Text>
            </div>
            <div className="bg-white_A700 border-[1px] border-gray_300 border-solid flex flex-col items-center justify-start p-[16px] rounded-[8px] w-[100%]">
              <div className="h-[80px] relative w-[80px]">
                <Img
                  src="images/img_imagepicture.svg"
                  className="h-[48px] m-[auto] w-[48px]"
                  alt="bookmark"
                />
                <Img
                  src="images/img_imagem_80x80.png"
                  className="absolute h-[80px] inset-[0] justify-center m-[auto] object-cover w-[80px]"
                  alt="Imagem One"
                />
              </div>
              <div className="flex items-center justify-center pb-[8px] pt-[16px] w-[100%]">
                <Text
                  className="text-bluegray_800 text-center w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  <span className="text-bluegray_800 text-[14px] font-rubik font-normal not-italic">
                    Arraste até aqui ou
                  </span>
                  <span className="text-bluegray_800 text-[16px] font-rubik font-medium">
                    {" "}
                  </span>
                  <span className="text-indigo_900 text-[14px] font-rubik font-semibold">
                    adicione do seu aparelho
                  </span>
                </Text>
              </div>
              <Text
                className="font-normal not-italic text-bluegray_500 text-center w-[auto]"
                variant="body2"
              >
                Formato aceito: .pdf
              </Text>
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
        <div className="flex items-center mt-[102px] w-[100%]">
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

export default TrabalheconoscoPage;
