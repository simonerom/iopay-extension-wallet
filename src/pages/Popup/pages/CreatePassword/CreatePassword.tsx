import React, { useCallback } from "react";
import { withRouter } from "react-router-dom";
import message from "antd/lib/message";
import { useSetRecoilState } from "recoil";

import { defaultPostman } from "@/pages/Popup/postman";

import { accountAddress, accountsList } from "@/recoil";
import { CreatePasswordForm } from "./CreatePasswordForm";
import { useTranslation } from "react-i18next";

type FormValues = {
  newPassword: string;
  confirmPassword: string;
  agreedTos: boolean;
};

export const CreatePassword = withRouter(({ history }) => {
  const { t } = useTranslation();
  const setAddress = useSetRecoilState(accountAddress);
  const setAccounts = useSetRecoilState(accountsList);
  const onFinish = async (values: FormValues) => {
    if (values.newPassword !== values.confirmPassword) {
      message.error(t("password_same"));
      return;
    }
    await defaultPostman.createPassword(values.newPassword);
    const accounts = await defaultPostman.getAccounts();
    setAccounts(accounts);
    setAddress(accounts[0].address);
    history.replace("/dashboard");
  };
  const onCancel = useCallback(() => history.goBack(), []);

  return <CreatePasswordForm onFinish={onFinish} onCancel={onCancel} />;
});
