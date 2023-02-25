import React from "react";

import { Img, Input, Text, Line, List, Button } from "components";
import { CloseSVG } from "../../assets/images";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const ProdutoPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray_50 flex font-rubik items-center justify-start mx-[auto] w-[100%]">
        <div className="flex flex-col items-center justify-start w-[100%]">
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
          <div className="flex sm:flex-col flex-row sm:gap-[20px] items-start justify-start mt-[16px] md:px-[20px] sm:w-[100%] w-[auto]">
            <List
              className="sm:flex-col flex-row gap-[1px] grid grid-cols-2 sm:w-[100%] w-[54%]"
              orientation="horizontal"
            >
              <div className="flex h-[40px] md:h-[auto] items-center justify-center rounded-[20px] w-[auto]">
                <div className="flex flex-row gap-[4px] h-[40px] md:h-[auto] items-center justify-start py-[8px] rounded-[20px] w-[auto]">
                  <div className="flex items-center justify-center w-[auto]">
                    <Text
                      className="font-medium text-indigo_900 text-left w-[auto]"
                      variant="body1"
                    >
                      Tratamentos
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
                      Gestantes e bebês
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
                Fórmula Infantil Nan Comfor 2 800g
              </Text>
            </div>
          </div>
          <div className="flex md:flex-col flex-row md:gap-[40px] items-start justify-between max-w-[935px] mt-[24px] mx-[auto] md:px-[20px] w-[100%]">
            <div className="flex md:flex-1 flex-col gap-[16px] items-start justify-start md:w-[100%] w-[40%]">
              <div className="flex flex-row items-start justify-start w-[365px]">
                <div className="bg-deep_purple_50 border-[1px] border-gray_100 border-solid flex h-[175px] items-center justify-start rounded-[8px] w-[175px]">
                  <Img
                    src="images/img_imagem_175x175.png"
                    className="h-[175px] md:h-[auto] object-cover rounded-[8px] w-[175px]"
                    alt="Imagem"
                  />
                </div>
                <div className="flex items-start justify-start px-[16px] w-[100%]">
                  <div className="flex flex-col gap-[4px] items-start justify-start w-[100%]">
                    <div className="flex flex-row gap-[4px] items-center justify-center pb-[8px] w-[auto]">
                      <Img
                        src="images/img_star_indigo_900.svg"
                        className="h-[16px] w-[16px]"
                        alt="star Two"
                      />
                      <Img
                        src="images/img_star_indigo_900.svg"
                        className="h-[16px] w-[16px]"
                        alt="star Three"
                      />
                      <Img
                        src="images/img_star_indigo_900.svg"
                        className="h-[16px] w-[16px]"
                        alt="star Four"
                      />
                      <Img
                        src="images/img_star_indigo_900.svg"
                        className="h-[16px] w-[16px]"
                        alt="star Five"
                      />
                      <Img
                        src="images/img_cursor.svg"
                        className="h-[16px] w-[16px]"
                        alt="cursor"
                      />
                      <div className="flex h-[18px] md:h-[auto] items-center justify-center">
                        <Text
                          className="font-normal not-italic text-bluegray_500 text-left w-[auto]"
                          variant="body2"
                        >
                          (62)
                        </Text>
                      </div>
                    </div>
                    <div className="flex items-start justify-start w-[100%]">
                      <Text
                        className="not-italic text-bluegray_800 text-left w-[auto]"
                        as="h2"
                        variant="h2"
                      >
                        Synthroid
                      </Text>
                    </div>
                    <div className="flex items-center justify-start w-[100%]">
                      <Text
                        className="font-normal not-italic text-bluegray_500 text-left w-[auto]"
                        variant="body2"
                      >
                        Levotiroxina sódica
                      </Text>
                    </div>
                    <div className="flex items-center justify-start pb-[4px] w-[100%]">
                      <Text
                        className="font-normal not-italic text-indigo_900 text-left w-[auto]"
                        variant="body2"
                      >
                        Abbott
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <Button
                className="flex items-center justify-center min-w-[147px] text-center w-[auto]"
                leftIcon={
                  <Img
                    src="images/img_file_lime_800.svg"
                    className="mr-[4px] text-center"
                    alt="file"
                  />
                }
                shape="RoundedBorder4"
                variant="FillYellow200"
              >
                <div className="bg-transparent cursor-pointer font-medium text-[12px] text-center text-light_green_900">
                  Receita obrigatória
                </div>
              </Button>
            </div>
            <div className="bg-white_A700 flex sm:flex-1 flex-col gap-[24px] items-start justify-start p-[16px] rounded-[16px] shadow-bs sm:w-[100%] w-[460px]">
              <div className="flex flex-col gap-[12px] items-start justify-start w-[100%]">
                <div className="flex items-start justify-start w-[auto]">
                  <div className="flex items-center justify-start w-[auto]">
                    <div className="flex items-start justify-start w-[auto]">
                      <Text
                        className="font-medium text-bluegray_800 text-left w-[auto]"
                        variant="body2"
                      >
                        Forma farmacêutica:
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex items-start justify-start w-[100%]">
                  <Button
                    className="flex items-center justify-center text-center"
                    rightIcon={
                      <Img
                        src="images/img_trailingicon.svg"
                        className="ml-[8px] text-center"
                        alt="trailing icon"
                      />
                    }
                    shape="CircleBorder18"
                    size="3xl"
                    variant="FillIndigo900"
                  >
                    <div className="bg-transparent cursor-pointer font-medium text-[12px] text-center text-light_green_A200">
                      Comprimido
                    </div>
                  </Button>
                </div>
              </div>
              <div className="flex flex-col gap-[12px] items-start justify-start w-[auto]">
                <div className="flex items-start justify-start w-[auto]">
                  <div className="flex items-center justify-start w-[auto]">
                    <div className="flex items-start justify-start w-[auto]">
                      <Text
                        className="font-medium text-bluegray_800 text-left w-[auto]"
                        variant="body2"
                      >
                        Selecione a dosagem:
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row gap-[8px] items-start justify-start w-[auto]">
                  <Button
                    className="flex items-center justify-center text-center"
                    rightIcon={
                      <Img
                        src="images/img_trailingicon.svg"
                        className="ml-[8px] text-center"
                        alt="trailing icon"
                      />
                    }
                    shape="CircleBorder18"
                    size="3xl"
                    variant="FillIndigo900"
                  >
                    <div className="bg-transparent cursor-pointer font-medium text-[12px] text-center text-light_green_A200">
                      25 mcg
                    </div>
                  </Button>
                  <div className="border-[1px] border-indigo_900 border-solid flex h-[37px] md:h-[auto] items-center justify-center p-[8px] rounded-[18px] w-[auto]">
                    <div className="flex h-[21px] md:h-[auto] items-center justify-center px-[4px] w-[auto]">
                      <Text
                        className="font-medium text-center text-indigo_900 w-[auto]"
                        variant="body2"
                      >
                        50 mcg
                      </Text>
                    </div>
                  </div>
                  <div className="border-[1px] border-indigo_900 border-solid flex h-[37px] md:h-[auto] items-center justify-center p-[8px] rounded-[18px] w-[auto]">
                    <div className="flex h-[21px] md:h-[auto] items-center justify-center px-[4px] w-[auto]">
                      <Text
                        className="font-medium text-center text-indigo_900 w-[auto]"
                        variant="body2"
                      >
                        100 mcg
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-[12px] items-start justify-start w-[auto]">
                <div className="flex items-start justify-start w-[auto]">
                  <div className="flex items-center justify-start w-[auto]">
                    <div className="flex items-start justify-start w-[auto]">
                      <Text
                        className="font-medium text-bluegray_800 text-left w-[auto]"
                        variant="body2"
                      >
                        Selecione a quantidade:
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row gap-[8px] items-start justify-start w-[auto]">
                  <div className="border-[1px] border-indigo_900 border-solid flex h-[37px] md:h-[auto] items-center justify-center p-[8px] rounded-[18px] w-[auto]">
                    <div className="flex h-[21px] md:h-[auto] items-center justify-center px-[4px] w-[auto]">
                      <Text
                        className="font-medium text-center text-indigo_900 w-[auto]"
                        variant="body2"
                      >
                        10 comprimidos
                      </Text>
                    </div>
                  </div>
                  <Button
                    className="flex items-center justify-center text-center"
                    rightIcon={
                      <Img
                        src="images/img_trailingicon.svg"
                        className="ml-[8px] text-center"
                        alt="trailing icon"
                      />
                    }
                    shape="CircleBorder18"
                    size="3xl"
                    variant="FillIndigo900"
                  >
                    <div className="bg-transparent cursor-pointer font-medium text-[12px] text-center text-light_green_A200">
                      30 comprimidos
                    </div>
                  </Button>
                </div>
              </div>
              <div className="flex flex-col gap-[12px] items-start justify-start sm:w-[100%] w-[auto]">
                <div className="flex items-start justify-start w-[auto]">
                  <div className="flex items-center justify-start w-[auto]">
                    <div className="flex items-start justify-start w-[auto]">
                      <Text
                        className="font-medium text-bluegray_800 text-left w-[auto]"
                        variant="body2"
                      >
                        Selecione a frequência de entrega:
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex sm:flex-col flex-row gap-[8px] items-start justify-start sm:w-[100%] w-[auto]">
                  <div className="border-[1px] border-indigo_900 border-solid flex h-[37px] md:h-[auto] items-center justify-center p-[8px] rounded-[18px] w-[auto]">
                    <div className="flex h-[21px] md:h-[auto] items-center justify-center px-[4px] w-[auto]">
                      <Text
                        className="font-medium text-center text-indigo_900 w-[auto]"
                        variant="body2"
                      >
                        Compra única
                      </Text>
                    </div>
                  </div>
                  <List
                    className="sm:flex-col flex-row gap-[8px] grid grid-cols-2 sm:w-[100%] w-[47%]"
                    orientation="horizontal"
                  >
                    <div className="border-[1px] border-indigo_900 border-solid flex h-[37px] md:h-[auto] items-center justify-center p-[8px] rounded-[18px] w-[auto]">
                      <div className="flex h-[21px] md:h-[auto] items-center justify-center px-[4px] w-[auto]">
                        <Text
                          className="font-medium text-center text-indigo_900 w-[auto]"
                          variant="body2"
                        >
                          4 semanas
                        </Text>
                      </div>
                    </div>
                    <div className="border-[1px] border-indigo_900 border-solid flex h-[37px] md:h-[auto] items-center justify-center p-[8px] rounded-[18px] w-[auto]">
                      <div className="flex h-[21px] md:h-[auto] items-center justify-center px-[4px] w-[auto]">
                        <Text
                          className="font-medium text-center text-indigo_900 w-[auto]"
                          variant="body2"
                        >
                          8 semanas
                        </Text>
                      </div>
                    </div>
                  </List>
                  <div className="border-[1px] border-indigo_900 border-solid flex h-[37px] md:h-[auto] items-center justify-center p-[8px] rounded-[18px] w-[auto]">
                    <div className="flex h-[21px] md:h-[auto] items-center justify-center px-[4px] w-[auto]">
                      <Text
                        className="font-medium text-center text-indigo_900 w-[auto]"
                        variant="body2"
                      >
                        12 semanas
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[32px] items-center justify-start max-w-[936px] mt-[64px] mx-[auto] pb-[32px] md:px-[20px] w-[100%]">
            <div className="bg-deep_purple_300 flex md:flex-col flex-row gap-[39px] items-center justify-between py-[24px] rounded-[8px] w-[100%]">
              <div className="flex sm:flex-1 flex-col gap-[16px] items-start justify-start sm:w-[100%] w-[auto]">
                <div className="flex flex-col items-start justify-start sm:px-[20px] px-[32px] sm:w-[100%] w-[auto]">
                  <div className="flex items-start justify-start pt-[8px] w-[auto]">
                    <Text
                      className="text-bluegray_900 text-left w-[auto]"
                      as="h1"
                      variant="h1"
                    >
                      Você economiza até
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[8px] items-start justify-start w-[auto]">
                    <div className="flex items-start justify-start pt-[8px] w-[auto]">
                      <Text
                        className="text-bluegray_900 text-left w-[auto]"
                        as="h1"
                        variant="h1"
                      >
                        R$12,26
                      </Text>
                    </div>
                    <div className="flex items-start justify-start pt-[8px] w-[auto]">
                      <Text
                        className="text-bluegray_900 text-left w-[auto]"
                        as="h1"
                        variant="h1"
                      >
                        comprando
                      </Text>
                    </div>
                  </div>
                  <div className="flex items-start justify-start pt-[8px] w-[auto]">
                    <Text
                      className="text-bluegray_900 text-left w-[auto]"
                      as="h1"
                      variant="h1"
                    >
                      com a gente
                    </Text>
                  </div>
                </div>
                <div className="flex items-center justify-start sm:px-[20px] px-[32px] w-[auto]">
                  <Text
                    className="font-normal not-italic text-indigo_900 text-left w-[auto]"
                    variant="body2"
                  >
                    No custo final já estão inclusos frete e todas as taxas.
                  </Text>
                </div>
              </div>
              <div className="flex flex-col gap-[8px] h-[183px] md:h-[auto] items-start justify-center p-[16px] w-[auto]">
                <div className="bg-light_green_A200 flex flex-row gap-[16px] h-[100%] items-center justify-between px-[16px] py-[8px] rounded-[4px] w-[100%]">
                  <Img
                    src="images/img_imagebrandlogo.svg"
                    className="h-[32px] w-[32px]"
                    alt="Imagebrandlogo One"
                  />
                  <div className="flex items-center justify-end w-[110px]">
                    <Text
                      className="font-medium text-gray_900 text-left w-[auto]"
                      variant="body1"
                    >
                      R$ 58,99
                    </Text>
                  </div>
                </div>
                <List
                  className="flex-col gap-[8px] grid items-center w-[100%]"
                  orientation="vertical"
                >
                  <div className="flex flex-1 flex-row gap-[16px] h-[100%] items-center justify-between py-[8px] w-[100%]">
                    <div className="flex items-center justify-start w-[39%]">
                      <Img
                        src="images/img_imagem_16x80.png"
                        className="h-[16px] md:h-[auto] object-cover w-[100%]"
                        alt="Imagem One"
                      />
                    </div>
                    <div className="flex items-center justify-end pr-[16px] w-[110px]">
                      <Text
                        className="font-medium text-gray_900 text-left w-[auto]"
                        variant="body1"
                      >
                        R$ 65,70
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-row gap-[16px] h-[100%] items-center justify-center py-[8px] w-[100%]">
                    <div className="flex items-center justify-start w-[39%]">
                      <Img
                        src="images/img_imagem_25.png"
                        className="h-[16px] md:h-[auto] object-cover w-[100%]"
                        alt="Imagem Two"
                      />
                    </div>
                    <div className="flex flex-1 items-center justify-end pr-[16px] w-[100%]">
                      <Text
                        className="font-medium text-gray_900 text-left w-[auto]"
                        variant="body1"
                      >
                        R$ 71,25
                      </Text>
                    </div>
                  </div>
                </List>
              </div>
              <Img
                src="images/img_ilustraomenor.svg"
                className="h-[186px] w-[208px]"
                alt="Ilustrao"
              />
            </div>
            <div className="flex flex-col gap-[32px] items-center justify-start md:w-[100%] w-[80%]">
              <div className="flex flex-col items-start justify-start md:w-[100%] w-[auto]">
                <div className="flex items-start justify-start py-[16px] w-[auto]">
                  <Text
                    className="text-bluegray_900 text-left w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    Informações
                  </Text>
                </div>
                <div className="flex flex-col gap-[8px] items-start justify-start max-w-[746px] w-[100%]">
                  <div className="bg-white_A700 flex items-center justify-center rounded-[8px] shadow-bs w-[100%]">
                    <div className="bg-white_A700 flex items-start justify-center p-[16px] rounded-[8px] w-[100%]">
                      <div className="h-[24px] relative w-[100%]">
                        <div className="absolute flex flex-1 inset-x-[0] items-start justify-start mx-[auto] top-[7%] w-[100%]">
                          <div className="flex items-start justify-start w-[auto]">
                            <Text
                              className="text-bluegray_800 text-left w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              Sobre o remédio
                            </Text>
                          </div>
                        </div>
                        <Img
                          src="images/img_arrowright_gray_500.svg"
                          className="absolute h-[24px] inset-y-[0] my-[auto] right-[0] w-[24px]"
                          alt="arrowright"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="bg-white_A700 flex flex-col gap-[16px] items-center justify-center rounded-[8px] shadow-bs w-[100%]">
                    <div className="bg-white_A700 flex items-start justify-center pt-[16px] px-[16px] w-[100%]">
                      <div className="h-[21px] relative w-[100%]">
                        <div className="absolute bottom-[0] flex flex-1 inset-x-[0] items-start justify-start mx-[auto] w-[100%]">
                          <div className="flex items-start justify-start w-[auto]">
                            <Text
                              className="text-bluegray_800 text-left w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              Como usar?
                            </Text>
                          </div>
                        </div>
                        <Img
                          src="images/img_arrowright_gray_500.svg"
                          className="absolute h-[21px] inset-y-[0] max-h-[21px] my-[auto] right-[0] w-[auto]"
                          alt="arrowright One"
                        />
                      </div>
                    </div>
                    <div className="bg-deep_purple_50 flex items-start justify-center p-[16px] w-[100%]">
                      <Text
                        className="font-normal leading-[150.00%] md:max-w-[100%] max-w-[714px] not-italic text-bluegray_800 text-left"
                        variant="body1"
                      >
                        Os comprimidos de Levotiroxina Sódica devem ser
                        ingeridos com estômago vazio (1 hora antes ou 2 horas
                        após o café da manhã ou ingestão de alimento), a fim de
                        aumentar sua absorção. Para as crianças com dificuldades
                        de ingerir os comprimidos, estes devem ser triturados e
                        dissolvidos em pequena quantidade de água.
                      </Text>
                    </div>
                  </div>
                  <List
                    className="flex-col gap-[8px] grid items-center w-[100%]"
                    orientation="vertical"
                  >
                    <div className="bg-white_A700 flex flex-1 items-center justify-center rounded-[8px] shadow-bs w-[100%]">
                      <div className="bg-white_A700 flex items-start justify-center p-[16px] rounded-[8px] w-[100%]">
                        <div className="h-[24px] relative w-[100%]">
                          <div className="absolute flex flex-1 inset-x-[0] items-start justify-start mx-[auto] top-[8%] w-[100%]">
                            <div className="flex items-start justify-start w-[auto]">
                              <Text
                                className="text-bluegray_800 text-left w-[auto]"
                                as="h6"
                                variant="h6"
                              >
                                Avisos legais
                              </Text>
                            </div>
                          </div>
                          <Img
                            src="images/img_arrowright_gray_500.svg"
                            className="absolute h-[24px] inset-y-[0] my-[auto] right-[0] w-[24px]"
                            alt="arrowright Two"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="bg-white_A700 flex flex-1 items-center justify-center rounded-[8px] shadow-bs w-[100%]">
                      <div className="bg-white_A700 flex items-start justify-center p-[16px] rounded-[8px] w-[100%]">
                        <div className="h-[24px] relative w-[100%]">
                          <div className="absolute flex flex-1 inset-x-[0] items-start justify-start mx-[auto] top-[7%] w-[100%]">
                            <div className="flex items-start justify-start w-[auto]">
                              <Text
                                className="text-bluegray_800 text-left w-[auto]"
                                as="h6"
                                variant="h6"
                              >
                                Bula médica
                              </Text>
                            </div>
                          </div>
                          <Img
                            src="images/img_arrowright_gray_500.svg"
                            className="absolute h-[24px] inset-y-[0] my-[auto] right-[0] w-[24px]"
                            alt="arrowright Three"
                          />
                        </div>
                      </div>
                    </div>
                  </List>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start w-[100%]">
                <div className="flex items-start justify-start py-[16px] w-[auto]">
                  <Text
                    className="text-bluegray_900 text-left w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    Avaliações dos clientes
                  </Text>
                </div>
                <div className="flex md:flex-col flex-row gap-[32px] items-center justify-start max-w-[746px] w-[100%]">
                  <List
                    className="md:flex-1 flex-col gap-[12px] grid items-start md:w-[100%] w-[365px]"
                    orientation="vertical"
                  >
                    <div className="flex flex-row gap-[8px] items-center justify-start my-[0] w-[100%]">
                      <div className="flex items-center justify-start w-[76px]">
                        <Text
                          className="font-normal not-italic text-bluegray_500 text-left w-[auto]"
                          variant="body2"
                        >
                          5 estrelas
                        </Text>
                      </div>
                      <div className="bg-gray_300 flex flex-1 items-start justify-start w-[100%]">
                        <Line className="bg-indigo_900 h-[2px] w-[50%]" />
                      </div>
                    </div>
                    <div className="flex flex-row gap-[8px] items-center justify-start my-[0] w-[100%]">
                      <div className="flex items-center justify-start w-[76px]">
                        <Text
                          className="font-normal not-italic text-bluegray_500 text-left w-[auto]"
                          variant="body2"
                        >
                          4 estrelas
                        </Text>
                      </div>
                      <div className="bg-gray_300 flex flex-1 items-start justify-start w-[100%]">
                        <Line className="bg-indigo_900 h-[2px] w-[50%]" />
                      </div>
                    </div>
                    <div className="flex flex-row gap-[8px] items-center justify-start my-[0] w-[100%]">
                      <div className="flex items-center justify-start w-[76px]">
                        <Text
                          className="font-normal not-italic text-bluegray_500 text-left w-[auto]"
                          variant="body2"
                        >
                          3 estrelas
                        </Text>
                      </div>
                      <div className="bg-gray_300 flex flex-1 items-start justify-start w-[100%]">
                        <Line className="bg-indigo_900 h-[2px] w-[50%]" />
                      </div>
                    </div>
                    <div className="flex flex-row gap-[8px] items-center justify-start my-[0] w-[100%]">
                      <div className="flex items-center justify-start w-[76px]">
                        <Text
                          className="font-normal not-italic text-bluegray_500 text-left w-[auto]"
                          variant="body2"
                        >
                          2 estrelas
                        </Text>
                      </div>
                      <div className="bg-gray_300 flex flex-1 items-start justify-start w-[100%]">
                        <Line className="bg-indigo_900 h-[2px] w-[50%]" />
                      </div>
                    </div>
                    <div className="flex flex-row gap-[8px] items-center justify-start my-[0] w-[100%]">
                      <div className="flex items-center justify-start w-[76px]">
                        <Text
                          className="font-normal not-italic text-bluegray_500 text-left w-[auto]"
                          variant="body2"
                        >
                          1 estrela
                        </Text>
                      </div>
                      <div className="bg-gray_300 flex flex-1 items-start justify-start w-[100%]">
                        <Line className="bg-indigo_900 h-[2px] w-[50%]" />
                      </div>
                    </div>
                  </List>
                  <div className="flex flex-1 flex-row gap-[16px] items-center justify-center px-[16px] w-[100%]">
                    <div className="flex flex-1 flex-col items-start justify-start w-[100%]">
                      <div className="flex flex-row gap-[8px] items-center justify-start w-[auto]">
                        <div className="flex items-start justify-start py-[8px] w-[auto]">
                          <Text
                            className="text-indigo_900 text-left w-[auto]"
                            as="h1"
                            variant="h1"
                          >
                            4,5
                          </Text>
                        </div>
                        <div className="flex items-start justify-start w-[16px]">
                          <Img
                            src="images/img_star_indigo_900.svg"
                            className="h-[16px] w-[16px]"
                            alt="star Six"
                          />
                        </div>
                      </div>
                      <div className="flex items-center justify-start w-[auto]">
                        <Text
                          className="font-normal not-italic text-bluegray_500 text-left w-[auto]"
                          variant="body2"
                        >
                          100 avaliações
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col items-start justify-center w-[100%]">
                      <div className="flex items-start justify-start py-[8px] w-[auto]">
                        <Text
                          className="text-indigo_900 text-left w-[auto]"
                          as="h1"
                          variant="h1"
                        >
                          92%
                        </Text>
                      </div>
                      <div className="flex items-center justify-start w-[100%]">
                        <Text
                          className="font-normal not-italic text-bluegray_500 text-left w-[auto]"
                          variant="body2"
                        >
                          gostam desse laboratório
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start max-w-[746px] mt-[24px] w-[100%]">
                  <List
                    className="flex-col gap-[1px] grid items-center w-[100%]"
                    orientation="vertical"
                  >
                    <div className="border-b-[1px] border-gray_300 border-solid flex flex-1 flex-col gap-[12px] items-start justify-start pb-[24px] pt-[16px] w-[100%]">
                      <div className="flex md:flex-col flex-row gap-[12px] items-center justify-start w-[100%]">
                        <div className="flex flex-1 items-start justify-center w-[100%]">
                          <div className="flex items-start justify-start w-[328px]">
                            <div className="flex flex-col gap-[4px] items-start justify-start w-[100%]">
                              <div className="flex items-start justify-start pb-[4px]">
                                <Text
                                  className="font-medium text-bluegray_800 text-left w-[auto]"
                                  variant="body1"
                                >
                                  Adoro a Pill!
                                </Text>
                              </div>
                              <div className="flex items-start justify-start w-[100%]">
                                <div className="flex items-center justify-start w-[100%]">
                                  <Text
                                    className="font-normal not-italic text-bluegray_500 text-left w-[auto]"
                                    variant="body2"
                                  >
                                    por Camila Cabello
                                  </Text>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-row gap-[4px] items-center justify-center w-[auto]">
                          <Img
                            src="images/img_star_indigo_900.svg"
                            className="h-[16px] w-[16px]"
                            alt="star Seven"
                          />
                          <Img
                            src="images/img_star_indigo_900.svg"
                            className="h-[16px] w-[16px]"
                            alt="star One"
                          />
                          <Img
                            src="images/img_star_indigo_900.svg"
                            className="h-[16px] w-[16px]"
                            alt="star Two"
                          />
                          <Img
                            src="images/img_star_indigo_900.svg"
                            className="h-[16px] w-[16px]"
                            alt="star Three"
                          />
                          <Img
                            src="images/img_cursor.svg"
                            className="h-[16px] w-[16px]"
                            alt="cursor One"
                          />
                        </div>
                      </div>
                      <div className="flex items-center justify-center w-[100%]">
                        <Text
                          className="font-normal not-italic text-bluegray_800 text-left w-[auto]"
                          variant="body1"
                        >
                          Não esqueço meus remédios. Recebo em casa com preços
                          baixos e frete grátis.
                        </Text>
                      </div>
                    </div>
                    <div className="border-b-[1px] border-gray_300 border-solid flex flex-1 flex-col gap-[12px] items-start justify-start pb-[24px] pt-[16px] w-[100%]">
                      <div className="flex md:flex-col flex-row gap-[12px] items-center justify-start w-[100%]">
                        <div className="flex flex-1 items-start justify-center w-[100%]">
                          <div className="flex items-start justify-start w-[328px]">
                            <div className="flex flex-col gap-[4px] items-start justify-start w-[100%]">
                              <div className="flex items-start justify-start pb-[4px]">
                                <Text
                                  className="font-medium text-bluegray_800 text-left w-[auto]"
                                  variant="body1"
                                >
                                  Adoro a Pill!
                                </Text>
                              </div>
                              <div className="flex items-start justify-start w-[100%]">
                                <div className="flex items-center justify-start w-[100%]">
                                  <Text
                                    className="font-normal not-italic text-bluegray_500 text-left w-[auto]"
                                    variant="body2"
                                  >
                                    por Camila Cabello
                                  </Text>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-row gap-[4px] items-center justify-center w-[auto]">
                          <Img
                            src="images/img_star_indigo_900.svg"
                            className="h-[16px] w-[16px]"
                            alt="star Eight"
                          />
                          <Img
                            src="images/img_star_indigo_900.svg"
                            className="h-[16px] w-[16px]"
                            alt="star One One"
                          />
                          <Img
                            src="images/img_star_indigo_900.svg"
                            className="h-[16px] w-[16px]"
                            alt="star Two One"
                          />
                          <Img
                            src="images/img_star_indigo_900.svg"
                            className="h-[16px] w-[16px]"
                            alt="star Three One"
                          />
                          <Img
                            src="images/img_cursor.svg"
                            className="h-[16px] w-[16px]"
                            alt="cursor Two"
                          />
                        </div>
                      </div>
                      <div className="flex items-center justify-center w-[100%]">
                        <Text
                          className="font-normal not-italic text-bluegray_800 text-left w-[auto]"
                          variant="body1"
                        >
                          Não esqueço meus remédios. Recebo em casa com preços
                          baixos e frete grátis.
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col gap-[12px] items-start justify-start pb-[32px] pt-[16px] w-[100%]">
                      <div className="flex md:flex-col flex-row gap-[12px] items-center justify-start w-[100%]">
                        <div className="flex flex-1 items-start justify-center w-[100%]">
                          <div className="flex items-start justify-start w-[328px]">
                            <div className="flex flex-col gap-[4px] items-start justify-start w-[100%]">
                              <div className="flex items-start justify-start pb-[4px]">
                                <Text
                                  className="font-medium text-bluegray_800 text-left w-[auto]"
                                  variant="body1"
                                >
                                  Adoro a Pill!
                                </Text>
                              </div>
                              <div className="flex items-start justify-start w-[100%]">
                                <div className="flex items-center justify-start w-[100%]">
                                  <Text
                                    className="font-normal not-italic text-bluegray_500 text-left w-[auto]"
                                    variant="body2"
                                  >
                                    por Camila Cabello
                                  </Text>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-row gap-[4px] items-center justify-center w-[auto]">
                          <Img
                            src="images/img_star_indigo_900.svg"
                            className="h-[16px] w-[16px]"
                            alt="star Nine"
                          />
                          <Img
                            src="images/img_star_indigo_900.svg"
                            className="h-[16px] w-[16px]"
                            alt="star One Two"
                          />
                          <Img
                            src="images/img_star_indigo_900.svg"
                            className="h-[16px] w-[16px]"
                            alt="star Two Two"
                          />
                          <Img
                            src="images/img_star_indigo_900.svg"
                            className="h-[16px] w-[16px]"
                            alt="star Three Two"
                          />
                          <Img
                            src="images/img_cursor.svg"
                            className="h-[16px] w-[16px]"
                            alt="cursor Three"
                          />
                        </div>
                      </div>
                      <div className="flex items-center justify-center w-[100%]">
                        <Text
                          className="font-normal not-italic text-bluegray_800 text-left w-[auto]"
                          variant="body1"
                        >
                          Não esqueço meus remédios. Recebo em casa com preços
                          baixos e frete grátis.
                        </Text>
                      </div>
                    </div>
                  </List>
                  <div className="flex sm:flex-col flex-row gap-[16px] items-start justify-start sm:w-[100%] w-[554px]">
                    <div className="bg-indigo_900 flex h-[44px] md:h-[auto] items-center justify-center px-[16px] py-[14px] rounded-[22px] w-[100%]">
                      <div className="flex items-center justify-start w-[auto]">
                        <div className="flex items-center justify-center px-[4px] w-[auto]">
                          <Text
                            className="font-medium text-left text-light_green_A200 w-[auto]"
                            variant="body1"
                          >
                            Escrever avaliação
                          </Text>
                        </div>
                      </div>
                    </div>
                    <Button
                      className="flex items-center justify-center text-center"
                      rightIcon={
                        <Img
                          src="images/img_arrowright_indigo_900.svg"
                          className="ml-[8px] text-center"
                          alt="arrow_right"
                        />
                      }
                      shape="CircleBorder22"
                      size="3xl"
                    >
                      <div className="bg-transparent cursor-pointer font-medium text-[14px] text-indigo_900 text-left">
                        Button label
                      </div>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-start md:w-[100%] w-[96%]">
              <div className="bg-lime_400 flex items-center justify-start rounded-[8px] w-[100%]">
                <div className="h-[234px] relative rounded-[8px] w-[100%]">
                  <Img
                    src="images/img_imagem_234x896.png"
                    className="h-[234px] m-[auto] object-cover rounded-[8px] w-[100%]"
                    alt="Imagem Three"
                  />
                  <div className="absolute flex flex-col gap-[8px] h-[100%] md:h-[auto] inset-y-[0] items-start justify-center left-[2%] my-[auto] p-[16px] sm:w-[100%] w-[555px]">
                    <div className="flex items-start justify-start w-[auto]">
                      <Text
                        className="text-bluegray_900 text-left w-[auto]"
                        as="h1"
                        variant="h1"
                      >
                        Alguma dúvida?
                      </Text>
                    </div>
                    <div className="flex items-center justify-center w-[auto]">
                      <Text
                        className="font-normal not-italic text-bluegray_800 text-left w-[auto]"
                        variant="body1"
                      >
                        Fale com a gente!
                      </Text>
                    </div>
                    <div className="flex sm:flex-col flex-row gap-[16px] items-start justify-start pt-[16px] w-[100%]">
                      <Button
                        className="flex items-center justify-center text-center"
                        leftIcon={
                          <Img
                            src="images/img_call_light_green_a200.svg"
                            className="mr-[8px] text-center"
                            alt="call"
                          />
                        }
                        shape="CircleBorder22"
                        size="4xl"
                        variant="FillIndigo900"
                      >
                        <div className="bg-transparent cursor-pointer font-medium text-[14px] text-left text-light_green_A200">
                          Button label
                        </div>
                      </Button>
                      <Button
                        className="flex items-center justify-center text-center"
                        leftIcon={
                          <Img
                            src="images/img_mail_indigo_900.svg"
                            className="mr-[8px] text-center"
                            alt="mail"
                          />
                        }
                        shape="CircleBorder22"
                        size="4xl"
                      >
                        <div className="bg-transparent cursor-pointer font-medium text-[14px] text-indigo_900 text-left">
                          Button label
                        </div>
                      </Button>
                    </div>
                  </div>
                  <Img
                    src="images/img_sticker.svg"
                    className="absolute h-[171px] inset-y-[0] my-[auto] right-[3%] w-[auto]"
                    alt="Sticker"
                  />
                </div>
              </div>
            </div>
            <div className="flex items-center justify-start md:w-[100%] w-[80%]">
              <div className="flex flex-col gap-[16px] items-center justify-start w-[100%]">
                <div className="flex flex-col items-start justify-start w-[100%]">
                  <div className="flex items-start justify-start pb-[16px] pt-[8px] w-[auto]">
                    <Text
                      className="text-bluegray_900 text-left w-[auto]"
                      as="h3"
                      variant="h3"
                    >
                      Perguntas
                    </Text>
                  </div>
                  <div className="flex md:flex-col flex-row gap-[16px] items-center justify-between w-[100%]">
                    <div className="flex sm:flex-1 items-start justify-start sm:w-[100%] w-[555px]">
                      <Input
                        className="font-normal not-italic p-[0] text-[14px] placeholder:text-gray_500 text-gray_500 text-left w-[100%]"
                        wrapClassName="w-[100%]"
                        name="FormsFieldoutlinedefault One"
                        placeholder="Procure o que você quer saber"
                        shape="RoundedBorder8"
                        size="xl"
                        variant="OutlineGray300"
                      ></Input>
                    </div>
                    <div className="bg-indigo_900 flex h-[44px] md:h-[auto] items-center justify-center px-[16px] py-[14px] rounded-[22px] w-[175px]">
                      <div className="flex items-center justify-start w-[auto]">
                        <div className="flex items-center justify-center px-[4px] w-[auto]">
                          <Text
                            className="font-medium text-left text-light_green_A200 w-[auto]"
                            variant="body1"
                          >
                            Procurar
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start max-w-[746px] w-[100%]">
                  <List
                    className="flex-col gap-[1px] grid items-center w-[100%]"
                    orientation="vertical"
                  >
                    <div className="border-b-[1px] border-gray_300 border-solid flex flex-1 flex-col gap-[12px] items-start justify-start pb-[24px] pt-[16px] w-[100%]">
                      <div className="flex items-start justify-center w-[328px]">
                        <div className="flex items-start justify-start w-[328px]">
                          <div className="flex flex-col gap-[4px] items-start justify-start w-[100%]">
                            <div className="flex items-start justify-start pb-[4px]">
                              <Text
                                className="text-bluegray_800 text-left w-[auto]"
                                as="h6"
                                variant="h6"
                              >
                                Com que idade é recomendado o uso?
                              </Text>
                            </div>
                            <div className="flex items-start justify-start w-[100%]">
                              <div className="flex items-center justify-start w-[100%]">
                                <Text
                                  className="font-normal not-italic text-bluegray_500 text-left w-[auto]"
                                  variant="body2"
                                >
                                  por Camila Cabello
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start w-[auto]">
                        <div className="flex items-start justify-center py-[12px] w-[328px]">
                          <div className="flex flex-row gap-[16px] items-center justify-start w-[100%]">
                            <Img
                              src="images/img_clock_bluegray_500.svg"
                              className="h-[24px] w-[24px]"
                              alt="clock"
                            />
                            <div className="flex flex-1 flex-col items-start justify-start w-[100%]">
                              <div className="flex items-center justify-start w-[100%]">
                                <Text
                                  className="font-normal not-italic text-bluegray_800 text-left w-[auto]"
                                  variant="body1"
                                >
                                  A partir dos 16 anos
                                </Text>
                              </div>
                              <div className="flex items-start justify-start w-[100%]">
                                <div className="flex items-center justify-start w-[100%]">
                                  <Text
                                    className="font-normal not-italic text-bluegray_500 text-left w-[auto]"
                                    variant="body2"
                                  >
                                    por Igor Girsas - farmacêutico da Pill
                                  </Text>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-row gap-[16px] items-start justify-start sm:px-[20px] px-[40px] w-[328px]">
                          <div className="flex flex-row gap-[8px] items-center justify-center w-[auto]">
                            <Img
                              src="images/img_arrowright.svg"
                              className="h-[16px] w-[16px]"
                              alt="arrowright Four"
                            />
                            <div className="flex items-center justify-center w-[auto]">
                              <Text
                                className="font-medium text-indigo_900 text-left w-[auto]"
                                variant="body2"
                              >
                                Me ajudou (5)
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-row gap-[8px] items-center justify-center w-[auto]">
                            <Img
                              src="images/img_arrowright.svg"
                              className="h-[16px] w-[16px]"
                              alt="arrowright One"
                            />
                            <div className="flex items-center justify-center w-[auto]">
                              <Text
                                className="font-medium text-indigo_900 text-left w-[auto]"
                                variant="body2"
                              >
                                Me ajudou (5)
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="border-b-[1px] border-gray_300 border-solid flex flex-1 flex-col gap-[12px] items-start justify-start pb-[24px] pt-[16px] w-[100%]">
                      <div className="flex items-start justify-center w-[328px]">
                        <div className="flex items-start justify-start w-[328px]">
                          <div className="flex flex-col gap-[4px] items-start justify-start w-[100%]">
                            <div className="flex items-start justify-start pb-[4px]">
                              <Text
                                className="text-bluegray_800 text-left w-[auto]"
                                as="h6"
                                variant="h6"
                              >
                                Com que idade é recomendado o uso?
                              </Text>
                            </div>
                            <div className="flex items-start justify-start w-[100%]">
                              <div className="flex items-center justify-start w-[100%]">
                                <Text
                                  className="font-normal not-italic text-bluegray_500 text-left w-[auto]"
                                  variant="body2"
                                >
                                  por Camila Cabello
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start w-[auto]">
                        <div className="flex items-start justify-center py-[12px] w-[328px]">
                          <div className="flex flex-row gap-[16px] items-center justify-start w-[100%]">
                            <Img
                              src="images/img_clock_bluegray_500.svg"
                              className="h-[24px] w-[24px]"
                              alt="clock One"
                            />
                            <div className="flex flex-1 flex-col items-start justify-start w-[100%]">
                              <div className="flex items-center justify-start w-[100%]">
                                <Text
                                  className="font-normal not-italic text-bluegray_800 text-left w-[auto]"
                                  variant="body1"
                                >
                                  A partir dos 16 anos
                                </Text>
                              </div>
                              <div className="flex items-start justify-start w-[100%]">
                                <div className="flex items-center justify-start w-[100%]">
                                  <Text
                                    className="font-normal not-italic text-bluegray_500 text-left w-[auto]"
                                    variant="body2"
                                  >
                                    por Igor Girsas - farmacêutico da Pill
                                  </Text>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-row gap-[16px] items-start justify-start sm:px-[20px] px-[40px] w-[328px]">
                          <div className="flex flex-row gap-[8px] items-center justify-center w-[auto]">
                            <Img
                              src="images/img_arrowright.svg"
                              className="h-[16px] w-[16px]"
                              alt="arrowright Five"
                            />
                            <div className="flex items-center justify-center w-[auto]">
                              <Text
                                className="font-medium text-indigo_900 text-left w-[auto]"
                                variant="body2"
                              >
                                Me ajudou (5)
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-row gap-[8px] items-center justify-center w-[auto]">
                            <Img
                              src="images/img_arrowright.svg"
                              className="h-[16px] w-[16px]"
                              alt="arrowright One One"
                            />
                            <div className="flex items-center justify-center w-[auto]">
                              <Text
                                className="font-medium text-indigo_900 text-left w-[auto]"
                                variant="body2"
                              >
                                Me ajudou (5)
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col gap-[12px] items-start justify-start pb-[32px] pt-[16px] w-[100%]">
                      <div className="flex items-start justify-center w-[328px]">
                        <div className="flex items-start justify-start w-[328px]">
                          <div className="flex flex-col gap-[4px] items-start justify-start w-[100%]">
                            <div className="flex items-start justify-start pb-[4px]">
                              <Text
                                className="text-bluegray_800 text-left w-[auto]"
                                as="h6"
                                variant="h6"
                              >
                                Com que idade é recomendado o uso?
                              </Text>
                            </div>
                            <div className="flex items-start justify-start w-[100%]">
                              <div className="flex items-center justify-start w-[100%]">
                                <Text
                                  className="font-normal not-italic text-bluegray_500 text-left w-[auto]"
                                  variant="body2"
                                >
                                  por Camila Cabello
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start w-[auto]">
                        <div className="flex items-start justify-center py-[12px] w-[328px]">
                          <div className="flex flex-row gap-[16px] items-center justify-start w-[100%]">
                            <Img
                              src="images/img_clock_bluegray_500.svg"
                              className="h-[24px] w-[24px]"
                              alt="clock Two"
                            />
                            <div className="flex flex-1 flex-col items-start justify-start w-[100%]">
                              <div className="flex items-center justify-start w-[100%]">
                                <Text
                                  className="font-normal not-italic text-bluegray_800 text-left w-[auto]"
                                  variant="body1"
                                >
                                  A partir dos 16 anos
                                </Text>
                              </div>
                              <div className="flex items-start justify-start w-[100%]">
                                <div className="flex items-center justify-start w-[100%]">
                                  <Text
                                    className="font-normal not-italic text-bluegray_500 text-left w-[auto]"
                                    variant="body2"
                                  >
                                    por Igor Girsas - farmacêutico da Pill
                                  </Text>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-row gap-[16px] items-start justify-start sm:px-[20px] px-[40px] w-[328px]">
                          <div className="flex flex-row gap-[8px] items-center justify-center w-[auto]">
                            <Img
                              src="images/img_arrowright.svg"
                              className="h-[16px] w-[16px]"
                              alt="arrowright Six"
                            />
                            <div className="flex items-center justify-center w-[auto]">
                              <Text
                                className="font-medium text-indigo_900 text-left w-[auto]"
                                variant="body2"
                              >
                                Me ajudou (5)
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-row gap-[8px] items-center justify-center w-[auto]">
                            <Img
                              src="images/img_arrowright.svg"
                              className="h-[16px] w-[16px]"
                              alt="arrowright One Two"
                            />
                            <div className="flex items-center justify-center w-[auto]">
                              <Text
                                className="font-medium text-indigo_900 text-left w-[auto]"
                                variant="body2"
                              >
                                Me ajudou (5)
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </List>
                  <div className="flex sm:flex-col flex-row gap-[16px] items-start justify-start sm:w-[100%] w-[554px]">
                    <div className="bg-indigo_900 flex h-[44px] md:h-[auto] items-center justify-center px-[16px] py-[14px] rounded-[22px] w-[100%]">
                      <div className="flex items-center justify-start w-[auto]">
                        <div className="flex items-center justify-center px-[4px] w-[auto]">
                          <Text
                            className="font-medium text-left text-light_green_A200 w-[auto]"
                            variant="body1"
                          >
                            Escrever pergunta
                          </Text>
                        </div>
                      </div>
                    </div>
                    <Button
                      className="flex items-center justify-center text-center"
                      leftIcon={
                        <Img
                          src="images/img_close.svg"
                          className="mr-[8px] text-center"
                          alt="close"
                        />
                      }
                      shape="CircleBorder22"
                      size="4xl"
                    >
                      <div className="bg-transparent cursor-pointer font-medium text-[14px] text-indigo_900 text-left">
                        Button label
                      </div>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <footer className="bg-bluegray_900 flex md:flex-col flex-row gap-[32px] items-center justify-center mt-[88px] px-[120px] md:px-[20px] py-[48px] w-[100%]">
            <div className="flex flex-col gap-[24px] items-start justify-start py-[16px] w-[auto]">
              <div className="flex items-start justify-start px-[8px] w-[auto]">
                <Img
                  src="images/img_imagebrandlogo_white_a700.svg"
                  className="h-[44px] w-[44px]"
                  alt="Imagebrandlogo Two"
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

export default ProdutoPage;
