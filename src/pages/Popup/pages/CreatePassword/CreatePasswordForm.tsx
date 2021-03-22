import React, { useState } from "react";
import { styled } from "onefx/lib/styletron-react";
import { Form, Input, Button, Checkbox, Row, Col } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { CommonMargin } from "@/styles/common-margin";
import { fonts } from "@/styles/style-font";
import { useTranslation } from "react-i18next";

type FormValues = {
  newPassword: string;
  confirmPassword: string;
  agreedTos: boolean;
};

type CreatePasswordProps = {
  onFinish: (values: FormValues) => void;
  onCancel?: () => void;
};

export const CreatePasswordForm: React.FC<CreatePasswordProps> = ({
  onFinish,
  onCancel,
}) => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();

  return (
    <Container>
      <Row onClick={onCancel}>
        <Col>
          <ArrowLeftOutlined style={{ fontSize: 24 }} />
        </Col>
      </Row>
      <Paragraph style={{ marginTop: 56 }}>
        {t("secure_wallet")}
      </Paragraph>
      <CommonMargin />
      <Form
        {...layout}
        form={form}
        name="basic"
        initialValues={{ agreedTos: false }}
        onFinish={async (values) => {
          setLoading(true);
          await onFinish(values);
          setLoading(false);
        }}
      >
        <Form.Item
          label={t("new_password")}
          name="newPassword"
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
          label={t("confirm_password")}
          name="confirmPassword"
          dependencies={["newPassword"]}
          rules={[
            {
              required: true,
              message: t("input_confirm_password"),
            },
            ({ getFieldValue }) => ({
              validator: async (_, value) => {
                if (!value || getFieldValue("newPassword") === value) {
                  return;
                }
                throw new Error(
                  t("password_not_match")
                );
              },
            }),
          ]}
        >
          <Input.Password size="large" />
        </Form.Item>

        <Form.Item
          {...layout}
          name="agreedTos"
          valuePropName="checked"
          rules={[
            {
              validator: async (_, value) => {
                if (value) {
                  return;
                }
                throw new Error(t("accept_agreement"));
              },
            },
          ]}
        >
          <Checkbox>
            {t("read_and_agree")}{" "}
            <a href="https://beancount.io/page/legal/terms-of-service/">
              {t("terms_of_service")}
            </a>
          </Checkbox>
        </Form.Item>
        <Form.Item {...layout} shouldUpdate={true} style={{ marginBottom: 0 }}>
          {() => (
            <Button
              style={{ width: "100%", marginTop: "110px" }}
              type="primary"
              htmlType="submit"
              size="large"
              disabled={
                !form.isFieldsTouched(true) ||
                form.getFieldsError().filter(({ errors }) => errors.length)
                  .length !== 0
              }
              loading={loading}
            >
              {loading ? null : "Create"}
            </Button>
          )}
        </Form.Item>
      </Form>
    </Container>
  );
};

const Container = styled("div", ({ $theme }) => ({
  textAlign: "left",
  padding: $theme.sizing[3],
}));

const Paragraph = styled("div", {
  ...fonts.normal,
  fontWeight: 600,
  lineHeight: "22px",
});

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
