import { useIntl } from "react-intl";

export function useTranslation() {
  const intl = useIntl();

  return (id) => intl.formatMessage({ id });
}
