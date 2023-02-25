import React from "react";

import {
  Img,
  Input,
  Text,
  Line,
  Button,
  List,
  CheckBox,
  SelectBox,
} from "components";
import { CloseSVG } from "../../assets/images";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const BuscaPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray_100 flex font-rubik items-center justify-start mx-[auto] w-[100%]">
        <div className="bg-gray_50 flex items-center justify-start w-[100%]">
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
                    className="font-normal not-italic p-[0] text-[14px] placeholder:text-bluegray_800 text-bluegray_800 text-left w-[100%]"
                    wrapClassName="flex w-[100%]"
                    name="FormsFieldoutlinedefault"
                    placeholder="Placeholder text"
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
                          color="#40405c"
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
                        Linkbutton
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
            <div className="flex flex-row items-start justify-start mt-[16px] md:px-[20px] w-[auto]">
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
                  Resultados para ”Levotiroxina”
                </Text>
              </div>
            </div>
            <div className="flex md:flex-col flex-row md:gap-[20px] h-[69px] md:h-[auto] items-center justify-start max-w-[1126px] mx-[auto] md:px-[20px] w-[100%]">
              <div className="flex flex-1 items-center justify-start pt-[8px] w-[100%]">
                <Text
                  className="font-normal not-italic text-bluegray_800 text-left w-[auto]"
                  variant="body1"
                >
                  <span className="text-gray_900 text-[14px] font-rubik font-semibold">
                    3
                  </span>
                  <span className="text-bluegray_800 text-[14px] font-rubik">
                    {" "}
                    resultados encontrados para{" "}
                  </span>
                  <span className="text-bluegray_800 text-[14px] font-rubik font-semibold">
                    “
                  </span>
                  <span className="text-gray_900 text-[14px] font-rubik font-semibold">
                    Levotiroxina
                  </span>
                  <span className="text-bluegray_800 text-[14px] font-rubik font-semibold">
                    ”
                  </span>
                </Text>
              </div>
              <div className="flex sm:flex-1 flex-row gap-[8px] items-start justify-start p-[16px] sm:w-[100%] w-[auto]">
                <Button
                  className="flex items-center justify-center text-center"
                  rightIcon={
                    <Img
                      src="images/img_close_light_green_a200.svg"
                      className="ml-[8px] text-center"
                      alt="close"
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
                <Button
                  className="flex items-center justify-center text-center"
                  rightIcon={
                    <Img
                      src="images/img_close_light_green_a200.svg"
                      className="ml-[8px] text-center"
                      alt="close"
                    />
                  }
                  shape="CircleBorder18"
                  size="3xl"
                  variant="FillIndigo900"
                >
                  <div className="bg-transparent cursor-pointer font-medium text-[12px] text-center text-light_green_A200">
                    10 mg
                  </div>
                </Button>
                <Button
                  className="flex items-center justify-center text-center"
                  rightIcon={
                    <Img
                      src="images/img_close_light_green_a200.svg"
                      className="ml-[8px] text-center"
                      alt="close"
                    />
                  }
                  shape="CircleBorder18"
                  size="3xl"
                  variant="FillIndigo900"
                >
                  <div className="bg-transparent cursor-pointer font-medium text-[12px] text-center text-light_green_A200">
                    25 comprimidos
                  </div>
                </Button>
              </div>
              <div className="flex flex-row gap-[16px] items-center justify-start py-[8px] w-[auto]">
                <Button
                  className="flex items-center justify-center text-center"
                  rightIcon={
                    <Img
                      src="images/img_trailingicon.svg"
                      className="ml-[4px] text-center"
                      alt="trailing icon"
                    />
                  }
                  shape="RoundedBorder8"
                  size="3xl"
                  variant="OutlineIndigo90019"
                >
                  <div className="bg-transparent cursor-pointer font-medium text-[12px] text-bluegray_800 text-center">
                    Menor preço
                  </div>
                </Button>
                <div className="bg-white_A700 flex flex-row gap-[4px] items-center justify-center p-[4px] rounded-[8px] shadow-bs w-[auto]">
                  <div className="flex items-center justify-center p-[4px] rounded-[4px] w-[32px]">
                    <div className="flex h-[24px] md:h-[auto] items-center justify-center w-[24px]">
                      <Img
                        src="images/img_grid_indigo_900.svg"
                        className="h-[16px] w-[16px]"
                        alt="grid"
                      />
                    </div>
                  </div>
                  <div className="bg-indigo_900 flex items-center justify-center p-[4px] rounded-[4px] w-[32px]">
                    <div className="flex h-[24px] md:h-[auto] items-center justify-center w-[24px]">
                      <Img
                        src="images/img_menu_light_green_a200.svg"
                        className="h-[16px] w-[16px]"
                        alt="menu"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex md:flex-col flex-row gap-[16px] items-start justify-start max-w-[1126px] mt-[8px] mx-[auto] md:px-[20px] w-[100%]">
              <div className="bg-white_A700 flex flex-col items-start justify-start rounded-[16px] shadow-bs w-[270px]">
                <div className="flex items-start justify-start p-[24px] sm:px-[20px] w-[100%]">
                  <Text
                    className="text-bluegray_900 text-left w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    Filtrar
                  </Text>
                </div>
                <div className="border-b-[1px] border-gray_300 border-solid flex flex-col items-center justify-start pb-[16px] sm:px-[20px] px-[24px] w-[100%]">
                  <div className="flex items-start justify-start py-[8px] w-[100%]">
                    <Text
                      className="font-medium text-bluegray_800 text-left w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Preço
                    </Text>
                  </div>
                  <div className="flex items-center justify-start py-[8px] w-[100%]">
                    <List
                      className="sm:flex-col flex-row gap-[8px] grid grid-cols-2 justify-start w-[100%]"
                      orientation="horizontal"
                    >
                      <div className="flex flex-1 flex-col gap-[12px] items-center justify-start w-[100%]">
                        <div className="flex items-start justify-start w-[100%]">
                          <div className="flex items-center justify-start w-[auto]">
                            <div className="flex items-start justify-start w-[auto]">
                              <Text
                                className="font-medium text-bluegray_800 text-left w-[auto]"
                                variant="body2"
                              >
                                Preço mínimo
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="flex font-acuminpro items-center justify-center w-[100%]">
                          <div className="bg-white_A700 border-[1px] border-gray_500 border-solid flex h-[48px] md:h-[auto] items-start justify-center p-[12px] rounded-[8px] w-[100%]">
                            <div className="flex items-center justify-center pt-[2px] w-[100%]">
                              <div className="flex items-center justify-center px-[4px] w-[90px]">
                                <Text
                                  className="text-bluegray_910 text-left tracking-[-0.72px] w-[auto]"
                                  as="h6"
                                  variant="h6"
                                >
                                  R$ 10
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-1 flex-col gap-[12px] items-center justify-start w-[100%]">
                        <div className="flex items-start justify-start w-[100%]">
                          <div className="flex items-center justify-start w-[auto]">
                            <div className="flex items-start justify-start w-[auto]">
                              <Text
                                className="font-medium text-bluegray_800 text-left w-[auto]"
                                variant="body2"
                              >
                                Preço máximo
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="flex font-acuminpro items-center justify-center w-[100%]">
                          <div className="bg-white_A700 border-[1px] border-gray_500 border-solid flex h-[48px] md:h-[auto] items-start justify-center p-[12px] rounded-[8px] w-[100%]">
                            <div className="flex items-center justify-center pt-[2px] w-[100%]">
                              <div className="flex items-center justify-center px-[4px] w-[90px]">
                                <Text
                                  className="text-bluegray_910 text-left tracking-[-0.72px] w-[auto]"
                                  as="h6"
                                  variant="h6"
                                >
                                  R$ 200
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </List>
                  </div>
                </div>
                <div className="bg-white_A700 border-b-[1px] border-gray_300 border-solid flex items-start justify-center sm:px-[20px] px-[24px] py-[16px] rounded-bl-[0] rounded-br-[0] rounded-tl-[16px] rounded-tr-[16px] w-[100%]">
                  <div className="flex items-center justify-start w-[100%]">
                    <div className="flex flex-row gap-[22px] items-start justify-start sm:pr-[20px] pr-[32px] w-[100%]">
                      <div className="flex items-start justify-start w-[176px]">
                        <Text
                          className="font-medium leading-[120.00%] md:max-w-[100%] max-w-[176px] text-bluegray_800 text-left"
                          as="h5"
                          variant="h5"
                        >
                          Forma farmacêutica (1)
                        </Text>
                      </div>
                      <Img
                        src="images/img_arrowdown.svg"
                        className="h-[24px] w-[24px]"
                        alt="arrowdown"
                      />
                    </div>
                  </div>
                </div>
                <div className="border-b-[1px] border-gray_300 border-solid flex flex-col items-start justify-start sm:px-[20px] px-[24px] w-[100%]">
                  <div className="bg-white_A700 flex items-start justify-center py-[16px] rounded-bl-[0] rounded-br-[0] rounded-tl-[16px] rounded-tr-[16px] w-[100%]">
                    <div className="h-[24px] relative w-[100%]">
                      <div className="absolute flex flex-1 h-[max-content] inset-[0] items-start justify-start m-[auto] w-[100%]">
                        <div className="flex items-start justify-start w-[auto]">
                          <Text
                            className="font-medium text-bluegray_800 text-left w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            Dosagem (1)
                          </Text>
                        </div>
                      </div>
                      <Img
                        src="images/img_arrowdown.svg"
                        className="absolute h-[24px] inset-y-[0] my-[auto] right-[0] w-[24px]"
                        alt="arrowup"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start pb-[16px] w-[100%]">
                    <div className="bg-white_A700 flex items-start justify-center px-[16px] py-[12px] w-[100%]">
                      <CheckBox
                        className="font-normal not-italic text-[14px] text-bluegray_800 text-left"
                        inputClassName="h-[24px] mr-[5px] w-[24px]"
                        label="10 mcg"
                        name="TextStyle Two"
                        shape="RoundedBorder4"
                        size="sm"
                        variant="FillIndigo900"
                      ></CheckBox>
                    </div>
                    <List
                      className="flex-col gap-[1px] grid items-center w-[100%]"
                      orientation="vertical"
                    >
                      <div className="bg-white_A700 flex flex-1 items-start justify-center px-[16px] py-[12px] w-[100%]">
                        <div className="flex flex-row gap-[16px] items-center justify-start w-[100%]">
                          <Img
                            src="images/img_file_bluegray_910.svg"
                            className="h-[24px] w-[24px]"
                            alt="file"
                          />
                          <div className="flex flex-1 items-start justify-start w-[100%]">
                            <div className="flex items-center justify-center w-[auto]">
                              <Text
                                className="font-normal not-italic text-bluegray_800 text-left w-[auto]"
                                variant="body1"
                              >
                                50 mcg
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white_A700 flex flex-1 items-start justify-center px-[16px] py-[12px] w-[100%]">
                        <div className="flex flex-row gap-[16px] items-center justify-start w-[100%]">
                          <Img
                            src="images/img_file_bluegray_910.svg"
                            className="h-[24px] w-[24px]"
                            alt="file One"
                          />
                          <div className="flex flex-1 items-start justify-start w-[100%]">
                            <div className="flex items-center justify-center w-[auto]">
                              <Text
                                className="font-normal not-italic text-bluegray_800 text-left w-[auto]"
                                variant="body1"
                              >
                                75 mcg
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </List>
                  </div>
                </div>
                <SelectBox
                  className="font-medium sm:pr-[20px] pr-[24px] text-[18px] text-bluegray_800 text-left w-[100%]"
                  placeholderClassName="text-bluegray_800"
                  name="Quantidade"
                  placeholder="Quantidade (1)"
                  isSearchable={false}
                  isMulti={false}
                  indicator={
                    <Img
                      src="images/img_arrowdown.svg"
                      className="h-[24px] w-[24px]"
                      alt="arrow_down"
                    />
                  }
                  shape="CustomBorderTL16"
                  variant="OutlineGray300_1"
                ></SelectBox>
                <SelectBox
                  className="font-medium sm:pr-[20px] pr-[24px] text-[18px] text-bluegray_800 text-left w-[100%]"
                  placeholderClassName="text-bluegray_800"
                  name="Fabricante"
                  placeholder="Fabricante"
                  isSearchable={false}
                  isMulti={false}
                  indicator={
                    <Img
                      src="images/img_arrowdown.svg"
                      className="h-[24px] w-[24px]"
                      alt="arrow_down"
                    />
                  }
                  shape="CustomBorderTL16"
                  variant="FillWhiteA700"
                ></SelectBox>
                <List
                  className="flex-col gap-[16px] grid items-start sm:px-[20px] px-[24px] py-[16px] w-[100%]"
                  orientation="vertical"
                >
                  <div className="bg-indigo_900 flex flex-1 h-[44px] md:h-[auto] items-center justify-center my-[0] px-[16px] py-[14px] rounded-[22px] w-[100%]">
                    <div className="flex items-center justify-start w-[auto]">
                      <div className="flex items-center justify-center px-[4px] w-[auto]">
                        <Text
                          className="font-medium text-left text-light_green_A200 w-[auto]"
                          variant="body1"
                        >
                          Aplicar filtros
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="border-[1px] border-indigo_900 border-solid flex flex-1 h-[44px] md:h-[auto] items-center justify-center my-[0] px-[16px] py-[14px] rounded-[22px] w-[100%]">
                    <div className="flex items-center justify-start w-[auto]">
                      <div className="flex items-center justify-center px-[4px] w-[auto]">
                        <Text
                          className="font-medium text-indigo_900 text-left w-[auto]"
                          variant="body1"
                        >
                          Button label
                        </Text>
                      </div>
                    </div>
                  </div>
                </List>
              </div>
              <div className="flex md:flex-1 flex-col gap-[16px] items-center justify-start md:w-[100%] w-[auto]">
                <div className="bg-white_A700 flex flex-col items-start justify-start max-w-[840px] rounded-[16px] shadow-bs w-[100%]">
                  <div className="flex md:flex-col flex-row gap-[24px] items-start justify-start p-[24px] sm:px-[20px] w-[100%]">
                    <div className="border-b-[1px] border-gray_300 border-solid sm:h-[142px] h-[41px] relative w-[100%]">
                      <div className="border-b-[1px] border-gray_300 border-solid flex-1 h-[41px] m-[auto] w-[100%]"></div>
                      <div className="absolute flex flex-1 sm:flex-col flex-row gap-[16px] h-[100%] inset-[0] items-start justify-between m-[auto] w-[100%]">
                        <div className="flex h-[40px] items-center justify-start rounded-[8px] w-[40px]">
                          <Img
                            src="images/img_imagem_17.png"
                            className="h-[40px] md:h-[auto] object-cover rounded-[8px] w-[40px]"
                            alt="Imagem One"
                          />
                        </div>
                        <div className="flex flex-1 flex-col items-start justify-center w-[100%]">
                          <div className="flex items-center justify-start pb-[4px] w-[100%]">
                            <Text
                              className="text-bluegray_800 text-left w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              Aciclovir{" "}
                            </Text>
                          </div>
                          <div className="flex flex-row gap-[4px] items-start justify-start w-[100%]">
                            <div className="flex items-center justify-start w-[auto]">
                              <Text
                                className="font-normal not-italic text-bluegray_500 text-left w-[auto]"
                                variant="body2"
                              >
                                Aciclovir
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
                                className="font-normal not-italic text-bluegray_500 text-left w-[auto]"
                                variant="body2"
                              >
                                10 mg, 25 comprimidos
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
                                Sandoz
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="bg-lime_400 flex items-center justify-center px-[8px] py-[4px] rounded-[4px] w-[auto]">
                          <div className="flex h-[21px] md:h-[auto] items-center justify-center w-[auto]">
                            <Text
                              className="font-medium text-center text-indigo_900 w-[auto]"
                              variant="body2"
                            >
                              Genérico
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row gap-[8px] items-center justify-start w-[auto]">
                      <div className="flex flex-col gap-[8px] items-start justify-start w-[204px]">
                        <div className="flex items-start justify-start w-[auto]">
                          <div className="flex items-start justify-start w-[204px]">
                            <Text
                              className="text-bluegray_900 text-left w-[auto]"
                              as="h4"
                              variant="h4"
                            >
                              R$ 198,99
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-row gap-[4px] items-center justify-start w-[auto]">
                          <div className="flex items-center justify-start w-[auto]">
                            <Text
                              className="font-normal not-italic text-bluegray_500 text-left w-[auto]"
                              variant="body2"
                            >
                              R$ 1,25/dose
                            </Text>
                          </div>
                          <Img
                            src="images/img_info.svg"
                            className="h-[16px] w-[16px]"
                            alt="info"
                          />
                        </div>
                      </div>
                      <div className="bg-indigo_900 flex h-[36px] md:h-[auto] items-center justify-center px-[16px] py-[14px] rounded-[18px] w-[116px]">
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
                  <Img
                    src="images/img_miscdivider_gray_300_1x840.svg"
                    className="h-[1px] w-[100%]"
                    alt="Miscdivider"
                  />
                  <div className="flex md:flex-col flex-row gap-[24px] items-start justify-start p-[24px] sm:px-[20px] w-[100%]">
                    <div className="border-b-[1px] border-gray_300 border-solid sm:h-[142px] h-[41px] relative w-[100%]">
                      <div className="border-b-[1px] border-gray_300 border-solid flex-1 h-[41px] m-[auto] w-[100%]"></div>
                      <div className="absolute flex flex-1 sm:flex-col flex-row gap-[16px] h-[100%] inset-[0] items-start justify-between m-[auto] w-[100%]">
                        <div className="flex h-[40px] items-center justify-start rounded-[8px] w-[40px]">
                          <Img
                            src="images/img_imagem_17.png"
                            className="h-[40px] md:h-[auto] object-cover rounded-[8px] w-[40px]"
                            alt="Imagem Two"
                          />
                        </div>
                        <div className="flex flex-1 flex-col items-start justify-center w-[100%]">
                          <div className="flex items-center justify-start pb-[4px] w-[100%]">
                            <Text
                              className="text-bluegray_800 text-left w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              Aciclovir
                            </Text>
                          </div>
                          <div className="flex flex-row gap-[4px] items-start justify-start w-[100%]">
                            <div className="flex items-center justify-start w-[auto]">
                              <Text
                                className="font-normal not-italic text-bluegray_500 text-left w-[auto]"
                                variant="body2"
                              >
                                Aciclovir
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
                                className="font-normal not-italic text-bluegray_500 text-left w-[auto]"
                                variant="body2"
                              >
                                10 mg, 25 comprimidos
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
                                Sandoz
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="bg-lime_400 flex items-center justify-center px-[8px] py-[4px] rounded-[4px] w-[auto]">
                          <div className="flex h-[21px] md:h-[auto] items-center justify-center w-[auto]">
                            <Text
                              className="font-medium text-center text-indigo_900 w-[auto]"
                              variant="body2"
                            >
                              Genérico
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row gap-[8px] items-center justify-start w-[auto]">
                      <div className="flex flex-col gap-[8px] items-start justify-start w-[204px]">
                        <div className="flex items-start justify-start w-[auto]">
                          <div className="flex items-start justify-start w-[204px]">
                            <Text
                              className="text-bluegray_900 text-left w-[auto]"
                              as="h4"
                              variant="h4"
                            >
                              R$ 198,99
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-row gap-[4px] items-center justify-start w-[auto]">
                          <div className="flex items-center justify-start w-[auto]">
                            <Text
                              className="font-normal not-italic text-bluegray_500 text-left w-[auto]"
                              variant="body2"
                            >
                              R$ 1,25/dose
                            </Text>
                          </div>
                          <Img
                            src="images/img_info.svg"
                            className="h-[16px] w-[16px]"
                            alt="info One"
                          />
                        </div>
                      </div>
                      <div className="bg-indigo_900 flex h-[36px] md:h-[auto] items-center justify-center px-[16px] py-[14px] rounded-[18px] w-[116px]">
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
                  <Img
                    src="images/img_miscdivider_gray_300_1x840.svg"
                    className="h-[1px] w-[100%]"
                    alt="Miscdivider One"
                  />
                  <div className="flex md:flex-col flex-row gap-[24px] items-start justify-start p-[24px] sm:px-[20px] w-[100%]">
                    <div className="border-b-[1px] border-gray_300 border-solid sm:h-[142px] h-[41px] relative w-[100%]">
                      <div className="border-b-[1px] border-gray_300 border-solid flex-1 h-[41px] m-[auto] w-[100%]"></div>
                      <div className="absolute flex flex-1 sm:flex-col flex-row gap-[16px] h-[100%] inset-[0] items-start justify-between m-[auto] w-[100%]">
                        <div className="flex h-[40px] items-center justify-start rounded-[8px] w-[40px]">
                          <Img
                            src="images/img_imagem_17.png"
                            className="h-[40px] md:h-[auto] object-cover rounded-[8px] w-[40px]"
                            alt="Imagem Three"
                          />
                        </div>
                        <div className="flex flex-1 flex-col items-start justify-center w-[100%]">
                          <div className="flex items-center justify-start pb-[4px] w-[100%]">
                            <Text
                              className="text-bluegray_800 text-left w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              Aciclovir{" "}
                            </Text>
                          </div>
                          <div className="flex flex-row gap-[4px] items-start justify-start w-[100%]">
                            <div className="flex items-center justify-start w-[auto]">
                              <Text
                                className="font-normal not-italic text-bluegray_500 text-left w-[auto]"
                                variant="body2"
                              >
                                Aciclovir
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
                                className="font-normal not-italic text-bluegray_500 text-left w-[auto]"
                                variant="body2"
                              >
                                10 mg, 25 comprimidos
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
                                Sandoz
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="bg-lime_400 flex items-center justify-center px-[8px] py-[4px] rounded-[4px] w-[auto]">
                          <div className="flex h-[21px] md:h-[auto] items-center justify-center w-[auto]">
                            <Text
                              className="font-medium text-center text-indigo_900 w-[auto]"
                              variant="body2"
                            >
                              Genérico
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row gap-[8px] items-center justify-start w-[auto]">
                      <div className="flex flex-col gap-[8px] items-start justify-start w-[204px]">
                        <div className="flex items-start justify-start w-[auto]">
                          <div className="flex items-start justify-start w-[204px]">
                            <Text
                              className="text-bluegray_900 text-left w-[auto]"
                              as="h4"
                              variant="h4"
                            >
                              R$ 198,99
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-row gap-[4px] items-center justify-start w-[auto]">
                          <div className="flex items-center justify-start w-[auto]">
                            <Text
                              className="font-normal not-italic text-bluegray_500 text-left w-[auto]"
                              variant="body2"
                            >
                              R$ 1,25/dose
                            </Text>
                          </div>
                          <Img
                            src="images/img_info.svg"
                            className="h-[16px] w-[16px]"
                            alt="info Two"
                          />
                        </div>
                      </div>
                      <div className="bg-indigo_900 flex h-[36px] md:h-[auto] items-center justify-center px-[16px] py-[14px] rounded-[18px] w-[116px]">
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
                <div className="bg-white_A700 flex flex-row gap-[8px] h-[44px] md:h-[auto] items-center justify-center px-[16px] py-[8px] rounded-[4px] shadow-bs w-[auto]">
                  <Button
                    className="cursor-pointer font-medium h-[24px] text-[12px] text-center text-light_green_A200 tracking-[-0.54px] w-[24px]"
                    shape="RoundedBorder4"
                    size="md"
                    variant="FillIndigo900"
                  >
                    1
                  </Button>
                  <div className="flex h-[24px] md:h-[auto] items-center justify-center p-[8px] w-[24px]">
                    <Text
                      className="font-medium text-indigo_900 text-left tracking-[-0.54px] w-[auto]"
                      variant="body2"
                    >
                      2
                    </Text>
                  </div>
                  <div className="flex h-[24px] md:h-[auto] items-center justify-center p-[8px] w-[24px]">
                    <Text
                      className="font-medium text-indigo_900 text-left tracking-[-0.54px] w-[auto]"
                      variant="body2"
                    >
                      ...
                    </Text>
                  </div>
                  <div className="flex h-[24px] md:h-[auto] items-center justify-center p-[8px] w-[24px]">
                    <Text
                      className="font-medium text-indigo_900 text-left tracking-[-0.54px] w-[auto]"
                      variant="body2"
                    >
                      10
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-bluegray_900 flex md:flex-col flex-row gap-[32px] items-start justify-start max-w-[1366px] mt-[113px] px-[120px] sm:px-[20px] md:px-[40px] py-[48px] w-[100%]">
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
                    alt="menu One"
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
                <div className="flex flex-col gap-[4px] items-start justify-start p-[8px] w-[100%]">
                  <div className="flex items-start justify-start pb-[4px] w-[auto]">
                    <Text
                      className="text-left text-white_A700 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Sobre a Pill
                    </Text>
                  </div>
                  <div className="flex items-center justify-center w-[auto]">
                    <Text
                      className="font-normal not-italic text-left text-white_A700 w-[auto]"
                      variant="body1"
                    >
                      Quem somos
                    </Text>
                  </div>
                  <div className="flex items-center justify-center w-[auto]">
                    <Text
                      className="font-normal not-italic text-left text-white_A700 w-[auto]"
                      variant="body1"
                    >
                      Blog da Pill
                    </Text>
                  </div>
                  <div className="flex items-center justify-center w-[auto]">
                    <Text
                      className="font-normal not-italic text-left text-white_A700 w-[auto]"
                      variant="body1"
                    >
                      Trabalhe conosco
                    </Text>
                  </div>
                </div>
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
                <div className="flex flex-col gap-[4px] items-start justify-start p-[8px] w-[auto]">
                  <div className="flex items-start justify-start pb-[4px] w-[auto]">
                    <Text
                      className="text-left text-white_A700 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Informações técnicas
                    </Text>
                  </div>
                  <div className="flex items-center justify-center w-[auto]">
                    <Text
                      className="font-normal not-italic text-left text-white_A700 w-[auto]"
                      variant="body1"
                    >
                      Termos e Políticas
                    </Text>
                  </div>
                  <div className="flex items-center justify-center w-[auto]">
                    <Text
                      className="font-normal not-italic text-left text-white_A700 w-[auto]"
                      variant="body1"
                    >
                      Dúvidas frequentes
                    </Text>
                  </div>
                </div>
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BuscaPage;
