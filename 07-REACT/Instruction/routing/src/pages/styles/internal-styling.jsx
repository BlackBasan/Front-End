const InternalStylingPage = () => {
    const containerStyle = {
        border: "1px solid red",
        margin: "1rem",
        borderRadius: "1rem",
        padding: "1rem",
    };

    const headingStyle = {
        fontSize: "2rem",
        color: "green",
        fontStyle: "italic",
        textAlign: "center",
        margin: "1rem 0",
    };

    const paragraphStyle = {
        ...headingStyle,
        fontSize: "1rem",
        color: "red",
    };

    return (
        <div style={containerStyle}>
            <h2 style={headingStyle}>INTERNAL STYLING</h2>
            <p style={paragraphStyle}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum
                similique animi, magnam saepe mollitia delectus molestias
                ducimus reiciendis non consequuntur natus porro doloremque
                libero, consectetur ullam labore vel exercitationem pariatur?
            </p>
            <h2 style={headingStyle}>INTERNAL AND INLINE TOGETHER</h2>
            <p
                style={{
                    ...paragraphStyle,
                    color: "aqua",
                }}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Incidunt voluptate odit obcaecati ut eaque nostrum dolores sunt
                asperiores! Nesciunt libero voluptatibus repudiandae facere eum
                in deserunt quasi laboriosam impedit excepturi.
            </p>
        </div>
    );
};

export default InternalStylingPage;
