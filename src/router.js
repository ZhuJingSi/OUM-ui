import ConfFile from './components/ConfFile';
import OTP from './components/OTP';
import Client from './components/Client';
import Attention from './components/Attention';

export default [{
  path: '/confFile',
  component: ConfFile,
}, {
  path: '/otp',
  component: OTP,
}, {
  path: '/client',
  component: Client,
}, {
  path: '/attention',
  component: Attention,
  meta: { scrollToTop: true },
}, {
  path: '*',
  redirect: '/confFile',
}];
