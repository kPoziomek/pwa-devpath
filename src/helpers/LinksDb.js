import Home from '@mui/icons-material/Home';
import TerrainIcon from '@mui/icons-material/Terrain';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CameraIcon from '@mui/icons-material/Camera';
import BuildIcon from '@mui/icons-material/Build';
export const appRoutes = [
  {
    id: 1,
    to: '/',
    routeName: 'Home',
    Icon: <Home />,
    fontSize: 'small',
  },
  {
    id: 2,
    to: '/geolocation',
    routeName: 'Geolocation',
    Icon: <TerrainIcon />,
    fontSize: 'small',
  },
  {
    id: 3,
    to: '/notes',
    routeName: 'Notes',
    Icon: <EventNoteIcon />,
    fontSize: 'small',
  },
  {
    id: 4,
    to: '/camera',
    routeName: 'Camera',
    Icon: <CameraIcon />,
    fontSize: 'small',
  },
  {
    id: 5,
    to: '/device',
    routeName: 'Device',
    Icon: <BuildIcon />,
    fontSize: 'small',
  },
];
