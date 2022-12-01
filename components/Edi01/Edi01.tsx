import { useState } from "react";
import { Button, Paper } from "@mui/material";
import styles from "./Edi01.module.css";
import { Animate } from "react-simple-animate";

export const Edi01: React.FC = () => {
    const [step, setStep] = useState<number>(1);

    return (
        <div>
            <div className={styles.bg} />
            <div className={styles.cover} />
            <div className={styles.contentHeader}>
                {"Feliz cumpleaños Saray "}
                <span className="pt-6 pl-4">❤</span>
            </div>
            <div className={styles.contentContainer}>
                <Paper>
                    <Animate
                        play={step === 1}
                        start={{ opacity: 0, transform: "translateY(-20px)" }}
                        end={{ opacity: 1, transform: "translateY(0)" }}
                    >
                        <div className="paper">
                            <span>
                                Gracias. Gracias por estar aquí junto a
                                nosotros, por ser esa persona con la que siempre
                                podemos contar, por ser la mejor amiga que ellos
                                han podido conocer, y la mujer más maravillosa
                                que yo tengo la suerte de tener en mi vida.
                                Quiero agradecerte tener la suerte de compartir
                                contigo este día, y poder pasar todos y cada uno
                                de los que me queden de vida contigo, aquí o...
                                ¿Dónde? <br />
                                Vamos a descubrirlo =D
                            </span>
                            <Button
                                variant="contained"
                                className="nextStepButton"
                                onClick={() => setStep(2)}
                            >
                                ¡Vamos allá!
                            </Button>
                        </div>
                    </Animate>
                </Paper>
            </div>
        </div>
    );
};
