import "dotenv/config";

export default {
  expo: {
    name: "RecipeTips",
    slug: "RecipeTips",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/images/icon.png",
    scheme: "recipetips",
    userInterfaceStyle: "automatic",
    newArchEnabled: true,
    platforms: ["ios", "android", "web"],
    ios: {
      supportsTablet: true,
      bundleIdentifier: "com.yourname.recipetips"
    },
    android: {
      package: "com.yourname.recipetips",
      adaptiveIcon: {
        foregroundImage: "./assets/images/icon.png",
        backgroundColor: "#ffffff"
      },
      edgeToEdgeEnabled: true,
      versionCode: 1
    },
    web: {
      bundler: "metro",
      output: "static",
      favicon: "./assets/images/icon.png"
    },
    splash: {
      image: "./assets/images/icon.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff"
    },
    extra: {
      eas: {
        projectId: "251676ef-c997-4a83-8cc0-2253eb70b9e3" // ✅ Add this line manually
      },
      clerkPublishableKey: process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY
    },
    plugins: [
      "expo-router",
      [
        "expo-splash-screen",
        {
          image: "./assets/images/icon.png",
          resizeMode: "contain",
          backgroundColor: "#ffffff"
        }
      ]
    ],
    assetBundlePatterns: ["**/*"],
    experiments: {
      typedRoutes: true
    },
    updates: {
      fallbackToCacheTimeout: 0
    }
  }
};
