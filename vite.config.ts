import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: [
        {
          find: '@expo/vector-icons/Ionicons',
          replacement: path.resolve(__dirname, 'src/shims/vector-icons.tsx'),
        },
        {
          find: '@expo/vector-icons/MaterialCommunityIcons',
          replacement: path.resolve(__dirname, 'src/shims/vector-icons.tsx'),
        },
        {
          find: '@expo/vector-icons',
          replacement: path.resolve(__dirname, 'src/shims/vector-icons.tsx'),
        },
        {
          find: '@react-native-async-storage/async-storage',
          replacement: path.resolve(__dirname, 'src/shims/async-storage.ts'),
        },
        {
          find: 'react-native-safe-area-context',
          replacement: path.resolve(__dirname, 'src/shims/safe-area-context.tsx'),
        },
        {
          find: 'react-native-purchases',
          replacement: path.resolve(__dirname, 'src/shims/react-native-purchases.ts'),
        },
        {
          find: 'react-native-svg',
          replacement: path.resolve(__dirname, 'src/shims/react-native-svg.tsx'),
        },
        {
          find: 'react-native',
          replacement: path.resolve(__dirname, 'src/shims/react-native.tsx'),
        },
        {
          find: 'expo-router',
          replacement: path.resolve(__dirname, 'src/shims/expo-router.tsx'),
        },
        {
          find: 'expo-linear-gradient',
          replacement: path.resolve(__dirname, 'src/shims/expo-linear-gradient.tsx'),
        },
        {
          find: 'expo-image-picker',
          replacement: path.resolve(__dirname, 'src/shims/expo-image-picker.ts'),
        },
        {
          find: 'expo-haptics',
          replacement: path.resolve(__dirname, 'src/shims/expo-haptics.ts'),
        },
        {
          find: 'expo-notifications',
          replacement: path.resolve(__dirname, 'src/shims/expo-notifications.ts'),
        },
        {
          find: 'expo-font',
          replacement: path.resolve(__dirname, 'src/shims/expo-font.ts'),
        },
        {
          find: '@',
          replacement: path.resolve(__dirname, '.'),
        },
      ],
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
