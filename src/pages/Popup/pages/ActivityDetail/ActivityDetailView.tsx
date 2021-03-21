import React from "react";
import { styled } from "onefx/lib/styletron-react";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";

type Prop = {
  actHash: string;
  from?: string;
  to?: string;
  gasFee?: string;
  gasLimit?: string;
  gasPrice?: string;
  date?: string;
  nonce?: string;
  payload?: any;
};

export const ActivityDetailView: React.FC<Prop> = ({
  actHash,
  from,
  to,
  gasLimit,
  gasPrice,
  payload,
  nonce,
  date,
}) => {
  const { t } = useTranslation();
  const history = useHistory();
  return (
    <Container>
      <BackArrowButton
        onClick={() => {
          history.goBack();
        }}
      ></BackArrowButton>
      <Content>
        <Row>
          <Label>{t("hash")}</Label>
          <Value>{actHash}</Value>
        </Row>
        <Row>
          <Label>{t("date")}</Label>
          <Value>{date}</Value>
        </Row>
        <Row>
          <Label>{t("from")}</Label>
          <Value>{from}</Value>
        </Row>
        <Row>
          <Label>{t("to")}</Label>
          <Value>{to}</Value>
        </Row>
        <Row>
          <Label>{t("payload")}</Label>
          <Value>{payload}</Value>
        </Row>
        <Row>
          <Label>{t("gas_limit")}</Label>
          <Value>{gasLimit}</Value>
        </Row>
        <Row>
          <Label>{t("gas_price")}</Label>
          <Value>{gasPrice}</Value>
        </Row>
        <Row>
          <Label>{t("nonce")}</Label>
          <Value>{nonce}</Value>
        </Row>
      </Content>
    </Container>
  );
};

const Container = styled("div", ({ $theme }) => ({
  width: "100%",
  height: "100%",
  position: "relative",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "center",
  padding: $theme.sizing[3],
}));

const BackArrowButton = styled(ArrowLeftOutlined, ({ $theme }) => ({
  fontSize: $theme.sizing[4],
  marginBlock: $theme.sizing[4],
}));

const Content = styled("div", {
  paddingTop: "40px",
  width: "100%",
});
const Row = styled("div", {
  display: "flex",
  flexDirection: "row",
  width: "100%",
  alignItems: "center",
  marginBottom: "10px",
});

const Label = styled("div", {
  minWidth: "100px",
  textAlign: "left",
});

const Value = styled("div", {
  flex: 1,
  overflow: "hidden",
  paddingLeft: "5px",
  paddingRight: "5px",
  textAlign: "left",
  wordBreak: "break-word",
  wordWrap: "break-word",
});
