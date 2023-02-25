import React from "react";

import { Img, Text, Line, List, Input, SelectBox, CheckBox } from "components";
import { CloseSVG } from "../../assets/images";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const DesktopCheckoutEntregaformscompletoPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray_50 flex font-rubik items-center justify-start mx-[auto] w-[100%]">
        <div className="bg-gray_50 md:h-[825px] h-[887px] md:px-[20px] relative w-[100%]">
          <div className="absolute bottom-[0] flex flex-col inset-x-[0] justify-start mx-[auto] w-[100%]">
            <Img
              src="images/img_grupo1.svg"
              className="h-[98px] md:ml-[0] ml-[215px] w-[auto]"
              alt="GrupoOne"
            />
            <Img
              src="images/img_grupo1.svg"
              className="h-[98px] md:ml-[0] ml-[1005px] mt-[19px] w-[auto]"
              alt="GrupoTwo"
            />
            <div className="flex mt-[81px] relative w-[100%]">
              <div className="h-[312px] my-[auto] w-[19%]">
                <Img
                  src="images/img_ellipse15_312x250.png"
                  className="h-[312px] m-[auto] object-cover w-[100%]"
                  alt="EllipseFifteen"
                />
                <Img
                  src="images/img_grupo40.svg"
                  className="absolute h-[116px] right-[5%] top-[21%] w-[auto]"
                  alt="GrupoForty"
                />
              </div>
              <div className="bg-bluegray_900 flex md:flex-col flex-row gap-[32px] items-start justify-start max-w-[1366px] ml-[-250px] mr-[auto] mt-[auto] px-[120px] sm:px-[20px] md:px-[40px] py-[48px] w-[100%] z-[1]">
                <div className="flex items-start justify-start py-[16px] w-[auto]">
                  <div className="flex items-start justify-start px-[8px] w-[auto]">
                    <Img
                      src="images/img_imagebrandlogo_white_a700.svg"
                      className="h-[44px] w-[44px]"
                      alt="Imagebrandlogo"
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
                        Farmacêutica Responsável: Natália Rodrigues
                        D&#39;Agostino
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
          <div className="absolute flex flex-col gap-[16px] inset-x-[0] items-start justify-start mx-[auto] top-[10%] w-[55%]">
            <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-center max-w-[746px] w-[100%]">
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
            <div className="flex items-start justify-start pb-[4px] w-[221px]">
              <Text
                className="not-italic text-bluegray_800 text-left w-[auto]"
                as="h2"
                variant="h2"
              >
                Entrega
              </Text>
            </div>
          </div>
          <div className="absolute bottom-[42%] flex items-center justify-start left-[23%] pb-[16px] pt-[8px] w-[auto]">
            <Text
              className="text-bluegray_900 text-left w-[auto]"
              as="h3"
              variant="h3"
            >
              Agendamento da entrega
            </Text>
          </div>
          <div className="absolute bg-white_A700 flex flex-col gap-[16px] inset-x-[0] items-center justify-center max-w-[745px] mx-[auto] px-[16px] py-[24px] rounded-[8px] shadow-bs top-[24%] w-[100%]">
            <div className="h-[174px] relative w-[174px]">
              <Img
                src="images/img_imagepicture.svg"
                className="h-[48px] m-[auto] w-[48px]"
                alt="bookmark"
              />
              <Img
                src="images/img_imagem_30.png"
                className="absolute h-[174px] inset-[0] justify-center m-[auto] object-cover w-[174px]"
                alt="Imagem"
              />
            </div>
            <div className="flex items-start justify-start w-[auto]">
              <Text
                className="font-medium text-bluegray_800 text-left w-[auto]"
                as="h5"
                variant="h5"
              >
                Não há nada aqui ainda
              </Text>
            </div>
            <Text
              className="font-normal not-italic text-bluegray_500 text-center w-[auto]"
              variant="body2"
            >
              Você ainda não possui endereços cadastrados.
            </Text>
            <div className="border-[1px] border-indigo_900 border-solid flex h-[36px] md:h-[auto] items-center justify-center px-[16px] py-[14px] rounded-[18px] w-[auto]">
              <div className="flex flex-row gap-[4px] items-center justify-start w-[auto]">
                <Img
                  src="images/img_close.svg"
                  className="h-[16px] w-[16px]"
                  alt="close"
                />
                <div className="flex items-center justify-center w-[auto]">
                  <Text
                    className="font-medium text-indigo_900 text-left w-[auto]"
                    variant="body2"
                  >
                    Adicionar endereço
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-[18%] flex flex-col gap-[32px] justify-start left-[23%] w-[41%]">
            <div className="flex flex-col items-start justify-start w-[100%]">
              <div className="flex items-start justify-start pb-[16px] pt-[8px] w-[auto]">
                <Text
                  className="text-bluegray_900 text-left w-[auto]"
                  as="h3"
                  variant="h3"
                >
                  Agendamento da entrega
                </Text>
              </div>
              <div className="flex items-center justify-center mt-[2px] pt-[8px] sm:w-[100%] w-[555px]">
                <Text
                  className="font-normal not-italic text-bluegray_800 text-left w-[auto]"
                  variant="body1"
                >
                  Você precisa selecionar um endereço para ver as opções.
                </Text>
              </div>
            </div>
            <div className="bg-gray_500 flex h-[44px] md:h-[auto] items-center justify-center md:ml-[0] ml-[239px] mr-[47px] px-[16px] py-[14px] rounded-[22px] w-[269px]">
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
          <header className="absolute bg-gray_50 flex md:flex-col flex-row gap-[32px] inset-x-[0] items-center justify-center mx-[auto] px-[120px] sm:px-[20px] md:px-[40px] py-[8px] shadow-bs top-[0] w-[100%]">
            <div className="flex sm:flex-1 sm:flex-col flex-row gap-[36px] items-center justify-start sm:w-[100%] w-[auto]">
              <Img
                src="images/img_imagebrandlogo.svg"
                className="h-[60px] w-[60px]"
                alt="Imagebrandlogo One"
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
          <div className="absolute bg-bluegray_900_33 flex inset-x-[0] items-center justify-end mx-[auto] p-[132px] sm:px-[20px] md:px-[40px] top-[0] w-[100%]">
            <div className="bg-white_A700 flex flex-col items-start justify-start rounded-[8px] shadow-bs2 sm:w-[100%] w-[555px]">
              <div className="bg-white_A700 border-b-[1px] border-gray_300 border-solid flex items-start justify-center p-[16px] w-[100%]">
                <div className="flex items-center justify-start w-[100%]">
                  <div className="flex flex-row gap-[4px] items-start justify-start sm:pr-[20px] pr-[32px] w-[100%]">
                    <div className="flex items-start justify-start w-[auto]">
                      <Text
                        className="text-bluegray_900 text-left w-[auto]"
                        as="h3"
                        variant="h3"
                      >
                        Novo endereço
                      </Text>
                    </div>
                    <Img
                      src="images/img_close.svg"
                      className="h-[24px] w-[24px]"
                      alt="close One"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-[8px] items-start justify-start px-[16px] py-[12px] w-[320px]">
                <div className="flex items-center justify-start w-[304px]">
                  <div className="flex items-start justify-start w-[auto]">
                    <Text
                      className="font-medium text-bluegray_800 text-left w-[auto]"
                      variant="body2"
                    >
                      CEP
                    </Text>
                  </div>
                </div>
                <Input
                  className="font-normal md:h-[auto] not-italic p-[0] text-[14px] placeholder:text-bluegray_800 text-bluegray_800 text-left w-[100%]"
                  wrapClassName="flex sm:w-[100%] w-[88%]"
                  name="FormsFieldoutlinedefault One"
                  placeholder="01255-000"
                  suffix={
                    <Img
                      src="images/img_checkmark_green_400.svg"
                      className="ml-[35px] mr-[12px] my-[auto]"
                      alt="checkmark"
                    />
                  }
                  shape="RoundedBorder8"
                  size="3xl"
                  variant="OutlineGray300"
                ></Input>
                <div className="flex items-center justify-start w-[100%]">
                  <div className="flex items-start justify-start w-[auto]">
                    <Text
                      className="font-medium text-indigo_900 text-left tracking-[-0.54px] w-[auto]"
                      variant="body2"
                    >
                      Não sei o CEP
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex sm:flex-col flex-row gap-[16px] items-start justify-start px-[16px] w-[100%]">
                <div className="flex flex-1 flex-col gap-[8px] items-start justify-start py-[12px] w-[100%]">
                  <div className="flex items-center justify-start w-[auto]">
                    <div className="flex items-start justify-start w-[auto]">
                      <Text
                        className="font-medium text-bluegray_800 text-left w-[auto]"
                        variant="body2"
                      >
                        Endereço
                      </Text>
                    </div>
                  </div>
                  <div className="bg-white_A700 border-[1px] border-gray_300 border-solid h-[48px] p-[12px] relative rounded-[8px] w-[100%]">
                    <div className="absolute bg-white_A700 border-[1px] border-gray_300 border-solid flex-1 h-[48px] inset-y-[0] left-[0] my-[auto] p-[12px] rounded-[8px] w-[94%]"></div>
                    <div className="absolute flex flex-1 h-[max-content] inset-y-[0] items-center justify-start my-[auto] right-[0] w-[100%]">
                      <div className="flex items-center justify-start px-[4px] w-[100%]">
                        <Text
                          className="font-normal not-italic text-bluegray_800 text-left w-[auto]"
                          variant="body1"
                        >
                          Av. Doutor Arnaldo
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-[8px] items-start justify-start py-[12px] w-[100%]">
                  <div className="flex items-center justify-start w-[100%]">
                    <div className="flex items-start justify-start w-[auto]">
                      <Text
                        className="font-medium text-bluegray_800 text-left w-[auto]"
                        variant="body2"
                      >
                        Número
                      </Text>
                    </div>
                  </div>
                  <Input
                    className="font-normal not-italic p-[0] text-[14px] placeholder:text-bluegray_800 text-bluegray_800 text-left w-[100%]"
                    wrapClassName="md:h-[auto] sm:h-[auto] w-[100%]"
                    name="zipcode"
                    placeholder="2194"
                    shape="RoundedBorder8"
                    size="xl"
                    variant="OutlineGray300"
                  ></Input>
                </div>
              </div>
              <div className="flex sm:flex-col flex-row gap-[16px] items-start justify-start px-[16px] w-[100%]">
                <div className="flex flex-1 flex-col gap-[8px] items-start justify-start py-[12px] w-[100%]">
                  <div className="flex items-center justify-start w-[auto]">
                    <div className="flex items-start justify-start w-[auto]">
                      <Text
                        className="font-medium text-bluegray_800 text-left w-[auto]"
                        variant="body2"
                      >
                        Complemento
                      </Text>
                    </div>
                  </div>
                  <Input
                    className="font-normal not-italic p-[0] text-[14px] placeholder:text-bluegray_800 text-bluegray_800 text-left w-[100%]"
                    wrapClassName="md:h-[auto] sm:h-[auto] w-[100%]"
                    name="FormsFieldoutlinedefault Two"
                    placeholder="Casa"
                    shape="RoundedBorder8"
                    size="xl"
                    variant="OutlineGray300"
                  ></Input>
                </div>
                <div className="flex flex-1 flex-col gap-[8px] items-start justify-start py-[12px] w-[100%]">
                  <div className="flex items-center justify-start w-[100%]">
                    <div className="flex items-start justify-start w-[auto]">
                      <Text
                        className="font-medium text-bluegray_800 text-left w-[auto]"
                        variant="body2"
                      >
                        Bairro
                      </Text>
                    </div>
                  </div>
                  <Input
                    className="font-normal not-italic p-[0] text-[14px] placeholder:text-bluegray_800 text-bluegray_800 text-left w-[100%]"
                    wrapClassName="md:h-[auto] sm:h-[auto] w-[100%]"
                    name="FormsFieldoutlinedefault Three"
                    placeholder="Perdizes"
                    shape="RoundedBorder8"
                    size="xl"
                    variant="OutlineGray300"
                  ></Input>
                </div>
              </div>
              <div className="flex sm:flex-col flex-row gap-[16px] items-start justify-start px-[16px] w-[100%]">
                <div className="flex flex-col gap-[8px] items-start justify-start py-[12px] w-[253px]">
                  <div className="flex items-center justify-start w-[100%]">
                    <div className="flex items-start justify-start w-[auto]">
                      <Text
                        className="font-medium text-bluegray_800 text-left w-[auto]"
                        variant="body2"
                      >
                        Cidade
                      </Text>
                    </div>
                  </div>
                  <Input
                    className="font-normal not-italic p-[0] text-[14px] placeholder:text-bluegray_800 text-bluegray_800 text-left w-[100%]"
                    wrapClassName="md:h-[auto] sm:h-[auto] w-[100%]"
                    name="FormsFieldoutlinedefault Four"
                    placeholder="São Paulo"
                    shape="RoundedBorder8"
                    size="xl"
                    variant="OutlineGray300"
                  ></Input>
                </div>
                <div className="flex flex-col gap-[8px] items-start justify-start py-[12px] w-[118px]">
                  <div className="flex items-center justify-start w-[auto]">
                    <div className="flex items-start justify-start w-[auto]">
                      <Text
                        className="font-medium text-bluegray_800 text-left w-[auto]"
                        variant="body2"
                      >
                        UF
                      </Text>
                    </div>
                  </div>
                  <SelectBox
                    className="font-normal h-[48px] not-italic pr-[12px] text-[14px] text-bluegray_800 text-left w-[100%]"
                    placeholderClassName="text-bluegray_800"
                    name="FormsFieldoutlinedefault Five"
                    placeholder="SP"
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
              <div className="flex items-start justify-center px-[16px] py-[12px] w-[100%]">
                <CheckBox
                  className="font-normal not-italic text-[14px] text-bluegray_800 text-left"
                  inputClassName="h-[24px] mr-[5px] w-[24px]"
                  label="Definir como principal"
                  name="TextStyle One"
                  shape="RoundedBorder4"
                  size="sm"
                  variant="FillIndigo900"
                ></CheckBox>
              </div>
              <div className="flex items-start justify-end px-[16px] py-[12px] w-[100%]">
                <div className="bg-indigo_900 flex h-[36px] md:h-[auto] items-center justify-center px-[16px] py-[14px] rounded-[18px] w-[auto]">
                  <div className="flex items-center justify-center w-[auto]">
                    <div className="flex items-center justify-center w-[auto]">
                      <Text
                        className="font-medium text-left text-light_green_A200 w-[auto]"
                        variant="body2"
                      >
                        Adicionar
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

export default DesktopCheckoutEntregaformscompletoPage;
