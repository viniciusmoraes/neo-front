import React from "react";

import { Img, Input, Text, Line, List, CheckBox, Button } from "components";
import { CloseSVG } from "../../assets/images";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const DesktopCheckoutEntregaendereoadicionadoPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <div className="flex font-rubik items-center justify-start mx-[auto] pb-[34px] w-[100%]">
        <div className="bg-gray_50 flex items-center justify-start w-[100%]">
          <div className="flex flex-col items-start justify-start w-[100%]">
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
            <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-center max-w-[746px] md:ml-[0] ml-[310px] mt-[16px] md:px-[20px] w-[100%]">
              <div className="flex flex-1 flex-col gap-[8px] items-center justify-center p-[8px] w-[100%]">
                <Text
                  className="font-normal not-italic text-center text-indigo_900 w-[auto]"
                  variant="body2"
                >
                  Receita
                </Text>
                <div className="h-[16px] relative w-[60%]">
                  <Line className="absolute bg-indigo_900 bottom-[31%] h-[2px] right-[0] w-[94%]" />
                  <Img
                    src="images/img_checkmark_indigo_900.svg"
                    className="absolute h-[16px] inset-y-[0] left-[0] my-[auto] w-[16px]"
                    alt="checkmark"
                  />
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-[8px] items-center justify-center p-[8px] w-[100%]">
                <Text
                  className="font-normal not-italic text-center text-indigo_900 w-[auto]"
                  variant="body2"
                >
                  Entrega
                </Text>
                <div className="h-[16px] relative w-[100%]">
                  <div className="absolute bottom-[31%] flex inset-x-[0] items-center justify-start mx-[auto] w-[100%]">
                    <div className="flex flex-row items-center justify-evenly w-[100%]">
                      <Line className="bg-indigo_900 h-[2px] w-[50%]" />
                      <Line className="bg-gray_500 h-[2px] w-[50%]" />
                    </div>
                  </div>
                  <div className="absolute bg-white_A700 border-[1px] border-indigo_900 border-solid flex h-[100%] inset-[0] items-center justify-center m-[auto] p-[5px] rounded-[50%] w-[16px]">
                    <div className="bg-indigo_900 h-[6px] rounded-[50%] w-[6px]"></div>
                  </div>
                </div>
              </div>
              <List
                className="md:flex-1 sm:flex-col flex-row gap-[1px] grid grid-cols-2 md:w-[100%] w-[50%]"
                orientation="horizontal"
              >
                <div className="flex flex-col gap-[8px] items-center justify-center p-[8px] w-[100%]">
                  <Text
                    className="font-normal not-italic text-bluegray_800 text-center w-[auto]"
                    variant="body2"
                  >
                    Pagamento
                  </Text>
                  <div className="h-[16px] relative w-[100%]">
                    <Line className="absolute bg-gray_500 bottom-[31%] h-[2px] inset-x-[0] mx-[auto] w-[100%]" />
                    <Img
                      src="images/img_save.svg"
                      className="absolute h-[16px] inset-[0] justify-center m-[auto] w-[16px]"
                      alt="save"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-[8px] items-center justify-center p-[8px] w-[100%]">
                  <Text
                    className="font-normal not-italic text-bluegray_800 text-center w-[auto]"
                    variant="body2"
                  >
                    Conclusão
                  </Text>
                  <div className="h-[16px] relative w-[60%]">
                    <Line className="absolute bg-gray_500 bottom-[31%] h-[2px] left-[0] w-[96%]" />
                    <Img
                      src="images/img_save.svg"
                      className="absolute h-[16px] inset-y-[0] my-[auto] right-[0] w-[16px]"
                      alt="save One"
                    />
                  </div>
                </div>
              </List>
            </div>
            <div className="flex items-start justify-start md:ml-[0] ml-[310px] mt-[16px] pb-[4px] md:px-[20px] w-[221px]">
              <Text
                className="not-italic text-bluegray_800 text-left w-[auto]"
                as="h2"
                variant="h2"
              >
                Entrega
              </Text>
            </div>
            <div className="md:h-[238px] h-[279px] max-w-[890px] mt-[16px] mx-[auto] md:px-[20px] relative w-[100%]">
              <div className="absolute bottom-[0] flex flex-col gap-[20px] inset-x-[0] justify-start mx-[auto] w-[100%]">
                <Img
                  src="images/img_grupo1.svg"
                  className="h-[98px] mr-[790px] w-[auto]"
                  alt="GrupoOne"
                />
                <Img
                  src="images/img_grupo1.svg"
                  className="h-[98px] md:ml-[0] ml-[790px] w-[auto]"
                  alt="GrupoTwo"
                />
              </div>
              <div className="absolute bottom-[3%] flex items-center justify-center left-[11%] py-[12px] sm:w-[100%] w-[328px]">
                <CheckBox
                  className="font-normal not-italic text-[14px] text-bluegray_800 text-left"
                  inputClassName="h-[24px] mr-[5px] w-[24px]"
                  label="Usar mesmo endereço para cobrança"
                  name="TextStyle"
                  shape="RoundedBorder4"
                  size="sm"
                  variant="FillIndigo900"
                ></CheckBox>
              </div>
              <div className="absolute bg-white_A700 flex flex-col gap-[16px] items-end justify-start max-w-[746px] p-[16px] right-[6%] rounded-[8px] shadow-bs top-[0] w-[100%]">
                <div className="flex items-start justify-start pb-[16px] pt-[8px] w-[100%]">
                  <Text
                    className="text-bluegray_900 text-left w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    Endereços
                  </Text>
                </div>
                <div className="border-[1px] border-gray_300 border-solid flex items-start justify-center px-[16px] py-[12px] rounded-[8px] w-[100%]">
                  <div className="flex md:flex-col flex-row gap-[16px] items-center justify-start w-[100%]">
                    <div className="bg-indigo_900 flex h-[24px] items-center justify-start p-[6px] rounded-[50%] w-[24px]">
                      <div className="bg-white_A700 h-[12px] rounded-[50%] w-[12px]"></div>
                    </div>
                    <div className="flex flex-1 flex-col items-start justify-start w-[100%]">
                      <div className="flex md:flex-col flex-row gap-[16px] items-start justify-start w-[100%]">
                        <div className="flex flex-1 items-start justify-start pb-[8px] w-[100%]">
                          <Text
                            className="font-medium text-bluegray_800 text-left w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            Av. Doutor Arnaldo, 2194
                          </Text>
                        </div>
                        <div className="bg-light_green_A200 flex items-center justify-center px-[8px] py-[4px] rounded-[4px] w-[auto]">
                          <div className="flex h-[21px] md:h-[auto] items-center justify-center w-[auto]">
                            <Text
                              className="font-medium text-center text-indigo_900 w-[auto]"
                              variant="body2"
                            >
                              Principal
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center justify-center w-[auto]">
                        <Text
                          className="font-normal not-italic text-bluegray_500 text-left w-[auto]"
                          variant="body2"
                        >
                          CEP 01255-000, Casa, Perdizes, São Paulo/SP
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <Button
                  className="flex items-center justify-center min-w-[165px] text-center w-[auto]"
                  leftIcon={
                    <Img
                      src="images/img_close.svg"
                      className="mr-[4px] text-center"
                      alt="close"
                    />
                  }
                  shape="CircleBorder18"
                >
                  <div className="bg-transparent cursor-pointer font-medium text-[12px] text-indigo_900 text-left">
                    Adicionar endereço
                  </div>
                </Button>
              </div>
            </div>
            <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-start mt-[6px] md:px-[20px] md:w-[100%] w-[92%]">
              <div className="h-[398px] md:mt-[0] mt-[75px] relative md:w-[100%] w-[20%]">
                <Img
                  src="images/img_ellipse15_398x250.png"
                  className="h-[398px] m-[auto] object-cover w-[100%]"
                  alt="EllipseFifteen"
                />
                <Img
                  src="images/img_grupo40.svg"
                  className="absolute h-[116px] right-[5%] top-[17%] w-[auto]"
                  alt="GrupoForty"
                />
              </div>
              <div className="flex flex-col items-start justify-start md:ml-[0] ml-[60px] md:w-[100%] w-[60%]">
                <div className="flex items-start justify-start pb-[16px] pt-[8px] w-[auto]">
                  <Text
                    className="text-bluegray_900 text-left w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    Agendamento da entrega
                  </Text>
                </div>
                <div className="flex flex-col gap-[16px] items-start justify-start w-[100%]">
                  <div className="flex items-center justify-center pt-[8px] sm:w-[100%] w-[555px]">
                    <Text
                      className="font-normal not-italic text-bluegray_800 text-left w-[auto]"
                      variant="body1"
                    >
                      Você precisa selecionar um endereço para ver as opções.
                    </Text>
                  </div>
                  <div className="bg-white_A700 flex h-[72px] md:h-[auto] items-start justify-center max-w-[746px] px-[16px] py-[12px] rounded-[8px] shadow-bs w-[100%]">
                    <div className="flex md:flex-col flex-row gap-[16px] items-center justify-start w-[100%]">
                      <Img
                        src="images/img_refresh_bluegray_901.svg"
                        className="h-[24px] w-[24px]"
                        alt="refresh"
                      />
                      <div className="flex flex-1 flex-col items-start justify-center w-[100%]">
                        <div className="flex md:flex-col flex-row gap-[16px] items-center justify-start w-[100%]">
                          <div className="flex flex-1 items-start justify-start pb-[8px] w-[100%]">
                            <Text
                              className="font-medium text-bluegray_800 text-left w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              Expressa
                            </Text>
                          </div>
                          <div className="flex items-start justify-start w-[auto]">
                            <Text
                              className="font-semibold text-bluegray_800 text-left w-[auto]"
                              variant="body1"
                            >
                              <span className="text-bluegray_500 text-[14px] font-rubik font-medium line-through">
                                R$ 7,00
                              </span>
                              <span className="text-bluegray_800 text-[14px] font-rubik">
                                {" "}
                              </span>
                              <span className="text-bluegray_800 text-[14px] font-rubik font-normal not-italic">
                                Grátis
                              </span>
                            </Text>
                          </div>
                        </div>
                        <div className="flex items-center justify-center w-[auto]">
                          <Text
                            className="font-normal not-italic text-bluegray_500 text-left w-[auto]"
                            variant="body2"
                          >
                            2 dias úteis
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-[16px] items-center justify-start mt-[16px] w-[100%]">
                  <div className="bg-white_A700 flex flex-col items-center justify-start max-w-[746px] pb-[16px] px-[16px] rounded-[8px] shadow-bs w-[100%]">
                    <div className="flex items-start justify-center py-[12px] rounded-[8px] w-[100%]">
                      <div className="flex md:flex-col flex-row gap-[16px] items-center justify-start w-[100%]">
                        <div className="bg-indigo_900 flex h-[24px] items-center justify-start p-[6px] rounded-[50%] w-[24px]">
                          <div className="bg-white_A700 h-[12px] rounded-[50%] w-[12px]"></div>
                        </div>
                        <div className="flex flex-1 items-start justify-center w-[100%]">
                          <div className="flex md:flex-col flex-row gap-[16px] items-center justify-start w-[100%]">
                            <div className="flex flex-1 items-start justify-start w-[100%]">
                              <Text
                                className="font-medium text-bluegray_800 text-left w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                Agendada
                              </Text>
                            </div>
                            <div className="flex items-start justify-start w-[auto]">
                              <Text
                                className="font-semibold text-bluegray_800 text-left w-[auto]"
                                variant="body1"
                              >
                                Grátis
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
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
                  <div className="bg-white_A700 flex h-[72px] md:h-[auto] items-start justify-center max-w-[746px] px-[16px] py-[12px] rounded-[8px] shadow-bs w-[100%]">
                    <div className="flex md:flex-col flex-row gap-[16px] items-center justify-start w-[100%]">
                      <Img
                        src="images/img_settings.svg"
                        className="h-[24px] w-[24px]"
                        alt="settings"
                      />
                      <div className="flex flex-1 flex-col items-start justify-center w-[100%]">
                        <div className="flex md:flex-col flex-row gap-[16px] items-center justify-start w-[100%]">
                          <div className="flex flex-1 items-start justify-start pb-[8px] w-[100%]">
                            <Text
                              className="font-medium text-gray_500 text-left w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              Receber com outra RePill
                            </Text>
                          </div>
                          <div className="flex items-start justify-start w-[auto]">
                            <Text
                              className="font-semibold text-gray_500 text-left w-[auto]"
                              variant="body1"
                            >
                              Grátis
                            </Text>
                          </div>
                        </div>
                        <div className="flex items-center justify-center w-[auto]">
                          <Text
                            className="font-normal not-italic text-gray_500 text-left w-[auto]"
                            variant="body2"
                          >
                            Envio em outra compra recorrente
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray_500 flex h-[44px] md:h-[auto] items-center justify-center md:ml-[0] ml-[239px] mt-[32px] px-[16px] py-[14px] rounded-[22px] w-[269px]">
                  <div className="flex items-center justify-start w-[auto]">
                    <div className="flex items-center justify-center px-[4px] w-[auto]">
                      <Text
                        className="font-medium text-gray_100 text-left w-[auto]"
                        variant="body1"
                      >
                        Ir para Pagamento
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <Img
                src="images/img_grupo40.svg"
                className="h-[116px] md:ml-[0] ml-[88px] md:mt-[0] mt-[572px] w-[auto]"
                alt="GrupoForty One"
              />
            </div>
            <div className="bg-bluegray_900 flex md:flex-col flex-row gap-[32px] items-start justify-start max-w-[1366px] mt-[39px] px-[120px] sm:px-[20px] md:px-[40px] py-[48px] w-[100%]">
              <div className="flex items-start justify-start py-[16px] w-[auto]">
                <div className="flex items-start justify-start px-[8px] w-[auto]">
                  <Img
                    src="images/img_imagebrandlogo_white_a700.svg"
                    className="h-[44px] w-[44px]"
                    alt="Imagebrandlogo One"
                  />
                </div>
              </div>
              <div className="flex flex-1 items-start justify-start w-[100%]">
                <div className="flex items-start justify-start w-[100%]">
                  <div className="md:h-[56px] h-[76px] pb-[8px] pt-[16px] px-[8px] relative w-[100%]">
                    <Text
                      className="absolute bottom-[0] font-normal inset-x-[0] leading-[150.00%] mx-[auto] not-italic text-gray_500 text-left"
                      variant="body2"
                    >
                      Farmacêutica Responsável: Natália Rodrigues D&#39;Agostino
                      <br />
                      CRF/SP: 94516 • CMVS: 355030801-477-012535-1-4
                      <br />
                      AFE: 7.82.784-8
                    </Text>
                    <div className="absolute bg-teal_800 flex md:h-[auto] h-[max-content] inset-y-[0] items-center justify-center my-[auto] px-[16px] py-[14px] right-[0] rounded-[28px] shadow-bs2 w-[auto]">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DesktopCheckoutEntregaendereoadicionadoPage;
