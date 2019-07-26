import { Platform, NativeModules } from "react-native";

const supportedLanguage = { fr: true, en: true };

export const getDeviceLanguage = () => {
  let deviceLanguage = (Platform.OS === "ios"
    ? NativeModules.SettingsManager.settings.AppleLocale
    : NativeModules.I18nManager.localeIdentifier
  ).substring(0, 2); // Get only language, not location

  // Fallback to english if language is not supported
  return supportedLanguage[deviceLanguage] ? deviceLanguage : "en";
};
