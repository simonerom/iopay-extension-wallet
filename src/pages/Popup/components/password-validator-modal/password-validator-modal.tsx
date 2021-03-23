import React from "react";
import { Modal, Form, Input } from "antd";
import { useTranslation } from "react-i18next";

type Values = {
  password: string;
};

export type PasswordValidatorModalProps = {
  visible: boolean;
  onOk?: (password: string) => void;
  onCancel?: () => void;
};

export const PasswordValidatorModal: React.FC<PasswordValidatorModalProps> = (
  props
) => {
  const { t } = useTranslation();
  const [form] = Form.useForm();
  const onOk = async () => {
    const isOk = await form.validateFields();
    if (isOk) {
      const values = form.getFieldsValue();
      props.onOk && props.onOk(values.password);
    }
  };
  return (
    <Modal
      title={t("title.type.validate_password")}
      visible={props.visible}
      onOk={onOk}
      onCancel={props.onCancel}
    >
      <Form<Values> form={form}>
        <Form.Item name="password" rules={[{ required: true }]}>
          <Input
            placeholder={t("placeholder.input_password")}
            type="password"
          ></Input>
        </Form.Item>
      </Form>
    </Modal>
  );
};
