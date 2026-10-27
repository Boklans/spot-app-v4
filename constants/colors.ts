import { ViewStyle } from 'react-native';
import { useUserProfileStore } from '@/store/userProfileStore';

export type ThemeColors = {
  isDark: boolean;
  background: string;
  surface: string;
  elevated: string;
  border: string;
  borderHighlight: string;
  primary: string;
  primaryText: string;
  onPrimary: string;
  primaryMuted: string;
  accentLine: string;
  activeChipBg: string;
  activeChipText: string;
  text: string;
  secondary: string;
  muted: string;
  success: string;
  warning: string;
  danger: string;
  purple: string;
  divider: string;
};

export const darkColors: ThemeColors = {
  isDark: true,
  background: '#0E1114',
  surface: '#161A20',
  elevated: '#1E242C',
  border: '#262D37',
  borderHighlight: 'rgba(255, 255, 255, 0.07)',
  primary: '#C8FF3D',
  primaryText: '#C8FF3D',
  onPrimary: '#0E1114',
  primaryMuted: 'rgba(200, 255, 61, 0.14)',
  accentLine: '#C8FF3D',
  activeChipBg: '#C8FF3D',
  activeChipText: '#0E1114',
  text: '#F5F7FA',
  secondary: '#9CA3AF',
  muted: '#6E7681',
  success: '#22C55E',
  warning: '#F59E0B',
  danger: '#EF4444',
  purple: '#A855F7',
  divider: 'rgba(255, 255, 255, 0.06)',
};

export const lightColors: ThemeColors = {
  isDark: false,
  background: '#F2F4F8',
  surface: '#FFFFFF',
  elevated: '#E8ECF2',
  border: '#E2E8F0',
  borderHighlight: '#FFFFFF',
  primary: '#C4FA32',
  primaryText: '#15803D',
  onPrimary: '#0E1114',
  primaryMuted: 'rgba(21, 128, 61, 0.10)',
  accentLine: '#16A34A',
  activeChipBg: '#0E1114',
  activeChipText: '#FFFFFF',
  text: '#0F172A',
  secondary: '#475569',
  muted: '#64748B',
  success: '#16A34A',
  warning: '#D97706',
  danger: '#DC2626',
  purple: '#7E22CE',
  divider: 'rgba(15, 23, 42, 0.07)',
};

export const colors = darkColors;

export function cardElevation(themeColors: ThemeColors): ViewStyle {
  if (themeColors.isDark) {
    return {
      borderWidth: 1,
      borderColor: 'rgba(255, 255, 255, 0.05)',
      borderTopColor: themeColors.borderHighlight,
      shadowColor: '#000000',
      shadowOffset: { width: 0, height: 8 },
      shadowOpacity: 0.35,
      shadowRadius: 16,
      elevation: 4,
    };
  }
  return {
    borderWidth: 1,
    borderColor: themeColors.border,
    shadowColor: '#0F172A',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.05,
    shadowRadius: 14,
    elevation: 3,
  };
}

export function useThemeColors(): ThemeColors {
  const theme = useUserProfileStore((s) => s.profile?.theme);
  return theme === 'light' ? lightColors : darkColors;
}

