import React from "react";

import { Img, Input, Text, Line, List } from "components";
import { CloseSVG } from "../../assets/images";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const DesktopRePillJuntarentregasFourPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray_100 flex flex-col font-rubik gap-[16px] items-center justify-start mx-[auto] w-[100%]">
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
        <div className="h-[1616px] md:h-[971px] md:px-[20px] relative w-[100%]">
          <Img
            src="images/img_group151.png"
            className="absolute h-[451px] object-cover right-[0] top-[2%] w-[auto]"
            alt="Group151"
          />
          <div className="absolute bottom-[0] h-[1461px] md:h-[971px] inset-x-[0] mx-[auto] w-[100%]">
            <Img
              src="images/img_group149.png"
              className="absolute bottom-[0] h-[971px] left-[0] object-cover w-[auto]"
              alt="Group149"
            />
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
            </footer>
            <div className="absolute bg-teal_800 bottom-[23%] flex h-[56px] md:h-[auto] items-center justify-center px-[16px] py-[14px] right-[9%] rounded-[28px] shadow-bs2 w-[auto]">
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
            <div className="absolute flex flex-col gap-[16px] inset-x-[0] items-end justify-start max-w-[746px] mx-[auto] top-[0] w-[100%]">
              <div className="bg-white_A700 flex flex-col gap-[8px] items-center justify-start pb-[16px] px-[16px] rounded-[8px] shadow-bs w-[100%]">
                <div className="flex h-[72px] md:h-[auto] items-start justify-center py-[12px] rounded-[8px] w-[100%]">
                  <div className="flex md:flex-col flex-row gap-[16px] items-center justify-start w-[100%]">
                    <div className="bg-indigo_900 flex h-[24px] items-center justify-start p-[6px] rounded-[50%] w-[24px]">
                      <div className="bg-white_A700 h-[12px] rounded-[50%] w-[12px]"></div>
                    </div>
                    <div className="flex flex-1 items-start justify-start w-[100%]">
                      <div className="flex items-start justify-start w-[100%]">
                        <Text
                          className="font-medium text-bluegray_800 text-left w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Sugestão da Pill
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-[8px] items-start justify-start w-[100%]">
                  <div className="flex items-start justify-start pb-[4px] w-[228px]">
                    <Text
                      className="text-bluegray_800 text-left w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Pedido 1
                    </Text>
                  </div>
                  <List
                    className="bg-white_A700 border-[1px] border-gray_300 border-solid flex-col gap-[8px] grid items-start p-[16px] rounded-[8px] w-[100%]"
                    orientation="vertical"
                  >
                    <div className="flex flex-1 md:flex-col flex-row gap-[8px] items-center justify-start my-[0] w-[100%]">
                      <div className="flex flex-1 flex-col items-start justify-start w-[100%]">
                        <div className="flex items-start justify-start py-[8px] w-[100%]">
                          <div className="flex items-center justify-start w-[100%]">
                            <div className="flex items-start justify-start w-[auto]">
                              <Text
                                className="font-medium text-bluegray_800 text-left w-[auto]"
                                variant="body2"
                              >
                                Entrega em
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-start justify-start w-[100%]">
                          <Text
                            className="text-bluegray_800 text-left w-[auto]"
                            as="h1"
                            variant="h1"
                          >
                            26/12/22
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-1 flex-row gap-[8px] items-start justify-start w-[100%]">
                        <div className="border-[1px] border-gray_100 border-solid flex h-[40px] items-center justify-start rounded-[8px] w-[40px]">
                          <Img
                            src="images/img_imagem_16.png"
                            className="h-[40px] md:h-[auto] object-cover rounded-[8px] w-[40px]"
                            alt="Imagem One"
                          />
                        </div>
                        <div className="border-[1px] border-gray_100 border-solid flex h-[40px] items-center justify-start rounded-[8px] w-[40px]">
                          <Img
                            src="images/img_imagem_16.png"
                            className="h-[40px] md:h-[auto] object-cover rounded-[8px] w-[40px]"
                            alt="Imagem One"
                          />
                        </div>
                        <div className="flex h-[40px] md:h-[auto] items-center justify-center w-[39px]">
                          <Text
                            className="font-normal not-italic text-bluegray_500 text-left w-[auto]"
                            variant="body2"
                          >
                            + 2 itens
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-1 md:flex-col flex-row gap-[8px] items-start justify-start my-[0] w-[100%]">
                      <div className="flex flex-1 flex-col items-start justify-start w-[100%]">
                        <div className="flex items-start justify-start py-[8px] w-[100%]">
                          <div className="flex items-center justify-start w-[100%]">
                            <div className="flex items-start justify-start w-[auto]">
                              <Text
                                className="font-medium text-bluegray_800 text-left w-[auto]"
                                variant="body2"
                              >
                                Cobrança
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
                      <div className="flex flex-1 flex-col items-start justify-start w-[100%]">
                        <div className="flex items-start justify-start py-[8px] w-[100%]">
                          <div className="flex items-center justify-start w-[100%]">
                            <div className="flex items-start justify-start w-[auto]">
                              <Text
                                className="font-medium text-bluegray_800 text-left w-[auto]"
                                variant="body2"
                              >
                                Endereço de entrega
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center justify-center w-[100%]">
                          <Text
                            className="font-normal not-italic text-bluegray_800 text-left w-[auto]"
                            variant="body1"
                          >
                            Av. Dr. Arnaldo, 2194, CEP 01255-000, São Paulo, SP
                          </Text>
                        </div>
                      </div>
                    </div>
                  </List>
                </div>
                <Img
                  src="images/img_close.svg"
                  className="h-[24px] w-[24px]"
                  alt="close"
                />
                <div className="flex flex-col gap-[8px] items-start justify-start w-[100%]">
                  <div className="flex items-start justify-start pb-[4px] w-[228px]">
                    <Text
                      className="text-bluegray_800 text-left w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Pedido 2
                    </Text>
                  </div>
                  <List
                    className="bg-white_A700 border-[1px] border-gray_300 border-solid flex-col gap-[8px] grid items-start p-[16px] rounded-[8px] w-[100%]"
                    orientation="vertical"
                  >
                    <div className="flex flex-1 md:flex-col flex-row gap-[8px] items-center justify-start my-[0] w-[100%]">
                      <div className="flex flex-1 flex-col items-start justify-start w-[100%]">
                        <div className="flex items-start justify-start py-[8px] w-[100%]">
                          <div className="flex items-center justify-start w-[100%]">
                            <div className="flex items-start justify-start w-[auto]">
                              <Text
                                className="font-medium text-bluegray_800 text-left w-[auto]"
                                variant="body2"
                              >
                                Entrega em
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-start justify-start w-[100%]">
                          <Text
                            className="text-bluegray_800 text-left w-[auto]"
                            as="h1"
                            variant="h1"
                          >
                            26/12/22
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-1 flex-row gap-[8px] items-start justify-start w-[100%]">
                        <div className="border-[1px] border-gray_100 border-solid flex h-[40px] items-center justify-start rounded-[8px] w-[40px]">
                          <Img
                            src="images/img_imagem_16.png"
                            className="h-[40px] md:h-[auto] object-cover rounded-[8px] w-[40px]"
                            alt="Imagem Two"
                          />
                        </div>
                        <div className="border-[1px] border-gray_100 border-solid flex h-[40px] items-center justify-start rounded-[8px] w-[40px]">
                          <Img
                            src="images/img_imagem_16.png"
                            className="h-[40px] md:h-[auto] object-cover rounded-[8px] w-[40px]"
                            alt="Imagem One One"
                          />
                        </div>
                        <div className="flex h-[40px] md:h-[auto] items-center justify-center w-[39px]">
                          <Text
                            className="font-normal not-italic text-bluegray_500 text-left w-[auto]"
                            variant="body2"
                          >
                            + 2 itens
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-1 md:flex-col flex-row gap-[8px] items-start justify-start my-[0] w-[100%]">
                      <div className="flex flex-1 flex-col items-start justify-start w-[100%]">
                        <div className="flex items-start justify-start py-[8px] w-[100%]">
                          <div className="flex items-center justify-start w-[100%]">
                            <div className="flex items-start justify-start w-[auto]">
                              <Text
                                className="font-medium text-bluegray_800 text-left w-[auto]"
                                variant="body2"
                              >
                                Cobrança
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
                      <div className="flex flex-1 flex-col items-start justify-start w-[100%]">
                        <div className="flex items-start justify-start py-[8px] w-[100%]">
                          <div className="flex items-center justify-start w-[100%]">
                            <div className="flex items-start justify-start w-[auto]">
                              <Text
                                className="font-medium text-bluegray_800 text-left w-[auto]"
                                variant="body2"
                              >
                                Endereço de entrega
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center justify-center w-[100%]">
                          <Text
                            className="font-normal not-italic text-bluegray_800 text-left w-[auto]"
                            variant="body1"
                          >
                            Av. Dr. Arnaldo, 2194, CEP 01255-000, São Paulo, SP
                          </Text>
                        </div>
                      </div>
                    </div>
                  </List>
                </div>
              </div>
              <Input
                className="font-medium p-[0] text-[18px] placeholder:text-bluegray_800 text-bluegray_800 text-left w-[100%]"
                wrapClassName="flex w-[100%]"
                name="Escolher"
                placeholder="Montar minha junção"
                prefix={
                  <Img
                    src="images/img_refresh_bluegray_901.svg"
                    className="my-[auto] mx-[16px]"
                    alt="refresh"
                  />
                }
                shape="RoundedBorder8"
                size="9xl"
                variant="OutlineIndigo90019"
              ></Input>
              <div className="bg-white_A700 flex flex-col items-start justify-start p-[16px] rounded-[8px] shadow-bs w-[100%]">
                <div className="flex items-start justify-start pb-[4px] w-[100%]">
                  <Text
                    className="text-bluegray_900 text-left w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    Data da entrega
                  </Text>
                </div>
                <div className="flex items-start justify-start py-[12px] w-[100%]">
                  <div className="flex items-center justify-start w-[100%]">
                    <div className="flex items-start justify-start w-[auto]">
                      <Text
                        className="font-medium text-bluegray_800 text-left w-[auto]"
                        variant="body2"
                      >
                        Selecione o melhor dia para receber:
                      </Text>
                    </div>
                  </div>
                </div>
                <List
                  className="flex-col gap-[1px] grid items-center w-[100%]"
                  orientation="vertical"
                >
                  <div className="flex flex-1 md:flex-col flex-row gap-[8px] items-start justify-start pb-[8px] w-[100%]">
                    <div className="border-[1px] border-indigo_900 border-solid flex flex-1 flex-col items-center justify-start p-[12px] rounded-[8px] w-[100%]">
                      <div className="flex h-[21px] md:h-[auto] items-center justify-center w-[100%]">
                        <Text
                          className="font-medium text-indigo_900 text-left w-[auto]"
                          variant="body1"
                        >
                          09/11/22
                        </Text>
                      </div>
                      <div className="flex items-center justify-center w-[auto]">
                        <Text
                          className="font-normal not-italic text-bluegray_500 text-left w-[auto]"
                          variant="body2"
                        >
                          Quarta-feira
                        </Text>
                      </div>
                    </div>
                    <div className="border-[1px] border-indigo_900 border-solid flex flex-1 flex-col items-center justify-start p-[12px] rounded-[8px] w-[100%]">
                      <div className="flex h-[21px] md:h-[auto] items-center justify-center w-[100%]">
                        <Text
                          className="font-medium text-indigo_900 text-left w-[auto]"
                          variant="body1"
                        >
                          10/11/22
                        </Text>
                      </div>
                      <div className="flex items-center justify-center w-[auto]">
                        <Text
                          className="font-normal not-italic text-bluegray_500 text-left w-[auto]"
                          variant="body2"
                        >
                          Quinta-feira
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 md:flex-col flex-row gap-[8px] items-start justify-start pb-[8px] w-[100%]">
                    <div className="bg-indigo_900 border-[1px] border-gray_300 border-solid flex flex-1 flex-col items-center justify-start p-[12px] rounded-[8px] w-[100%]">
                      <div className="flex items-center justify-start w-[auto]">
                        <div className="flex items-center justify-center w-[auto]">
                          <Text
                            className="font-semibold text-left text-light_green_A200 w-[auto]"
                            variant="body1"
                          >
                            11/11/22
                          </Text>
                        </div>
                      </div>
                      <div className="flex items-center justify-center w-[auto]">
                        <Text
                          className="font-normal not-italic text-left text-white_A700 w-[auto]"
                          variant="body2"
                        >
                          Sexta-feira
                        </Text>
                      </div>
                    </div>
                    <div className="border-[1px] border-indigo_900 border-solid flex flex-1 flex-col items-center justify-start p-[12px] rounded-[8px] w-[100%]">
                      <div className="flex h-[21px] md:h-[auto] items-center justify-center w-[100%]">
                        <Text
                          className="font-medium text-indigo_900 text-left w-[auto]"
                          variant="body1"
                        >
                          14/11/22
                        </Text>
                      </div>
                      <div className="flex items-center justify-center w-[auto]">
                        <Text
                          className="font-normal not-italic text-bluegray_500 text-left w-[auto]"
                          variant="body2"
                        >
                          Segunda-feira
                        </Text>
                      </div>
                    </div>
                  </div>
                </List>
                <div className="flex items-start justify-start py-[12px] w-[100%]">
                  <div className="flex items-center justify-start w-[100%]">
                    <div className="flex items-start justify-start w-[auto]">
                      <Text
                        className="font-medium text-bluegray_800 text-left w-[auto]"
                        variant="body2"
                      >
                        Selecione o melhor período:
                      </Text>
                    </div>
                  </div>
                </div>
                <List
                  className="sm:flex-col flex-row gap-[8px] grid md:grid-cols-1 grid-cols-2 justify-start pb-[8px] w-[100%]"
                  orientation="horizontal"
                >
                  <div className="border-[1px] border-indigo_900 border-solid flex flex-1 flex-col items-center justify-start p-[12px] rounded-[8px] w-[100%]">
                    <div className="flex h-[21px] md:h-[auto] items-center justify-center w-[97px]">
                      <Text
                        className="font-medium text-indigo_900 text-left w-[auto]"
                        variant="body1"
                      >
                        Manhã
                      </Text>
                    </div>
                    <div className="flex items-center justify-center w-[auto]">
                      <Text
                        className="font-normal not-italic text-bluegray_500 text-left w-[auto]"
                        variant="body2"
                      >
                        Entre 8:00 e 12:00
                      </Text>
                    </div>
                  </div>
                  <div className="border-[1px] border-indigo_900 border-solid flex flex-1 flex-col items-center justify-start p-[12px] rounded-[8px] w-[100%]">
                    <div className="flex h-[21px] md:h-[auto] items-center justify-center w-[97px]">
                      <Text
                        className="font-medium text-indigo_900 text-left w-[auto]"
                        variant="body1"
                      >
                        Tarde
                      </Text>
                    </div>
                    <div className="flex items-center justify-center w-[auto]">
                      <Text
                        className="font-normal not-italic text-bluegray_500 text-left w-[auto]"
                        variant="body2"
                      >
                        Entre 13:00 e 18:00
                      </Text>
                    </div>
                  </div>
                </List>
              </div>
              <div className="bg-indigo_900 flex items-center justify-center px-[16px] py-[14px] rounded-[24px] w-[auto]">
                <div className="flex items-center justify-start w-[auto]">
                  <div className="flex items-center justify-center px-[4px] w-[auto]">
                    <Text
                      className="font-medium text-left text-light_green_A200 w-[auto]"
                      variant="body1"
                    >
                      Juntar entregas
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute flex flex-col gap-[8px] inset-x-[0] items-start justify-start max-w-[746px] mx-[auto] top-[0] w-[100%]">
            <div className="flex flex-row items-start justify-start w-[auto]">
              <List
                className="sm:flex-col flex-row gap-[1px] grid grid-cols-2 w-[54%]"
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
                  Junstar entregas
                </Text>
              </div>
            </div>
            <div className="flex items-start justify-start pb-[4px] w-[221px]">
              <Text
                className="not-italic text-bluegray_800 text-left w-[auto]"
                as="h2"
                variant="h2"
              >
                Juntar entregas
              </Text>
            </div>
            <div className="flex items-center justify-center pt-[8px] md:w-[100%] w-[auto]">
              <Text
                className="font-normal not-italic text-bluegray_800 text-left w-[auto]"
                variant="body1"
              >
                Escolha uma opção montada por nós ou personalize a sua! Depois é
                só escolher a melhor data de entrega.
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DesktopRePillJuntarentregasFourPage;
