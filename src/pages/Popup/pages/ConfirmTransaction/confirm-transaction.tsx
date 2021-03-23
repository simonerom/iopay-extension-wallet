import React from "react";
import { styled } from "onefx/lib/styletron-react";
import { Space, Button, Row, Col } from "antd";
import { useTranslation } from "react-i18next";

type Props = {
  amount: string;
  toContract: string;
  gasPrice: string;
  gasLimit: string;
  onConfirm?: () => void;
  onCancel?: () => void;
};

export const ConfirmTransactionComponent = function (props: Props) {
  const { t } = useTranslation();
  return (
    <Container>
      <Title>{t("title.type.action_signing")}</Title>
      <Content>
        <Row>
          <Col span={8}>{t("render.key.amount")}</Col>
          <Col>{props.amount}</Col>
        </Row>
        <Row>
          <Col span={8}>{t("render.key.to_contract")}</Col>
          <Col>{props.toContract}</Col>
        </Row>
        <Row>
          <Col span={8}>{t("render.key.gas_limit")}</Col>
          <Col>{props.gasLimit}</Col>
        </Row>
        <Row>
          <Col span={8}>{t("render.key.gas_price")}</Col>
          <Col>{props.gasPrice}</Col>
        </Row>
      </Content>
      <Space>
        <Button type="primary" onClick={props.onConfirm}>
          {t("action.type.sign_action")}
        </Button>
        <Button onClick={props.onCancel}>{t("action.type.negative")}</Button>
      </Space>
    </Container>
  );
};

const Container = styled("div", {
  display: "flex",
  height: "100%",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "10px",
});

const Title = styled("div", {
  fontSize: "20px",
  fontWeight: 700,
  marginBottom: "20px",
});

const Content = styled("div", {
  backgroundColor: "#eee",
  width: "100%",
  padding: "15px",
  marginBottom: "20px",
});
