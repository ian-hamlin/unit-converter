import React from "react";
import { Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const Footer = () => {
    const { t, i18n } = useTranslation();
    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    }

    return (
    <footer className="pt-5 text-muted text-center text-small">
        <p className="mb-1">icons by <a target="_blank" rel="noopener noreferrer" href="https://icons8.com">Icons8</a>, source code on <a target="_blank" rel="noopener noreferrer" href="https://github.com/ian-hamlin/unit-converter">GitHub</a></p>
        <p>
            {i18n.language === "es" ?
            <Button onClick={() => changeLanguage("en")}variant="link">{t("Lang_English")}</Button>
            :  <Button onClick={() => changeLanguage("es")} variant="link">{t("Lang_Spanish")}</Button>}          
        </p>
    </footer>
    );
};

export default Footer;

