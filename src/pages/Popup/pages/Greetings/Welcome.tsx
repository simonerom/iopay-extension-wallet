import React from "react";
import { styled } from "onefx/lib/styletron-react";
import { withRouter } from "react-router-dom";
import Button from "antd/lib/button";
import { Logo } from "@/styles/logo";
import { CommonMargin } from "@/styles/common-margin";
import { fonts } from "@/styles/style-font";
import { useTranslation } from "react-i18next";

export const Welcome = withRouter(({ history }) => {
  const { t } = useTranslation();
  return (
    <Container>
      <Logo />
      <CommonMargin />
      <Title
        style={{
          textAlign: "center",
        }}
        dangerouslySetInnerHTML={{ __html: t("welcome") }}
      ></Title>
      <CommonMargin />
      <Paragraph>
        {t("connect_iotex")}
        <br />
        {t("decentralized")}
        <br />
        {t("see_you")}
      </Paragraph>
      <div
        style={{
          marginTop: "50px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Button
          size="large"
          onClick={() => {
            history.push("/import");
          }}
        >
          {t("import")}
        </Button>
        <Button
          type="primary"
          size="large"
          onClick={() => {
            history.push("/createPassword");
          }}
        >
          {t("create")}
        </Button>
      </div>
    </Container>
  );
});

const Container = styled("div", {
  padding: "16px",
});

const Title = styled("h1", {
  ...fonts.h1,
  textAlign: "center",
});

const Paragraph = styled("div", {
  ...fonts.normal,
  textAlign: "center",
});
