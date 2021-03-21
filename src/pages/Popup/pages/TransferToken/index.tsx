import React, { useState } from "react";
import { message, Spin, Alert, Button } from "antd";
import { CheckCircleOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";
import { styled } from "onefx/lib/styletron-react";
import { defaultPostman } from "@/pages/Popup/postman";
import { TransferTokenForm } from "./TransferTokenForm";
import { Header } from "../Dashboard/components/Header";
import { useTranslation } from "react-i18next";

export const TransferToken = () => {
  const { t } = useTranslation();
  const history = useHistory();
  const [loading, setLoading] = useState(false);

  const onFinish = async (values: any) => {
    try {
      setLoading(true);
      if (values.asset === "IOTX") {
        await defaultPostman.transferToken(
          values.recipient,
          values.amount,
          values.gasPrice,
          values.gasLimit
        );
      } else {
        await defaultPostman.xrc20Transfer(
          values.recipient,
          values.amount,
          values.gasPrice,
          values.gasLimit,
          values.asset
        );
      }
      // force wait 5.5 seconds for transaction completed
      await new Promise((resolve) => {
        setTimeout(resolve, 5500);
      });
      message.success(t("transfer_success"));
      history.goBack();
    } catch (e) {
      message.error(t("transfer_failure"));
    } finally {
      setLoading(false);
    }
  };

  const onCancel = React.useCallback(() => {
    history.goBack();
  }, []);

  return (
    <Spin spinning={loading}>
      <Container>
        <Header />
        <TitleBox>
          <div
            className="title"
            style={{
              flex: 1,
              textAlign: "center",
              paddingLeft: "93px",
              fontSize: "18px",
              fontWeight: 600,
            }}
          >
            {t("send_eth")}
          </div>
          <Button
            type="link"
            style={{
              fontWeight: 600,
              fontSize: "16px",
            }}
          >
            {t("cancel")}
          </Button>
        </TitleBox>
        <div
          style={{
            padding: "0 16px",
          }}
        >
          <Alert
            className="transferAddress"
            message="0x75f3...9870"
            icon={<CheckCircleOutlined />}
            type="info"
            showIcon
            closable
          />
        </div>
      </Container>
      <AlertBox>
        <Alert
          message={t("new_address_detected")}
          type="info"
        />
      </AlertBox>

      <TransferTokenForm
        onFinish={onFinish}
        onCancel={onCancel}
      ></TransferTokenForm>
    </Spin>
  );
};

const AlertBox = styled("div", {
  textAlign: "left",
  padding: "16px 16px 0 16px",
});

const Container = styled("div", {
  textAlign: "left",
  background: "#F5F6FA",
  height: "162px",
});

const TitleBox = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginTop: "12px",
  marginBottom: "6px",
});
