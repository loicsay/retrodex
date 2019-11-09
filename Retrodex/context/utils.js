import { Platform, NativeModules } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";

const supportedLanguage = { fr: true, en: true };

const getDeviceLanguage = () => {
  let deviceLanguage = (Platform.OS === "ios"
    ? NativeModules.SettingsManager.settings.NSLanguages[0]
    : NativeModules.I18nManager.localeIdentifier
  ).substring(0, 2); // Get only language, not location

  // Fallback to english if language is not supported
  return supportedLanguage[deviceLanguage] ? deviceLanguage : "en";
};

export const defaultState = {
  language: getDeviceLanguage(),
  version: "red-blue"
};

export const initUserSettingsStorage = () => {
  const { language, version } = defaultState;

  AsyncStorage.setItem("alreadyLaunched", true);
  AsyncStorage.setItem("language", language);
  AsyncStorage.setItem("version", version);
};

export const getUserSettingsStorage = async () => ({
  language: await AsyncStorage.getItem("language"),
  version: await AsyncStorage.getItem("version")
});

export const getAlreadyLaunched = async () => {
  return Boolean(await AsyncStorage.getItem("alreadyLaunched"));
};
