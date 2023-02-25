import React from "react";

import { Img, Input, Text, Line } from "components";
import { CloseSVG } from "../../assets/images";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const TermospoliticasPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray_100 flex font-rubik items-center justify-start mx-[auto] pb-[61px] w-[100%]">
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
          <div className="flex md:flex-col flex-row gap-[16px] items-center justify-between w-[100%]">
            <div className="h-[1578px] md:h-[985px] md:px-[20px] relative md:w-[100%] w-[29%]">
              <Img
                src="images/img_group149.png"
                className="absolute bottom-[0] h-[985px] left-[0] object-cover w-[auto]"
                alt="Group149"
              />
              <div className="absolute bg-white_A700 flex flex-col h-[1217px] md:h-[auto] inset-x-[0] items-start justify-start mx-[auto] pl-[120px] sm:pl-[20px] md:pl-[40px] pt-[24px] top-[0] sm:w-[100%] w-[390px]">
                <div className="flex h-[64px] md:h-[auto] items-start justify-center px-[16px] py-[12px] w-[100%]">
                  <div className="flex items-center justify-start w-[100%]">
                    <div className="flex items-start justify-start w-[100%]">
                      <div className="flex items-start justify-start w-[100%]">
                        <Text
                          className="font-medium leading-[120.00%] md:max-w-[100%] max-w-[238px] text-bluegray_800 text-left"
                          as="h5"
                          variant="h5"
                        >
                          Tópicos que você vai encontrar aqui
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center pb-[16px] px-[16px] w-[100%]">
                  <Text
                    className="font-normal leading-[150.00%] md:max-w-[100%] max-w-[238px] not-italic text-bluegray_500 text-left"
                    variant="body2"
                  >
                    Dica da Pill: clique nos títulos para chegar ao conteúdo do
                    seu interesse
                  </Text>
                </div>
                <Input
                  className="font-medium p-[0] text-[16px] placeholder:text-bluegray_800 text-bluegray_800 text-left w-[100%]"
                  wrapClassName="w-[100%]"
                  name="Itemlist"
                  placeholder="Avisos Legais"
                  size="md"
                  variant="OutlineIndigo900"
                ></Input>
                <div className="flex items-start justify-center sm:px-[20px] px-[32px] py-[12px] w-[100%]">
                  <div className="flex items-center justify-start w-[100%]">
                    <div className="flex items-start justify-start w-[100%]">
                      <div className="flex items-start justify-start w-[auto]">
                        <Text
                          className="text-bluegray_800 text-left w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Termos de Uso
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
                          Termos de Serviço
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
                          Política de Privacidade
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
                          Política de Reembolso
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-start justify-center sm:px-[20px] px-[32px] py-[12px] w-[100%]">
                  <div className="flex items-center justify-start w-[100%]">
                    <div className="flex items-start justify-start w-[100%]">
                      <div className="flex items-start justify-start w-[100%]">
                        <Text
                          className="leading-[120.00%] md:max-w-[100%] max-w-[206px] text-bluegray_800 text-left"
                          as="h6"
                          variant="h6"
                        >
                          Política de Troca e Devolução
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[1510px] md:px-[20px] relative md:w-[100%] w-[71%]">
              <div className="flex h-[100%] items-center justify-start m-[auto] w-[100%]">
                <div className="flex md:flex-col flex-row md:gap-[40px] items-start justify-between w-[100%]">
                  <div className="flex flex-1 flex-col gap-[16px] items-start justify-start max-w-[746px] px-[16px] w-[100%]">
                    <div className="flex flex-col gap-[8px] items-start justify-start w-[100%]">
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
                            Termos e Políticas
                          </Text>
                        </div>
                      </div>
                      <div className="flex items-start justify-start pb-[4px] w-[auto]">
                        <Text
                          className="not-italic text-bluegray_800 text-left w-[auto]"
                          as="h2"
                          variant="h2"
                        >
                          Termos e Políticas
                        </Text>
                      </div>
                    </div>
                    <div className="bg-light_green_A200 flex items-center justify-start rounded-[16px] w-[100%]">
                      <div className="flex items-center justify-start rounded-[16px] w-[100%]">
                        <Img
                          src="images/img_imagem_265x714.png"
                          className="h-[265px] md:h-[auto] object-cover rounded-[16px] w-[100%]"
                          alt="Imagem"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-[16px] items-start justify-start md:w-[100%] w-[auto]">
                      <div className="flex items-center justify-center max-w-[714px] pt-[8px] w-[100%]">
                        <Text
                          className="font-normal leading-[150.00%] md:max-w-[100%] max-w-[714px] not-italic text-bluegray_800 text-left"
                          variant="body1"
                        >
                          Olá! Seja bem-vindo(a) aos nossos Termos e Politicas.
                          Este documento determina as regras para a utilização
                          dos serviços disponibilizados pela Pill.
                        </Text>
                      </div>
                      <div className="flex items-center justify-center max-w-[714px] w-[100%]">
                        <Text
                          className="font-normal not-italic text-bluegray_500 text-left w-[auto]"
                          variant="body2"
                        >
                          Pill Farmácia Digital Ltda., Inscrita no CNPJ/MF sob o
                          n°42.111.478/0001-39
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start w-[100%]">
                      <div className="flex items-start justify-start pb-[16px] pt-[8px] sm:w-[100%] w-[auto]">
                        <Text
                          className="text-bluegray_900 text-left w-[auto]"
                          as="h3"
                          variant="h3"
                        >
                          O que todo esse ‘juridiquês’ significa?
                        </Text>
                      </div>
                      <div className="flex items-center justify-center pt-[8px] w-[100%]">
                        <Text
                          className="font-normal leading-[150.00%] md:max-w-[100%] max-w-[714px] not-italic text-bluegray_800 text-left"
                          variant="body1"
                        >
                          Aqui estão presentes todas as orientações de uso e de
                          aplicação dos serviços da Pill. Essas orientações
                          determinam a entrad de novos recursos e/ou ferramentas
                          e tambéminformam aos nossos clientes detalhes de como
                          funcionamos em alguns processos. É nosso acordo com
                          você gravado para ser consultado quando quiser! Ah,
                          aqui também estão as definições da Pill enquanto
                          negócio: o que vende, quais categorias de remedios
                          controlados disponibilizamos, etc.
                        </Text>
                      </div>
                    </div>
                    <div className="bg-white_A700 flex flex-col gap-[8px] items-center justify-start p-[16px] rounded-[8px] shadow-bs w-[100%]">
                      <div className="flex h-[64px] md:h-[auto] items-start justify-center py-[12px] w-[100%]">
                        <div className="flex md:flex-col flex-row gap-[16px] items-center justify-start w-[100%]">
                          <Img
                            src="images/img_warning.svg"
                            className="h-[24px] w-[24px]"
                            alt="warning"
                          />
                          <div className="flex flex-1 flex-col gap-[4px] items-start justify-start w-[100%]">
                            <div className="flex items-start justify-start w-[auto]">
                              <Text
                                className="text-bluegray_900 text-left w-[auto]"
                                as="h3"
                                variant="h3"
                              >
                                Avisos Legais
                              </Text>
                            </div>
                            <div className="flex items-center justify-center w-[auto]">
                              <Text
                                className="font-normal not-italic text-bluegray_500 text-left w-[auto]"
                                variant="body2"
                              >
                                Última atualização em 10/07/2022
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                      <Input
                        className="font-normal not-italic p-[0] text-[14px] placeholder:text-bluegray_800 text-bluegray_800 text-left w-[100%]"
                        wrapClassName="flex w-[100%]"
                        name="Itemmobile"
                        placeholder="Situação Ativa perante ANVISA - Agência Nacional de Vigilância Sanitária"
                        suffix={
                          <div className="h-[24px] ml-[35px] mr-[16px] w-[24px] rounded-[50%]">
                            <Img
                              src="images/img_minimize_indigo_900.svg"
                              className="rounded-[12px] my-[auto]"
                              alt="minimize"
                            />
                          </div>
                        }
                        shape="RoundedBorder8"
                        size="3xl"
                        variant="FillDeeppurple50"
                      ></Input>
                      <div className="border-[1px] border-gray_300 border-solid flex flex-col items-start justify-start pb-[16px] pt-[8px] px-[16px] rounded-[4px] w-[100%]">
                        <div className="flex h-[64px] md:h-[auto] items-start justify-center py-[12px] w-[100%]">
                          <div className="flex md:flex-col flex-row gap-[16px] items-center justify-start w-[100%]">
                            <Img
                              src="images/img_bluetooth.svg"
                              className="h-[24px] w-[24px]"
                              alt="bluetooth"
                            />
                            <div className="flex flex-1 flex-col gap-[4px] items-start justify-start w-[100%]">
                              <div className="flex items-start justify-start w-[100%]">
                                <Text
                                  className="font-medium text-bluegray_800 text-left w-[auto]"
                                  as="h5"
                                  variant="h5"
                                >
                                  O que você vai encontrar
                                </Text>
                              </div>
                              <div className="flex items-center justify-center w-[auto]">
                                <Text
                                  className="font-normal not-italic text-bluegray_500 text-left w-[auto]"
                                  variant="body2"
                                >
                                  (em juridiquês traduzido)
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center justify-center w-[100%]">
                          <Text
                            className="font-normal leading-[150.00%] md:max-w-[100%] max-w-[650px] not-italic text-bluegray_800 text-left"
                            variant="body1"
                          >
                            Essa sessão serve para te dizer o que a Pill é: um
                            comércio de perfumaria, higiene pessoal e
                            medicamentos. Há também códigos que são referentes
                            ás famílias dos medicamentos.
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start w-[100%]">
                        <div className="flex items-start justify-start py-[8px] w-[296px]">
                          <Text
                            className="font-medium text-bluegray_800 text-left w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            Comércio
                          </Text>
                        </div>
                        <div className="flex items-center justify-start py-[8px] w-[296px]">
                          <Text
                            className="font-normal leading-[150.00%] not-italic text-bluegray_800 text-left"
                            variant="body1"
                          >
                            Perfumes
                            <br />
                            Correlatos
                            <br />
                            Alimentos permitidos
                            <br />
                            Produtos de higiene
                            <br />
                            Cosméticos
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start w-[100%]">
                        <div className="flex items-start justify-start py-[8px] w-[296px]">
                          <Text
                            className="leading-[120.00%] md:max-w-[100%] max-w-[296px] text-bluegray_800 text-left"
                            as="h6"
                            variant="h6"
                          >
                            Dispensação de medicamentos contendo substâncias
                            sujeitas ao controle especial
                          </Text>
                        </div>
                        <div className="flex items-center justify-start py-[8px] w-[296px]">
                          <Text
                            className="font-normal leading-[150.00%] not-italic text-bluegray_800 text-left"
                            variant="body1"
                          >
                            C1 - Outras substâncias sujeitas ao controle
                            especial
                            <br />
                            A3 - Substâncias psicotrópicas
                            <br />
                            A2 - Substâncias entorpecentes de uso permitido em
                            concentrações especiais
                            <br />
                            A1 - Substância entorpecentes
                            <br />
                            C2 - Substâncias retnóicas
                            <br />
                            C4 - Substâncias anti-retrovirais C5 - Substâncias
                            anabolizantes B1 - Substâncias psicotrópicas B2 -
                            Substâncias psicotrópicas anorexígenas D1 -
                            Substâncias precursoras de entorpecentes e/ou
                            psicotrópicas
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Img
                    src="images/img_pattern1.png"
                    className="sm:flex-1 h-[364px] md:h-[auto] md:mt-[0] mt-[696px] object-cover sm:w-[100%] w-[auto]"
                    alt="PatternOne"
                  />
                </div>
              </div>
              <Img
                src="images/img_grupo23.png"
                className="absolute bottom-[8%] h-[220px] object-cover right-[0] w-[auto]"
                alt="GrupoTwentyThree"
              />
              <Img
                src="images/img_group150.svg"
                className="absolute h-[169px] right-[5%] top-[40%] w-[auto]"
                alt="Group150"
              />
            </div>
          </div>
          <footer className="bg-bluegray_900 flex md:flex-col flex-row gap-[32px] items-center justify-center mt-[23px] px-[120px] md:px-[20px] py-[48px] w-[100%]">
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

export default TermospoliticasPage;
