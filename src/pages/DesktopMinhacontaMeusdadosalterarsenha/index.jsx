import React from "react";

import { Img, Input, Text, Line, Button, List } from "components";
import { CloseSVG } from "../../assets/images";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const DesktopMinhacontaMeusdadosalterarsenhaPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray_100 flex flex-col font-rubik items-center justify-end mx-[auto] w-[100%]">
        <div className="bg-gray_50 flex md:flex-col flex-row gap-[32px] items-center justify-start max-w-[1366px] px-[120px] sm:px-[20px] md:px-[40px] py-[8px] w-[100%]">
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
        </div>
        <div className="flex md:px-[20px] relative w-[100%]">
          <aside className="flex flex-col md:hidden justify-start my-[auto] w-[29%]">
            <div className="flex items-center justify-start w-[100%]">
              <div className="bg-white_A700 flex flex-col h-[1217px] md:h-[auto] items-start justify-start pl-[120px] sm:pl-[20px] md:pl-[40px] pt-[24px] sm:w-[100%] w-[390px]">
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
                <div className="bg-deep_purple_50 border-indigo_900 border-r-[4px] border-solid flex items-start justify-center sm:px-[20px] px-[32px] py-[12px] w-[100%]">
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
                <div className="flex items-start justify-center sm:px-[20px] px-[32px] py-[12px] w-[100%]">
                  <div className="flex items-center justify-start w-[100%]">
                    <div className="flex items-start justify-start w-[100%]">
                      <div className="flex items-start justify-start w-[auto]">
                        <Text
                          className="text-bluegray_800 text-left w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Histórico de pedidos
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
            </div>
          </aside>
          <div className="flex flex-col gap-[16px] items-end justify-start ml-[undefinedpx] mr-[120px] mt-[16px] w-[62%] z-[1]">
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
                      Meus dados
                    </Text>
                  </div>
                </div>
                <div className="flex items-start justify-start pb-[4px] w-[221px]">
                  <Text
                    className="not-italic text-bluegray_800 text-left w-[auto]"
                    as="h2"
                    variant="h2"
                  >
                    Meus dados
                  </Text>
                </div>
                <div className="flex items-center justify-center pt-[8px] w-[auto]">
                  <Text
                    className="font-normal not-italic text-bluegray_800 text-left w-[auto]"
                    variant="body1"
                  >
                    Atualize suas informações
                  </Text>
                </div>
              </div>
              <div className="flex p-[16px] relative md:w-[100%] w-[840px]">
                <div className="bg-white_A700 md:h-[183px] h-[313px] my-[auto] p-[16px] rounded-[8px] shadow-bs w-[100%]">
                  <div className="absolute bg-white_A700 flex flex-1 flex-col h-[100%] inset-y-[0] items-end justify-end left-[0] my-[auto] p-[16px] rounded-[8px] shadow-bs w-[100%]">
                    <div className="flex items-start justify-start pb-[16px] pt-[8px] w-[100%]">
                      <Text
                        className="text-bluegray_900 text-left w-[auto]"
                        as="h3"
                        variant="h3"
                      >
                        Dados pessoais
                      </Text>
                    </div>
                    <div className="flex flex-col items-start justify-start w-[100%]">
                      <div className="flex items-start justify-start py-[8px] w-[333px]">
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
                      </div>
                      <div className="flex items-center justify-center pb-[16px] w-[100%]">
                        <Text
                          className="font-normal not-italic text-bluegray_800 text-left w-[auto]"
                          variant="body1"
                        >
                          Igor Girsas
                        </Text>
                      </div>
                    </div>
                    <Button
                      className="flex items-center justify-center min-w-[125px] text-center w-[auto]"
                      leftIcon={
                        <Img
                          src="images/img_edit.svg"
                          className="mr-[4px] text-center"
                          alt="edit"
                        />
                      }
                      shape="CircleBorder18"
                    >
                      <div className="bg-transparent cursor-pointer font-medium text-[12px] text-indigo_900 text-left">
                        Editar dados
                      </div>
                    </Button>
                  </div>
                  <div className="absolute bottom-[37%] flex flex-1 sm:flex-col flex-row sm:gap-[20px] inset-x-[0] items-center justify-evenly mx-[auto] w-[100%]">
                    <div className="flex flex-1 items-start justify-start pb-[16px] w-[100%]">
                      <div className="flex flex-col items-start justify-start w-[100%]">
                        <div className="flex items-start justify-start py-[8px] w-[100%]">
                          <div className="flex items-center justify-start w-[100%]">
                            <div className="flex items-start justify-start w-[auto]">
                              <Text
                                className="font-medium text-bluegray_800 text-left w-[auto]"
                                variant="body2"
                              >
                                CPF
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center justify-center w-[100%]">
                          <Text
                            className="font-normal not-italic text-bluegray_800 text-left w-[auto]"
                            variant="body1"
                          >
                            123.456.789-10
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col items-start justify-start pb-[16px] w-[100%]">
                      <div className="flex items-start justify-start py-[8px] w-[100%]">
                        <div className="flex items-center justify-start w-[100%]">
                          <div className="flex items-start justify-start w-[auto]">
                            <Text
                              className="font-medium text-bluegray_800 text-left w-[auto]"
                              variant="body2"
                            >
                              Data de nascimento
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center justify-center w-[100%]">
                        <Text
                          className="font-normal not-italic text-bluegray_800 text-left w-[auto]"
                          variant="body1"
                        >
                          09/09/1996
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-[17%] flex inset-x-[0] mx-[auto] w-[100%]">
                    <div className="flex flex-1 flex-col items-start justify-start my-[auto] pb-[16px] w-[100%]">
                      <div className="flex items-start justify-start py-[8px] w-[100%]">
                        <div className="flex items-center justify-start w-[100%]">
                          <div className="flex items-start justify-start w-[auto]">
                            <Text
                              className="font-medium text-bluegray_800 text-left w-[auto]"
                              variant="body2"
                            >
                              Telefone
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center justify-center w-[100%]">
                        <Text
                          className="font-normal not-italic text-bluegray_800 text-left w-[auto]"
                          variant="body1"
                        >
                          (21) 99999-9999
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col items-start justify-start ml-[-151px] my-[auto] pb-[16px] w-[100%] z-[1]">
                      <div className="flex items-start justify-start py-[8px] w-[100%]">
                        <div className="flex items-center justify-start w-[100%]">
                          <div className="flex items-start justify-start w-[auto]">
                            <Text
                              className="font-medium text-bluegray_800 text-left w-[auto]"
                              variant="body2"
                            >
                              Sexo
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center justify-center w-[100%]">
                        <Text
                          className="font-normal not-italic text-bluegray_800 text-left w-[auto]"
                          variant="body1"
                        >
                          Masculino
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white_A700 flex flex-col items-end justify-end ml-[-103px] p-[16px] rounded-[8px] shadow-bs w-[100%] z-[1]">
                  <div className="flex items-start justify-start pb-[16px] pt-[8px] w-[100%]">
                    <Text
                      className="text-bluegray_900 text-left w-[auto]"
                      as="h3"
                      variant="h3"
                    >
                      Dados de acesso
                    </Text>
                  </div>
                  <div className="h-[65px] relative w-[100%]">
                    <div className="absolute flex flex-1 flex-col h-[100%] inset-y-[0] items-start justify-start left-[0] my-[auto] w-[100%]">
                      <div className="flex items-start justify-start py-[8px] w-[100%]">
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
                      </div>
                      <div className="flex items-center justify-center pb-[16px] w-[100%]">
                        <Text
                          className="font-normal not-italic text-bluegray_800 text-left w-[auto]"
                          variant="body1"
                        >
                          igor@pill.com.br
                        </Text>
                      </div>
                    </div>
                    <Button
                      className="absolute flex h-[max-content] inset-y-[0] items-center justify-center min-w-[132px] my-[auto] text-center w-[auto]"
                      leftIcon={
                        <Img
                          src="images/img_mail_indigo_900_16x16.svg"
                          className="mr-[4px] text-center right-[1%] absolute"
                          alt="mail"
                        />
                      }
                      shape="CircleBorder18"
                    >
                      <div className="bg-transparent cursor-pointer font-medium text-[12px] text-indigo_900 text-left">
                        Alterar e-mail
                      </div>
                    </Button>
                  </div>
                  <div className="flex flex-col gap-[8px] items-end justify-end pt-[8px] w-[100%]">
                    <List
                      className="sm:flex-col flex-row gap-[16px] grid grid-cols-2 justify-start w-[100%]"
                      orientation="horizontal"
                    >
                      <div className="flex flex-1 flex-col gap-[8px] items-start justify-start pb-[8px] w-[100%]">
                        <div className="flex items-center justify-start w-[100%]">
                          <div className="flex items-start justify-start w-[auto]">
                            <Text
                              className="font-medium text-bluegray_800 text-left w-[auto]"
                              variant="body2"
                            >
                              Senha atual
                            </Text>
                          </div>
                        </div>
                        <div className="bg-white_A700 border-[1px] border-gray_300 border-solid flex h-[48px] md:h-[auto] items-start justify-center p-[12px] rounded-[8px] w-[100%]">
                          <div className="flex items-center justify-start w-[100%]">
                            <Img
                              src="images/img_eye.svg"
                              className="h-[24px] w-[24px]"
                              alt="eye"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-1 flex-col gap-[8px] items-start justify-start pb-[8px] w-[100%]">
                        <div className="flex items-center justify-start w-[100%]">
                          <div className="flex items-start justify-start w-[auto]">
                            <Text
                              className="font-medium text-bluegray_800 text-left w-[auto]"
                              variant="body2"
                            >
                              Nova senha
                            </Text>
                          </div>
                        </div>
                        <div className="bg-white_A700 border-[1px] border-gray_300 border-solid flex h-[48px] md:h-[auto] items-start justify-center p-[12px] rounded-[8px] w-[100%]">
                          <div className="flex items-center justify-start w-[100%]">
                            <Img
                              src="images/img_eye.svg"
                              className="h-[24px] w-[24px]"
                              alt="eye One"
                            />
                          </div>
                        </div>
                      </div>
                    </List>
                    <div className="bg-indigo_900 flex h-[36px] md:h-[auto] items-center justify-center px-[16px] py-[14px] rounded-[18px] w-[auto]">
                      <div className="flex items-center justify-center w-[auto]">
                        <div className="flex items-center justify-center w-[auto]">
                          <Text
                            className="font-medium text-left text-light_green_A200 w-[auto]"
                            variant="body2"
                          >
                            Salvar alteração
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-teal_800 flex h-[56px] md:h-[auto] items-center justify-center px-[16px] py-[14px] rounded-[28px] shadow-bs2 w-[auto]">
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
          <footer className="bg-bluegray_900 flex md:flex-col flex-row gap-[32px] items-center justify-center mb-[322px] ml-[-390px] mr-[auto] mt-[auto] px-[120px] sm:px-[20px] md:px-[40px] py-[48px] w-[100%] z-[1]">
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

export default DesktopMinhacontaMeusdadosalterarsenhaPage;
