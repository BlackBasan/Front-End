import moduleStyles from "./ModuleStyling.module.css";

const ModuleStyling = () => {
    // console.log(moduleStyles["module-paragraph-style"]);

    return (
        <div className={moduleStyles.moduleContainerStyle}>
            <h1 id={moduleStyles.moduleHeadingStyle}>MODULE STYLING</h1>
            <p className={moduleStyles["module-paragraph-style"]}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                voluptas, natus, tempore, quae voluptatibus quas voluptatem
                voluptatum quos fugiat quod quibusdam. Quisquam, voluptatibus
                voluptas. Quisquam, voluptatibus voluptas. Quisquam, voluptas.
                Quisquam, voluptatibus voluptas. Quisquam, voluptatibus
                voluptas. Quisquam, voluptatibus voluptas. Quisquam,
                voluptatibus voluptas. Quisquam
            </p>
        </div>
    );
};

export default ModuleStyling;
