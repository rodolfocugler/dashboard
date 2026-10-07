import { useLocation } from 'react-router-dom';

// host of the home server, overridable with `?domain=...`
const useDomain = () => new URLSearchParams(useLocation().search).get('domain') || 'pi-desktop';

// The deployed site is HTTPS but the home server speaks plain HTTP, which browsers block as mixed content.
// Marking the request as local-network lets Chrome allow it (it asks for permission once).
// ponytail: Chrome-only; serve the home server over HTTPS if other browsers matter.
export const localFetch = (url, init) => fetch(url, { ...init, targetAddressSpace: 'local' });

export default useDomain;
