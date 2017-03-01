import React from "react";
import Header from "./Header";
import Footer from "./Footer";

class Main extends React.Component {
    render() {
        return (
            <section>
                <Header />
                {/* Yield all components */}
                {React.cloneElement(this.props.children, this.props)}
                <Footer />
            </section>
        )
    }
}

export default Main;