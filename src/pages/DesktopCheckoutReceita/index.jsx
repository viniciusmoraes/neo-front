import React from "react";

import { Img, Input, Text, Line, List, SelectBox } from "components";
import { CloseSVG } from "../../assets/images";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const DesktopCheckoutReceitaPage = () => {
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
          <div className="flex md:flex-col flex-row md:gap-[20px] h-[52px] md:h-[auto] items-start justify-center max-w-[746px] mt-[16px] md:px-[20px] w-[100%]">
            <div className="flex flex-1 flex-col gap-[8px] items-center justify-center p-[8px] w-[100%]">
              <Text
                className="font-normal not-italic text-bluegray_800 text-center w-[auto]"
                variant="body2"
              >
                Receita
              </Text>
              <div className="h-[16px] relative w-[60%]">
                <Line className="absolute bg-gray_500 bottom-[31%] h-[2px] right-[0] w-[89%]" />
                <div className="absolute bg-gray_50 border-[1px] border-indigo_900 border-solid flex h-[100%] inset-y-[0] items-center justify-start left-[0] my-[auto] p-[5px] rounded-[50%] w-[16px]">
                  <div className="bg-indigo_900 h-[6px] rounded-[50%] w-[6px]"></div>
                </div>
              </div>
            </div>
            <List
              className="md:flex-1 sm:flex-col flex-row gap-[1px] grid sm:grid-cols-1 grid-cols-3 md:w-[100%] w-[75%]"
              orientation="horizontal"
            >
              <div className="flex flex-col gap-[8px] items-center justify-center p-[8px] w-[100%]">
                <Text
                  className="font-normal not-italic text-bluegray_800 text-center w-[auto]"
                  variant="body2"
                >
                  Entrega
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
                  Pagamento
                </Text>
                <div className="h-[16px] relative w-[100%]">
                  <Line className="absolute bg-gray_500 bottom-[31%] h-[2px] inset-x-[0] mx-[auto] w-[100%]" />
                  <Img
                    src="images/img_save.svg"
                    className="absolute h-[16px] inset-[0] justify-center m-[auto] w-[16px]"
                    alt="save One"
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
                    alt="save Two"
                  />
                </div>
              </div>
            </List>
          </div>
          <div className="flex md:flex-col flex-row gap-[16px] items-start justify-between mt-[16px] w-[100%]">
            <div className="flex md:flex-1 flex-col gap-[16px] items-end justify-start md:px-[20px] md:w-[100%] w-[auto]">
              <div className="flex flex-col items-start justify-start md:w-[100%] w-[71%]">
                <div className="flex items-start justify-start pb-[4px] w-[221px]">
                  <Text
                    className="not-italic text-bluegray_800 text-left w-[auto]"
                    as="h2"
                    variant="h2"
                  >
                    Receita
                  </Text>
                </div>
                <div className="flex items-center justify-center pt-[8px] w-[auto]">
                  <Text
                    className="font-normal not-italic text-bluegray_800 text-left w-[auto]"
                    variant="body1"
                  >
                    Os produtos abaixo necessitam de receita médica:
                  </Text>
                </div>
                <List
                  className="bg-white_A700 flex-col gap-[24px] grid items-start max-w-[746px] mt-[16px] p-[16px] rounded-[8px] shadow-bs w-[100%]"
                  orientation="vertical"
                >
                  <div className="flex flex-1 items-end justify-start w-[100%]">
                    <div className="flex items-start justify-start w-[100%]">
                      <div className="flex items-start justify-start w-[294px]">
                        <div className="border-b-[1px] border-gray_300 border-solid h-[41px] relative w-[100%]">
                          <div className="absolute border-b-[1px] border-gray_300 border-solid flex-1 h-[41px] inset-[0] m-[auto] w-[100%]"></div>
                          <div className="absolute flex flex-row gap-[16px] h-[100%] inset-y-[0] items-center justify-between left-[0] my-[auto] w-[auto]">
                            <div className="flex h-[40px] items-center justify-start rounded-[8px] w-[40px]">
                              <Img
                                src="images/img_imagem_17.png"
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
                                  Levotiroxina Sódica
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
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 items-end justify-start w-[100%]">
                    <div className="flex items-start justify-start w-[100%]">
                      <div className="flex items-start justify-start w-[294px]">
                        <div className="border-b-[1px] border-gray_300 border-solid h-[41px] relative w-[100%]">
                          <div className="absolute border-b-[1px] border-gray_300 border-solid flex-1 h-[41px] inset-[0] m-[auto] w-[100%]"></div>
                          <div className="absolute flex flex-row gap-[16px] h-[100%] inset-y-[0] items-center justify-between left-[0] my-[auto] w-[auto]">
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
                                  Levotiroxina Sódica
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
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </List>
              </div>
              <div className="md:h-[1044px] h-[1400px] sm:h-[975px] relative w-[100%]">
                <div className="absolute bottom-[0] flex left-[0] sm:w-[100%] w-[47%]">
                  <Img
                    src="images/img_group149.png"
                    className="h-[975px] my-[auto] object-cover w-[auto]"
                    alt="Group149"
                  />
                  <div className="flex items-center justify-start ml-[-49px] mt-[72px] pb-[16px] pt-[8px] w-[auto] z-[1]">
                    <Text
                      className="text-bluegray_900 text-left w-[auto]"
                      as="h3"
                      variant="h3"
                    >
                      Adicionar receita
                    </Text>
                  </div>
                </div>
                <div className="absolute flex items-center justify-start right-[0] top-[0] w-[71%]">
                  <div className="flex flex-col items-start justify-start w-[100%]">
                    <div className="flex items-start justify-start pb-[16px] pt-[8px] w-[auto]">
                      <Text
                        className="text-bluegray_900 text-left w-[auto]"
                        as="h3"
                        variant="h3"
                      >
                        Adicionar receita
                      </Text>
                    </div>
                    <div className="flex items-center justify-center pt-[8px] sm:w-[100%] w-[553px]">
                      <Text
                        className="font-normal not-italic text-bluegray_800 text-left w-[auto]"
                        variant="body1"
                      >
                        Adicione suas receitas a seguir, enviando um arquivo ou
                        link de uma receita digital
                      </Text>
                    </div>
                    <List
                      className="sm:flex-col flex-row gap-[16px] grid md:grid-cols-1 grid-cols-2 justify-center mt-[16px] w-[100%]"
                      orientation="horizontal"
                    >
                      <div className="flex flex-col h-[432px] md:h-[auto] items-center justify-start shadow-bs w-[365px]">
                        <div className="bg-indigo_900 flex flex-row gap-[8px] items-center justify-start p-[16px] rounded-bl-[0] rounded-br-[0] rounded-tl-[8px] rounded-tr-[8px] w-[100%]">
                          <div className="flex flex-1 items-start justify-start w-[100%]">
                            <Text
                              className="font-medium text-left text-light_green_A200 w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              Imagem ou arquivo
                            </Text>
                          </div>
                          <Img
                            src="images/img_arrowup.svg"
                            className="h-[24px] w-[24px]"
                            alt="arrowup"
                          />
                        </div>
                        <div className="bg-white_A700 flex flex-col h-[100%] items-center justify-start p-[16px] rounded-bl-[8px] rounded-br-[8px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
                          <div className="border-[1px] border-gray_300 border-solid flex flex-col items-center justify-start p-[16px] rounded-[4px] w-[100%]">
                            <div className="h-[80px] relative w-[80px]">
                              <Img
                                src="images/img_imagepicture.svg"
                                className="h-[48px] m-[auto] w-[48px]"
                                alt="bookmark"
                              />
                              <Img
                                src="images/img_imagem_80x80.png"
                                className="absolute h-[80px] inset-[0] justify-center m-[auto] object-cover w-[80px]"
                                alt="Imagem Two"
                              />
                            </div>
                            <div className="flex flex-col items-center justify-start w-[100%]">
                              <div className="flex items-center justify-center pb-[8px] pt-[16px] w-[100%]">
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
                              <div className="flex items-center justify-center w-[100%]">
                                <Text
                                  className="font-normal not-italic text-bluegray_500 text-center w-[auto]"
                                  variant="body2"
                                >
                                  Formatos aceitos: .png, .jpeg e .pdf
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col gap-[8px] items-start justify-start pt-[16px] w-[100%]">
                            <div className="flex items-start justify-start py-[8px] w-[296px]">
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
                            <div className="border-b-[1px] border-gray_300 border-solid flex h-[30px] justify-end relative w-[100%]">
                              <div className="border-b-[1px] border-gray_300 border-solid flex-1 h-[24px] mt-[auto] mx-[auto] w-[100%]"></div>
                              <div className="absolute flex flex-1 flex-row gap-[16px] h-[100%] inset-[0] items-center justify-between m-[auto] w-[100%]">
                                <Img
                                  src="images/img_bookmark.svg"
                                  className="h-[24px] w-[24px]"
                                  alt="bookmark One"
                                />
                                <div className="h-[30px] relative w-[88%]">
                                  <div className="absolute bottom-[0] flex inset-x-[0] items-start justify-start mx-[auto] w-[100%]">
                                    <div className="flex items-start justify-start w-[192px]">
                                      <Text
                                        className="font-medium text-bluegray_800 text-left w-[auto]"
                                        variant="body1"
                                      >
                                        receita2.jpeg
                                      </Text>
                                    </div>
                                  </div>
                                  <div className="absolute border-[1px] border-indigo_900 border-solid flex h-[100%] inset-y-[0] items-center justify-center my-[auto] px-[16px] py-[12px] right-[0] rounded-[15px] w-[auto]">
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
                      </div>
                      <div className="flex flex-col items-center justify-start shadow-bs w-[365px]">
                        <div className="bg-indigo_900 flex flex-row gap-[8px] items-center justify-start p-[16px] rounded-bl-[0] rounded-br-[0] rounded-tl-[8px] rounded-tr-[8px] w-[100%]">
                          <div className="flex flex-1 items-start justify-start w-[100%]">
                            <Text
                              className="font-medium text-left text-light_green_A200 w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              Link (receita digital)
                            </Text>
                          </div>
                          <Img
                            src="images/img_arrowup.svg"
                            className="h-[24px] w-[24px]"
                            alt="arrowup One"
                          />
                        </div>
                        <div className="bg-white_A700 flex flex-col items-center justify-center p-[16px] rounded-bl-[8px] rounded-br-[8px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
                          <div className="flex flex-col gap-[8px] items-start justify-start py-[8px] w-[100%]">
                            <div className="flex items-center justify-start w-[100%]">
                              <div className="flex items-start justify-start w-[auto]">
                                <Text
                                  className="font-medium text-bluegray_800 text-left w-[auto]"
                                  variant="body2"
                                >
                                  Link da receita
                                </Text>
                              </div>
                            </div>
                            <div className="bg-white_A700 border-[1px] border-gray_300 border-solid h-[48px] p-[12px] rounded-[8px] w-[100%]"></div>
                          </div>
                          <div className="flex flex-col gap-[8px] items-start justify-start py-[8px] w-[100%]">
                            <div className="flex flex-row gap-[4px] items-center justify-start w-[100%]">
                              <div className="flex items-start justify-start w-[auto]">
                                <Text
                                  className="font-medium text-bluegray_800 text-left w-[auto]"
                                  variant="body2"
                                >
                                  Token
                                </Text>
                              </div>
                              <Img
                                src="images/img_info_bluegray_800.svg"
                                className="h-[16px] w-[16px]"
                                alt="info"
                              />
                            </div>
                            <div className="bg-white_A700 border-[1px] border-gray_300 border-solid h-[48px] p-[12px] rounded-[8px] w-[100%]"></div>
                          </div>
                          <div className="flex flex-col gap-[8px] items-start justify-start py-[8px] w-[100%]">
                            <div className="flex items-center justify-start w-[100%]">
                              <div className="flex items-start justify-start w-[auto]">
                                <Text
                                  className="font-medium text-bluegray_800 text-left w-[auto]"
                                  variant="body2"
                                >
                                  Emissor da receita
                                </Text>
                              </div>
                            </div>
                            <SelectBox
                              className="font-normal h-[48px] not-italic pr-[12px] text-[14px] text-bluegray_800 text-left w-[100%]"
                              placeholderClassName="text-bluegray_800"
                              name="FormsFieldoutlinedefault Two"
                              placeholder="Selecione..."
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
                          <div className="flex flex-col gap-[8px] items-start justify-start pt-[16px] w-[100%]">
                            <div className="flex items-start justify-start py-[8px] w-[296px]">
                              <div className="flex items-center justify-start w-[100%]">
                                <div className="flex items-start justify-start w-[auto]">
                                  <Text
                                    className="font-medium text-bluegray_800 text-left w-[auto]"
                                    variant="body2"
                                  >
                                    Links adicionados
                                  </Text>
                                </div>
                              </div>
                            </div>
                            <div className="border-b-[1px] border-gray_300 border-solid flex h-[36px] md:h-[auto] items-start justify-center w-[100%]">
                              <div className="flex flex-row gap-[16px] items-center justify-start w-[100%]">
                                <Img
                                  src="images/img_minimize_indigo_900.svg"
                                  className="h-[24px] w-[24px]"
                                  alt="minimize One"
                                />
                                <div className="h-[36px] relative w-[88%]">
                                  <div className="absolute flex h-[max-content] inset-[0] items-start justify-start m-[auto] w-[100%]">
                                    <div className="flex items-start justify-start w-[192px]">
                                      <Text
                                        className="font-medium text-bluegray_800 text-left w-[auto]"
                                        variant="body1"
                                      >
                                        Receita 1
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
                      </div>
                    </List>
                  </div>
                </div>
                <div className="absolute bottom-[6%] flex flex-col gap-[12px] items-center justify-start max-w-[746px] right-[0] w-[100%]">
                  <div className="flex flex-col items-start justify-start w-[100%]">
                    <div className="flex items-start justify-start pb-[16px] pt-[8px] w-[auto]">
                      <Text
                        className="text-bluegray_900 text-left w-[auto]"
                        as="h3"
                        variant="h3"
                      >
                        Titular da receita
                      </Text>
                    </div>
                    <div className="flex items-center justify-center pt-[8px] w-[100%]">
                      <Text
                        className="font-normal not-italic text-bluegray_800 text-left w-[auto]"
                        variant="body1"
                      >
                        Todos os remédios são para você?
                      </Text>
                    </div>
                  </div>
                  <Input
                    className="font-medium p-[0] text-[18px] placeholder:text-bluegray_800 text-bluegray_800 text-left w-[100%]"
                    wrapClassName="flex w-[100%]"
                    name="Sim"
                    placeholder="Sim"
                    prefix={
                      <Img
                        src="images/img_refresh_bluegray_901.svg"
                        className="mx-[16px]"
                        alt="refresh"
                      />
                    }
                    shape="RoundedBorder8"
                    size="9xl"
                    variant="OutlineIndigo90019"
                  ></Input>
                  <div className="bg-white_A700 flex flex-col items-start justify-start pb-[16px] px-[16px] rounded-[8px] shadow-bs w-[100%]">
                    <div className="flex h-[72px] md:h-[auto] items-start justify-center py-[12px] rounded-[8px] w-[100%]">
                      <div className="flex md:flex-col flex-row gap-[16px] items-center justify-start w-[100%]">
                        <div className="bg-indigo_900 flex h-[24px] items-center justify-start p-[6px] rounded-[50%] w-[24px]">
                          <div className="bg-white_A700 h-[12px] rounded-[50%] w-[12px]"></div>
                        </div>
                        <div className="flex flex-1 items-start justify-start w-[100%]">
                          <div className="flex items-start justify-start w-[192px]">
                            <Text
                              className="font-medium text-bluegray_800 text-left w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              Não
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start justify-start pb-[16px] w-[100%]">
                      <Text
                        className="text-bluegray_800 text-left w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Dados do comprador
                      </Text>
                    </div>
                    <div className="flex md:flex-col flex-row gap-[32px] items-start justify-start w-[100%]">
                      <div className="flex flex-1 flex-col items-start justify-start w-[100%]">
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
                        <div className="flex items-center justify-center pb-[16px] w-[333px]">
                          <Text
                            className="font-normal not-italic text-bluegray_800 text-left w-[auto]"
                            variant="body1"
                          >
                            João Gomes
                          </Text>
                        </div>
                      </div>
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
                    </div>
                    <div className="flex md:flex-col flex-row gap-[32px] items-start justify-start pb-[8px] w-[100%]">
                      <div className="flex flex-1 flex-col gap-[8px] items-start justify-start py-[8px] w-[100%]">
                        <div className="flex items-center justify-start w-[100%]">
                          <div className="flex items-start justify-start w-[auto]">
                            <Text
                              className="font-medium text-bluegray_800 text-left w-[auto]"
                              variant="body2"
                            >
                              RG
                            </Text>
                          </div>
                        </div>
                        <Input
                          className="font-normal not-italic p-[0] text-[14px] placeholder:text-gray_500 text-gray_500 text-left w-[100%]"
                          wrapClassName="md:h-[auto] sm:h-[auto] w-[100%]"
                          name="FormsFieldoutlinedefault Two"
                          placeholder="Ex: 12.345.678-9"
                          shape="RoundedBorder8"
                          size="xl"
                          variant="OutlineGray300"
                        ></Input>
                      </div>
                      <div className="flex flex-1 flex-col items-start justify-start w-[100%]">
                        <div className="flex items-start justify-start py-[8px] w-[333px]">
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
                        <div className="flex items-center justify-center w-[333px]">
                          <Text
                            className="font-normal not-italic text-bluegray_800 text-left w-[auto]"
                            variant="body1"
                          >
                            09/09/1996
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start justify-start pb-[16px] pt-[24px] w-[100%]">
                      <Text
                        className="text-bluegray_800 text-left w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Dados do paciente
                      </Text>
                    </div>
                    <div className="flex flex-col gap-[8px] items-start justify-start pb-[16px] pt-[8px] w-[341px]">
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
                      <div className="bg-white_A700 border-[1px] border-gray_300 border-solid h-[48px] p-[12px] rounded-[8px] w-[100%]"></div>
                    </div>
                    <div className="flex md:flex-col flex-row gap-[16px] items-start justify-start pb-[16px] w-[100%]">
                      <div className="flex flex-1 flex-col gap-[8px] items-start justify-start pt-[8px] w-[100%]">
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
                        <Input
                          className="font-normal not-italic p-[0] text-[14px] placeholder:text-gray_500 text-gray_500 text-left w-[100%]"
                          wrapClassName="md:h-[auto] sm:h-[auto] w-[100%]"
                          name="FormsFieldoutlinedefault Four"
                          placeholder="Ex: 123.456.789-10"
                          shape="RoundedBorder8"
                          size="xl"
                          variant="OutlineGray300"
                        ></Input>
                      </div>
                      <div className="flex flex-1 flex-col gap-[8px] items-start justify-start pt-[8px] w-[100%]">
                        <div className="flex items-center justify-start w-[100%]">
                          <div className="flex items-start justify-start w-[auto]">
                            <Text
                              className="font-medium text-bluegray_800 text-left w-[auto]"
                              variant="body2"
                            >
                              RG
                            </Text>
                          </div>
                        </div>
                        <Input
                          className="font-normal not-italic p-[0] text-[14px] placeholder:text-gray_500 text-gray_500 text-left w-[100%]"
                          wrapClassName="md:h-[auto] sm:h-[auto] w-[100%]"
                          name="FormsFieldoutlinedefault Five"
                          placeholder="Ex: 12.345.678-9"
                          shape="RoundedBorder8"
                          size="xl"
                          variant="OutlineGray300"
                        ></Input>
                      </div>
                    </div>
                    <div className="flex flex-col gap-[8px] items-start justify-start pt-[8px] w-[162px]">
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
                      <div className="bg-white_A700 border-[1px] border-gray_300 border-solid flex h-[48px] md:h-[auto] items-start justify-center p-[12px] rounded-[8px] w-[100%]">
                        <div className="flex items-center justify-start w-[100%]">
                          <div className="flex items-center justify-start px-[4px] w-[100%]">
                            <Text
                              className="font-normal not-italic text-bluegray_800 text-left w-[auto]"
                              variant="body1"
                            >
                              00/00/0000
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute bg-indigo_900 bottom-[1%] flex h-[44px] md:h-[auto] items-center justify-center px-[16px] py-[14px] right-[23%] rounded-[22px] w-[269px]">
                  <div className="flex items-center justify-start w-[auto]">
                    <div className="flex items-center justify-center px-[4px] w-[auto]">
                      <Text
                        className="font-medium text-left text-light_green_A200 w-[auto]"
                        variant="body1"
                      >
                        Ir para Entrega
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Img
              src="images/img_group151.png"
              className="md:flex-1 h-[451px] sm:h-[auto] md:mt-[0] mt-[64px] object-cover md:w-[100%] w-[auto]"
              alt="Group151"
            />
          </div>
          <footer className="bg-bluegray_900 flex md:flex-col flex-row gap-[32px] items-center justify-center mt-[25px] px-[120px] md:px-[20px] py-[48px] w-[100%]">
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

export default DesktopCheckoutReceitaPage;
