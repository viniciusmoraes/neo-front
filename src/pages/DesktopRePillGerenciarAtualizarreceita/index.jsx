import React from "react";

import { Img, Button, Text, List, Input } from "components";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const DesktopRePillGerenciarAtualizarreceitaPage = () => {
  return (
    <>
      <div className="bg-gray_100 flex font-rubik h-[1203px] justify-end mx-[auto] relative w-[100%]">
        <div className="h-[1506px] mt-[auto] mx-[auto] md:px-[20px] w-[100%]">
          <div className="flex md:flex-col flex-row md:gap-[20px] h-[100%] items-start justify-evenly m-[auto] w-[100%]">
            <div className="md:h-[1288px] h-[1506px] sm:h-[948px] relative md:w-[100%] w-[78%]">
              <Img
                src="images/img_ellipse14_1.png"
                className="absolute bottom-[0] h-[713px] left-[0] object-cover w-[34%]"
                alt="EllipseFourteen"
              />
              <Img
                src="images/img_grupo40.svg"
                className="absolute h-[116px] left-[2%] top-[43%] w-[auto]"
                alt="GrupoForty"
              />
              <div className="absolute flex flex-col gap-[16px] items-end justify-start max-w-[746px] pb-[32px] right-[0] top-[0] w-[100%]">
                <div className="flex items-end justify-start rounded-bl-[8px] rounded-br-[8px] rounded-tl-[0] rounded-tr-[0] shadow-bs w-[100%]">
                  <div className="bg-white_A700 flex flex-col gap-[16px] items-center justify-center rounded-bl-[8px] rounded-br-[8px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
                    <div className="flex flex-col items-start justify-start md:w-[100%] w-[auto]">
                      <div className="flex items-start justify-start max-w-[746px] pb-[8px] pt-[16px] px-[16px] w-[100%]">
                        <div className="flex items-start justify-end w-[100%]">
                          <div className="flex items-start justify-start w-[100%]">
                            <Img
                              src="images/img_itemlist_1x503.png"
                              className="h-[1px] md:h-[auto] object-cover w-[100%]"
                              alt="Itemlist"
                            />
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
                                    alt="Imagem"
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
            <div className="flex md:flex-1 flex-col md:gap-[40px] gap-[846px] justify-start md:w-[100%] w-[23%]">
              <Img
                src="images/img_ellipse15_1.png"
                className="h-[102px] md:h-[auto] md:ml-[0] ml-[108px] object-cover sm:w-[100%] w-[65%]"
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
          </div>
          <footer className="absolute bg-bluegray_900 bottom-[20%] flex md:flex-col flex-row gap-[32px] inset-x-[0] items-center justify-center mx-[auto] px-[120px] sm:px-[20px] md:px-[40px] py-[48px] w-[100%]">
            <div className="flex flex-col gap-[24px] items-start justify-start py-[16px] w-[auto]">
              <div className="flex items-start justify-start px-[8px] w-[auto]">
                <Img
                  src="images/img_imagebrandlogo_white_a700.svg"
                  className="h-[44px] w-[44px]"
                  alt="Imagebrandlogo"
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
        <div className="absolute bg-bluegray_900_33 flex inset-x-[0] items-center justify-end mx-[auto] p-[105px] sm:px-[20px] md:px-[40px] top-[0] w-[100%]">
          <div className="bg-white_A700 flex flex-col items-start justify-start mt-[68px] md:px-[20px] rounded-[8px] shadow-bs2 sm:w-[100%] w-[555px]">
            <div className="bg-white_A700 border-b-[1px] border-gray_300 border-solid flex items-start justify-center p-[16px] w-[100%]">
              <div className="flex items-center justify-start w-[100%]">
                <div className="flex flex-row gap-[4px] items-start justify-start sm:pr-[20px] pr-[32px] w-[100%]">
                  <div className="flex items-start justify-start w-[auto]">
                    <Text
                      className="text-bluegray_900 text-left w-[auto]"
                      as="h3"
                      variant="h3"
                    >
                      Atualizar receita
                    </Text>
                  </div>
                  <Img
                    src="images/img_close.svg"
                    className="h-[24px] w-[24px]"
                    alt="close"
                  />
                </div>
              </div>
            </div>
            <div className="border-b-[1px] border-gray_300 border-solid flex flex-col gap-[16px] items-start justify-start pb-[16px] px-[16px] w-[100%]">
              <div className="flex items-center justify-center pt-[16px] w-[100%]">
                <Text
                  className="font-normal leading-[150.00%] md:max-w-[100%] max-w-[523px] not-italic text-bluegray_800 text-left"
                  variant="body1"
                >
                  Adicione suas receitas a seguir, enviando um arquivo ou link
                  de uma receita digital
                </Text>
              </div>
              <div className="bg-white_A700 border-[1px] border-gray_300 border-solid flex flex-col items-center justify-start px-[16px] rounded-[8px] w-[100%]">
                <div className="flex h-[64px] md:h-[auto] items-start justify-center py-[12px] rounded-[8px] w-[100%]">
                  <div className="flex sm:flex-col flex-row gap-[16px] items-center justify-start w-[100%]">
                    <div className="bg-indigo_900 flex h-[24px] items-center justify-start p-[6px] rounded-[50%] w-[24px]">
                      <div className="bg-white_A700 h-[12px] rounded-[50%] w-[12px]"></div>
                    </div>
                    <div className="flex flex-1 items-start justify-start w-[100%]">
                      <div className="flex items-start justify-start w-[192px]">
                        <Text
                          className="text-bluegray_800 text-left w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Imagem ou arquivo
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border-[1px] border-gray_300 border-solid flex flex-col items-center justify-start p-[16px] rounded-[8px] w-[100%]">
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
                  <div className="flex items-center justify-center pb-[8px] pt-[16px] w-[353px]">
                    <Text
                      className="font-normal not-italic text-bluegray_800 text-center w-[auto]"
                      variant="body1"
                    >
                      <span className="text-bluegray_800 text-[14px] font-rubik">
                        Arraste até aqui ou{" "}
                      </span>
                      <span className="text-indigo_900 text-[14px] font-rubik font-semibold">
                        adicione do seu aparelho
                      </span>
                    </Text>
                  </div>
                  <div className="flex items-center justify-center sm:w-[100%] w-[406px]">
                    <Text
                      className="font-normal not-italic text-bluegray_500 text-center w-[auto]"
                      variant="body2"
                    >
                      Formatos aceitos: .png, .jpeg e .pdf
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col gap-[8px] items-start justify-start py-[16px] w-[100%]">
                  <div className="flex items-start justify-start py-[8px] w-[100%]">
                    <div className="flex items-center justify-start w-[100%]">
                      <div className="flex items-start justify-start w-[auto]">
                        <Text
                          className="font-medium text-bluegray_800 text-left w-[auto]"
                          variant="body2"
                        >
                          Itens adicionados
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="border-b-[1px] border-gray_300 border-solid h-[36px] sm:h-[68px] relative w-[100%]">
                    <div className="border-b-[1px] border-gray_300 border-solid flex-1 h-[24px] m-[auto] w-[100%]"></div>
                    <div className="absolute flex flex-1 sm:flex-col flex-row gap-[8px] h-[100%] inset-[0] items-center justify-between m-[auto] w-[100%]">
                      <Img
                        src="images/img_bookmark.svg"
                        className="h-[24px] w-[24px]"
                        alt="bookmark One"
                      />
                      <div className="h-[36px] relative sm:w-[100%] w-[94%]">
                        <div className="absolute flex h-[max-content] inset-[0] items-center justify-start m-[auto] w-[100%]">
                          <div className="flex items-start justify-start w-[100%]">
                            <Text
                              className="font-medium text-bluegray_800 text-left w-[auto]"
                              variant="body1"
                            >
                              receita2.jpeg
                            </Text>
                          </div>
                        </div>
                        <div className="absolute border-[1px] border-indigo_900 border-solid flex h-[100%] inset-y-[0] items-center justify-center my-[auto] px-[16px] py-[12px] right-[0] rounded-[18px] w-[auto]">
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
                  </div>
                </div>
              </div>
              <Input
                className="font-medium p-[0] text-[16px] placeholder:text-bluegray_800 text-bluegray_800 text-left w-[100%]"
                wrapClassName="flex md:h-[auto] sm:h-[auto] w-[100%]"
                name="PIX"
                placeholder="Link (receita digital)"
                prefix={
                  <Img
                    src="images/img_refresh_bluegray_901.svg"
                    className="my-[auto] mx-[16px]"
                    alt="refresh"
                  />
                }
                shape="RoundedBorder8"
                size="7xl"
                variant="OutlineGray300"
              ></Input>
              <div className="flex items-start justify-start w-[100%]">
                <div className="bg-indigo_900 flex h-[44px] md:h-[auto] items-center justify-center px-[16px] py-[14px] rounded-[22px] w-[290px]">
                  <div className="flex items-center justify-center w-[auto]">
                    <div className="flex items-center justify-center px-[4px] w-[auto]">
                      <Text
                        className="font-medium text-center text-light_green_A200 w-[auto]"
                        variant="body1"
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
      </div>
    </>
  );
};

export default DesktopRePillGerenciarAtualizarreceitaPage;
