import React from "react";

import { Img, Input, Text, Line, List, Button } from "components";
import { CloseSVG } from "../../assets/images";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const DesktopRePillGerenciarPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray_100 flex flex-col font-rubik gap-[16px] items-center justify-end mx-[auto] w-[100%]">
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
        <div className="sm:h-[1300px] md:h-[1457px] h-[1924px] md:px-[20px] relative w-[100%]">
          <Img
            src="images/img_ellipse14.png"
            className="absolute bottom-[0] h-[713px] left-[0] object-cover w-[27%]"
            alt="EllipseFourteen"
          />
          <div className="absolute flex flex-col md:gap-[40px] gap-[846px] justify-start right-[0] top-[6%] w-[23%]">
            <Img
              src="images/img_ellipse15.png"
              className="h-[398px] md:h-[auto] md:ml-[0] ml-[108px] object-cover sm:w-[100%] w-[65%]"
              alt="EllipseFifteen"
            />
            <div className="bg-teal_800 flex h-[56px] md:h-[auto] items-center justify-center mr-[120px] px-[16px] py-[14px] rounded-[28px] shadow-bs2 w-[auto]">
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
          <Img
            src="images/img_grupo40.svg"
            className="absolute bottom-[38%] h-[116px] left-[2%] w-[auto]"
            alt="GrupoForty"
          />
          <div className="absolute flex flex-col gap-[16px] inset-x-[0] items-center justify-start mx-[auto] top-[0] w-[55%]">
            <div className="flex flex-col gap-[8px] items-start justify-start max-w-[746px] w-[100%]">
              <div className="flex flex-row items-start justify-start w-[auto]">
                <List
                  className="sm:flex-col flex-row gap-[1px] grid grid-cols-2 w-[56%]"
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
                          RePill
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
                    Pedido nº 10024
                  </Text>
                </div>
              </div>
              <div className="flex items-start justify-start pb-[4px] w-[221px]">
                <Text
                  className="not-italic text-bluegray_800 text-left w-[auto]"
                  as="h2"
                  variant="h2"
                >
                  Pedido nº 10024
                </Text>
              </div>
              <div className="flex items-center justify-center pt-[8px] md:w-[100%] w-[auto]">
                <Text
                  className="font-normal not-italic text-bluegray_800 text-left w-[auto]"
                  variant="body1"
                >
                  Escolha uma opção montada por nós ou personalize a sua! Depois
                  é só escolher a melhor data de entrega.
                </Text>
              </div>
              <div className="bg-yellow_200 flex items-center justify-start px-[16px] py-[12px] rounded-[8px] w-[100%]">
                <div className="flex items-start justify-start w-[100%]">
                  <div className="flex items-center justify-center w-[100%]">
                    <Text
                      className="font-normal leading-[150.00%] md:max-w-[100%] max-w-[714px] not-italic text-left text-light_green_900"
                      variant="body1"
                    >
                      Qualquer alteração na entrega ou em um produto dentro do
                      pedido só poderá ser realizada até 1 dia antes da data de
                      cobrança.
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-start justify-start max-w-[746px] p-[16px] w-[100%]">
              <div className="flex md:flex-col flex-row gap-[16px] items-start justify-start w-[100%]">
                <div className="flex flex-1 items-start justify-start w-[100%]">
                  <div className="flex items-start justify-start w-[100%]">
                    <Text
                      className="font-normal not-italic text-bluegray_800 text-left w-[auto]"
                      variant="body1"
                    >
                      Próxima entrega
                    </Text>
                  </div>
                </div>
                <div className="flex flex-1 items-start justify-end w-[100%]">
                  <Text
                    className="font-semibold text-bluegray_800 text-right w-[auto]"
                    variant="body1"
                  >
                    10/12/2022, entre 13:00 e 18:00
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <footer className="absolute bg-bluegray_900 bottom-[8%] flex md:flex-col flex-row gap-[32px] inset-x-[0] items-center justify-center mx-[auto] px-[120px] sm:px-[20px] md:px-[40px] py-[48px] w-[100%]">
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
          <div className="absolute flex flex-col gap-[16px] inset-x-[0] items-end justify-start max-w-[746px] mx-[auto] pb-[32px] top-[15%] w-[100%]">
            <div className="flex flex-col items-end justify-start shadow-bs w-[100%]">
              <div className="bg-indigo_900 flex md:flex-col flex-row gap-[8px] items-center justify-start p-[16px] rounded-bl-[0] rounded-br-[0] rounded-tl-[8px] rounded-tr-[8px] w-[100%]">
                <div className="flex flex-1 items-start justify-start w-[100%]">
                  <Text
                    className="text-left text-light_green_A200 w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    Itens do pedido (2)
                  </Text>
                </div>
                <Img
                  src="images/img_arrowup.svg"
                  className="h-[24px] w-[24px]"
                  alt="arrowup"
                />
              </div>
              <div className="bg-white_A700 flex flex-col gap-[16px] items-center justify-center rounded-bl-[8px] rounded-br-[8px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
                <div className="flex flex-col items-start justify-start md:w-[100%] w-[auto]">
                  <div className="flex items-start justify-start max-w-[746px] pb-[8px] pt-[16px] px-[16px] w-[100%]">
                    <div className="flex md:flex-col flex-row gap-[16px] items-start justify-end w-[100%]">
                      <div className="flex flex-1 items-start justify-start w-[100%]">
                        <div className="border-b-[1px] border-gray_300 border-solid flex items-start justify-center w-[100%]">
                          <div className="flex flex-row gap-[16px] items-center justify-start w-[100%]">
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
                                  Synthroid®
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
                      </div>
                      <div className="flex items-center justify-end w-[auto]">
                        <div className="bg-deep_purple_50 flex flex-row gap-[4px] items-center justify-center px-[8px] py-[4px] rounded-[4px] w-[auto]">
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
                    </div>
                  </div>
                  <div className="flex flex-row gap-[16px] items-center justify-between px-[16px] w-[100%]">
                    <div className="flex flex-col gap-[8px] items-start justify-start px-[16px] w-[auto]">
                      <Button
                        className="flex items-center justify-center min-w-[122px] text-center w-[auto]"
                        leftIcon={
                          <Img
                            src="images/img_file.svg"
                            className="mr-[8px] text-center"
                            alt="file"
                          />
                        }
                        size="xl"
                        variant="OutlineGray300_1"
                      >
                        <div className="bg-transparent cursor-pointer font-medium text-[14px] text-bluegray_800 text-left">
                          receita2.jpeg
                        </div>
                      </Button>
                      <Button
                        className="flex items-center justify-center min-w-[128px] text-center w-[auto]"
                        leftIcon={
                          <Img
                            src="images/img_checkmark_red_600.svg"
                            className="mr-[4px] text-center"
                            alt="checkmark"
                          />
                        }
                        shape="RoundedBorder4"
                        variant="FillRed100"
                      >
                        <div className="bg-transparent cursor-pointer font-medium text-[12px] text-center text-red_900">
                          Receita inválida
                        </div>
                      </Button>
                    </div>
                    <div className="border-[1px] border-indigo_900 border-solid flex h-[36px] md:h-[auto] items-center justify-center px-[16px] py-[14px] rounded-[18px] w-[auto]">
                      <div className="flex items-center justify-start w-[auto]">
                        <div className="flex items-center justify-center w-[auto]">
                          <Text
                            className="font-medium text-indigo_900 text-left w-[auto]"
                            variant="body2"
                          >
                            Pular entrega
                          </Text>
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
                <div className="flex flex-col items-start justify-start pb-[16px] md:w-[100%] w-[auto]">
                  <div className="flex items-start justify-start max-w-[746px] pb-[8px] pt-[16px] px-[16px] w-[100%]">
                    <div className="flex md:flex-col flex-row gap-[16px] items-start justify-end w-[100%]">
                      <div className="flex flex-1 items-start justify-start w-[100%]">
                        <div className="border-b-[1px] border-gray_300 border-solid flex items-start justify-center w-[100%]">
                          <div className="flex flex-row gap-[16px] items-center justify-start w-[100%]">
                            <div className="flex h-[40px] items-center justify-start rounded-[8px] w-[40px]">
                              <Img
                                src="images/img_imagem_18.png"
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
                      <div className="flex items-center justify-end w-[auto]">
                        <div className="bg-deep_purple_50 flex flex-row gap-[4px] items-center justify-center px-[8px] py-[4px] rounded-[4px] w-[auto]">
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
                    </div>
                  </div>
                  <div className="flex items-center justify-end px-[16px] w-[100%]">
                    <div className="border-[1px] border-indigo_900 border-solid flex h-[36px] md:h-[auto] items-center justify-center px-[16px] py-[14px] rounded-[18px] w-[auto]">
                      <div className="flex items-center justify-start w-[auto]">
                        <div className="flex items-center justify-center w-[auto]">
                          <Text
                            className="font-medium text-indigo_900 text-left w-[auto]"
                            variant="body2"
                          >
                            Pular entrega
                          </Text>
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
                      className="font-normal leading-[150.00%] md:max-w-[100%] max-w-[333px] not-italic text-bluegray_800 text-left"
                      variant="body1"
                    >
                      Algum item com receita inválida? Atualize clicando no
                      botão abaixo para não ter nenhum problema com o seu
                      pedido.
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
              <div className="bg-white_A700 flex flex-1 flex-col gap-[16px] h-[100%] items-end justify-start p-[16px] rounded-[8px] shadow-bs w-[100%]">
                <div className="flex items-start justify-start pt-[8px] w-[100%]">
                  <Text
                    className="text-bluegray_900 text-left w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    Endereço de entrega
                  </Text>
                </div>
                <div className="flex items-start justify-center w-[100%]">
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
                        className="font-normal leading-[150.00%] md:max-w-[100%] max-w-[273px] not-italic text-bluegray_800 text-left"
                        variant="body1"
                      >
                        Entrega agendada: 10/11/22, entre 13:00 e 18:00
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex items-start justify-start w-[auto]">
                  <div className="border-[1px] border-indigo_900 border-solid flex h-[36px] md:h-[auto] items-center justify-center px-[16px] py-[14px] rounded-[18px] w-[auto]">
                    <div className="flex items-center justify-start w-[auto]">
                      <div className="flex items-center justify-center w-[auto]">
                        <Text
                          className="font-medium text-indigo_900 text-left w-[auto]"
                          variant="body2"
                        >
                          Alterar endereço
                        </Text>
                      </div>
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
                      src="images/img_file_blue_600.svg"
                      className="h-[24px] w-[24px]"
                      alt="file"
                    />
                    <div className="flex flex-1 h-[100%] items-center justify-start w-[100%]">
                      <Text
                        className="text-bluegray_800 text-left w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Final **00
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
                              Titular
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center justify-center w-[100%]">
                        <Text
                          className="font-normal not-italic text-bluegray_800 text-left w-[auto]"
                          variant="body1"
                        >
                          Igor Girsas
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
                              Validade
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center justify-center w-[auto]">
                        <Text
                          className="font-normal not-italic text-bluegray_800 text-left w-[auto]"
                          variant="body1"
                        >
                          10/2030
                        </Text>
                      </div>
                    </div>
                  </List>
                </div>
                <div className="flex items-start justify-end w-[100%]">
                  <Input
                    className="font-medium p-[0] text-[12px] placeholder:text-indigo_900 text-indigo_900 text-left w-[100%]"
                    wrapClassName="md:h-[auto] sm:h-[auto] w-[auto]"
                    name="Button"
                    placeholder="Alterar forma de pagamento"
                    shape="CircleBorder18"
                    size="sm"
                    variant="OutlineIndigo900_1"
                  ></Input>
                </div>
              </div>
              <div className="bg-white_A700 flex flex-1 flex-col items-start justify-start p-[16px] rounded-[8px] shadow-bs w-[100%]">
                <div className="flex items-start justify-start pb-[16px] pt-[8px] w-[auto]">
                  <Text
                    className="text-bluegray_900 text-left w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    Resumo
                  </Text>
                </div>
                <div className="grid grid-cols-2 justify-center min-h-[auto] w-[100%]">
                  <div className="flex flex-1 items-start justify-start pt-[4px] w-[100%]">
                    <Text
                      className="font-normal not-italic text-bluegray_800 text-left w-[auto]"
                      variant="body1"
                    >
                      Total dos itens
                    </Text>
                  </div>
                  <div className="flex flex-1 items-start justify-end pt-[4px] w-[100%]">
                    <Text
                      className="font-semibold text-bluegray_800 text-left w-[auto]"
                      variant="body1"
                    >
                      R$ 223,99
                    </Text>
                  </div>
                  <div className="flex flex-1 items-start justify-start pt-[4px] w-[100%]">
                    <Text
                      className="font-normal not-italic text-bluegray_800 text-left w-[auto]"
                      variant="body1"
                    >
                      Frete
                    </Text>
                  </div>
                  <div className="flex flex-1 items-start justify-end pt-[4px] w-[100%]">
                    <Text
                      className="font-semibold text-bluegray_800 text-left w-[auto]"
                      variant="body1"
                    >
                      R$ 7,00
                    </Text>
                  </div>
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
            <div className="flex items-start justify-end w-[100%]">
              <Input
                className="font-medium p-[0] text-[14px] text-left placeholder:text-light_green_A200 text-light_green_A200 w-[100%]"
                wrapClassName="md:h-[auto] sm:h-[auto] w-[auto]"
                name="Button One"
                placeholder="Alterar data de entrega"
                shape="CircleBorder22"
                size="md"
                variant="FillIndigo900"
              ></Input>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DesktopRePillGerenciarPage;
