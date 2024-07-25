import { Link } from 'expo-router';
import { Stack } from 'expo-router';
import { Pressable } from 'react-native';
import { Logo } from '../components/Logo';
import { CircleInfoIcon } from '../components/Icons';
import { Screen } from '../components/Screen';

export default function Layout() {
  return (
    <Screen>
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: 'black' },
          headerTintColor: 'white',
          headerTitle: '',
          headerLeft: () => <Logo />,
          headerRight: () => (
            <Link
              href="/about"
              asChild
              className="text-white font-bold mb-8 text-2xl"
            >
              <Pressable>
                <CircleInfoIcon />
              </Pressable>
            </Link>
          )
        }}
      />
    </Screen>
  );
}

// con el slot el enruta en vez del stack LAS RUTAS DE LA APP se recargan
