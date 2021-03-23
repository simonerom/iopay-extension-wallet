import React from "react";
import { styled } from "onefx/lib/styletron-react";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const About = function () {
  const { t } = useTranslation();
  const history = useHistory();
  const onBack = React.useCallback(() => {
    history.goBack();
  }, []);
  return (
    <Container>
      <BackArrowButton onClick={onBack}></BackArrowButton>
      <Title>{t("title.type.iopay_extension_wallet")}</Title>
      <Version>0.3.0</Version>
      <Description>{t("paragraph.iopay_extension_wallet")}.</Description>
      <Links>
        <a href="https://beancount.io/page/legal/privacy-policy/">
          {t("action.type.privacy_policy")}
        </a>
        <a href="https://beancount.io/page/legal/terms-of-service/">
          {t("action.type.terms_of_use")}
        </a>
        <a href="https://beancount.io/">{t("action.type.visit_website")}</a>
        <a href="https://t.me/beancount">{t("action.type.contact_us")}</a>
      </Links>
      <Description>
        {t("paragraph.thanks")} <a href="https://stargately.com/">{t("action.type.stargately_team")}</a> {t("paragraph.special_contribution")}
      </Description>
    </Container>
  );
};

const Container = styled("div", ({ $theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  height: "100%",
  width: "100%",
  padding: $theme.sizing[2],
}));

const Title = styled("div", ({ $theme }) => ({
  marginTop: $theme.sizing[5],
  textAlign: "center",
  fontSize: $theme.sizing[4],
}));

const Version = styled("div", ({ $theme }) => ({
  textAlign: "center",
  fontSize: $theme.sizing[3],
  marginTop: $theme.sizing[2],
  marginBottom: $theme.sizing[2],
}));

const Description = styled("div", ({ $theme }) => ({
  color: $theme.colors.black80,
}));

const Links = styled("div", ({ $theme }) => ({
  width: "100%",
  alignItems: "center",
  display: "flex",
  flexDirection: "column",
  marginTop: $theme.sizing[3],
}));

const BackArrowButton = styled(ArrowLeftOutlined, ({ $theme }) => ({
  fontSize: $theme.sizing[4],
  marginBlock: $theme.sizing[4],
  alignSelf: "flex-start",
  marginLeft: $theme.sizing[2],
  cursor: "pointer",
}));
