const InlineStylingPage = () => {
    const isDisabled = false;

    return (
        <div
            disabled={isDisabled}
            style={{
                border: "1px solid red",
                margin: "1rem 1rem",
                textAlign: "center",
                padding: "1rem",
                borderRadius: "1rem",
            }}>
            <h1 style={{ color: "pink" }}>INLINE STYLING</h1>
            <p style={{ fontStyle: "italic" }}>
                Explicabo sint veritatis aspernatur tempora beatae, ipsa libero
                modi a quibusdam facilis consequuntur distinctio debitis
                incidunt, nostrum ipsam, doloremque facere blanditiis nesciunt!
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Explicabo sint veritatis aspernatur tempora beatae, ipsa libero
                modi a quibusdam facilis consequuntur distinctio debitis
                incidunt, nostrum ipsam, doloremque facere blanditiis nesciunt!
            </p>
        </div>
    );
};

export default InlineStylingPage;
