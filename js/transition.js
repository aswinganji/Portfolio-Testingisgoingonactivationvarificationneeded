import Highway from "@dogstudio/highway";
import {
    TimelineLite
} from "gsap";
import {
    Timeline
} from "gsap/gsap-core";

class Fade extends Highway.Transition {
    in ({
        from,
        to,
        done
    }) {

        const tl = new TimelineLite();
        tl.fromTo(to, 0.5, {
                left: "-100%",
                top: "50%",
                borderRadius: "30px"
            }, {
                left: "0%"
            })
            .fromTo(to, 0.5, {
                height: "2vh"
            }, {
                height: "90vh",
                top: "10%",
                borderRadius: "0px",

                onComplete: function () {

                    from.remove();
                    done();
                }
            })
            .fromTo(to.children[0], 2, {
                opacity: "0"
            }, {
                opacity: "1"
            })

    }
    out({
        from,
        done
    }) {
        done();
    }
}

export default Fade;