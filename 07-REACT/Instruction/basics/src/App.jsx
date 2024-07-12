import { useState } from "react";
import MyComponent from "./components/01-my-component/MyComponent";
import { AnotherComponent } from "./components/01-my-component/MyComponent";
import Jsx1 from "./components/02-jsx/Jsx1";
import Jsx2 from "./components/02-jsx/Jsx2";
import Jsx3 from "./components/02-jsx/Jsx3";
import Jsx4 from "./components/02-jsx/Jsx4";
import ExternalStyling from "./components/03-styles/ExternalStyling";
import InlineStyling from "./components/03-styles/InlineStyling";
import InternalStyling from "./components/03-styles/InternalStyling";
import ModuleStyling from "./components/03-styles/ModuleStyling";
import Scss from "./components/03-styles/Scss";
import DigitalClock1 from "./components/04-digital-clock1/DigitalClock1";
import Card from "./components/05-props/Card";
import Child from "./components/05-props/Child";
import Parent from "./components/05-props/Parent";
import DigitalClock2 from "./components/06-digital-clock2/DigitalClock2";
import Image from "./components/07-images/Image";
import ProfileCard from "./components/08-profile-card/ProfileCard";
import Bootstrap from "./components/09-bootstrap/Bootstrap";
import ReactBootstrap from "./components/09-bootstrap/ReactBootstrap";
import ReactIcons from "./components/10-icon-libraries/ReactIcons";
import Events from "./components/11-events/Events";
import ProductShop from "./components/12-product-shop/ProductShop";
import State from "./components/13-usestate/state";
import Counter1 from "./components/14-counter1/Counter1";
import BornToday from "./components/15-born-today/BornToday";
import UseEffect from "./components/16-useeffect/UseEffect";

import clothingData from "./data/clothing.json";
import profileCardData from "./data/profile-card.json";
import { Button } from "react-bootstrap";
import Counter2 from "./components/17-counter2/Counter2";
import DigitalClock3 from "./components/18-digital-clock3/DigitalClock3";
import UseRef from "./components/19-useref/UseRef";
import ClassTypeComponent from "./components/20-component-types/ClassTypeComponents";
import FunctionTypeComponents from "./components/20-component-types/FunctionTypeComponents";
import Countries from "./components/21-countries/Countries";
import ParentComponent from "./components/22-lifting-state-up/ParentComponent";
import Form1 from "./components/23-forms/Form1";
import Form2 from "./components/23-forms/Form2";
import Form3 from "./components/23-forms/Form3";
import Form4 from "./components/23-forms/Form4";
import Form5 from "./components/23-forms/Form5";
import FormikYup1 from "./components/24-formik-yup/FormikYup1";
import FormikYup2 from "./components/24-formik-yup/FormikYup2";

const App = () => {
    // const [isShowing, setIsShowing] = useState(true);

    // const handleToggle = () => {
    //     setIsShowing((prev) => !prev);
    // };

    return (
        <div>
            {/* <div className="external-styling-container">
                <h1>EXTERNAL STYLING</h1>
                <ul id="external-styling-list">
                    <li>Internal Styling</li>
                    <li>Inline Styling</li>
                    <li>External Styling</li>
                </ul>
            </div>
            <MyComponent />
            <AnotherComponent /> */}
            {/* JSX */}
            {/* <Jsx1 />
            <Jsx2 />
            <Jsx3 />
            <Jsx4 /> */}
            {/* STYLES */}
            {/* <InlineStyling />
            <InternalStyling />
            <ExternalStyling />
            <ModuleStyling />
            <Scss /> */}
            {/* DIGITAL CLOCKS */}
            {/* <DigitalClock1 />
            <DigitalClock2 color="white" backgroundColor="red" />
            <DigitalClock3 color="white" backgroundColor="green" /> */}
            {/* PROPS */}
            {/* <div
                style={{
                    padding: "3rem",
                    display: "flex",
                    justifyContent: "center",
                    gap: "2rem",
                    flexWrap: "wrap",
                }}>
                {clothingData.map((item) => (
                    <Card
                        key={item.id}
                        // {...item}
                        title={item.title}
                        text={item.text}
                        imgUrl={item.imgUrl}
                    />
                ))}
            </div>
            <Parent>
                <Child />
            </Parent> */}
            {/* IMAGES */}
            {/* <Image /> */}
            {/* PROFILE CARD */}
            {/* <div style={{ display: "flex", flexWrap: "wrap" }}>
                <ProfileCard
                    title="Walker"
                    location="Nashville, TN"
                    statistics={[
                        {
                            label: "Shot",
                            value: "14",
                        },
                        {
                            label: "Followers",
                            value: "300",
                        },
                        {
                            label: "Following",
                            value: "421",
                        },
                    ]}
                />
                <ProfileCard {...profileCardData} />
            </div> */}
            {/* BOOTSTRAP */}
            {/* <Bootstrap />
            <ReactBootstrap /> */}
            {/* ICON LIBRARIES */}
            {/* <ReactIcons /> */}
            {/* EVENTS */}
            {/* <Events /> */}
            {/* PRODUCT SHOP */}
            {/* <ProductShop /> */}
            {/* USESTATE */}
            {/* <State /> */}
            {/* COUNTERS */}
            {/* <Counter1 />
            <Counter2 /> */}
            {/* BORN TODAY */}
            {/* <BornToday /> */}
            {/* USEEFFECT */}
            {/* {isShowing && <UseEffect />} */}
            {/* <Button onClick={handleToggle}>TOGGLE SHOW</Button> */}
            {/* USEREF */}
            {/* <UseRef /> */}
            {/* COMPONENT TYPES */}
            {/* <ClassTypeComponent /> */}
            {/* <FunctionTypeComponents /> */}
            {/* COUNTRIES */}
            {/* <Countries /> */}
            {/* LIFTING STATE UP */}
            {/* <ParentComponent /> */}
            {/* FORMS */}
            <Form1 />
            <Form2 />
            <Form3 />
            <Form4 />
            <Form5 />
            <FormikYup1 />
            <FormikYup2 />
        </div>
    );
};

export default App;
