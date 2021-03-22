import React from "react";
import { styled } from "onefx/lib/styletron-react";

import Form from "antd/lib/form";
import Input from "antd/lib/input";
import Button from "antd/lib/button";
import Row from "antd/lib/row";
import Col from "antd/lib/col";
import { useHistory } from "react-router-dom";

import { Logo } from "@/styles/logo";
import { CommonMargin } from "@/styles/common-margin";
import { fonts } from "@/styles/style-font";
import { useTranslation } from "react-i18next";

type FormValues = {
  name: string;
  privateKey: string;
};

type NewAccountProps = {
  onFinish?: (values: FormValues) => void;
  mode: "create" | "import";
};

export const NewAccount: React.FC<NewAccountProps> = ({ onFinish, mode }) => {
  const { t } = useTranslation();
  const history = useHistory();
  return (
    <Container>
      <Logo />
      <CommonMargin />
      <Title>{t("new_account")}</Title>
      <Form layout="vertical" onFinish={onFinish} initialValues={{ key: "" }}>
        <Form.Item
          label={t("account_name")}
          name="name"
          rules={[
            { required: true, message: t("input_account_name") },
          ]}
        >
          <Input size="large" />
        </Form.Item>
        {mode === "import" ? (
          <Form.Item
            label={t("private_key")}
            name="privateKey"
            rules={[
              { required: true, message: t("input_private_key") },
            ]}
          >
            <Input.Password size="large" />
          </Form.Item>
        ) : null}
        <Form.Item>
          <Row justify="space-between">
            <Col>
              <Button type="primary" htmlType="submit" size="large">
                {mode === "import" ? "Import" : "Create"}
              </Button>
            </Col>
            <Col>
              <Button size="large" onClick={() => history.goBack()}>
                {t("cancel")}
              </Button>
            </Col>
          </Row>
        </Form.Item>
      </Form>
    </Container>
  );
};

const Container = styled("div", {
  padding: "16px",
  width: "100%",
});

const Title = styled("h1", {
  ...fonts.h1,
  textAlign: "center",
});
