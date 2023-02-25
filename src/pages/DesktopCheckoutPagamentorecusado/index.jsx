import React from "react";

import { Img, Input, Text, Line, List } from "components";
import { CloseSVG } from "../../assets/images";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const DesktopCheckoutPagamentorecusadoPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray_50 flex font-rubik items-center justify-start mx-[auto] w-[100%]">
        <div className="flex flex-col items-center justify-start w-[100%]">
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
          <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-center max-w-[746px] mt-[16px] md:px-[20px] w-[100%]">
            <List
              className="md:flex-1 sm:flex-col flex-row gap-[1px] grid sm:grid-cols-1 grid-cols-3 md:w-[100%] w-[75%]"
              orientation="horizontal"
            >
              <div className="flex flex-col gap-[8px] items-center justify-center p-[8px] w-[100%]">
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
              <div className="flex flex-col gap-[8px] items-center justify-center p-[8px] w-[100%]">
                <Text
                  className="font-normal not-italic text-center text-indigo_900 w-[auto]"
                  variant="body2"
                >
                  Entrega
                </Text>
                <div className="h-[16px] relative w-[100%]">
                  <Line className="absolute bg-indigo_900 bottom-[31%] h-[2px] inset-x-[0] mx-[auto] w-[100%]" />
                  <Img
                    src="images/img_checkmark_indigo_900.svg"
                    className="absolute h-[16px] inset-[0] justify-center m-[auto] w-[16px]"
                    alt="checkmark One"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-[8px] items-center justify-center p-[8px] w-[100%]">
                <Text
                  className="font-normal not-italic text-center text-indigo_900 w-[auto]"
                  variant="body2"
                >
                  Pagamento
                </Text>
                <div className="h-[16px] relative w-[100%]">
                  <Line className="absolute bg-indigo_900 bottom-[31%] h-[2px] inset-x-[0] mx-[auto] w-[100%]" />
                  <Img
                    src="images/img_checkmark_indigo_900.svg"
                    className="absolute h-[16px] inset-[0] justify-center m-[auto] w-[16px]"
                    alt="checkmark Two"
                  />
                </div>
              </div>
            </List>
            <div className="flex flex-1 flex-col gap-[8px] items-center justify-center p-[8px] w-[100%]">
              <Text
                className="font-normal not-italic text-center text-indigo_900 w-[auto]"
                variant="body2"
              >
                Conclusão
              </Text>
              <div className="h-[16px] relative w-[60%]">
                <Line className="absolute bg-indigo_900 bottom-[31%] h-[2px] left-[0] w-[89%]" />
                <div className="absolute bg-white_A700 border-[1px] border-indigo_900 border-solid flex h-[100%] inset-y-[0] items-center justify-start my-[auto] p-[5px] right-[0] rounded-[50%] w-[16px]">
                  <div className="bg-indigo_900 h-[6px] rounded-[50%] w-[6px]"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex md:flex-col flex-row gap-[16px] items-center justify-center max-w-[936px] mt-[16px] mx-[auto] md:px-[20px] w-[100%]">
            <div className="bg-white_A700 flex sm:flex-1 flex-col gap-[16px] h-[370px] md:h-[auto] items-center justify-center pt-[24px] rounded-[8px] shadow-bs sm:w-[100%] w-[555px]">
              <div className="h-[174px] relative w-[174px]">
                <Img
                  src="images/img_imagepicture.svg"
                  className="h-[48px] m-[auto] w-[48px]"
                  alt="bookmark"
                />
                <Img
                  src="images/img_imagem_33.png"
                  className="absolute h-[174px] inset-[0] justify-center m-[auto] object-cover w-[174px]"
                  alt="Imagem"
                />
              </div>
              <Text
                className="font-medium text-bluegray_800 text-center w-[auto]"
                as="h5"
                variant="h5"
              >
                Houve um problema no seu pagamento
              </Text>
              <Text
                className="font-normal leading-[150.00%] md:max-w-[100%] max-w-[523px] not-italic text-bluegray_500 text-center"
                variant="body2"
              >
                Tentamos fazer uma cobrança no seu cartão final 7789, mas algo
                deu errado. Por favor, tente novamente ou escolha um novo cartão{" "}
              </Text>
              <Input
                className="font-medium p-[0] text-[14px] text-left placeholder:text-light_green_A200 text-light_green_A200 w-[100%]"
                wrapClassName="md:h-[auto] sm:h-[auto] w-[auto]"
                name="Button"
                placeholder="Voltar para Pagamento"
                shape="CircleBorder22"
                size="md"
                variant="FillIndigo900"
              ></Input>
            </div>
            <div className="flex md:flex-1 flex-col gap-[16px] items-center justify-start md:w-[100%] w-[39%]">
              <div className="flex items-end justify-start rounded-[8px] shadow-bs w-[365px]">
                <div className="bg-indigo_900 flex flex-row gap-[8px] items-center justify-start p-[16px] rounded-[8px] w-[100%]">
                  <div className="flex flex-1 items-start justify-start w-[100%]">
                    <Text
                      className="text-left text-light_green_A200 w-[auto]"
                      as="h3"
                      variant="h3"
                    >
                      Itens do pedido
                    </Text>
                  </div>
                  <Img
                    src="images/img_arrowup.svg"
                    className="h-[24px] w-[24px]"
                    alt="arrowdown"
                  />
                </div>
              </div>
              <div className="bg-white_A700 flex flex-col items-start justify-start pt-[8px] rounded-[8px] shadow-bs w-[365px]">
                <div className="flex flex-row items-start justify-between px-[16px] w-[100%]">
                  <div className="flex items-start justify-start pb-[16px] pt-[8px] w-[auto]">
                    <Text
                      className="text-bluegray_900 text-left w-[auto]"
                      as="h3"
                      variant="h3"
                    >
                      Detalhes
                    </Text>
                  </div>
                  <div className="flex h-[44px] md:h-[auto] items-center justify-center rounded-[22px] w-[auto]">
                    <div className="flex h-[40px] md:h-[auto] items-center justify-start py-[8px] w-[auto]">
                      <div className="flex items-center justify-center w-[auto]">
                        <Text
                          className="font-medium text-indigo_900 text-left w-[auto]"
                          variant="body1"
                        >
                          Acompanhar{" "}
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <Img
                  src="images/img_miscdivider.svg"
                  className="h-[1px] w-[100%]"
                  alt="Miscdivider"
                />
                <div className="flex flex-row items-start justify-start p-[16px] w-[100%]">
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
                <div className="bg-white_A700 flex items-start justify-center p-[16px] w-[100%]">
                  <div className="flex flex-row gap-[16px] items-center justify-start w-[100%]">
                    <div className="flex flex-1 items-start justify-start w-[100%]">
                      <div className="flex items-start justify-start w-[auto]">
                        <Text
                          className="font-normal not-italic text-bluegray_800 text-left w-[auto]"
                          variant="body1"
                        >
                          Status
                        </Text>
                      </div>
                    </div>
                    <div className="flex items-start justify-start w-[auto]">
                      <Text
                        className="font-semibold text-left text-red_900 w-[auto]"
                        variant="body1"
                      >
                        Recusado
                      </Text>
                    </div>
                  </div>
                </div>
                <List
                  className="flex-col gap-[1px] grid items-center w-[100%]"
                  orientation="vertical"
                >
                  <div className="bg-white_A700 flex flex-1 items-start justify-start p-[16px] w-[100%]">
                    <div className="flex flex-row gap-[16px] items-start justify-start w-[100%]">
                      <div className="flex flex-1 items-start justify-start w-[100%]">
                        <div className="flex items-start justify-start w-[auto]">
                          <Text
                            className="font-normal not-italic text-bluegray_800 text-left w-[auto]"
                            variant="body1"
                          >
                            Entrega
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-1 items-start justify-start w-[100%]">
                        <Text
                          className="font-semibold leading-[150.00%] md:max-w-[100%] max-w-[158px] text-bluegray_800 text-right"
                          variant="body1"
                        >
                          Agendada (2 dias úteis)
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white_A700 flex flex-1 items-start justify-center p-[16px] w-[100%]">
                    <div className="flex flex-row gap-[16px] items-center justify-start w-[100%]">
                      <div className="flex flex-1 items-start justify-start w-[100%]">
                        <div className="flex items-start justify-start w-[auto]">
                          <Text
                            className="font-normal not-italic text-bluegray_800 text-left w-[auto]"
                            variant="body1"
                          >
                            Pagamento
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-1 items-start justify-end w-[100%]">
                        <Text
                          className="font-semibold text-bluegray_800 text-left w-[auto]"
                          variant="body1"
                        >
                          Cartão de crédito, 1x
                        </Text>
                      </div>
                    </div>
                  </div>
                </List>
              </div>
            </div>
          </div>
          <div className="flex h-[44px] md:h-[auto] items-center justify-center mt-[16px] md:px-[20px] rounded-[22px] w-[328px]">
            <div className="flex flex-row gap-[4px] h-[40px] md:h-[auto] items-center justify-start p-[8px] w-[auto]">
              <div className="flex items-center justify-center px-[4px] w-[auto]">
                <Text
                  className="font-medium text-indigo_900 text-left w-[auto]"
                  variant="body1"
                >
                  Ir para a página inicial
                </Text>
              </div>
              <Img
                src="images/img_arrowright_indigo_900.svg"
                className="h-[24px] w-[24px]"
                alt="arrowright"
              />
            </div>
          </div>
          <footer className="bg-bluegray_900 flex md:flex-col flex-row gap-[32px] items-center justify-center mt-[32px] px-[120px] md:px-[20px] py-[48px] w-[100%]">
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
                <div className="md:h-[56px] h-[78px] pb-[8px] pt-[16px] px-[8px] relative w-[100%]">
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
          </footer>
        </div>
      </div>
    </>
  );
};

export default DesktopCheckoutPagamentorecusadoPage;
