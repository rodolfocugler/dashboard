import { useLocation } from 'react-router-dom';

// host of the home server, overridable with `?domain=...`
const useDomain = () => new URLSearchParams(useLocation().search).get('domain') || 'pi-desktop';

export default useDomain;
