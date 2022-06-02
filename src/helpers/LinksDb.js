import Home from '@mui/icons-material/Home';
import TerrainIcon from '@mui/icons-material/Terrain';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CameraIcon from '@mui/icons-material/Camera';
import BuildIcon from '@mui/icons-material/Build';
export const appRoutes = [
  {
    id: 1,
    to: '/',
    routeName: 'app_home',
    Icon: <Home />,
    fontSize: 'small',
  },
  {
    id: 2,
    to: '/geolocation',
    routeName: 'app_geolocation',
    Icon: <TerrainIcon />,
    fontSize: 'small',
  },
  {
    id: 3,
    to: '/notes',
    routeName: 'app_notes',
    Icon: <EventNoteIcon />,
    fontSize: 'small',
  },
  {
    id: 4,
    to: '/camera',
    routeName: 'app_camera',
    Icon: <CameraIcon />,
    fontSize: 'small',
  },
  {
    id: 5,
    to: '/device',
    routeName: 'app_device',
    Icon: <BuildIcon />,
    fontSize: 'small',
  },
  {
    id: 6,
    to: '/weather',
    routeName: 'app_weather',
    Icon: <BuildIcon />,
    fontSize: 'small',
  },
];
