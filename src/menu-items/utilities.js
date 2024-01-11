// assets
import { IconBottle, IconBrandDocker, IconHeartRateMonitor, IconSourceCode } from '@tabler/icons';

// constant
const icons = {
  IconHeartRateMonitor,
  IconSourceCode,
  IconBrandDocker,
  IconBottle
};

// ==============================|| UTILITIES MENU ITEMS ||============================== //

const utilities = {
  id: 'utilities',
  title: 'Utilities',
  type: 'group',
  children: [
    {
      id: 'monitor',
      title: 'Monitor',
      type: 'item',
      url: (domain = 'rasp-pi') => `https://${domain}:9096`,
      icon: icons.IconHeartRateMonitor,
      breadcrumbs: false,
      external: true
    },
    {
      id: 'jenkins',
      title: 'Jenkins',
      type: 'item',
      url: (domain = 'rasp-pi') => `http://${domain}:8080`,
      icon: icons.IconSourceCode,
      breadcrumbs: false,
      external: true
    },
    {
      id: 'portainer',
      title: 'Portainer',
      type: 'item',
      url: (domain = 'rasp-pi') => `http://${domain}:9000`,
      icon: icons.IconBrandDocker,
      breadcrumbs: false,
      external: true
    },
    {
      id: 'drinkeiro',
      title: 'Drinkeiro',
      type: 'item',
      url: (domain = 'rasp-pi') => `http://${domain}:81`,
      icon: icons.IconBottle,
      breadcrumbs: false,
      external: true
    }
  ]
};

export default utilities;
