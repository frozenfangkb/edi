import { Box } from "@mui/system";
import ImageGallery from "react-image-gallery";

export const Final: React.FC = () => {
    const images = [
        {
            original: "/images/princes-street-gardens.jpg",
        },
        {
            original: "/images/royal-mile.jpg",
        },
        {
            original: "/images/calton-hill.jpg",
        },
        {
            original: "/images/catedral-saint-giles.jpg",
        },
        {
            original: "/images/victoria-street.jpg",
        },
    ];

    return (
        <Box
            sx={{
                p: "2.5rem",
                display: "flex",
                flexDirection: "column",
                gap: "2rem",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Box sx={{ width: "60%" }}>
                Vamos a visitar la hermosa ciudad de Edimburgo, a descubrir su
                castillo, sus calles, su catedral, sus jardines... Un lugar más
                que añadir a nuestra lista de ciudades visitadas juntos, a
                nuestra historia, a la entrada de nuestro hogar...
            </Box>
            <Box sx={{ width: "60%" }}>
                Nos alojaremos en el hotel{" "}
                <a
                    href="https://www.booking.com/hotel/gb/moxy-edinburgh-fountainbridge.es.html"
                    target="_blank"
                    rel="noreferrer"
                >
                    Moxy Edinburgh Fountainbridge
                </a>
                , muy cerca del centro de la ciudad, y veremos sitios
                alucinantes como estos:
            </Box>
            <ImageGallery items={images} />
            <Box>
                Te quiero Saray, espero que este viajecito te haga tanta ilusión
                como a mí ❤
            </Box>
        </Box>
    );
};
