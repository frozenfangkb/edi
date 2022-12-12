import { Button } from "@mui/material";
import { Box } from "@mui/system";
import { AnimateGroup, Animate } from "react-simple-animate";
import Image from "next/image";
import { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";

interface Props {
    statements: string[];
    nextStep: () => void;
}

export const Statement: React.FC<Props> = ({ statements, nextStep }: Props) => {
    const [showContry, setShowContry] = useState<boolean>(false);
    const [animationFinished, setAnimationFinished] = useState<boolean>(false);

    useEffect(() => {
        setTimeout(() => {
            setAnimationFinished(true);
        }, 2750);
    }, []);

    return (
        <Box
            sx={{
                p: "2rem",
                display: "flex",
                flexDirection: "column",
                gap: "2rem",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <Box>
                Muy bien... ¿Qué te parece si te cuento un poco más sobre este
                asombroso país?
            </Box>
            <ul>
                <AnimateGroup play>
                    {statements.map((statement, index) => (
                        <Animate
                            key={index}
                            sequenceIndex={index}
                            end={{ opacity: 1, transform: "translateY(0px)" }}
                            start={{
                                opacity: 0,
                                transform: "translateY(-10px)",
                            }}
                        >
                            <li>{statement}</li>
                        </Animate>
                    ))}
                </AnimateGroup>
            </ul>
            {!showContry && (
                <Animate
                    play={animationFinished}
                    end={{ opacity: 1, transform: "translateY(0px)" }}
                    start={{
                        opacity: 0,
                        transform: "translateY(-10px)",
                    }}
                >
                    <Button
                        variant="contained"
                        className="nextStepButton"
                        onClick={() => setShowContry(true)}
                    >
                        Y es...
                    </Button>
                </Animate>
            )}
            {showContry && (
                <>
                    <Image
                        src="/images/scotland_flag.gif"
                        alt="Scotland"
                        width={521}
                        height={338}
                    />
                    <Typography variant="h3" component="h3">
                        ¡Escocia!
                    </Typography>
                    <Button
                        variant="contained"
                        className="nextStepButton"
                        onClick={() => nextStep()}
                        sx={{ width: "200px !important" }}
                    >
                        ¡Quiero saber más!
                    </Button>
                    <audio autoPlay={true}>
                        <source src="/sound/gaita.mp3" type="audio/mpeg" />
                    </audio>
                </>
            )}
        </Box>
    );
};
