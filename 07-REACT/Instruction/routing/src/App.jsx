import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/home";
import Jsx from "./pages/jsx/jsx";
import JsxPage1 from "./pages/jsx/jsx1";
import JsxPage2 from "./pages/jsx/jsx2";
import JsxPage3 from "./pages/jsx/jsx3";
import JsxPage4 from "./pages/jsx/jsx4";
import StylesPage from "./pages/styles/styles";
import InlineStylingPage from "./pages/styles/inline-styling";
import ExternalStylingPage from "./pages/styles/external-styling";
import InternalStylingPage from "./pages/styles/internal-styling";
import ModuleStylingPage from "./pages/styles/module-styling";
import ScssPage from "./pages/styles/Scss";
import DigitalClocksPage from "./pages/digital-clocks/digital-clocks";
import DigitalClock1Page from "./pages/digital-clocks/digital-clock1";
import DigitalClock2Page from "./pages/digital-clocks/digital-clock2";
import DigitalClock3Page from "./pages/digital-clocks/digital-clock3";
import PropsPage from "./pages/props/props";
import ParentPage from "./pages/props/parent";
import PropsCardPage from "./pages/props/props-card";
import Child from "./components/props/Child";
import ImagePage from "./pages/image/image";
import ProfileCardPage from "./pages/profile-card/profile-card";
import ReactBootstrapPage from "./pages/bootstrap/react-bootstrap";
import BootstrapPage from "./pages/bootstrap/Bootstrap";
import FormsPage from "./pages/forms/forms";
import Form1Page from "./pages/forms/form1";
import Form2Page from "./pages/forms/Form2";
import Form3Page from "./pages/forms/Form3";
import Form4Page from "./pages/forms/form4";
import Form5Page from "./pages/forms/form5";
import FormikYup2Page from "./pages/forms/formik-yup2";
import FormikYup1Page from "./pages/forms/formik-yup1";
import ReactIconsPage from "./pages/icon-libraries/react-icons";
import EventsPage from "./pages/events/Events";
import ProductShopPage from "./pages/product-shop/product-shop";
import StatePage from "./pages/state/State";
import CountersPage from "./pages/counters/counters";
import Counter1Page from "./pages/counters/Counter1";
import Counter2Page from "./pages/counters/Counter2";
import BornTodayPage from "./pages/born-today/born-today";
import SideEffectsPage from "./pages/side-effects/side-effects";
import UseRefPage from "./pages/use-ref/use-ref";
import ComponentTypesPage from "./pages/component-types/component-types";
import ClassTypeComponentsPage from "./pages/component-types/class-type-components";
import FunctionTypeComponentsPage from "./pages/component-types/function-type-components";
import CountriesPage from "./pages/countries/Countries";
import ParentComponentPage from "./pages/lifting-state-up/parent-component";

const App = () => {
    return (
        <Routes>
            <Route path="/">
                <Route index element={<HomePage />} />
                {/* JSX ROUTE */}
                <Route path="jsx">
                    <Route index element={<Jsx />} />
                    <Route path="1" element={<JsxPage1 />} />
                    <Route path="2" element={<JsxPage2 />} />
                    <Route path="3" element={<JsxPage3 />} />
                    <Route path="4" element={<JsxPage4 />} />
                </Route>
                {/* STYLES ROUTE */}
                <Route path="styles">
                    <Route index element={<StylesPage />} />
                    <Route
                        path="inline-styling"
                        element={<InlineStylingPage />}
                    />
                    <Route
                        path="external-styling"
                        element={<ExternalStylingPage />}
                    />
                    <Route
                        path="internal-styling"
                        element={<InternalStylingPage />}
                    />
                    <Route
                        path="module-styling"
                        element={<ModuleStylingPage />}
                    />
                    <Route path="scss" element={<ScssPage />} />
                </Route>
                {/* DIGITAL CLOCKS ROUTE */}
                <Route path="digital-clocks">
                    <Route index element={<DigitalClocksPage />} />
                    <Route path="1" element={<DigitalClock1Page />} />
                    <Route
                        path="2"
                        element={
                            <DigitalClock2Page
                                color="white"
                                backgroundColor="red"
                            />
                        }
                    />
                    <Route
                        path="3"
                        element={
                            <DigitalClock3Page
                                color="white"
                                backgroundColor="green"
                            />
                        }
                    />
                </Route>
                {/* PROPS */}
                <Route path="props">
                    <Route index element={<PropsPage />} />
                    <Route path="card" element={<PropsCardPage />} />
                    <Route
                        path="parent"
                        element={
                            <ParentPage>
                                <Child />
                            </ParentPage>
                        }
                    />
                </Route>
                {/* IMAGES */}
                <Route path="images" element={<ImagePage />} />
                {/* PROFILE CARD */}
                <Route path="profile-card" element={<ProfileCardPage />} />
                {/* BOOTSTRAP */}
                <Route path="bootstrap">
                    <Route index element={<BootstrapPage />} />
                    <Route
                        path="react-bootstrap"
                        element={<ReactBootstrapPage />}
                    />
                </Route>
                {/* ICON LIBRARIES */}
                <Route path="icon-libraries" element={<ReactIconsPage />} />
                {/* EVENTS */}
                <Route path="events" element={<EventsPage />} />
                {/* PRODUCT SHOP */}
                <Route path="product-shop" element={<ProductShopPage />} />
                {/* USESTATE */}
                <Route path="use-state" element={<StatePage />} />
                {/* COUNTERS */}
                <Route path="counters">
                    <Route index element={<CountersPage />} />
                    <Route path="1" element={<Counter1Page />} />
                    <Route path="2" element={<Counter2Page />} />
                </Route>
                {/* BORN TODAY */}
                <Route path="born-today" element={<BornTodayPage />} />
                {/* USEEFFECT */}
                <Route path="side-effects">
                    <Route index element={<SideEffectsPage />} />
                </Route>
                {/* USEREF */}
                <Route path="use-ref" element={<UseRefPage />} />
                {/* COMPONENT TYPES */}
                <Route path="component-types">
                    <Route index element={<ComponentTypesPage />} />
                    <Route
                        path="class-type"
                        element={<ClassTypeComponentsPage />}
                    />
                    <Route
                        path="function-type"
                        element={<FunctionTypeComponentsPage />}
                    />
                </Route>
                {/* COUNTRIES */}
                <Route path="countries" element={<CountriesPage />} />
                {/* LIFTING STATE UP */}
                <Route
                    path="lifting-state-up"
                    element={<ParentComponentPage />}
                />
                {/* FORMS */}
                <Route path="forms">
                    <Route index element={<FormsPage />} />
                    <Route path="1" element={<Form1Page />} />
                    <Route path="2" element={<Form2Page />} />
                    <Route path="3" element={<Form3Page />} />
                    <Route path="4" element={<Form4Page />} />
                    <Route path="5" element={<Form5Page />} />
                    <Route
                        path="formik-and-yup-1"
                        element={<FormikYup1Page />}
                    />
                    <Route
                        path="formik-and-yup-2"
                        element={<FormikYup2Page />}
                    />
                </Route>
            </Route>
        </Routes>
    );
};

export default App;
