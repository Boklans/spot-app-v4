import React from 'react';
import RootLayout from '@/app/_layout';
import IndexScreen from '@/app/index';
import TabsLayout from '@/app/(tabs)/_layout';
import TabHome from '@/app/(tabs)/index';
import TabProgress from '@/app/(tabs)/progress';
import TabProgram from '@/app/(tabs)/program';
import TabProfile from '@/app/(tabs)/profile';
import WelcomeScreen from '@/app/onboarding/welcome';
import ParamsScreen from '@/app/onboarding/params';
import GoalScreen from '@/app/onboarding/goal';
import ExperienceScreen from '@/app/onboarding/experience';
import FrequencyScreen from '@/app/onboarding/frequency';
import EquipmentScreen from '@/app/onboarding/equipment';
import CreationModeScreen from '@/app/onboarding/creation-mode';
import ProgramReadyScreen from '@/app/onboarding/program-ready';
import ProgramEditScreen from '@/app/program/edit';
import WorkoutPreviewScreen from '@/app/workout/preview';
import WorkoutActiveScreen from '@/app/workout/active';
import WorkoutInputScreen from '@/app/workout/input';
import WorkoutQuickLogScreen from '@/app/workout/quick-log';
import WorkoutRestScreen from '@/app/workout/rest';
import WorkoutCompleteScreen from '@/app/workout/complete';
import HistoryIndexScreen from '@/app/history/index';
import HistoryDetailScreen from '@/app/history/[id]';
import { registerRouteRenderer, type RouteEntry } from '@/src/shims/expo-router';
import { AlertHost } from '@/src/shims/react-native';

const TAB_SCREENS: Record<string, React.ComponentType> = {
  index: TabHome,
  progress: TabProgress,
  program: TabProgram,
  profile: TabProfile,
};

function renderRoute(route: RouteEntry): React.ReactNode {
  const { pathname } = route;

  if (pathname === '/') return <IndexScreen />;
  if (pathname.startsWith('/(tabs)')) return <TabsLayout />;

  switch (pathname) {
    case '/onboarding/welcome':
      return <WelcomeScreen />;
    case '/onboarding/params':
      return <ParamsScreen />;
    case '/onboarding/goal':
      return <GoalScreen />;
    case '/onboarding/experience':
      return <ExperienceScreen />;
    case '/onboarding/frequency':
      return <FrequencyScreen />;
    case '/onboarding/equipment':
      return <EquipmentScreen />;
    case '/onboarding/creation-mode':
      return <CreationModeScreen />;
    case '/onboarding/program-ready':
      return <ProgramReadyScreen />;
    case '/program/edit':
      return <ProgramEditScreen />;
    case '/workout/preview':
      return <WorkoutPreviewScreen />;
    case '/workout/active':
      return <WorkoutActiveScreen />;
    case '/workout/input':
      return <WorkoutInputScreen />;
    case '/workout/quick-log':
      return <WorkoutQuickLogScreen />;
    case '/workout/rest':
      return <WorkoutRestScreen />;
    case '/workout/complete':
      return <WorkoutCompleteScreen />;
    case '/history':
    case '/history/index':
      return <HistoryIndexScreen />;
    case '/history/[id]':
      return <HistoryDetailScreen />;
    default:
      if (pathname.startsWith('/history/')) {
        return <HistoryDetailScreen />;
      }
      return <TabsLayout />;
  }
}

registerRouteRenderer(renderRoute, TAB_SCREENS);

export default function App() {
  return (
    <div
      style={{
        width: '100vw',
        height: '100dvh',
        backgroundColor: '#050608',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'stretch',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: 460,
          height: '100%',
          backgroundColor: '#0B0D0F',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          overflow: 'hidden',
          boxShadow: '0 0 60px rgba(0, 0, 0, 0.85)',
          borderLeft: '1px solid rgba(255, 255, 255, 0.06)',
          borderRight: '1px solid rgba(255, 255, 255, 0.06)',
        }}
      >
        <RootLayout />
        <AlertHost />
      </div>
    </div>
  );
}
