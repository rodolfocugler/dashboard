// assets
import { IconBottle, IconBrandDocker, IconHeartRateMonitor, IconSourceCode, IconBrandRedhat, IconMessage } from '@tabler/icons';

// constant
const icons = {
  IconHeartRateMonitor,
  IconSourceCode,
  IconBrandDocker,
  IconBottle,
  IconBrandRedhat,
  IconMessage
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
      url: (domain = 'pi-desktop') =>
        `https://rodolfocugler.grafana.net/d/raspberrypinode-overview/raspberry-pi-overview?var-datasource=grafanacloud-prom&var-job=$__all&var-loki_datasource=grafanacloud-logs&var-instance=${domain}`,
      icon: icons.IconHeartRateMonitor,
      breadcrumbs: false,
      external: true
    },
    {
      id: 'jenkins',
      title: 'Jenkins',
      type: 'item',
      url: (domain = 'pi-desktop') => `http://${domain}:8080`,
      icon: icons.IconSourceCode,
      breadcrumbs: false,
      external: true
    },
    {
      id: 'node-red',
      title: 'Node Red',
      type: 'item',
      url: (domain = 'pi-desktop') => `http://${domain}:1880`,
      icon: icons.IconBrandRedhat,
      breadcrumbs: false,
      external: true
    },
    {
      id: 'mqtt',
      title: 'Mqtt Explorer',
      type: 'item',
      url: (domain = 'pi-desktop') => `http://${domain}:83`,
      icon: icons.IconMessage,
      breadcrumbs: false,
      external: true
    },
    {
      id: 'drinkeiro',
      title: 'Drinkeiro',
      type: 'item',
      url: (domain = 'pi-desktop') => `http://${domain}:81?domain=${domain}`,
      icon: icons.IconBottle,
      breadcrumbs: false,
      external: true
    }
  ]
};

export default utilities;
