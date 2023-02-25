import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const Template = React.lazy(() => import("pages/Template"));
const Cadastropessoajuridica = React.lazy(() =>
  import("pages/Cadastropessoajuridica")
);
const Cadastropessoafisica = React.lazy(() =>
  import("pages/Cadastropessoafisica")
);
const Cadastro = React.lazy(() => import("pages/Cadastro"));
const Loginsenhaalteradacomsucesso = React.lazy(() =>
  import("pages/Loginsenhaalteradacomsucesso")
);
const Loginrecuperacaodesenha = React.lazy(() =>
  import("pages/Loginrecuperacaodesenha")
);
const Logindadosinvalidos = React.lazy(() =>
  import("pages/Logindadosinvalidos")
);
const Logininserirdados = React.lazy(() => import("pages/Logininserirdados"));
const Semresultados = React.lazy(() => import("pages/Semresultados"));
const Busca = React.lazy(() => import("pages/Busca"));
const Categorialista = React.lazy(() => import("pages/Categorialista"));
const Categoriagrid = React.lazy(() => import("pages/Categoriagrid"));
const Produto = React.lazy(() => import("pages/Produto"));
const DesktopCheckoutPagamentocartosalvo = React.lazy(() =>
  import("pages/DesktopCheckoutPagamentocartosalvo")
);
const DesktopCheckoutPagamentorecusado = React.lazy(() =>
  import("pages/DesktopCheckoutPagamentorecusado")
);
const DesktopCheckoutConclusocartoAccordionaberto = React.lazy(() =>
  import("pages/DesktopCheckoutConclusocartoAccordionaberto")
);
const DesktopCheckoutPagamentoPIXOne = React.lazy(() =>
  import("pages/DesktopCheckoutPagamentoPIXOne")
);
const DesktopCheckoutPagamentoPIX = React.lazy(() =>
  import("pages/DesktopCheckoutPagamentoPIX")
);
const DesktopCheckoutConclusocarto = React.lazy(() =>
  import("pages/DesktopCheckoutConclusocarto")
);
const DesktopCheckoutPagamentoPIXTwo = React.lazy(() =>
  import("pages/DesktopCheckoutPagamentoPIXTwo")
);
const DesktopCheckoutPagamentocarto = React.lazy(() =>
  import("pages/DesktopCheckoutPagamentocarto")
);
const DesktopCheckoutPagamento = React.lazy(() =>
  import("pages/DesktopCheckoutPagamento")
);
const DesktopCheckoutEntregaendereoadicionado = React.lazy(() =>
  import("pages/DesktopCheckoutEntregaendereoadicionado")
);
const DesktopCheckoutReceitaOne = React.lazy(() =>
  import("pages/DesktopCheckoutReceitaOne")
);
const DesktopCheckoutEntregaformscompleto = React.lazy(() =>
  import("pages/DesktopCheckoutEntregaformscompleto")
);
const DesktopCheckoutReceita = React.lazy(() =>
  import("pages/DesktopCheckoutReceita")
);
const DesktopCheckoutReceitaTwo = React.lazy(() =>
  import("pages/DesktopCheckoutReceitaTwo")
);
const DesktopCarrinhoCarrinhovazio = React.lazy(() =>
  import("pages/DesktopCarrinhoCarrinhovazio")
);
const DesktopCarrinhoCrosssellCEPnoatendido = React.lazy(() =>
  import("pages/DesktopCarrinhoCrosssellCEPnoatendido")
);
const DesktopCarrinhoItemindisponvel = React.lazy(() =>
  import("pages/DesktopCarrinhoItemindisponvel")
);
const DesktopCarrinhoRecorrenteAvulsa = React.lazy(() =>
  import("pages/DesktopCarrinhoRecorrenteAvulsa")
);
const DesktopCarrinhoScompraavulsa = React.lazy(() =>
  import("pages/DesktopCarrinhoScompraavulsa")
);
const DesktopMinhacontaCartesOne = React.lazy(() =>
  import("pages/DesktopMinhacontaCartesOne")
);
const DesktopMinhacontaCartes = React.lazy(() =>
  import("pages/DesktopMinhacontaCartes")
);
const DesktopMinhacontaEndereos = React.lazy(() =>
  import("pages/DesktopMinhacontaEndereos")
);
const DesktopMinhacontaEndereosOne = React.lazy(() =>
  import("pages/DesktopMinhacontaEndereosOne")
);
const DesktopMinhacontaDetalhedopedidoboleto = React.lazy(() =>
  import("pages/DesktopMinhacontaDetalhedopedidoboleto")
);
const DesktopMinhacontaDetalhedopedidocarto = React.lazy(() =>
  import("pages/DesktopMinhacontaDetalhedopedidocarto")
);
const DesktopMinhacontaHistricodepedidos = React.lazy(() =>
  import("pages/DesktopMinhacontaHistricodepedidos")
);
const DesktopMinhacontaHistricodepedidosOne = React.lazy(() =>
  import("pages/DesktopMinhacontaHistricodepedidosOne")
);
const DesktopMinhacontaMeusdadosalterarsenha = React.lazy(() =>
  import("pages/DesktopMinhacontaMeusdadosalterarsenha")
);
const DesktopMinhacontaMeusdadoseditar = React.lazy(() =>
  import("pages/DesktopMinhacontaMeusdadoseditar")
);
const DesktopRePillJuntarentregasTwo = React.lazy(() =>
  import("pages/DesktopRePillJuntarentregasTwo")
);
const DesktopRePillJuntarentregas = React.lazy(() =>
  import("pages/DesktopRePillJuntarentregas")
);
const DesktopRePillJuntarentregasThree = React.lazy(() =>
  import("pages/DesktopRePillJuntarentregasThree")
);
const DesktopRePillGerenciarAlterarendereo = React.lazy(() =>
  import("pages/DesktopRePillGerenciarAlterarendereo")
);
const DesktopRePillGerenciarAlterarformadepagamento = React.lazy(() =>
  import("pages/DesktopRePillGerenciarAlterarformadepagamento")
);
const DesktopRePillGerenciarAlterarendereoOne = React.lazy(() =>
  import("pages/DesktopRePillGerenciarAlterarendereoOne")
);
const DesktopRePillGerenciarAtualizarreceita = React.lazy(() =>
  import("pages/DesktopRePillGerenciarAtualizarreceita")
);
const DesktopRePillGerenciarPularentrega = React.lazy(() =>
  import("pages/DesktopRePillGerenciarPularentrega")
);
const DesktopRePillGerenciar = React.lazy(() =>
  import("pages/DesktopRePillGerenciar")
);
const DesktopRePillJuntarentregasOne = React.lazy(() =>
  import("pages/DesktopRePillJuntarentregasOne")
);
const DesktopRePillJuntarentregasFour = React.lazy(() =>
  import("pages/DesktopRePillJuntarentregasFour")
);
const DesktopRePillInformaes = React.lazy(() =>
  import("pages/DesktopRePillInformaes")
);
const DesktopRePillInformaesEmptystate = React.lazy(() =>
  import("pages/DesktopRePillInformaesEmptystate")
);
const Faq = React.lazy(() => import("pages/Faq"));
const Home1 = React.lazy(() => import("pages/Home1"));
const Quemsomos = React.lazy(() => import("pages/Quemsomos"));
const Trabalheconosco = React.lazy(() => import("pages/Trabalheconosco"));
const Termospoliticas = React.lazy(() => import("pages/Termospoliticas"));
const Erro404 = React.lazy(() => import("pages/Erro404"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/erro404" element={<Erro404 />} />
          <Route path="/termospoliticas" element={<Termospoliticas />} />
          <Route path="/trabalheconosco" element={<Trabalheconosco />} />
          <Route path="/quemsomos" element={<Quemsomos />} />
          <Route path="/home1" element={<Home1 />} />
          <Route path="/faq" element={<Faq />} />
          <Route
            path="/desktoprepillinformaesemptystate"
            element={<DesktopRePillInformaesEmptystate />}
          />
          <Route
            path="/desktoprepillinformaes"
            element={<DesktopRePillInformaes />}
          />
          <Route
            path="/desktoprepilljuntarentregasfour"
            element={<DesktopRePillJuntarentregasFour />}
          />
          <Route
            path="/desktoprepilljuntarentregasone"
            element={<DesktopRePillJuntarentregasOne />}
          />
          <Route
            path="/desktoprepillgerenciar"
            element={<DesktopRePillGerenciar />}
          />
          <Route
            path="/desktoprepillgerenciarpularentrega"
            element={<DesktopRePillGerenciarPularentrega />}
          />
          <Route
            path="/desktoprepillgerenciaratualizarreceita"
            element={<DesktopRePillGerenciarAtualizarreceita />}
          />
          <Route
            path="/desktoprepillgerenciaralterarendereoone"
            element={<DesktopRePillGerenciarAlterarendereoOne />}
          />
          <Route
            path="/desktoprepillgerenciaralterarformadepagamento"
            element={<DesktopRePillGerenciarAlterarformadepagamento />}
          />
          <Route
            path="/desktoprepillgerenciaralterarendereo"
            element={<DesktopRePillGerenciarAlterarendereo />}
          />
          <Route
            path="/desktoprepilljuntarentregasthree"
            element={<DesktopRePillJuntarentregasThree />}
          />
          <Route
            path="/desktoprepilljuntarentregas"
            element={<DesktopRePillJuntarentregas />}
          />
          <Route
            path="/desktoprepilljuntarentregastwo"
            element={<DesktopRePillJuntarentregasTwo />}
          />
          <Route
            path="/desktopminhacontameusdadoseditar"
            element={<DesktopMinhacontaMeusdadoseditar />}
          />
          <Route
            path="/desktopminhacontameusdadosalterarsenha"
            element={<DesktopMinhacontaMeusdadosalterarsenha />}
          />
          <Route
            path="/desktopminhacontahistricodepedidosone"
            element={<DesktopMinhacontaHistricodepedidosOne />}
          />
          <Route
            path="/desktopminhacontahistricodepedidos"
            element={<DesktopMinhacontaHistricodepedidos />}
          />
          <Route
            path="/desktopminhacontadetalhedopedidocarto"
            element={<DesktopMinhacontaDetalhedopedidocarto />}
          />
          <Route
            path="/desktopminhacontadetalhedopedidoboleto"
            element={<DesktopMinhacontaDetalhedopedidoboleto />}
          />
          <Route
            path="/desktopminhacontaendereosone"
            element={<DesktopMinhacontaEndereosOne />}
          />
          <Route
            path="/desktopminhacontaendereos"
            element={<DesktopMinhacontaEndereos />}
          />
          <Route
            path="/desktopminhacontacartes"
            element={<DesktopMinhacontaCartes />}
          />
          <Route
            path="/desktopminhacontacartesone"
            element={<DesktopMinhacontaCartesOne />}
          />
          <Route
            path="/desktopcarrinhoscompraavulsa"
            element={<DesktopCarrinhoScompraavulsa />}
          />
          <Route
            path="/desktopcarrinhorecorrenteavulsa"
            element={<DesktopCarrinhoRecorrenteAvulsa />}
          />
          <Route
            path="/desktopcarrinhoitemindisponvel"
            element={<DesktopCarrinhoItemindisponvel />}
          />
          <Route
            path="/desktopcarrinhocrosssellcepnoatendido"
            element={<DesktopCarrinhoCrosssellCEPnoatendido />}
          />
          <Route
            path="/desktopcarrinhocarrinhovazio"
            element={<DesktopCarrinhoCarrinhovazio />}
          />
          <Route
            path="/desktopcheckoutreceitatwo"
            element={<DesktopCheckoutReceitaTwo />}
          />
          <Route
            path="/desktopcheckoutreceita"
            element={<DesktopCheckoutReceita />}
          />
          <Route
            path="/desktopcheckoutentregaformscompleto"
            element={<DesktopCheckoutEntregaformscompleto />}
          />
          <Route
            path="/desktopcheckoutreceitaone"
            element={<DesktopCheckoutReceitaOne />}
          />
          <Route
            path="/desktopcheckoutentregaendereoadicionado"
            element={<DesktopCheckoutEntregaendereoadicionado />}
          />
          <Route
            path="/desktopcheckoutpagamento"
            element={<DesktopCheckoutPagamento />}
          />
          <Route
            path="/desktopcheckoutpagamentocarto"
            element={<DesktopCheckoutPagamentocarto />}
          />
          <Route
            path="/desktopcheckoutpagamentopixtwo"
            element={<DesktopCheckoutPagamentoPIXTwo />}
          />
          <Route
            path="/desktopcheckoutconclusocarto"
            element={<DesktopCheckoutConclusocarto />}
          />
          <Route
            path="/desktopcheckoutpagamentopix"
            element={<DesktopCheckoutPagamentoPIX />}
          />
          <Route
            path="/desktopcheckoutpagamentopixone"
            element={<DesktopCheckoutPagamentoPIXOne />}
          />
          <Route
            path="/desktopcheckoutconclusocartoaccordionaberto"
            element={<DesktopCheckoutConclusocartoAccordionaberto />}
          />
          <Route
            path="/desktopcheckoutpagamentorecusado"
            element={<DesktopCheckoutPagamentorecusado />}
          />
          <Route
            path="/desktopcheckoutpagamentocartosalvo"
            element={<DesktopCheckoutPagamentocartosalvo />}
          />
          <Route path="/produto" element={<Produto />} />
          <Route path="/categoriagrid" element={<Categoriagrid />} />
          <Route path="/categorialista" element={<Categorialista />} />
          <Route path="/busca" element={<Busca />} />
          <Route path="/semresultados" element={<Semresultados />} />
          <Route path="/logininserirdados" element={<Logininserirdados />} />
          <Route
            path="/logindadosinvalidos"
            element={<Logindadosinvalidos />}
          />
          <Route
            path="/loginrecuperacaodesenha"
            element={<Loginrecuperacaodesenha />}
          />
          <Route
            path="/loginsenhaalteradacomsucesso"
            element={<Loginsenhaalteradacomsucesso />}
          />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route
            path="/cadastropessoafisica"
            element={<Cadastropessoafisica />}
          />
          <Route
            path="/cadastropessoajuridica"
            element={<Cadastropessoajuridica />}
          />
          <Route path="/template" element={<Template />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
