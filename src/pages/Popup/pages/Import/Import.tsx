import React from "react";
import { styled } from "onefx/lib/styletron-react";
import { Form, Input, Button, Row, Col } from "antd";

import { Logo } from "@/styles/logo";
import { CommonMargin } from "@/styles/common-margin";
import { fonts } from "@/styles/style-font";
import { useTranslation } from "react-i18next";

type FormValues = {
  password: string;
  key: string;
};

type ImportProps = {
  onFinish?: (values: FormValues) => void;
  onCancel?: () => void;
};

export const Import: React.FC<ImportProps> = ({ onFinish, onCancel }) => {
  const { t } = useTranslation();
  return (
    <Container>
      <Logo margin={80} />
      <CommonMargin />
      <Title>{t("import")}</Title>
      <Form layout="vertical" onFinish={onFinish} initialValues={{ key: "" }}>
        <Form.Item
          label={t("private_key")}
          name="key"
          rules={[
            { required: true, message: t("input_private_key") },
          ]}
        >
          <Input.Password size="large" />
        </Form.Item>
        <Form.Item
          label={t("new_password")}
          name="password"
          rules={[
            { required: true, message: t("input_new_password") },
            () => ({
              validator(_, value) {
                if (
                  !(
                    /[a-zA-Z]+/.test(value) &&
                    /[0-9]*/.test(value) &&
                    String(value).length >= 6
                  )
                ) {
                  return Promise.reject(
                    new Error(
                      t("password_error")
                    )
                  );
                }
                return Promise.resolve();
              },
            }),
          ]}
        >
          <Input.Password size="large" />
        </Form.Item>
        <Form.Item
          style={{
            marginBottom: 0,
            marginTop: 87,
          }}
        >
          <Row justify="space-between">
            <Col>
              <Button htmlType="button" size="large" onClick={onCancel}>
                {t("cancel")}
              </Button>
            </Col>
            <Col>
              <Button type="primary" htmlType="submit" size="large">
                {t("import")}
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
});

const Title = styled("h1", {
  ...fonts.h1,
  textAlign: "center",
});
